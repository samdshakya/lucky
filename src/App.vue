<template>
	<component :is="layout">
		<transition name="page" mode="out-in">
			<router-view/>
		</transition>
	</component>
</template>

<script>
	const default_layout = "default";

	export default {
		name: 'App',
		data () {
			return {
			}
		},
		computed: {
			layout() {
				return (this.$route.meta.layout || default_layout) + "-layout";
			}
		},
		created: function(){
			var wbody = document.getElementsByTagName("BODY")[0];
			window.addEventListener("load", function(event) {
				wbody.classList.remove("is-preload");
			});			
		}
	}
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=K2D:400,500,700';
@import './assets/css/main.css';
@import './assets/css/custom.css';

.page-enter-active, .page-leave-active {
	transition: opacity 0.3s, transform 0.3s;
}
.page-enter, .page-leave-to {
	opacity: 0;
	transform: translateX(1%);
}

</style>
