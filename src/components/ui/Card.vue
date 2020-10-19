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
		<div class="details">
			<div class="card-infos">
				<div
					class="card-infos__data"
					v-if="salePrice"
				>
					<p>{{salePrice | currency}}</p>
				</div>
				<div
					class="card-infos__data"
					v-if="rentalPrice"
				>
					<p>{{rentalPrice | currency}}</p>
				</div>
				<div class="card-infos__data">
					<f-icon icon="home" />
					<p class="meters">{{'\u00A0'}}{{usableAreas}} m<span>2</span></p>
				</div>
				<div class="card-infos__data">
					<f-icon icon="map-marked-alt" />
					<p>{{'\u00A0'}}{{city}}</p>
				</div>
			</div>
			<router-link
				v-if="redirect"
				:to="{name:`${redirect}`, params: {id:`${productId}`}}"
				class="more-details"
			>
				mais detalhes
			</router-link>
			<div
				class="card-infos"
				v-if="!redirect"
			>

				<div class="card-infos__data">
					<h3>Bairro: </h3>
					<p>{{neighborhood}}</p>
				</div>
				<div class="card-infos__data">
					<h3>Condominio:{{'\u00A0'}}</h3>
					<p>
						{{monthlyCondoFee | currency}}</p>
				</div>

			</div>
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
		},
		redirect: {
			type: String
		},
		brand: {
			type: Boolean
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
	margin-bottom: 0.3rem;
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
.meters > span {
	font-size: 50%;
	vertical-align: top;
	content: '2';
}
</style>
