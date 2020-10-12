import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/grupo-zap',
		name: 'Grupo Zap',
		component: () => import('../views/grupoZap/GrupoZap.vue'),
		children: [
			{
				path: ':id/detalhes',
				component: () =>
					import('../components/containers/product/ProductDetails.vue'),
			},
		],
	},
	{
		path: '/viva-real',
		name: 'Viva Real',
		component: () => import('../views/vivaReal/VivaReal.vue'),
		children: [
			{
				path: ':id/detalhes',
				component: () =>
					import('../components/containers/product/ProductDetails.vue'),
			},
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
