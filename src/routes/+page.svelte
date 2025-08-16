<script lang="ts">
	import { onMount } from 'svelte';
	import { subTitle } from '$lib/stores';
	import HomeScreen from '$lib/ui/HomeScreen.svelte';
	import Card from '$lib/ui/Card.svelte';
	import VenueDetails from '$lib/ui/VenueDetails.svelte';
	import { apiService } from '$lib/services/api-service';
	import OfflineScreen from './offline/OfflineScreen.svelte';

	let check: boolean | null = null;

	onMount(async () => {
		check = await apiService.getStatus();
		console.log("API status check:", check);
	});

	// reactively update subtitle when check changes
	$: if (check === true) {
		subTitle.set('Home');
	} else if (check === false) {
		subTitle.set('Offline');
	}
</script>

{#if check === null}
	<!-- maybe show a loading state -->
	<Card title="Loading...">Checking status...</Card>
{:else if check}
	<Card title="Home">
		<HomeScreen />
	</Card>
	<Card title="Details">
		<VenueDetails />
	</Card>
{:else}
	<Card title="Offline">
		<OfflineScreen />
	</Card>
{/if}
