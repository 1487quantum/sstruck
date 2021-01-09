<template>
  <div class="login-field card col-4 mx-auto m-4">
    <!-- Form -->
    <div class="m-4">
      <label for="email">Your Email</label>
      <div class="input-group">
        <span class="input-group-text"><span class="fas fa-envelope"></span></span>
        <input type="email" class="form-control" placeholder="example@company.com" id="email" autofocus required>
      </div>
    </div>
    <!-- End of Form -->
    <br/>
    <div class="ml-4 mr-4">
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
    <div class="login-btn col-8 mx-auto ml-2 mr-2 mb-4">
      <button type="button" class="btn btn-primary" style="float:left; width: 100px"> Login</button>
      <button type="button" class="btn btn-primary" style="float:right; width: 100px"> Register</button>
    </div>

  </div>

  </template>
  <script>
  export default {
    name: 'login'
  }
  </script>
