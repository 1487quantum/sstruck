var express = require('express');
var app = express();
var path = require('path');
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const users = []

const initializePassport = require('./passport-config')
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

//app.use('/css',express.static(__dirname + '/css'));
//app.use('/assets', express.static(__dirname + '/assets'));
//app.use('/vendor', express.static(__dirname + '/vendor'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(flash())
app.use(session({
    secret: "1234",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get('/', checkAuthenticated,function (req, res) {
    console.log(req.user.categories)
    res.render('dashboard.ejs', {name : req.user.name, interests : req.user.categories})
});

app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('sign-in.ejs')
    console.log(users)
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.get('/register', (req, res) => {
    res.render('sign-up.ejs')
})

app.post('/register', checkNotAuthenticated, (req, res,next) => {
    const hashedPassword = bcrypt.hash(req.body.password, 10)
    users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        categories: req.body['categories[]']
    })
    console.log(req.body)
    res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}

app.get('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})

var server = app.listen(process.env.PORT || 5000, function () {
    console.log('Node server is running..');
});

var json = require(path.join(__dirname + '/stocklist.json'));
console.log(json, 'the json obj');
