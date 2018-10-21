<template>
	<section id="one" class="wrapper style2 fullscreen spotlights">
		<section>
			
			<div class="content">
				<div class="inner">
					<form id="verify-form" @submit.prevent="validateBeforeSubmit">
						<h2>Enter your mobile number</h2>
						<p>We'll match your mobile number with your lucky number to get your verification status.</p>
						<div class="email-input">
							<input type="text" placeholder="for e.g 9818672448" name="phone" id="phone" v-validate="'required|numeric'" v-model="phone">
							<span v-show="errors.has('phone')" class="err">{{ errors.first('phone') }}</span>
						</div>
						<ul class="actions">
							<li><button type="submit" name="viewstatus" class="button">Verify</button></li>
						</ul>
					</form>
				</div>
			</div>
		</section>
	</section>
</template>

<script>
	export default {
		name: 'VerifyDetails',
		data: () => ({
			phone: ''
		}),
		methods: {
			validateBeforeSubmit() {
				this.$validator.validateAll().then((result) => {
					if (result) {
						alert('Form Submitted!');
						return;
					}
				});
			}			
		}	
	}
</script>
