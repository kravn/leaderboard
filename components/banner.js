
Vue.component('banner', {
	props: ['image'],
	data () {
		return {
			
		}
	},
	template:
	`	
		<div>

			<!--<v-carousel
			height="300px"
			hide-delimiters>
				<v-carousel-item :src="image">

				</v-carousel-item>
			</v-carousel>-->

			<v-card>
				<v-img
				:src="image">
				</v-img>
			</v-card>
			<div class="div-spacer"></div>
			
		</div>
	`	
})