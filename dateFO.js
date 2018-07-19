function formatDate(date, fmt="yyyy-MM-dd") {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'o+':0
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
};
function getMinusDay(date=new Date(),minus=4){
  date.setDate(date.getDate()-minus);
  return formatDate(date);
};
function toTextFormat(str,mode='long'){
  if (str&&mode=='long') {
    let date=toOrigin(str);
    return date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日';
  }else if (str&&mode=='short') {
    let date=toOrigin(str);
    return (date.getMonth()+1)+'月'+date.getDate()+'日';
  }
}
function toOrigin(str){
  if (str) {
    let date = new Date(str.replace(/-/g,'/'));
    return date;
  }
}
export {formatDate,getMinusDay,toTextFormat,toOrigin}
