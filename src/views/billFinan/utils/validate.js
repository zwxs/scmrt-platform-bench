import Vue from 'vue'
import VeeValidate, {
    Validator
} from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN.js';
// Validator.updateDictionary({
//     zh_CN: {
//         zh_CN
//     }
// });
//提示语汉化
Validator.locale = "zh_CN";
Validator.localize(Validator.locale, {
    messages: zh_CN.messages,
    // attributes:{
    //     loginName:'登录名',
    //     loginPassword:'密码'
    // }
});
// Validator.extend('required', {
//     getMessage: (field) => '请输入' + field,
// });
// getMessage(field, args) { // 添加到默认的英文错误消息里面
//     // Returns a message.
// },
// validate(value, args) {
//     // Returns a Boolean or a Promise.
// }
const config = {
    errorBagName: 'errors', // change if property conflicts.
    delay: 0,
    locale: 'zh_CN',
    messages: null,
    strict: true,
    classes: true,
    classNames: {
        valid: 'is-valid',
        invalid: 'is-invalid'
    }
};
Vue.use(VeeValidate, config);