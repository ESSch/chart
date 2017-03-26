let date1 = new Date();
let date2 = new Date();
date2.setHours(date2.getHours() - 1);
function formatDate(date) {
	return date1.toLocaleString('ru', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric'});
}

Vue.component('my-footer', {
	template: `<div>
		<md-input-container>
			<label>Начальная дата</label>
			<md-input v-model="dbegin"></md-input>
		</md-input-container>
		<md-input-container>
			<label>Конечная дата</label>
			<md-input v-model="dend"></md-input>
		</md-input-container>
		Срок: {{ dbegin }} - {{ dend }} = {{ d }} часов
	</div>`,
	data: function () {
		return {
			dbegin: formatDate(date1),
			dend: formatDate(date2),
			d: (date1 - date2) / 3600 / 1000,
		}
	}
});