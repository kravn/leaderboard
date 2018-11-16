
Vue.component('banner', {
	props: ['image'],
	data () {
		return {
			
		}
	},
	template:
	`	
		<div>
			<v-card>
				<v-img
				:src="image">
				</v-img>
			</v-card>
			<div class="div-spacer"></div>
		</div>
	`	
})