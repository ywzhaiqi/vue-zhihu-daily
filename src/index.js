import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueProgressbar from 'vue-progressbar'
import { sync } from 'vuex-router-sync'
import VueLazyload from 'vue-lazyload'

import App from './views/app'
import store from './vuex/index/store'
import router from './router/index'
import CovLocalDB from './util'
import { delay, GM_request, GM_getImageBase64 } from './utils'

Vue.use(VueProgressbar)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueLazyload, {
    attempt: 1,

    // 手机 yandex（内核chrome56）会有问题
    // observer: true,
    // observerOptions: {
    //     rootMargin: '0px',
    //     threshold: 0.1
    // },
})

const IMG_MAP = new CovLocalDB('vue-zhihu-img')

Vue.prototype.$preImg = (uri) => {
    if (IMG_MAP[uri]) {
    }
}

Vue.prototype.$covImg = (self, uri, callback) => {
    return callback(uri)
    // if (IMG_MAP.get(uri)) {
    //     return callback(IMG_MAP.get(uri))
    // }

    // GM_getImageBase64(uri, base64Url => {
    //     IMG_MAP.set(uri, base64Url)
    //     callback(base64Url)
    // })
}

Vue.prototype.$Api = (url) => {
    return url
}

Vue.prototype.$http = {
    get: async (uri, type='json') => {
        if (typeof GM_xmlhttpRequest == 'undefined') {
            await delay(500)
        }

        if (typeof GM_xmlhttpRequest == 'undefined') {
            document.getElementById('install').style.display = 'block';
            throw('GM_xmlhttpRequest 不存在')
            return
        }

        console.log('GM_xmlhttpRequest', uri)

        const txt = await GM_request(uri)

        let data;
        if (type == 'html') {
          data = new DOMParser().parseFromString(txt, 'text/html')
        } else if (type == 'json') {
          data = JSON.parse(txt)
        } else {
          data = txt
        }

        return {
            data
        }
    }
}

Vue.config.debug = process.env.NODE_ENV === 'dev'

sync(store, router)

router.start(App, 'cov-app')
