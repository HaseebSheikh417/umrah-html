/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
!function(t){"use strict";t.fn.counterUp=function(e){var n=t.extend({time:400,delay:10},e);return this.each((function(){var e=t(this),u=n;e.waypoint((function(){var t=[],n=u.time/u.delay,a=e.text(),r=/[0-9]+,[0-9]+/.test(a);a=a.replace(/,/g,"");/^[0-9]+$/.test(a);for(var o=/^[0-9]+\.[0-9]+$/.test(a),c=o?(a.split(".")[1]||[]).length:0,i=n;i>=1;i--){var s=parseInt(a/n*i);if(o&&(s=parseFloat(a/n*i).toFixed(c)),r)for(;/(\d+)(\d{3})/.test(s.toString());)s=s.toString().replace(/(\d+)(\d{3})/,"$1,$2");t.unshift(s)}e.data("counterup-nums",t),e.text("0");e.data("counterup-func",(function(){e.text(e.data("counterup-nums").shift()),e.data("counterup-nums").length?setTimeout(e.data("counterup-func"),u.delay):(e.data("counterup-nums"),e.data("counterup-nums",null),e.data("counterup-func",null))})),setTimeout(e.data("counterup-func"),u.delay)}),{offset:"100%",triggerOnce:!0})}))}}(jQuery);
//# sourceMappingURL=counterup.js.map