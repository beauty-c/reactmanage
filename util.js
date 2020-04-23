// 常用方法 ————————————————————————————

// ********************************* 日期时间相关 ************************

// 获取今天最近的日期（今天 ，明天，后天，昨天）
// addDayCount:（今天 :0，明天 : 1，后天 2，昨天: -1）
function getRecentDate(date, addDayCount) {
  var year = date.getFullYear()
  date.setDate(date.getDate() + addDayCount) 
  var month = date.getMonth() + 1
  var day = date.getDate()
  let arr = [year,month, day].map(formatNumber)
  return arr[0] + '年' + arr[1]+  '月' + arr[2] + '日'
  // return [year,month, day].map(formatNumber).join('-')
}

function getNowTime() {
  var date = new Date()
  var hour = date.getHours()
  var minute = date.getMinutes()

  return [hour, minute].map(formatNumber).join(':')
}

// 计算两个日期之间的天数
function getDays(date1, date2) {
  var date1Str = []
  date1Str[0] = date1.slice(0, 4)
  date1Str[1] = date1.slice(5, 7)
  date1Str[2] = date1.slice(8, 10)
  // var date1Str = date1.split("-"); //将日期字符串分隔为数组,数组元素分别为年.月.日  
  //根据年 . 月 . 日的值创建Date对象  
  var date1Obj = new Date(date1Str[0], (date1Str[1] - 1), date1Str[2]);
  var date2Str = []
  date2Str[0] = date2.slice(0, 4)
  date2Str[1] = date2.slice(5, 7)
  date2Str[2] = date2.slice(8, 10)
  // var date2Str = date2.split("-");
  var date2Obj = new Date(date2Str[0], (date2Str[1] - 1), date2Str[2]);
  var t1 = date1Obj.getTime();
  var t2 = date2Obj.getTime();
  var dateTime = 1000 * 60 * 60 * 24; //每一天的毫秒数  
  var minusDays = Math.floor(((t2 - t1) / dateTime)); //计算出两个日期的天数差  
  var days = Math.abs(minusDays); //取绝对值  
  return days;
}

function getWeekDay(day) {
  var weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  var myDate = new Date(Date.parse(day));
  var week = weekDay[myDate.getDay()];
  return week;
}



// 格式化
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// ********************************* 日期时间相关 ************************


// ********************************* 字符串相关 ************************

// 生成随机数
function randomWord(randomFlag, min, max) {
  var str = "",
    range = min,
    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // 随机产生
  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min;
  }
  for (var i = 0; i < range; i++) {
    var pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }
  return str;
}

// 在字符串某个位置替换新的字符
function replaceChar(source, pos, newChar) {
  if (pos < 0 || pos >= source.length || source.length == 0) {
    return "invalid parameters...";
  }

  var iBeginPos = 0,
    iEndPos = source.length;
  var sFrontPart = source.substr(iBeginPos, pos);
  var sTailPart = source.substr(pos + 1, source.length);
  var sRet = sFrontPart + newChar + sTailPart;
  return sRet;
}

// 正则 

// 手机号码校验
function isPhone(phone) {
  var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/
  if (reg.test(phone)) {
    console.log('手机号码格式输入正确')
    return true
  } else {
    console.log('请输入正确格式的手机号码')
    return false
  }
}

// 身份证号校验
function isIDCard(idCard) {
  var reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
  if (reg.test(idCard)) {
    console.log(idCard + ' 是合法的身份证号码')
    return true
  } else {
    console.log(idCard + ' 是不合法的身份证号码')
    return false
  }
}

// ********************************* 字符串相关 ************************


module.exports = {
  getRecentDate: getRecentDate,
  getDays: getDays,
  getNowTime: getNowTime,
  randomWord: randomWord,
  replaceChar: replaceChar,
  isIDCard: isIDCard,
  isPhone: isPhone,
  getWeekDay:getWeekDay
}