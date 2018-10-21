<template>
	<section id="select-number" class="wrapper style2 fullscreen spotlights">
		<section>
			<div class="content">
				<div class="inner">
					<h2>Select your Lucky Number</h2>
					<p>Select <b>4 numbers</b> from below:</p>
					<ul class="numbers-list">
						<li v-for="(item, index) in items">
							<a href="javascript:void(0)" v-on:click="selectLuckyNum(index,$event)">{{ item }}</a>
						</li>						
					</ul>
					<ul class="actions">
						<li><a href="#two" class="button">Next Step</a></li>
						<li><a href="#" class="button">Reset Numbers</a></li>
					</ul>
				</div>
			</div>
		</section>
	</section>
</template>

<script>
	export default {
		name: 'SelectNumber',
		data () {
			return {
				items: [0,1,2,3,4,5,6,7,8,9]
			}
		},
		methods: {
			selectLuckyNum(index,evt) {
				evt.target.classList.add("active");
			}
		}
	}
</script>