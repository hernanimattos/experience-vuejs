<template>
	<article class="card">
		<div v-swiper:mySwiper="swiperOptions">
			<div class="swiper-wrapper">
				<div
					class="swiper-slide img-wrapper"
					:key="banner"
					v-for="banner in image"
				>
					<img :src="banner">
				</div>
			</div>
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
			<div class="swiper-pagination"></div>
		</div>
		<div
			class="details"
			v-if="show"
		>
			<router-link :to="{name:'group:details', params: {id:`${productId}`}}">
				Detalhes
			</router-link>
		</div>

		{{productId}}
		<h1>{{title}}</h1>
	</article>
</template>

<script>
import { directive } from 'vue-awesome-swiper';
export default {
	name: 'Card',
	data() {
		return {
			swiperOptions: {
				pagination: {
					el: '.swiper-pagination'
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			}
		};
	},

	props: {
		image: {
			type: Array
		},
		title: {
			type: String
		},
		productId: {
			type: String
		},
		show: {
			type: Boolean,
			default: false
		}
	},
	directives: {
		swiper: directive
	}
};
</script>

<style>
.card {
	background-color: #fff;
	border-radius: 3px;
	box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.32);
	-webkit-box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.32);
	margin-top: 1rem;
	overflow: hidden;
	padding: 1rem;
	transition: 0.5s;
}

.img-wrapper > img {
	margin-top: 1rem;
	width: 100%;
	height: 400px;
	object-fit: cover;
}

.img-wrapper {
	display: flex;
}
</style>
