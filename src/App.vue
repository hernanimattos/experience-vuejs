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
	--white-color: #fff;
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

.viva-real {
	background-color: red;
}

.grupo-zap {
	background-color: blue;
}
.grupo-zap .btn {
	background-color: var(--zap-primary-color);
}
.pagination {
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	min-height: 3rem;
	background-color: blanchedalmond;
}
</style>

