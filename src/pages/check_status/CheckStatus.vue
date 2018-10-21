<template>
	<section id="intro" class="wrapper style1 fullscreen fade-up">
		<form id="check-form" @submit.prevent="validateBeforeSubmit">
			<div class="inner">
				<h1>Check Entry Status</h1>
				<div class="status-check-block">
					<p>Enter your <b>4-digit Lucky Number</b>:</p>
					<ul class="number-boxes">
						<li>
							<input type="text" maxlength="1" v-on:keypress="isNumber($event)"  v-validate.disable="'required'" v-model="firstlnum" name="firstlnum" id="firstlnum">
						</li>
						<li>
							<input type="text" maxlength="1" v-on:keypress="isNumber($event)" v-validate="'required|numeric'" v-validate.disable="'required'" v-model="secondlnum" name="secondlnum" id="secondlnum">
						</li>
						<li>
							<input type="text" maxlength="1" v-on:keypress="isNumber($event)" v-validate="'required|numeric'" v-validate.disable="'required'" v-model="thirdlnum" name="thirdlnum" id="thirdlnum">
						</li>
						<li>
							<input type="text" maxlength="1" v-on:keypress="isNumber($event)" v-validate="'required|numeric'"  v-validate.disable="'required'" v-model="fourthlnum" name="fourthlnum" id="fourthlnum">
						</li>
					</ul>
					<span v-show="errors.items.length" class="err err-check">Please fill in all numbers.</span>
				</div>
				<ul class="actions">
					<li><button type="submit" name="viewstatus" class="button">View Status</button></li>
				</ul>
			</div>
		</form>
	</section>
</template>

<script>
	export default {
		name: 'CheckStatus',
		data: () => ({
			firstlnum: '',
			secondlnum: '',
			thirdlnum: '',
			fourthlnum: ''
		}),
		methods: {
			validateBeforeSubmit() {
				this.$validator.validateAll().then((result) => {
					if (result) {
						alert('Form Submitted!');
						return;
					}
				});
			},
			isNumber: function(evt) {
				evt = (evt) ? evt : window.event;
				var charCode = (evt.which) ? evt.which : evt.keyCode;
				console.log(charCode);
				if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
					evt.preventDefault();;
				} else {
					return true;
				}
			}
		}	
	}
</script>
