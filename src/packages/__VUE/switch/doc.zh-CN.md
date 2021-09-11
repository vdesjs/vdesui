# switch
开关选择器

**属性说明**

| 属性                   | 类型        | 默认值       | 说明                                                                                                                                                           |
| ---------------------- | ----------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|checked|Boolean|false|是否选中||
|disabled|Boolean|false|是否禁用|字节跳动小程序不支持|
|type|String|switch|样式，有效值：switch, checkbox||
|@change|EventHandle||checked 改变时触发 change 事件，event.detail={ value:checked}||
|color|Color||switch 的颜色，同 css 的 color|&nbsp;|

**注意**
- switch的默认颜色，在不同平台不一样。微信小程序是绿色的，字节跳动小程序为红色，其他平台是蓝色的。更改颜色使用color属性。
- 如需调节switch大小，可通过css的scale方法调节，如缩小到70%`style="transform:scale(0.7)"`