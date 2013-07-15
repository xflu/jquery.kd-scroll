jquery.kd-scroll
================

<strong>Jquery kd-scroll</strong> 插件是基于Jquery编写的一个内容连续滚动插件。
	
主要功能如下：
>
1. 支持水平滚动和垂直滚动。
2. 内容自动重复铺满容器。	
3. 支持设置滚动速度和步进。


####使用方式

#####1、引用Jquery 到您的页面
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.js" type="text/javascript"></script>
```

#####2、引用jquery.kd-scroll 到您的页面
```html
<script src="js/jquery.kd-scroll.js" type="text/javascript"></script>
```

#####3、添加脚本

```html
<script>
	$(document).ready(function(){
    	$("#scroll-container").scroll();
	});
</script>
```
或者

```html
<script>
	$(document).ready(function(){
	    $("#scroll-container").scroll({
	    	speed: 40,  				//滚动速度
	        scroller: '.kd-scroller',	//滚动元素钩子
	        vertical: false,			//是否垂直滚动
	        step: 1,					//每次滚动像素
	    });
	});
</script>
```

#####4、html
```html
<!--垂直滚动-->
<div id="scroll-vertical" class="scroll-container">
	<ul class="kd-scroller">
		<li>item-1</li>
		<li>item-2</li>
		<li>item-3</li>
		...
	</ul>
</di>

<!--水平滚动-->
<div id="scroll-horizontal" class="scroll-container">
	<ul class="kd-scroller">
		<li>item-1</li>
		<li>item-2</li>
		<li>item-3</li>
		...
	</ul>
</di>

```

#####5、css
```html
<style type="text/css">
	.scroll-container{
		overflow:hidden;
	}
	.kd-scroller{
		overflow:hidden;
	}
</style>
```

######5.1 垂直滚动时 css

```html
<style type="text/css">
	#scroll-vertical {
		height:100px;
	}
</style>
```

######5.2 水平滚动时 css

```html
<style type="text/css">
	#scroll-horizontal{
		width:300px;
	}
	#scroll-horizontal .kd-scroller{
		float:left;
	}
	#scroll-horizontal li{
		float:left;
	}
</style>
```
