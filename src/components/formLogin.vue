<template>
    <div class="container">
      <form action="" class="p-12 md:p-24">
        <h1 class="text">Sign in to your dashboard</h1>
        <div class="input-container">
          <i class="fa fa-envelope icon"></i>
          <input class="input" type="email" v-model="username" placeholder="Username" />
        </div>
        <div class="input-container">
          <i class="fa fa-lock icon"></i>
          <input class="input" type="password" v-model="password" placeholder="Password" />
        </div>
        <div class="remember-forgot-container">
          <div>
            <input type="checkbox" v-model="isRemember" />
            <span>Remember me</span>
          </div>
          <a href="#" class="forgot-link">Forgot your password?</a>
        </div>
        <button class="sign-in" @click.prevent="signIn">Sign in</button>
        <div>
          <span>Not registered yet? </span>
          <a href="#" class="create-account-link">Create an account</a>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        isRemember: false,
      };
    },
    methods: {
      signIn() {
        this.$notify("Hello user!");
      },
    },
  };
  </script>
  
  <style scoped>
  .input-container {
    position: relative;
  }
  
  .icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #999;
  }
  
  .input {
    padding-left: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 40px;
    width: 300px;
    font-size: 16px;
    outline: none;
    margin: 3px;
  }
  
  .container {
    display: flex;
    justify-content: center;
    justify-items: center;
  }
  
  .remember-forgot-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 335px;
    margin: 10px 0;
  }
  
  .forgot-link,
  .create-account-link {
    text-decoration: none;
    color: #5145e7;
  }
  
  .sign-in {
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 40px;
    width: 330px;
    background-color: #5145e7;
    font-size: 20px;
    color: white;
    display: flex;
    outline: none;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 3px;
    cursor: pointer;
  }
  
  .sign-in:hover {
    background-color: #5f54d9;
  }

.text {
  font-size: 24px;
  margin-bottom: 20px;
}

.remember-forgot-container {
  margin-bottom: 15px;
}

.forgot-link,
.create-account-link {
  font-size: 14px;
}

.sign-in {
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.sign-in:hover,
.sign-in:focus {
  background-color: #5f54d9;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5; 
}
.form-header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-header img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.create-account-section {
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}

.create-account-section a {
  color: #5145e7;
  font-weight: bold;
  text-decoration: none;
}

.create-account-section a:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  form {
    max-width: 350px;
  }
}

@media (max-width: 320px) {
  form {
    max-width: 280px;
  }
}
  </style>
  