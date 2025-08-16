<script lang="ts">
	import { apiService } from '$lib/services/api-service';
	import {subTitle } from '$lib/stores';
	import Heading from '$lib/ui/Heading.svelte';
	import Menu from '$lib/ui/Menu.svelte';
	import { onMount } from 'svelte';

	let check: boolean | null = null;
	onMount(async () => {
		check = await apiService.getStatus();
		console.log("API status check:", check);
	});

	subTitle.set('Home');
</script>

<div class="container">
	<!--{#if $currentSession?.token}-->
	{#if check}
		<Menu />
		<Heading />
	{:else}
		<Heading />
	{/if}
	<!--{/if}-->
	<slot />
</div>
