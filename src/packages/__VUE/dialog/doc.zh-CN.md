# Dialog



## 属性列表
| 属性          | 类型          | 默认值 | 说明                                                                     |
| ------------- | ------------- | ------ | ------------------------------------------------------------------------ |
| ext-class     | string        |        | 添加在组件内部结构的class，可用于修改组件内部的样式                      |
| title         | string        |        | 弹窗的标题                                                               |
| buttons       | `array<object>` | []     | 底部的按钮组，建议最多提供两个按钮                                       |
| marsk         | boolean       |        | 是否显示蒙层                                                             |
| mask-closable | boolean       |        | 点击蒙层是否可以关闭                                                     |
| show          | boolean       |        | 是否显示弹窗                                                             |
| @close     | eventhandler  |        | 弹窗关闭的时候触发的事件                                                 |
| @buttontap | eventhandler  |        | buttons按钮组点击时触发的事件，detail为{index, item}，item是按钮的配置项 |


**buttons提供按钮组配置，每一项表示一个按钮，每一项的属性为**
| 属性     | 类型   | 默认值 | 说明                                        |
| -------- | ------ | ------ | ------------------------------------------- |
| extClass | string |        | 按钮的额外的class，可用于修改组件内部的样式 |
| text     | string |        | 按钮的文本                                  |


