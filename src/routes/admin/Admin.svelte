<script lang="ts">
	//import {sendEmail} from '$lib/services/utilities';
	export let data;
	let adminName = '';
	let password = '';
</script>

<!-- svelte-ignore component_name_lowercase -->
<form method="post" action="?/admin">
	<div class="field">
		<label class="label" for="username">Username</label>
		<div class="control">
			<input
				id="username"
				name="username"
				class="input"
				type="text"
				bind:value={adminName}
				placeholder="Username"
				required
			/>
		</div>
	</div>

	<div class="field">
		<label class="label" for="password">Password</label>
		<div class="control">
			<input
				id="password"
				name="password"
				class="input"
				type="password"
				bind:value={password}
				placeholder="Admin Password"
				required
			/>
		</div>
	</div>

	<div class="field">
		<div class="control">
			<button class="button is-success is-fullwidth">Login</button>
		</div>
	</div>
</form>
<div class="error-message">
	{#if data?.message}
		<div class="notification is-warning">
			<p>{data?.message}</p>
		</div>
	{/if}
</div>
