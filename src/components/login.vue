<template>
  <div class="login-field col-lg-4 mx-auto">
    <!-- Form -->
    <div>
      <label for="email">Your Email</label>
      <div class="input-group">
        <span class="input-group-text"><span class="fas fa-envelope"></span></span>
        <input type="email" class="form-control" placeholder="example@company.com" id="email" autofocus required>
      </div>
    </div>
    <!-- End of Form -->
    <br/>
    <div>
      <!-- Form -->
      <div class="form-group mb-4">
        <label for="password">Your Password</label>
        <div class="input-group">
          <span class="input-group-text"><span class="fas fa-unlock-alt"></span></span>
          <input type="password" placeholder="Password" class="form-control" id="password" required>
        </div>
      </div>
      <!-- End of Form -->
    </div>
  </div>
  <div class="login-btn col-lg-3 mx-auto">
    <button type="button" class="btn btn-primary" style="float:left; width:100px; height: 40px;"> Login</button>
    <button type="button" class="btn btn-primary" style="float:right; width:100px; height: 40px;"> Register</button>
  </div>
  </template>
  <script>
  export default {
    name: 'login'
  }
  </script>
