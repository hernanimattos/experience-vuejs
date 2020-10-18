import mockData from './__mock__/mockData';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.config.productionTip = false;
Vue.use(Vuex);
global.mockData = [...mockData];
