/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import App from './components/App.vue';
import VueRouter from 'vue-router';
import routes from './components/router/routes.js'


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


Vue.component('page-footer',require('./components/vue-layout/footer.vue').default);
Vue.component('main-header',require('./components/vue-layout/main_header.vue').default);
Vue.component('page-title',require('./components/vue-layout/page_title.vue').default);
Vue.component('page-sidebar',require('./components/vue-layout/sidebar.vue').default);
Vue.component('page-content',require('./components/vue-layout/content.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.use(VueRouter);
const router = new VueRouter(
    {
        mode:'history',
        router:routes
    }
);
const app = new Vue({
    el: '#app',
    router,
    render:r=>r(App),
});
