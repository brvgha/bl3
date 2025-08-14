<script lang='ts'>
	import { subTitle } from "$lib/stores";
	import Card from "$lib/ui/Card.svelte";
	import EventsScreen from "./EventsScreen.svelte";

    subTitle.set('Events');
</script>

<Card title="Upcoming Events">
    <EventsScreen />
</Card>