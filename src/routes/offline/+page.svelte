<script lang="ts">
    import { subTitle } from "$lib/stores";
	import Card from "$lib/ui/Card.svelte";
	import OfflineScreen from "./OfflineScreen.svelte";
    subTitle.set('Offline');
</script>

<Card>
    <OfflineScreen />
</Card>