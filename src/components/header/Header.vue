<template>
	<div class="header">
		<nav id="nav">
			<div class="pages">
				<router-link
					to="/grupo-zap"
					class="menu-item menu-item_zap"
				><img
						src="https://assets.zap.com.br/assets/v5.66.0/zap.svg?b3f59ed8e7ccc42f6e8b44e5db9a746e"
						alt=""
					></router-link>
				<router-link
					to="/viva-real"
					class="menu-item menu-item_viva"
				>
					<img
						src="https://cdn1.vivareal.com/p/14953-e123efd/v/static/app/svg/styleguide/logo/vivareal-5bcdffca.svg"
						alt=""
					></router-link>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'Header'
};
</script>
<style >
.pages {
	display: flex;
	flex-direction: row;
}
.menu-item {
	width: 50%;
	padding: 1rem;
}
.menu-item_viva {
	background: var(--viva-primary-color);
	display: flex;
}
.menu-item_viva img {
	width: 100%;
}
</style>
