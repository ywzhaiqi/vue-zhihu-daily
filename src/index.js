import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueProgressbar from 'vue-progressbar'
import { sync } from 'vuex-router-sync'

import App from './views/app'
import store from './vuex/index/store'
import router from './router/index'
import CovLocalDB from './util'
import { delay, GM_request, GM_getImageBase64 } from './utils'

Vue.use(VueProgressbar)
Vue.use(VueRouter)
Vue.use(Vuex)

const IMG_MAP = new CovLocalDB('vue-zhihu-img')

Vue.prototype.$preImg = (uri) => {
    if (IMG_MAP[uri]) {
    }
}

Vue.prototype.$covImg = (self, uri, callback) => {
    if (IMG_MAP.get(uri)) {
        return callback(IMG_MAP.get(uri))
    }

    GM_getImageBase64(uri, base64Url => {
      IMG_MAP.set(uri, base64Url)
      callback(base64Url)
    })
}

Vue.prototype.$Api = (url) => {
    return url
}

Vue.prototype.$http = {
  get: async (uri) => {
    if (typeof GM_xmlhttpRequest == 'undefined') {
      await delay(500)
    }

    console.log('GM_xmlhttpRequest', uri)

    const txt = await GM_request(uri)

    return {
      data: JSON.parse(txt)
    }
  }
}

Vue.config.debug = process.env.NODE_ENV === 'dev'

sync(store, router)

router.start(App, 'cov-app')
