<script lang="ts">
	import { currentSession } from '$lib/stores';
	import { appName, directions, iconMap, iconBeer, iconChampagne } from '$lib/stores';

	let name = $appName;
	let directionLink = $directions;
	let mapIcon = $iconMap;
	let beerIcon = $iconBeer;
	let champagneIcon = $iconChampagne;

	let isActive = false;

	function toggleNavbar() {
		isActive = !isActive;
	}
</script>

<nav class="navbar is-fullwidth" aria-label="main navigation">
	<div class="container">
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<span class="icon"><i class={beerIcon}></i></span>
				<span class="icon mr-1"><i class={champagneIcon}></i></span>
				<span><strong>{name}</strong></span>
			</a>

			<!-- 🔽 Mobile burger button -->
			<!-- svelte-ignore a11y_interactive_supports_focus -->
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_missing_attribute -->
			<a
				role="button"
				class="navbar-burger"
				aria-label="menu"
				aria-expanded={isActive}
				on:click={toggleNavbar}
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<!-- 🔽 Toggle class `is-active` based on `isActive` -->
		<div id="navbarMenu" class="navbar-menu {isActive ? 'is-active' : ''}">
			<div class="navbar-end">
				<a class="navbar-item" href="/">Home</a>
				<a class="navbar-item" href="/events">Events</a>
				<a class="navbar-item" href="/booking">Booking</a>
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a class="navbar-item" href={directionLink} target="_blank" rel="noopener noreferrer">
					<i class={mapIcon}></i>
				</a>
			</div>
		</div>
	</div>
</nav>

