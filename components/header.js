Vue.component('my-header', {
	template: `<div>
		<md-button 
			class="md-raised md-primary"
			v-for="(value, key, index) in btns"
			v-on:click.native="current = key"
			v-bind:class="{red: current == key}"
			v-bind:disabled="index > layer || current == key"
		>{{value}}</md-button>
		<md-input-container>
			<label>Макс. уровень детализации</label>
			<md-input v-model="layer"></md-input>
		</md-input-container>
		{{ current }}
	</div>`,
	data: function () {
		return {
			btns: {
				hour: 'Час', 
				date: "День", 
				veek: "Неделя", 
				month: "Месяц", 
				year: "Год"
			},
			layer: 2,
			current: "hour",
		};
	},
});
