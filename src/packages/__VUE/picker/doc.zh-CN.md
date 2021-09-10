#### picker

从底部弹起的滚动选择器。支持五种选择器，通过mode来区分，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。

#### 普通选择器

``mode = selector``

**属性说明**

|属性名|类型|默认值|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|range|Array / Array&lt;Object&gt;|[]|mode为 selector 或 multiSelector 时，range 有效||
|range-key|String||当 range 是一个 `Array＜Object＞` 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容||
|value|Number|0|value 的值表示选择了 range 中的第几个（下标从 0 开始）||
|selector-type|String|auto|大屏时UI类型，支持 picker、select、auto，默认在 iPad 以 picker 样式展示而在 PC 以 select 样式展示|H5 2.9.9+|
|@change|EventHandle||value 改变时触发 change 事件，event.detail = {value: value}||
|disabled|Boolean|false|是否禁用|快手小程序不支持|
|@cancel|EventHandle||取消选择或点遮罩层收起 picker 时触发|快手小程序不支持|

- picker在各平台的实现是有UI差异的，有的平台如百度、支付宝小程序的Android端是从中间弹出的；有的平台支持循环滚动如百度小程序；有的平台没有取消按钮如App-iOS端。但均不影响功能使用。

#### 多列选择器

``mode = multiSelector``

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|QQ小程序|快手小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|vue支持，nvue自2.4起支持|√|√|x|√|√|√|√|

支付宝小程序 picker 组件不支持多列选择，可以使用 picker-view 组件替代。

**属性说明**

|属性名|类型|默认值|说明|
|:-|:-|:-|:-|
|range|二维 Array / 二维 Array＜Object＞|[]|mode为 selector 或 multiSelector 时，range 有效。二维数组，长度表示多少列，数组的每项表示每列的数据，如[["a","b"], ["c","d"]]|
|range-key|String||当 range 是一个二维 Array＜Object＞ 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容|
|value|Array|[]|value 每一项的值表示选择了 range 对应项中的第几个（下标从 0 开始）|
|@change|EventHandle||value 改变时触发 change 事件，event.detail = {value: value}|
|@columnchange|EventHandle||某一列的值改变时触发 columnchange 事件，event.detail = {column: column, value: value}，column 的值表示改变了第几列（下标从0开始），value 的值表示变更值的下标|
|@cancel|EventHandle||取消选择时触发（快手小程序不支持）|
|disabled|Boolean|false|是否禁用（快手小程序不支持）|