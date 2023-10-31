import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css' // Vuesax
Vue.use(Vuesax)

// axios
import axios from 'axios'

Vue.prototype.$http = axios

// Vue Router
import router from './router'

// Vue Script loader
import LoadScript from './modules/VueLoadScript'

Vue.use(LoadScript)

// Import Vue Observe Visibility
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)

// Styles: SCSS
import '@/assets/scss/main.scss'

// Tailwind
import '@/assets/css/main.css'

Vue.prototype.$window = window

// Vuex Store
import store from './store/store'

// i18n
import i18n from './i18n/i18n'

// Vuexy Admin Filters
import './filters/filters'

//locomotivescrolls
// import LocomotiveScroll from 'locomotive-scroll'

Vue.config.productionTip = false

new Vue({
          router,
          store,
          i18n,
          render: h => h(App)
        }).$mount('#app')
