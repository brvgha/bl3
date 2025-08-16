<script>
	import Card from "$lib/ui/Card.svelte";
	import Admin from "./Admin.svelte";
    import { subTitle } from "$lib/stores";
    export let data;
    subTitle.set('Admin');
</script>


<Card title="Admin">
    <Admin {data}/>
</Card>