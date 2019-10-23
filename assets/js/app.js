import vue from 'vue';
import vuerouter from 'vue-router';
import vuex from 'vuex';
import axios from 'axios';

import app from './components/app';

vue.use(vuex);
vue.use(vuerouter);

window.axios = axios;

const router = new vuerouter({
    routes: [{
        path: '/',
        component: app
    }]
});

const store = new vuex.Store({
    state: {
        points: []
    },
    mutations: {
        addPoint(point) {
            state.points.push(point);
        }
    }
});

new vue({
    el: '#app',
    router,
    store
});