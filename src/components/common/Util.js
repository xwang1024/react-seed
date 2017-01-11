let Util = {
    formatDate: function(date, fmt) {
        var hours = date.getHours();
        var o = {
            "M+" : date.getMonth()+1,
            "d+" : date.getDate(),
            "h+" : hours>12?hours%12:hours,
            "H+" : hours,
            "m+" : date.getMinutes(),
            "s+" : date.getSeconds(),
            "q+" : Math.floor((date.getMonth()+3)/3),
            "S"  : date.getMilliseconds()
        };
        if(/(y+)/.test(fmt)) fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("("+ k +")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
    },
    smoothDate: function(date, fmt) {
        return new Date(Util.formatDate(date, fmt));
    }
}

export default Util