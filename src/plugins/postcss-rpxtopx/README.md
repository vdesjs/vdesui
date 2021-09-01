# rpx转px插件
vdesui默认采用iPhone6作为模拟的手机设备，所以将 rpx 按照 1rpx = 0.5px 进行转换。

[微信小程序官方rpx文档](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html#%E5%B0%BA%E5%AF%B8%E5%8D%95%E4%BD%8D)

## 设备
| 设备        | rpx换算px      | 设备屏幕大小 | dpr |
| ----------- | -------------- | ------------ | --- |
| iPhone5     | 1rpx = 0.42px  | 320x568      | 2   |
| iPhone6     | 1rpx = 0.5px   | 375x667      | 2   |
| Phone6 Plus | 1rpx = 0.552px | 414x736      | 2   |

**建议**: 开发微信小程序时设计师可以用 iPhone6 作为视觉稿的标准。