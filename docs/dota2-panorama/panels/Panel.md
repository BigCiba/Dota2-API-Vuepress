# Panel
最基础的标签，相当于HTML的`div`
# 基础样式
默认情况下，PUI的元素是没有任何样式的，所以一般都需要引入Dota2的基础样式
```html
<styles>
	<include src="s2r://panorama/styles/dotastyles.vcss_c" />
</styles>
```
# 排版
PUI的元素不像HTML的元素一样分`inline`和`block`等等这些属性，PUI的所有元素一致都是定位在父类的左上角。

PUI的排版也较为简单，只需要CSS中的`flow-children`属性，当然这个是PUI特有的，这个是决定子元素是如何排版的

`flow-children`有以下值
值|描述
--|--
none|默认，无
down|竖直排版
right|水平排版
right-wrap|水平排版，超过父类边界的子元素自动换行
*例*
```xml
<Panel style="flow-children:right;">

	<!-- 第一列 -->
	<Panel style="margin-right:50px;">
		<Panel style="width:64px;height:64px;background-color:#900;" />
		<Panel style="width:32px;height:32px;background-color:#090;" />
		<Panel style="width:16px;height:16px;background-color:#009;" />
	</Panel>

	<!-- 第二列 -->
	<Panel style="margin-right:50px;flow-children:down;">
		<Panel style="width:64px;height:64px;background-color:#900;" />
		<Panel style="width:32px;height:32px;background-color:#090;" />
		<Panel style="width:16px;height:16px;background-color:#009;" />
	</Panel>

	<!-- 第三列 -->
	<Panel style="margin-right:50px;flow-children:right;">
		<Panel style="width:64px;height:64px;background-color:#900;" />
		<Panel style="width:32px;height:32px;background-color:#090;" />
		<Panel style="width:16px;height:16px;background-color:#009;" />
	</Panel>

	<!-- 第四列 -->
	<Panel style="margin-right:50px;flow-children:right-wrap;width:100px;">
		<Panel style="width:64px;height:64px;background-color:#900;" />
		<Panel style="width:32px;height:32px;background-color:#090;" />
		<Panel style="width:16px;height:16px;background-color:#009;" />
	</Panel>

</Panel>
```
![](https://avalonstudio.cn/static/panorama_panels/imgs/Panel_exmple1.jpg)
# 定位
PUI中可以使用`position`,`x`,`y`,`transform`来改变位置，当然这是相对父类来定位;

定位在右下角，垂直居中这些也很简单，关键的两个属性`vertical-align`和`horizontal-align`

*注意：*
- 如果父类是竖直排版，子元素应该只使用`horizontal-align`
- 如果父类是水平排版，子元素应该只使用`vertical-align`

`vertical-align`的值
值|描述
--|--
top|默认，顶部
bottom|顶部
center|垂直居中
middle|等同于center
`horizontal-align`的值
值|描述
--|--
left|默认，左
right|右
center|水平居中
middle|等同于center
*例*
- XML
```xml
<Panel hittest="false" class="ExmpleRoot" >
	<Panel id="ExmpleFrame" >
		<!-- 左上角 -->
		<Panel class="top-left red" />

		<!-- 顶部水平居中 -->
		<Panel class="top-center green" />

		<!-- 右上角 -->
		<Panel class="top-right red" />

		<!-- 左垂直居中 -->
		<Panel class="middle-left green" />

		<!-- 居中 -->
		<Panel class="middle-center blue" />

		<!-- 右垂直居中 -->
		<Panel class="middle-right green" />

		<!-- 左下角 -->
		<Panel class="bottom-left red" />

		<!-- 底部水平居中 -->
		<Panel class="bottom-center green" />

		<!-- 右下角 -->
		<Panel class="bottom-right red" />
	</Panel>
</Panel>
```
- CSS
```css
.ExmpleRoot{
	width: 100%;
	height: 100%;
}

#ExmpleFrame {
	width: 512px;
	height: 512px;
	background-color: #1e1e1e;
	horizontal-align: center;
	vertical-align: middle;
}

#ExmpleFrame > Panel {
	width: 64px;
	height: 64px;
}

.red{
	background-color: #A92900;
}

.green{
	background-color: #00A15A;
}

.blue{
	background-color: #0068B3;
}

.top-left {
	vertical-align: top;
	horizontal-align: left;
}

.top-center {
	vertical-align: top;
	horizontal-align: center;
}

.top-right {
	vertical-align: top;
	horizontal-align: right;
}

.middle-left {
	vertical-align: middle;
	horizontal-align: left;
}

.middle-center {
	vertical-align: middle;
	horizontal-align: center;
}

.middle-right {
	vertical-align: middle;
	horizontal-align: right;
}

.bottom-left {
	vertical-align: bottom;
	horizontal-align: left;
}

.bottom-center {
	vertical-align: bottom;
	horizontal-align: center;
}

.bottom-right {
	vertical-align: bottom;
	horizontal-align: right;
}
```
![](https://avalonstudio.cn/static/panorama_panels/imgs/Panel_exmple2.jpg)
# 音效
可以使用API播放音效`Game.EmitSound(string sound)`

也可以通过CSS中的`sound`属性，可以使用音效事件播放
```css
Button:active{
	sound: "ui.contract_assign"
}
```