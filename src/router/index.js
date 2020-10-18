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
		name: 'grupozap',
		component: () => import('../views/grupoZap/GrupoZap.vue'),
		redirect: { name: 'group:list' },
		children: [
			{
				path: '/',
				name: 'group:list',
				component: () =>
					import('../views/grupoZap/containers/product/ProductsList.vue'),
			},
			{
				path: '/grupo-zap/:id',
				name: 'group:details',
				component: () =>
					import('../views/grupoZap/containers/product/ProductDetails.vue'),
			},
		],
	},
	{
		path: '/viva-real',
		name: 'vivareal',
		redirect: { name: 'vivareal:list' },
		component: () => import('../views/vivaReal/VivaReal.vue'),
		children: [
			{
				path: '/',
				name: 'vivareal:list',
				component: () =>
					import('../views/vivaReal/containers/product/ProductsList.vue'),
			},
			{
				path: '/vivareal/:id',
				name: 'vivareal:details',
				component: () =>
					import('../views/vivaReal/containers/product/ProductDetails.vue'),
			},
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
