// 公共方法

// 防抖函数
// 这里的this没有改变函数的指向，还是指向原来的对象（apply的参数必须得写，但是此处不需要改变指向，所以用this）
// 给delay写个默认值50，当没有传递delay时，使用默认值
export function debounce(func, delay = 50) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 节流函数
// 开始立即执行，结束执行最后一次
// options={leading:true/false,(第一次是否执行)   trailing:true/false(最后一次是否执行) }
// 如果没有传递参数options，则默认第一次和最后一次都执行(两者不能同时为false)
export function throttle(func, delay = 1000, options) {
  let old = 0;
  let timer = null;
  if (!options) options = {};
  return function(...args) {
    let now = new Date().valueOf();
    if (options.leading === false && !old) old = now;
    if (now - old > delay) {
      if (timer) {
        // 控制第一次是否执行
        clearTimeout(timer);
        timer = null;
      }
      func.apply(this, args);
      old = now;
    } else if (!timer && options.trailing !== false) {
      // 控制最后一次是否执行
      timer = setTimeout(() => {
        old = new Date().valueOf();
        timer = null;
        func.apply(this, args);
      }, delay);
    }
  };
}

//   格式化时间（输出格式固定）
export function getTime(date) {
  var date1 = new Date(date);
  return date1.toLocaleString();
}

// 使用正则表达式格式化时间（可自定义输出时间的格式）
// date：时间戳
// fmt：需要输出的时间格式  例：'yyyy-MM-dd'   'yy-MM-dd-hh:mm:ss'等
export function formatDate(date, fmt) {
  // 根据规定格式fmt，替换匹配的年份，并截取年份
  // 例：fmt为'yyyy-MM-dd'，则年份输出为 2021
  //    fmt为'yy-MM-dd',则年份输出为 21
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };
  //   遍历对象 o ，格式化时间
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}
// 给时间前面补0
function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}
