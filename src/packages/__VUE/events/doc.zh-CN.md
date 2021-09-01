# 事件

##  介绍
小程序端有tap、longpress、touchstart等事件[微信小程序事件文档](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html#%E4%BA%8B%E4%BB%B6%E5%88%86%E7%B1%BB)，但这些事件在pc的浏览器端默认是不支持触发这些事件的。所以这里通过一些技巧来对移动端事件进行模拟。方式借鉴与[touch-emulator.js](https://github.com/hammerjs/touchemulator)

### 支持的事件列表

| 类型       | 触发条件                                                                               | pc浏览器触发条件            |
| ---------- | -------------------------------------------------------------------------------------- | --------------------------- |
| touchstart | 手指触摸动作开始                                                                       | 鼠标左键按下触发            |
| touchmove  | 手指触摸后移动                                                                         | 鼠标移动触发                |
| touchend   | 手指触摸动作结束                                                                       | 鼠标左键松开                |
| tap        | 手指触摸后马上离开                                                                     | 鼠标按下后马上离开          |
| longpress  | 手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发 | 鼠标按下后，超过350ms再离开 |

## 安装
```js
import { createApp } from 'vue';
import { events } from 'vdesui';

const app = createApp();
app.use(events);

```
