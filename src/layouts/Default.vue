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
							<router-link to="/">
								<span>Online Lucky Draw 2018</span>
								<i>NPR 1450 Collected</i>
							</router-link>
						</li>
						<li>
							<router-link to="/select-number">
								<span>Your Lucky number</span>
								<i>3 1 5 6</i>
							</router-link>
						</li>
						<li>
							<router-link to="/enter-details">Enter your details</router-link>
						</li>
						<li>
							<router-link to="/fund-details">Enter the contest</router-link>
						</li>
					</ul>
				</nav>
			</div>
		</section>

		<div id="wrapper">
			<slot />
		</div>
		<footer-bar />
	</div>
</template>
