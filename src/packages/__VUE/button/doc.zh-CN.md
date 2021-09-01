# Button 按钮
## API
### Props

| 属性                   | 类型        | 默认值       | 说明                                                                                                                                                           |
| ---------------------- | ----------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| size                   | string      | default      | 按钮的大小                                                                                                                                                     |
| type                   | string      | default      | 按钮的样式类型                                                                                                                                                 |
| plain                  | boolean     | false        | 按钮是否镂空，背景色透明                                                                                                                                       |
| disabled               | boolean     | false        | 是否禁用                                                                                                                                                       |
| loading                | boolean     | false        | 名称前是否带loading 图标                                                                                                                                       |
| form-type              | string      |              | 用于form 组件，点击分别触发form组件的submit/reset 事件                                                                                                         |
| open-type              | string      |              | 微信开放能力                                                                                                                                                   |
| hover-class            | string      | button-hover | 指定按钮按小去的样式类。当`hover-class="none"`时,没有点击效果.                                                                                                 |
| hover-stop-propagation | boolean     | false        | 指定是否阻止本节点的祖先节点出现点击态                                                                                                                         |
| hover-start-time       | number      | 20           | 指定是否阻止本节点的祖先节点的祖先节点出现点击态                                                                                                               |
| hover-stay-time        | number      | 70           | 按住多久后出现点击态                                                                                                                                           |
| session-from           | string      |              | 会话来源,open-type="contact"时有效                                                                                                                             |
| send-message-title     | string      | 当前标题     | 会话内消息卡片标题，open-type="contact"时有效                                                                                                                  |
| send-message-path      | string      | 当前分享路径 | 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效                                                                                                    |
| send-message-img       | string      | 截图         | 会话内消息卡片图片，open-type="contact"时有效                                                                                                                  |
| app-parameter          | string      |              | 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效                                                                                                      |
| show-message-card      | string      | false        | 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效 |
| bindgetuserinfo        | eventhandle |              | 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type="getUserInfo"时有效                                            |
| bindcontact            | eventhandle |              | 客服消息回调，open-type="contact"时有效                                                                                                                        |
| bindgetphonenumber     | eventhandle |              | 获取用户手机号回调，open-type=getPhoneNumber时有效                                                                                                             |
| binderror              | eventhandle |              | 当使用开放能力时，发生错误的回调，open-type=launchApp时有效                                                                                                    |
| bindopensetting        | eventhandle |              | 在打开授权设置页后回调，open-type=openSetting时有效                                                                                                            |
| bindlaunchapp          | eventhandle |              | 打开 APP 成功的回调，open-type=launchApp时有效                                                                                                                 |










