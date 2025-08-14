<script lang="ts">
	import { onMount } from 'svelte';
	import { currentSession, subTitle } from '$lib/stores';
	import HomeScreen from '$lib/ui/HomeScreen.svelte';
	import Card from '$lib/ui/Card.svelte';
	import VenueDetails from '$lib/ui/VenueDetails.svelte';
	//import { getSession } from '$lib/api/session';

	let session;
	subTitle.set('Home');

	/*onMount(async () => {
    session = await getSession();
    currentSession.set(session);
  }); */
</script>

<Card title="Home">
	<HomeScreen />
</Card>
<Card title="Details">
	<VenueDetails />
</Card>
