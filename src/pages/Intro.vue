<template>
	<section id="intro" class="wrapper style1 fullscreen fade-up">
		<div class="inner">
			<h1>Online Lucky Draw 2018</h1>
			<p>Just follow some simple steps and get chance to <b>win upto NPR 10,000 Cash!</b><br>The Winners will be announced on <b>7th October, 2018</b> via Lucky Draw on <b>YouTube LIVE!</b></p>
			<div class="timer-holder">
				<p>The entry submission period will end in <b><span id="days"></span> days <span id="hours"></span>h <span id="minutes"></span>m <span id="seconds"></span>s</b>.</p>
			</div>
			<ul class="actions">
				<li>
					<router-link class="button nav-link" to="/select-number">Let's Start</router-link>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Intro',
		data () {
			return {
				// msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>
