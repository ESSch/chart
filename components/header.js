Vue.component('my-header', {
	template: `<div>
		Детализация:
		<input
			type="button"  
			v-for="(value, key, index) in btns"
			v-on:click="current = key"
			v-bind:value="value" 
			v-bind:class="{red: current == key}"
			v-bind:disabled="index > layer || current == key"
		>
		<input v-model="layer" />
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
			layer: 4,
			current: "hour"
		};
	},
});
