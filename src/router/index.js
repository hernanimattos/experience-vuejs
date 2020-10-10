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
				component: () => import('../components/product/ProductDetails.vue'),
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
				component: () => import('../components/product/ProductDetails.vue'),
			},
		],
	},
];

const router = new VueRouter({
	routes,
});
router.beforeEach((to, from, next) => {
	console.log(to, from);

	next();
});

export default router;
