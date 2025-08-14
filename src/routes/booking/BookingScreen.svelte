<script lang="ts">
    //import {sendEmail} from '$lib/services/utilities';
	let name = '';
	let email = '';
	let phone = '';
	let date = new Date().toISOString().split('T')[0]; // Default to today
	let time = '14:00';
	let guests = 2;
</script>

<form>
	<div class="field">
		<label class="label">Name</label>
		<div class="control">
			<input class="input" type="text" bind:value={name} placeholder="Your Name" required />
		</div>
	</div>

	<div class="field">
		<label class="label">Email</label>
		<div class="control">
			<input class="input" type="email" bind:value={email} placeholder="Your Email" required />
		</div>
	</div>

	<div class="field">
		<label class="label">Phone</label>
		<div class="control">
			<input class="input" type="tel" bind:value={phone} placeholder="Your Phone Number" required />
		</div>
	</div>

	<div class="field">
		<label class="label">Date</label>
		<div class="control">
			<input class="input" type="date" bind:value={date} required />
		</div>
	</div>

	<div class="field">
		<label class="label">Time</label>
		<div class="control">
			<input class="input" type="time" bind:value={time} required />
		</div>
	</div>
	<div class="field">
		<label class="label">Number of Guests</label>
		<div class="control">
			<input class="input" type="number" bind:value={guests} min="1" max="10" required />
		</div>
	</div>

	<div class="field">
		<div class="control">
			<button class="button is-success is-fullwidth">Confirm Booking</button>
		</div>
	</div>
</form>
