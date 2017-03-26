let date1 = new Date();
let date2 = new Date();
date2.setHours(date2.getHours() - 1);
function formatDate(date) {
	return date1.toLocaleString('ru', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric'});
}

Vue.component('my-footer', {
	template: `<div>
		<input v-model="dbegin" />
		<input v-model="dend" />
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