import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faBed,
	faUserSecret,
	faBath,
	faDollarSign,
	faCar,
	faMapMarkedAlt,
	faHome,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
	faBed,
	faBath,
	faDollarSign,
	faCar,
	faUserSecret,
	faMapMarkedAlt,
	faHome,
);
Vue.component('f-icon', FontAwesomeIcon);

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
Vue.filter('currency', function(value) {
	return parseFloat(value).toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	});
});
new Vue({
	store,
	router,
	render: (h) => h(App),
}).$mount('#app');
