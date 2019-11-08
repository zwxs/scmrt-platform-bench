<template>
  <div class="register">
    <div class="container">
      <div class="register-box">
          <div class="register-title-top pt-20 pb-20 border-bottom-1px">
            <img src="./images/register_icon.png" alt="">
            <span class="vm fs20 fw-b ml-10" >免费注册</span>
          </div>
          <div class="register-form">
              <h1 class="tac fw-500 mt-40 mb-40">欢迎注册</h1>
               <el-form :model="form" status-icon :rules="rules2"  ref="form" class="demo-ruleForm mb-40">
                <el-form-item prop="name">
                  <el-input clearable v-model="form.name" auto-complete="off" placeholder="请输入3位以上中/英文用户名或公司名称"></el-input>
                  <img class="icon-img" src="./images/user_icon.png" alt="">
                </el-form-item>
                <el-form-item prop="phone">
                  <el-input clearable type="password" placeholder="请输入手机号" v-model.number="form.phone" auto-complete="off" ></el-input>
                  <img class="icon-img" src="./images/phone_icon.png" alt="">
                </el-form-item>
                  <el-form-item prop="code">
                  <el-input clearable type="password" placeholder="请输入验证码" v-model="form.code" auto-complete="off" ></el-input>
                  <img class="icon-img" src="./images/code_icon.png" alt="">
                  <span class="get-code c-main pointer">获取短信验证码</span>
                </el-form-item>
                <el-form-item prop="pas">
                  <el-input clearable type="password" placeholder="请输入密码" v-model="form.pas" auto-complete="off" ></el-input>
                  <img class="icon-img" src="./images/pas_icon.png" alt="">
                </el-form-item>
                <el-form-item prop="checkPass">
                  <el-input clearable type="password" placeholder="请再次输入密码" v-model="form.checkPass" auto-complete="off" ></el-input>
                  <img class="icon-img" src="./images/pas_icon.png" alt="">
                </el-form-item>
                <div class="tac mb-20">
                  <el-checkbox  v-model="checked"></el-checkbox>
                  <span class="ml-3">我已同意</span>
                  <span class="c-main">《用户协议》</span>
                  <span class="c-main">《免责声明》</span>
                </div>
                <el-form-item>
                  <el-button round @click="submitForm('form')">立即注册</el-button>
                </el-form-item>
              </el-form>
              <div class="tac">
                <span class="mr-3">已有账号?</span>
                <router-link class="c-main" to="/login">立即登录</router-link>
              </div>
          </div>
      </div>
    </div>
    <success></success>
  </div>
</template>

<script>
  import success from './components/success.vue'
export default {
  data(){
    var checkName= (rule,value,callback) => {
      if(!value){
        return callback(new Error('用户名不能为空'));
      }else if(value.length<=3){
        return callback(new Error('用户名长度不能低于3位'));
      }else{
        callback()
      }
    };
    var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }else if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(value))){
          return callback(new Error('手机号码格式有误，请重填'));
        }else{
          callback()
        }
      };
      var checkCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.checkPass !== '') {
            this.$refs.form.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      checked:false,
      form:{
        name:'',
        phone:'',
        code:'',
        pas:'',
        checkPass:''
      },
      rules2:{
        name:[{
          validator: checkName,
          trigger: 'blur'
        }],
        phone:[{
          validator: checkPhone,
          trigger: 'blur'
        }],
        code:[{
          validator: checkCode,
          trigger: 'blur'
        }],
        pas:[{
          validator: validatePass,
          trigger: 'blur'
        }],
        checkPass:[{
          validator: validatePass2,
          trigger: 'blur'
        }],
      }
    }
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
  },
  components:{
    success
  }
}
</script>

<style lang="scss">
  .register{
    background-color: #F8F8F8;
    padding: .2rem 0;
    .container{
      background-color: #fff;
      height: 8.9rem;
      padding: 0 .7rem;
      .register-box{
        .register-form{
          width: 4.4rem;
          margin: 0 auto;
          .demo-ruleForm{
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
            .icon-img {
              position: absolute;
              left: .15rem;
              top: 50%;
              transform: translateY(-50%);

            }
            .get-code{
              position: absolute;
              right: .3rem;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
     
    }
  }
</style>
