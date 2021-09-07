# textarea



**属性说明**

|属性名|类型|默认值|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|value|String||输入框的内容||
|placeholder|String||输入框为空时占位符||
|placeholder-style|String||指定 placeholder 的样式||
|placeholder-class|String|textarea-placeholder|指定 placeholder 的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/|字节跳动小程序不支持|
|disabled|Boolean|false|是否禁用||
|maxlength|Number|140|最大输入长度，设置为 -1 的时候不限制最大长度||
|focus|Boolean|false|获取焦点|在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点|
|auto-height|Boolean|false|是否自动增高，设置auto-height时，style.height不生效||
|fixed|Boolean|false|如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true|微信小程序、百度小程序、字节跳动小程序、QQ小程序|
|cursor-spacing|Number|0|指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离|App、微信小程序、百度小程序、字节跳动小程序、QQ小程序|
|cursor|Number||指定focus时的光标位置|微信小程序、App、H5、百度小程序、字节跳动小程序、QQ小程序|
|confirm-type|String|done|设置键盘右下角按钮的文字|微信小程序基础库2.13.0+、App-vue和H5(2.9.9+，且要求设备webview内核Chrome81+、Safari13.7+)|
|show-confirm-bar|Boolean|true|是否显示键盘上方带有”完成“按钮那一栏|微信小程序、百度小程序、QQ小程序|
|selection-start|Number|-1|光标起始位置，自动聚焦时有效，需与selection-end搭配使用|微信小程序、App、H5、百度小程序、字节跳动小程序、QQ小程序|
|selection-end|Number|-1|光标结束位置，自动聚焦时有效，需与selection-start搭配使用|微信小程序、App、H5、百度小程序、字节跳动小程序、QQ小程序|
|adjust-position|Boolean|true|键盘弹起时，是否自动上推页面|App-Android（softinputMode 为 adjustResize 时无效）、微信小程序、百度小程序、QQ小程序|
|disable-default-padding|boolean|false|是否去掉 iOS 下的默认内边距|微信小程序2.10.0|
|hold-keyboard|boolean|false|focus时，点击页面的时候不收起键盘|微信小程序2.8.2|
|auto-blur|boolean|false|键盘收起时，是否自动失去焦点|App 3.0.0+|
|@focus|EventHandle||输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度|仅微信小程序、App（HBuilderX 2.0+ [nvue uni-app模式](http://ask.dcloud.net.cn/article/36074)） 、QQ小程序支持 height|
|@blur|EventHandle||输入框失去焦点时触发，event.detail = {value, cursor}||
|@linechange|EventHandle||输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}|字节跳动小程序不支持,nvue ios暂不支持|
|@input|EventHandle||当键盘输入时，触发 input 事件，event.detail = {value, cursor}， @input 处理函数的返回值并不会反映到 textarea 上||
|@confirm|EventHandle||点击完成时， 触发 confirm 事件，event.detail = {value: value}|微信小程序、百度小程序、QQ小程序|
|@keyboardheightchange|Eventhandle||键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}|微信小程序基础库2.7.0+、App 3.1.0+|

**confirm-type 有效值**


|值|说明|
|:-|:-|
|send|右下角按钮为“发送”|
|search|右下角按钮为“搜索”|
|next|右下角按钮为“下一个”|
|go|右下角按钮为“前往”|
|done|右下角按钮为“完成”|