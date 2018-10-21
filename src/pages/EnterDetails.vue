<template>
	<section id="two" class="wrapper style1 fullscreen fade-up">
		<div class="inner">
			<h2>Enter your details</h2>
			<p>We need your details so that we can verify and contact you if you win. Your details will be kept private.</p>
			<div class="style1">
				<section>
					<form id="details-form" @submit.prevent="validateBeforeSubmit">
						<div class="fields">
							<div class="field half">
								<label for="fullName">Full Name</label>
								<input type="text" v-validate="'required|alpha_spaces'" name="fullname" id="fullname" v-model="fullname">
								<span v-show="errors.has('fullname')" class="err">{{ errors.first('fullname') }}</span>
							</div>
							<div class="field half">
								<label for="phone">Mobile Number</label>
								<input type="text" name="phone" id="phone" v-validate="'required|numeric'" v-model="phone" placeholder="for e.g 9818672448" >
								<span v-show="errors.has('phone')" class="err">{{ errors.first('phone') }}</span>
							</div>
							<div class="field half">
								<label for="email">Email (Optional)</label>
								<input type="text" name="email" id="email" v-validate="'email'" v-model="email">
								<span v-show="errors.has('email')" class="err">{{ errors.first('email') }}</span>
							</div>
						</div>
						<ul class="actions">
							<li><button type="submit" name="save" class="button scrolly">Next Step</button></li>
						</ul>
					</form>
				</section>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'EnterDetails',
		data: () => ({
			fullname: '',
			email: '',
			phone: '',
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
