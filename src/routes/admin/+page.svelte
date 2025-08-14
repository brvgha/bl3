<script>
	import Card from "$lib/ui/Card.svelte";
	import Admin from "./Admin.svelte";

    import { subTitle } from "$lib/stores";
    subTitle.set('Admin');
</script>


<Card title="Admin">
    <Admin />
</Card>