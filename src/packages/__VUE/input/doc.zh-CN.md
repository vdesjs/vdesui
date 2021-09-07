# input

输入框

| 属性                      | 类型        | 默认值            | 说明                                                                                                                                            |
| ------------------------- | ----------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| value                     | string      |                   | 输入框的初始内容                                                                                                                                |
| type                      | string      | text              | input 的类型                                                                                                                                    |
| password                  | boolean     | false             | 是否是密码类型                                                                                                                                  |
| placeholder               | string      |                   | 输入框为空时占位符                                                                                                                              |
| placeholder-style         | string      |                   | 指定 placeholder 的样式                                                                                                                         |
| placeholder-class         | string      | input-placeholder | 指定 placeholder 的样式类                                                                                                                       |
| placeholder-class         | string      | input-placeholder | 指定 placeholder 的样式类                                                                                                                       |
| disabled                  | boolean     | false             | 是否禁用                                                                                                                                        |
| maxlength                 | number      | 140               | 最大输入长度，设置为 -1 的时候不限制最大长度                                                                                                    |
| cursor-spacing            | number      |                   | 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离                                           |
| focus                     | boolean     | false             | 获取焦点                                                                                                                                        |
| confirm-type              | string      | done              | 设置键盘右下角按钮的文字，仅在 type='text'时生效                                                                                                |
| always-embed              | boolean     | false             | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)                                                                 |
| confirm-hold              | boolean     | false             | 点击键盘右下角按钮时是否保持键盘不收起                                                                                                          |
| cursor                    | number      |                   | 指定 focus 时的光标位置                                                                                                                         |
| selection-start           | number      | -1                | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用                                                                                       |
| selection-end             | number      | -1                | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用                                                                                     |
| adjust-position           | boolean     | true              | 键盘弹起时，是否自动上推页面                                                                                                                    |
| hold-keyboard             | boolean     | false             | focus 时，点击页面的时候不收起键盘                                                                                                              |
| safe-password-cert-path   | string      |                   | 安全键盘加密公钥的路径，只支持包内路径                                                                                                          |
| safe-password-length      | number      |                   | 安全键盘输入密码长度                                                                                                                            |
| safe-password-time-stamp  | number      |                   | 安全键盘加密时间戳                                                                                                                              |
| safe-password-nonce       | string      |                   | 安全键盘加密盐值                                                                                                                                |
| safe-password-salt        | string      |                   | 安全键盘计算 hash 盐值，若指定 custom-hash 则无效                                                                                               |
| safe-password-custom-hash | string      |                   | 安全键盘计算 hash 的算法表达式，如 md5(sha1('foo' + sha256(sm3(password + 'bar'))))                                                             |
| input                     | eventhandle |                   | 键盘输入时触发，event.detail = {value, cursor, keyCode}，keyCode 为键值，2.1.0 起支持，处理函数可以直接 return 一个字符串，将替换输入框的内容。 |
| focus                     | eventhandle |                   | 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度，在基础库 1.9.90 起支持                                                   |
| blur                      | eventhandle |                   | 输入框失去焦点时触发，event.detail = { value, encryptedValue, encryptError }                                                                    |
| confirm                   | eventhandle |                   | 点击完成按钮时触发，event.detail = { value }                                                                                                    |
| keyboardheightchange      | eventhandle |                   | 键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}                                                           |

**type 有效值**

| 值            | 说明               |
| :------------ | :----------------- |
| text          | 文本输入键盘       |
| number        | 数字输入键盘       |
| idcard        | 身份证输入键盘     |
| digit         | 带小数点的数字键盘 |
| safe-password | 密码安全输入键盘   |

**confirm-type 有效值**

| 值     | 说明                 |
| :----- | :------------------- |
| send   | 右下角按钮为“发送”   |
| search | 右下角按钮为“搜索”   |
| next   | 右下角按钮为“下一个” |
| go     | 右下角按钮为“前往”   |
| done   | 右下角按钮为“完成”   |
