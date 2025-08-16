<script lang="ts">
	//import {sendEmail} from '$lib/services/utilities';
	let name = '';
	let email = '';
	let phone = '';
	let date = new Date().toISOString().split('T')[0]; // Default to today
	let time = (new Date().toTimeString() + 60).split(' ')[0].substring(0, 5); // Default to current time
	let guests = 2;

	export let data;
</script>

<form method="post" action="?/book">
	<div class="field">
		<label class="label" for="name">Name</label>
		<div class="control">
			<input
				id="name"
				class="input"
				name="name"
				type="text"
				bind:value={name}
				placeholder="Your Name"
				required
			/>
		</div>
	</div>

	<div class="field">
		<label class="label" for="email">Email</label>
		<div class="control">
			<input
				id="email"
				class="input"
				name="email"
				type="email"
				bind:value={email}
				placeholder="Your Email"
				required
			/>
		</div>
	</div>

	<div class="field">
		<label class="label" for="phone">Phone</label>
		<div class="control">
			<input
				id="phone"
				class="input"
				name="phone"
				type="tel"
				bind:value={phone}
				placeholder="Your Phone Number"
				required
			/>
		</div>
	</div>

	<div class="field">
		<label class="label" for="date">Date</label>
		<div class="control">
			<input id="date" class="input" name="date" type="date" bind:value={date} required />
		</div>
	</div>

	<div class="field">
		<label class="label" for="booking-time">Time</label>
		<div class="control">
			<input id="booking-time" class="input" name="time" type="time" bind:value={time} required />
		</div>
	</div>
	<div class="field">
		<label class="label" for="guests">Number of Guests</label>
		<div class="control">
			<input
				id="guests"
				class="input"
				name="guests"
				type="number"
				bind:value={guests}
				min="1"
				max="10"
				required
			/>
		</div>
	</div>
	<div class="control">
		<button class="button is-success is-fullwidth">Confirm Booking</button>
	</div>
	{#if data && data.message}
		<div class="notification is-warning">
			<p>{data.message}</p>
		</div>
	{/if}
</form>
