<script lang="ts">
    import { bookingEmail } from '$lib/stores';
    let email = "mailto:" + $bookingEmail;
</script>

<div class="content is-size-5">
	<p>
		<strong>Opening Hours:</strong> 2pm - 2am Daily
	</p>
	<p>
		<strong>Address:</strong> 8 Courtenay Place, Wellington
	</p>
	<p>
		<strong>Phone:</strong> <a href="tel:+64212886043">+64 21 288 6043</a>
	</p>
	<p>
		<strong>Email:</strong> <a href={email}>Email Us!</a>
	</p>
</div>
