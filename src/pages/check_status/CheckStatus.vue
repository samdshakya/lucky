<template>
	<section id="intro" class="wrapper style1 fullscreen fade-up">
		<div class="inner">
			<h1>Check Entry Status</h1>
			<div class="status-check-block">
				<p>Enter your <b>4-digit Lucky Number</b>:</p>
				<ul class="number-boxes">
					<li>
						<input type="text">
					</li>
					<li>
						<input type="text">
					</li>
					<li>
						<input type="text">
					</li>
					<li>
						<input type="text">
					</li>
				</ul>
			</div>
			<ul class="actions">
				<li><a href="#one" class="button scrolly">View Status</a></li>
			</ul>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'CheckStatus',
		data () {
			return {
				title: "Saman Checking Status"
			}
		}
	}
</script>
