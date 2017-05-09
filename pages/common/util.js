function transformTimeByDot(stamp) {
    return transformTime(stamp, '.')
}

function transformTimeByDash(stamp) {
    return transformTime(stamp, '-')
}

function transformTime(stamp, separator) {
    //时间格式如：2017/3/11 正则：\d{4}\/\d{1,2}\/\d{1,2}
    //时间格式如：2017-03-11 正则：\d{4}-\d{2}-\d{2}
    var date;
    if (stamp) {
        date = new Date(stamp);
    } else {
        date = new Date();
    }
    var year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate();
    month = month > 9 ? month : ('0' + month);
    day = day > 9 ? day : ('0' + day);
    return year + separator + month + separator + day;
}


function transformMoney(money) {
    if (money % 10000 == 0) {
        return money / 10000 + "万";
    } else if (money % 1000 == 0) {
        return money / 1000 + "千";
    } else {
        return money;
    }
}

function addStar (str,frontLen,endLen) {//星号转换
    var len = str.length-frontLen-endLen;
    var xing = '';
    for (var i=0;i<len;i++) {
        xing+='*';
    }
    return str.substr(0,frontLen)+xing+str.substr(str.length-endLen);
}

function transformTimeToMill(time) {
    var arr = time.split('-');
    var date = new Date();
}

function values(obj) {
    var array = [];
    if (Object.values) {
        array = Object.values(obj);
    } else {
        array = Object.keys(obj).map(function (key) {
            return obj[key];
        });
    }
    return array;
}

module.exports = {
    transformTimeByDot: transformTimeByDot,
    transformTimeByDash: transformTimeByDash,
    transformTime:transformTime,
    addStar:addStar,
    transformMoney: transformMoney,
    values: values
}
