<script>
	import Card from '$lib/ui/Card.svelte';
	import Dashboard from './Dashboard.svelte';
	import { isLoggedIn, subTitle } from '$lib/stores';

	subTitle.set('Dashboard');

	export let data;
	let loggedIn;

	$: loggedIn = $isLoggedIn;
</script>

{#if loggedIn}
	<Card title="Dashboard">
		<Dashboard {data} />
	</Card>
{:else}
	<Card title="Access Denied">
		<p>You must be logged in to view the dashboard.</p>
		<form method="post" action="/admin">
			<button class="button is-primary">Login</button>
		</form>
	</Card>
{/if}
