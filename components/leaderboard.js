
Vue.component('leaderboard', {

	props: [
		'image', 
		'general_labels',
		'translate',
		'participating_games',
		'players',
	],

	data () {
		return {
			currentDate: '',
			startDate: variables.url.params.fromDate,
			endDate: variables.url.params.toDate,
			prefix: variables.app.operatorPrefix,
			characterMask: variables.app.stringMask,
			lang: variables.url.params.lang,
			topPlayers: variables.url.params.topNumLimit,
			topPlayersMax: variables.url.params.topNum,
			boardType: variables.app.boardType,
			prizes: variables.prizes,
			headers: variables.app.leaderboardTableHeader,
			labels: variables.labels,
			showAllPlayers: false,
		}
	},

	methods: {
		getDate(date) {
			return moment(date).format('DD MMM YYYY')
		},

		getTime() {
			return moment().format('h:m:sA')
		},

		numberWithCommas(x) {
 			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		},

		getPlayers() {
			return this.fff = players
		},

		prepareHeaders(heads) {
			let _s = this
			let temp
			heads.map( el => {
				_s.labels[_s.lang].map( x => { 
					if (x.key == el.value) temp = x.label
				})
				el.text = temp
				
			})
			return heads
		},

		changeCharacter(label) {
			return label.replace('?', this.topPlayers)
		},

		removePrefix(player_name) {
			let _name = ''
			let _masked_name = ''
			if ( player_name.indexOf(this.prefix) >= 0 )
				_name = player_name.split(this.prefix)[1].toUpperCase()
			else
				_name = player_name.toUpperCase()
			for ( var i = 0; i < _name.length; i++ ) {
				if ( i % 2 == 0 ) 
					_masked_name += _name[i]
				else
					_masked_name += this.characterMask
			}
			return _masked_name
		},

		togglePlayers() {
			this.showAllPlayers = this.showAllPlayers ? false : true
		}
		
	},

	beforeMount() {
		this.prepareHeaders(this.headers[boardType])
	},

	computed: {
		//this.players.unshift()
	},

	template:
	`	
		<div>
			<v-container>
				<v-layout row wrap>
					<v-flex md12>
						<v-card class="section-title">
							<v-img :src="image"></v-img>
						</v-card>
					</v-flex>
				</v-layout>
				
				<v-layout row class="promo-details">
					<v-flex md4>
						<p>{{ translate(general_labels, 'start_date').label }} <span>{{ getDate(startDate) }}</span></p>
					</v-flex>
					<v-flex md4>
						<p>{{ translate(general_labels, 'end_date').label }} <span>{{ getDate(endDate) }}</span></p>
					</v-flex>
					<v-flex md4>
						<p>{{ translate(general_labels, 'last_refresh').label }} <span>{{ getTime() }}</span></p>
					</v-flex>
				</v-layout>

				<v-layout row class="participating-games">
					<v-flex md12>
						<div class="section-title">
							<h2>{{ translate(general_labels, 'participating_games').label }}</h2>
							<div v-for="game in participating_games" class="chips">
								{{game}}
							</div>
						</div>
					</v-flex>
				</v-layout>
			</v-container>

			<v-container>
				<v-layout row wrap class="table-top-players">
					<v-flex md12>
						<div class="section-title">
							<h2>{{ changeCharacter( translate(general_labels, 'top_players').label) }}</h2>
						</div>
					</v-flex>
					<v-flex md12>
						<v-data-table
						:headers="prepareHeaders(headers[boardType])"
						:items="players"
						class="elevation-1 top-players text-md-center"
						hide-actions
						disable-initial-sort>
							<template
							slot="headers"
							slot-scope="props">
								<tr>
									<th class="text-xs-right stars">
										<i class="fas fa-trophy"></i>
									</th>
									<th v-for="(header, key) in props.headers"
									:key="header.value"
									:class="key == 0 ? 'text-xs-left' : 'text-xs-right'">
									{{header.text}}
									</th>
								</tr>
							</template>
							<template
							slot="items"
							slot-scope="props">
								<tr v-if="props.index < topPlayers" :class="props.index % 2 == 0 ? 'cell-even' : 'cell-odd'">
									<td class="text-xs-right">{{props.index + 1}}</td>
									<td class="text-xs-left">{{removePrefix(props.item.nickName)}}</td>
									<td class="text-xs-right">{{ boardType == 'getBoardByBets' ? numberWithCommas(props.item.numberOfBets) : numberWithCommas(props.item.totalHandle) }}</td>
									<td class="text-xs-right">{{prizes[props.index]}}</td>
								</tr>
								<tr v-else :class="props.index % 2 == 0 ? 'cell-even-nominees nominees' : 'cell-odd-nominees nominees'" v-show="showAllPlayers">
									<td class="text-xs-right">{{props.index + 1}}</td>
									<td class="text-xs-left">{{removePrefix(props.item.nickName)}}</td>
									<td class="text-xs-right">{{ boardType == 'getBoardByBets' ? numberWithCommas(props.item.numberOfBets) : numberWithCommas(props.item.totalHandle) }}</td>
									<td class="text-xs-right">--</td>
								</tr>

							</template>

						</v-data-table>
						<div class="see-more" @click="togglePlayers">
							<i class="material-icons" v-if="!showAllPlayers">
								arrow_drop_down
								{{ translate(general_labels, 'show_more').label }}
							</i>
							<i class="material-icons" v-else>
								arrow_drop_up
								{{ translate(general_labels, 'show_less').label }}
							</i>
						</div>
					</v-flex>
				</v-layout>
			</v-container>
		</div>
	`	
})