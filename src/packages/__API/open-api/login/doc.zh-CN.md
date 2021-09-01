# 登录

##  wx.login(Object object)

调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户在当前小程序的唯一标识（openid）、微信开放平台帐号下的唯一标识（unionid，若当前小程序已绑定到微信开放平台帐号）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。更多使用方法详见 [小程序登录](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)

### 参数

| 属性     | 类型     | 默认值 | 说明                                             |
| -------- | -------- | ------ | ------------------------------------------------ |
| timeout  | number   |        | 超时时间，单位ms                                 |
| success  | function |        | 接口调用成功的回调函数                           |
| fail     | function |        | 接口调用失败的回调函数                           |
| complete | function |        | 接口调用结束的回调函数（调用成功、失败都会执行） |

**object.success 回调函数 Object res**
| 属性 | 类型   | 说明                                                                                                                                 |
| ---- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| code | string | 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 auth.code2Session，使用 code 换取 openid、unionid、session_key 等信息 |