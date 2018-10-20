<script>
	import FooterBar from "@/components/FooterBar";

	export default {
		components: {
			FooterBar
		}
	};
</script>

<template>
	<div id="w1">
		<section id="sidebar">
			<div class="inner">
				<nav>
					<ul>
						<li>
							<router-link to="/check-status">Check Entry Status</router-link>
						</li>
						<li>
							<router-link to="/verification">Verification</router-link>
						</li>
						<li>
							<router-link to="/your-status">Your Status</router-link>
						</li>
						<li>
							<router-link to="/">Online Lucky Draw Home</router-link>
						</li>
					</ul>
				</nav>
			</div>
		</section>

		<div id="wrapper" class="status-check">
			<slot />
		</div>

		<footer-bar />
	</div>
</template>
