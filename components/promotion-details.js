
Vue.component('promotion-details', {
	props: ['header', 'content', 'lang'],
	data () {
		return {
			
		}
	},
	template:
	`	
		<div>
			
			<v-card>
				<v-layout row wrap>
					<v-flex xs12>
						<v-card-title>
							<div class="section-title headline">
								<h1>{{header[0].title}}</h1>
								<h3>{{header[0].subtitle}}</h3>
							</div>
						</v-card-title>
						<v-layout>
							<v-container>
								
								<template v-for="(item, index) in content[lang]">
									<v-list>
										<v-container>
											<v-list-tile>
												
												<v-list-tile-content>

													<v-list-tile-title
													class="list-rank">
													{{item.id}}
													</v-list-tile-title>

													<v-list-tile-title
													class="list-title"
													v-html="item.title">
													</v-list-tile-title>

													<v-list-tile-sub-title
													class="list-content"
													v-if="item.type == 'sentence'"
	                								v-html="item.content">
	                								</v-list-tile-sub-title>

	                								<v-list-tile-sub-title
													v-else-if="item.type == 'bullets'"
													class="list-sub-item">
														<ul class="list-sub-item">
															<li v-for="itm in item.children">
																{{itm}}
															</li>
														</ul>
	                								</v-list-tile-sub-title>

	                								<v-list-tile-sub-title
													class="list-content"
													v-else-if="item.type == 'table'">
														<v-layout row wrap>
															<v-flex xs12>
		                										<v-data-table
		                										:headers="item.children.headers"
		                										:items="item.children.items"
		                										class="elevation-1 promo-tables"
		                										hide-actions
		                										hide-headers
		                										disable-initial-sort>
		                											<template
		                											slot="items"
		                											slot-scope="props">
		                												<td v-for="(itm, ctr) in props.item" :class="props.index == 0 ? 'table-header' : ''">{{itm}}</td>
		                											</template>
		                										</v-data-table>
	                										</v-flex>
	                									</v-layout>	
	                								</v-list-tile-sub-title>


	                									

												</v-list-tile-content>
											</v-list-tile>
										</v-container>
									</v-list>
								</template>

							</v-container>
						</v-layout>
					</v-flex>
				
				</v-layout>
			</v-card>
				
		</div>
	`	
})