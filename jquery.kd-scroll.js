/**今点连续滚动插件 2013-7-12 by Will
*/

//创建一个闭包
(function ($) {

    //插件定义
    $.fn.scroll = function (options) {
        var opts = $.extend({}, $.fn.scroll.defaults, options);

        return this.each(function () {
            var $this = $(this);

            _init($this, opts);

        });
        //  debug(this);
    };

    //初始化插件
    function _init($this, opts) {

        //要滚动的元素
        var scroller = $this.find(opts.scroller);
        var repeatHtml = $("<p>").append(scroller.clone()).html();

        if (scroller.length == 0) {
            debug('未找到要滚动的元素：' + opts.scroller);
            return;
        }
        //重复添加滚动元素，直至填满容器
        var ratio;
        if (opts.vertical) {
            if (scroller.height() == 0) {
                debug('要垂直滚动的元素：' + opts.scroller + '的高度不能为0');
                return;
            }

            ratio = $this.height() / scroller.height() + 1;
            var repeatScroller = '';

            for (var i = 1; i < ratio; i++) {
                repeatScroller += repeatHtml;
            }
            $this.append(repeatScroller);
        }
            //水平滚动，添加容器
        else {
            if (scroller.width() == 0) {
                debug('要水平滚动的元素：' + opts.scroller + '的宽度不能为0');
                return;
            }
            ratio = $this.width() / scroller.width() + 1;
            $this.wrapInner('<div class="kd-scroller-horizontal-container"></div>');

            var repeatScroller = '';

            for (var i = 1; i < ratio; i++) {
                repeatScroller += repeatHtml;
            }
            $this.find('.kd-scroller-horizontal-container').append(repeatScroller);
        }

        //循环滚动
        var scrolling = setInterval(function () {
            scroll($this, scroller, opts);
        }, opts.speed);

        $this.hover(function () {
            clearInterval(scrolling);
        }, function () {
            //离开继续调用
            scrolling = setInterval(function () {
                scroll($this, scroller, opts);
            }, opts.speed);
        });
    }

    //滚动
    function scroll($this, scroller, opts) {

        //垂直滚动
        if (opts.vertical) {
            if ($this.scrollTop() >= scroller.height())
                $this.scrollTop(0);
            else {
                $this.scrollTop($this.scrollTop() + opts.step);
            }
        }
            //水平滚动
        else {
            if ($this.scrollLeft() >= scroller.width())
                $this.scrollLeft(0);
            else {
                $this.scrollLeft($this.scrollLeft() + opts.step);
            }
        }
    };

    // 私有函数：debugging    
    function debug(msg) {
        if (window.console && window.console.log) {
            var now = new Date();
            window.console.log(now.getHours + ':' + now.getMinutes + ':' + now.getSeconds + '  ' + msg);
        }
    };

    //默认参数
    $.fn.scroll.defaults = {
        speed: 40,  //滚动速度
        scroller: '.kd-scroller',//滚动元素钩子
        vertical: false,//是否垂直滚动
        step: 1,//每次滚动像素
    };

})(jQuery);