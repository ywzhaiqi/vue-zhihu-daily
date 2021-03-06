# My 知乎日报App

> A Vue.js & Nodejs project

> 声明：『知乎』是 知乎. Inc 的注册商标。本软件与其代码非由知乎创作或维护。软件中所包含的信息与内容皆违反版权与知乎用户协议。它是一个免费软件，使用它不收取您任何费用。其中的所有内容均可在知乎获取。

## 我的修改

修改为需要 `GM_xmlhttpRequest` 的 serverless 版，个人存放在 [http://ywzhaiqi.gitee.io/zhihu/](http://ywzhaiqi.gitee.io/zhihu/)。

使用前先安装 [GM_xhr 外置脚本](https://github.com/ywzhaiqi/userscript/raw/master/private/GM_xhr_outer.user.js)（请使用 Tampermonkey）

知乎原图片有 `Referrer Policy` 为 `no-referrer-when-downgrade` 的限制，可用扩展 `Referer Control` 破解。Referer Control 扩展设置：`网址 *.zhimg.com，target host`

### todo

- 图片多还是会卡。需要图片懒加载？

## Preview

 手机端
![mobile-preview](https://github.com/hilongjw/vue-zhihu-daily/blob/master/mobile-preview.png)
 桌面端
![Preview](http://ac-9xUJPYdR.clouddn.com/7326251de8caf34ea2d1.gif)

## Live demo

 在线演示地址[live demo link](http://zhihu.bood.in)

## Features

- Light weighted
- No ads

## Related content

- Vue.js 1.X
- vue-router
- vue-resource
- vuex
- webpack
- express
- docker


## How to run

``` bash
# install dependencies
npm install

# run server
npm start
```

## TODO
 - image src cache in server

## License

This project is available under the MIT license.

感谢 [ZhihuDailyPurify](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)整理了API
