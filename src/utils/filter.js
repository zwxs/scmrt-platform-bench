//定义一个全局过滤器实现日期格式化
import Vue from 'vue'
import moment from 'moment'
Vue.prototype.$moment = moment;
// 使用momentjs这个日期格式化类库实现日期的格式化功能
Vue.filter('datefmt', function (input, fmtstring) {
    return moment(input).format(fmtstring);
});
Vue.filter('money', (value) => {
    if (value) {
        return (value * 10000).toFixed(2);
    } else {
        return ''
    }
});
Vue.filter('ExpRates', (value) => {
    if (value) {
        return value.toFixed(2)
    }
});
Vue.filter('formatMoney', (number, decimals, dec_point, thousands_sep) => {
    /*
   * 参数说明：
   * number：要格式化的数字
   * decimals：保留几位小数
   * dec_point：小数点符号
   * thousands_sep：千分位符号
   * */
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 2 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.ceil(n * k) / k;
        };

    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + sep + "$2");
    }

    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
});

