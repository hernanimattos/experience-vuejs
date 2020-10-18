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
			<div class="card-infos">
				<div class="card-infos__data">
					<f-icon icon="dollar-sign" />
					<p>{{salePrice}}</p>
				</div>
				<div class="card-infos__data">
					<f-icon icon="home" />
					<p>{{usableAreas}} metros</p>
				</div>
				<div class="card-infos__data">
					<f-icon icon="map-marked-alt" />
					<p>{{city}}</p>
				</div>
			</div>
			<router-link
				:to="{name:'group:details', params: {id:`${productId}`}}"
				class="more-details"
			>
				mais detalhes
			</router-link>
		</div>

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
		productId: {
			type: String
		},
		show: {
			type: Boolean,
			default: false
		},
		businessType: {
			type: String
		},
		bethrooms: {
			type: Number
		},
		bedrooms: {
			type: Number
		},
		parkingSpaces: {
			type: Number
		},
		rentalPrice: {
			type: String
		},
		monthlyCondoFee: {
			type: String
		},
		salePrice: {
			type: String
		},
		iptu: {
			type: String
		},
		usableAreas: {
			type: Number
		},
		city: {
			type: String
		},
		neighborhood: {
			type: String
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
.card .swiper-container {
	margin-bottom: 1rem;
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
.card-infos *,
.card-infos {
	display: flex;
	justify-content: space-between;
}
.card-infos__data {
	justify-content: space-between;
}
.more-details {
	display: block;
	text-align: center;
	padding: 1rem;
	background: red;
	text-transform: uppercase;
	margin-top: 1rem;
	color: #fff;
}
</style>
