# picker-view
嵌入页面的滚动选择器。

相对于`picker`组件，`picker-view`拥有更强的灵活性。当需要对自定义选择的弹出方式和UI表现时，往往需要使用`picker-view`。

**属性说明**

|属性名|类型|默认值|平台差异说明|
|:-|:-|:-|:-|
|value|Array＜Number＞|数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。||
|indicator-style|String|设置选择器中间选中框的样式||
|indicator-class|String|设置选择器中间选中框的类名，注意页面或组件的style中写了scoped时，需要在类名前写/deep/|app-nvue和字节跳动小程序不支持|
|mask-style|String|设置蒙层的样式||
|mask-class|String|设置蒙层的类名|app-nvue和字节跳动小程序不支持|
|@change|EventHandle|当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）|&nbsp;|
|@pickstart|eventhandle||当滚动选择开始时候触发事件|微信小程序2.3.1、快手小程序|
|@pickend|eventhandle||当滚动选择结束时候触发事件|微信小程序2.3.1、快手小程序|

**注意：**其中只可放置 `<picker-view-column/>` 组件，其他节点不会显示。

#### picker-view-column

`<picker-view />` 的子组件，仅可放置于 `<picker-view />` 中，其子节点的高度会自动设置成与 picker-view 的选中框的高度一致。

**注意：**nvue页面子节点未继承 picker-view 的选中框的高度，需要自己设置高度并居中。

