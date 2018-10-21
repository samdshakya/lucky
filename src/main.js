// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate';

import Default from "./layouts/Default.vue";
import Status from "./layouts/Status.vue";

Vue.use(VeeValidate);

Vue.component("default-layout", Default);
Vue.component("status-layout", Status);

Vue.config.productionTip = false

Vue.component('countdown', {
	template: '#countdown-template',
	mounted: function mounted() {var _this = this;
		window.setInterval(function () {
			_this.now = Math.trunc(new Date().getTime() / 1000);
		}, 1000);
	},
	props: {
		date: {
			type: String } },


			data: function data() {
				return {
					now: Math.trunc(new Date().getTime() / 1000) };

				},
				computed: {
					dateInMilliseconds: function dateInMilliseconds() {
						return Math.trunc(Date.parse(this.date) / 1000);
					},
					seconds: function seconds() {
						return (this.dateInMilliseconds - this.now) % 60;
					},
					minutes: function minutes() {
						return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
					},
					hours: function hours() {
						return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
					},
					days: function days() {
						return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
					} } 
				});



Vue.filter('two_digits', function (value) {
	if (value < 0) {
		return '00';
	}
	if (value.toString().length <= 1) {
		return '0' + value;
	}
	return value;
});



/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
