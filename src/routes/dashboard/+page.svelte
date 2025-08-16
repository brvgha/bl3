<script>
	import Card from "$lib/ui/Card.svelte";
	import Dashboard from "./Dashboard.svelte";
    import { subTitle } from "$lib/stores";

    subTitle.set('Dashboard');

    export let data;
    console.log("Dashboard data:", data);

</script>


<Card title="Dashboard">
    <Dashboard {data}/>
</Card>
