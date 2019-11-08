<template>
  <div class="login">
    <div class="container h100 pr">
      <div class="login-box pa">
        <h2 class="mb-40">账号登录</h2>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm mb-40">
          <el-form-item prop="name">
            <el-input clearable placeholder="请输入用户名或公司名" v-model="ruleForm2.name" auto-complete="off"></el-input>
            <img class="icon-img" src="./images/user_icon.png" alt="">
          </el-form-item>
          <el-form-item prop="pass">
            <el-input clearable type="password" placeholder="请输入密码" v-model="ruleForm2.pass" auto-complete="off" ></el-input>
            <img class="icon-img" src="./images/pas_icon.png" alt="">
          </el-form-item>
         
          <el-row :gutter="20">
            <el-col :span="18">
               <el-form-item prop="code">
                <el-input v-model="ruleForm2.code" placeholder="请输入验证码" auto-complete="off"></el-input>
                <img class="icon-img" src="./images/code_icon.png" alt="">
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <img class="code-img" src="./images/code_img.png" alt="">
            </el-col>
          </el-row>
          <el-form-item>
            <el-button round @click="submitForm('ruleForm2')">提交</el-button>
          </el-form-item>
        </el-form>
        <div class="tac ">
          <router-link class="fs16 c-66 mr-20" to="/forgetpas">忘记密码</router-link>
           <router-link class="fs16 c-main" to="/register">新用户注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      var checkCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          name: '',
          pass: '',
          code: ''
        },
        rules2: {
          name: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          pass: [{
            validator: validatePass2,
            trigger: 'blur'
          }],
          code: [{
            validator: checkCode,
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      changePass() {
        if (this.type == "password") {
          this.type = "text";
          this.iconName = "eye";
        } else if (this.type == "text") {
          this.type = "password";
          this.iconName = "closed-eye";
        }
      },
      forget() {
        this.$router.push("/password");
      },
      async login() {
        let checkPhone = this.phone.trim();
        if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(checkPhone))) {
          this.$toast.fail("手机号码格式有误，请重填");
          return
        }
        const {
          data,
          code,
          msg
        } = await this.$api.login({
          "password": this.password.trim(),
          "username": this.phone.trim()
        });
        if (code == 200) {
          this.$toast.success('登录成功！');
          const token = data.token
          this.$store.commit("SET_TOKEN", token);
          let Info = await this.$api.getUserInfoByToken();
          console.log(Info);
          this.$store.commit("SET_ROLEID", Info.data.roleId);
          this.$store.commit("SET_ROLENAME", Info.data.roleName);
          this.$store.commit("SET_USERNAME", Info.data.userName);
          this.$store.commit("SET_PERMISSIONS", Info.data.permissions);
          // this.$store.commit("SET_SUID", Info.data.suId);
          this.$router.push("/index");
        } else {
          this.$toast.fail(msg);
        }

      },
    }
  };
</script>
<style lang="scss">
  .login {
    background-image: url('./images/login_bg.png');
    height: 6.5rem;

    .container {
      .login-box {
        width: 4.5rem;
        height: 5.3rem;
        background-color: #fff;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: .5rem;

        .demo-ruleForm {
          .el-input__inner {
            padding-left: .45rem;
            height: .5rem;
          }
          .el-button.is-round{
            width: 100%;
            height: .54rem;
            background-color: #FB5F13;
            color: #fff;
            margin-top: .3rem;
          }
          .code-img{
            width: 100%;
          }
          .icon-img {
            position: absolute;
            left: .15rem;
            top: 50%;
            transform: translateY(-50%);

          }
        }
      }
    }

  }
</style>