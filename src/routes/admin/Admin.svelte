<script lang="ts">
    //import {sendEmail} from '$lib/services/utilities';
    let { adminName = $bindable(""), password = $bindable(""), data } = $props();
</script>

<!-- svelte-ignore event_directive_deprecated -->
<form method="post" action="?/admin">
	<div class="field">
		<label class="label">Username</label>
		<div class="control">
			<input name="username" class="input" type="text" bind:value={adminName} placeholder="Username" required />
		</div>
	</div>

	<div class="field">
		<label class="label">Password</label>
		<div class="control">
			<input name="password" class="input" type="password" bind:value={password} placeholder="Admin Password" required />
		</div>
	</div>

	<div class="field">
		<div class="control">
			<button class="button is-success is-fullwidth">Login</button>
		</div>
	</div>
	{#if data && data.message}
		<div class="notification is-warning">
			<p>{data.message}</p>
		</div>
	{/if}
</form>
