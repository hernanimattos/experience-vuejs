<template>
	<div
		id="app"
		class="container"
	>
		<Header />
		<router-view />
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/header/Header';
export default {
	name: 'App',
	components: {
		Header
	},
	methods: {
		...mapActions(['getAllProducts'])
	},
	created() {
		this.getAllProducts();
	}
};
</script>

<style >
:root {
	--white: #fff;
	--viva-primary-color: #1190cd;
	--zap-primary-color: #ff5a00;
	--zap-secundary-color: #027ba8;
	--zap-complement-color: #04adc8;
}

* {
	vertical-align: baseline;
	font-family: inherit;
	font-style: inherit;
	font-size: 100%;
	border: none;
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
body {
	font-family: 'Roboto', sans-serif;
}

a {
	text-decoration: none;
	display: block;
}
fieldset,
img {
	border: 0;
}

.container {
	margin: 0 auto;
	max-width: 1200px;
}

.btn {
	padding: 1rem;
	cursor: pointer;
	min-width: 7rem;
}
.pagination {
	margin-top: 1rem;
	padding: 1rem;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	min-height: 3rem;
	background-color: var(--white);
}

.viva-real {
	padding: 1rem;
	background-color: var(--viva-primary-color);
}

.viva-real .more-details {
	background-color: var(--viva-primary-color);
	cursor: pointer;
}
.grupo-zap {
	padding: 1rem;
	background-color: var(--zap-primary-color);
}
.grupo-zap .btn {
	background-color: var(--zap-complement-color);
}
.grupo-zap .more-details {
	background-color: var(--zap-complement-color);
}
</style>

