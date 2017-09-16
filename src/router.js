import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

import Home from '@/components/Home.vue'
import GroupDetailContainer from '@/components/GroupDetailContainer.vue'
import Error404 from '@/components/Error404.vue'

Vue.use(VueRouter)
Vue.use(Meta)

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    { path: '/', component: Home },
    { path: '/group/:groupId', component: GroupDetailContainer },

    // Always leave this last one
    { path: '*', component: Error404 } // Not found
  ]
})