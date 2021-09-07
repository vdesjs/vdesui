# textarea

**属性说明**

| 属性名                  | 类型        | 默认值               | 说明                                                                                                               |
| :---------------------- | :---------- | :------------------- | :----------------------------------------------------------------------------------------------------------------- |
| value                   | String      |                      | 输入框的内容                                                                                                       |
| placeholder             | String      |                      | 输入框为空时占位符                                                                                                 |
| placeholder-style       | String      |                      | 指定 placeholder 的样式                                                                                            |
| placeholder-class       | String      | textarea-placeholder | 指定 placeholder 的样式类，注意页面或组件的 style 中写了 scoped 时，需要在类名前写/deep/                           |
| disabled                | Boolean     | false                | 是否禁用                                                                                                           |
| maxlength               | Number      | 140                  | 最大输入长度，设置为 -1 的时候不限制最大长度                                                                       |
| focus                   | Boolean     | false                | 获取焦点                                                                                                           |
| auto-height             | Boolean     | false                | 是否自动增高，设置 auto-height 时，style.height 不生效                                                             |
| fixed                   | Boolean     | false                | 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true                                       |
| cursor-spacing          | Number      | 0                    | 指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 |
| cursor                  | Number      |                      | 指定 focus 时的光标位置                                                                                            |
| confirm-type            | String      | done                 | 设置键盘右下角按钮的文字                                                                                           |
| show-confirm-bar        | Boolean     | true                 | 是否显示键盘上方带有”完成“按钮那一栏                                                                               |
| selection-start         | Number      | -1                   | 光标起始位置，自动聚焦时有效，需与 selection-end 搭配使用                                                          |
| selection-end           | Number      | -1                   | 光标结束位置，自动聚焦时有效，需与 selection-start 搭配使用                                                        |
| adjust-position         | Boolean     | true                 | 键盘弹起时，是否自动上推页面                                                                                       |
| disable-default-padding | boolean     | false                | 是否去掉 iOS 下的默认内边距                                                                                        |
| hold-keyboard           | boolean     | false                | focus 时，点击页面的时候不收起键盘                                                                                 |
| auto-blur               | boolean     | false                | 键盘收起时，是否自动失去焦点                                                                                       |
| @focus                  | EventHandle |                      | 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度                                              |
| @blur                   | EventHandle |                      | 输入框失去焦点时触发，event.detail = {value, cursor}                                                               |
| @linechange             | EventHandle |                      | 输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}                                       |
| @input                  | EventHandle |                      | 当键盘输入时，触发 input 事件，event.detail = {value, cursor}， @input 处理函数的返回值并不会反映到 textarea 上    |
| @confirm                | EventHandle |                      | 点击完成时， 触发 confirm 事件，event.detail = {value: value}                                                      |
| @keyboardheightchange   | Eventhandle |                      | 键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}                              |

**confirm-type 有效值**

| 值     | 说明                 |
| :----- | :------------------- |
| send   | 右下角按钮为“发送”   |
| search | 右下角按钮为“搜索”   |
| next   | 右下角按钮为“下一个” |
| go     | 右下角按钮为“前往”   |
| done   | 右下角按钮为“完成”   |
