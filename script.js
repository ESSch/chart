let mv = new Vue({
	el: 'header',
	data: {
		btns: {
			hour: 'Час', 
			date: "День", 
			veek: "Неделя", 
			month: "Месяц", 
			year: "Год"
		},
		layer: 4,
		current: "hour"
	},
	methods: {
		myFunc: function (mes) {
			mv.current = mes;	
		}	
	}
});

let date1 = new Date();
let date2 = new Date();
date2.setHours(date2.getHours() - 1);
function formatDate(date) {
	return date1.toLocaleString('ru', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric'});
}

let footer = new Vue({
	el: 'footer',
	data: {
		dbegin: formatDate(date1),
		dend: formatDate(date2),
		d: (date1 - date2) / 3600 / 1000,
	},
	methods: {
	}
});