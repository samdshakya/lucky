<template>
	<section id="two" class="wrapper style1 fullscreen fade-up">
		<div class="inner">
			<h2>Enter your details</h2>
			<p>We need your details so that we can verify and contact you if you win. Your details will be kept private.</p>
			<div class="style1">
				<section>
					<form id="details-form" @submit="checkForm" action="/something" method="post">	
						<div class="fields">
							<div class="field half">
								<label for="fullName">Full Name</label>
								<input type="text" name="fullName" id="fullName" v-model="fullName">
								<span v-if="errors.length>0" class="err-input">{{errors}}</span>
							</div>
							<div class="field half">
								<label for="phone">Mobile Number</label>
								<input type="text" name="phone" id="phone" v-model="phone" placeholder="for e.g 9818672448">
								<span class="err-input">{{errors}}</span>
							</div>
							<div class="field half">
								<label for="email">Email (Optional)</label>
								<input type="text" name="uemail" id="uemail">
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
		data() {
			return{
				errors:[],
				fullName: null,
				phone: null	
			}
		},
		methods:{
			checkForm: function (e) {
				if (this.fullName && this.phone) {
					return true;
				}

				this.errors = [];

				if(!this.fullName) 
					this.errors.push('Full name is required.');
				if(!this.phone)
					this.errors.push('Mobile number is required.');

				e.preventDefault();
			}
		}
	}
</script>
