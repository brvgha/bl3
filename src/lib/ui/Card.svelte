<script lang="ts">
	export let title = '';
</script>

<div class="card mb-5">
	<header class="card-header">
		<p class="card-header-title">
      {#if title=="Home"}
        <span class="icon"><i class="fa-solid fa-house"></i></span>
      {:else if title=="Events"}
        <span class="icon"><i class="fa-solid fa-calendar-days"></i></span>
      {:else if title=="Booking"}
        <span class="icon"><i class="fa-solid fa-calendar-check"></i></span>
      {:else}
        <span class="icon"><i class="fa-solid fa-info-circle"></i></span>
      {/if}
			<span class="text">{title}</span>
		</p>
	</header>
	<div class="card-content">
		<div class="content">
			<slot />
		</div>
	</div>
</div>
