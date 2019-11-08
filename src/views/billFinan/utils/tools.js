  /**
     * 日期格式化
     * @param  {str} format    日期格式,例：'yyyy年MM月DD HH时mm分ss秒 星期d'
     * @param  {num} timeStamp 日期对应的时间戳 (只能是时间戳)
     * @return {str}           转换后的日期
     */
    export function dateformatting (format, timeStamp) {
      if (timeStamp) {
          let date = new Date(timeStamp);
          let dateStr = '';
          let dateYear = date.getFullYear();
          let dateMonth = date.getMonth() + 1;
          let dateDate = date.getDate();
          let dateHour = date.getHours();
          let dateMin = date.getMinutes();
          let dateSec = date.getSeconds();
          let dateDay = date.getDay();

          dateStr = format.replace('yyyy', dateYear);
          dateStr = dateStr.replace('MM', (dateMonth > 9 ? dateMonth : '0' + dateMonth));
          dateStr = dateStr.replace('DD', (dateDate > 9 ? dateDate : '0' + dateDate));
          dateStr = dateStr.replace('HH', (dateHour > 9 ? dateHour : '0' + dateHour));
          dateStr = dateStr.replace('mm', (dateMin > 9 ? dateMin : '0' + dateMin));
          dateStr = dateStr.replace('ss', (dateSec > 9 ? dateSec : '0' + dateSec));
          dateStr = dateStr.replace('d', dateDay);

          return dateStr;
      } else {
          return '';
      }
  }
  /**
   * 
   */
export function currentDate(){
    var a=(new Date()).toLocaleDateString()//获取当前日期
    a =a.replace(/\//g,'-');//替换2017/05/03 为    2017-05-03
    return a
}