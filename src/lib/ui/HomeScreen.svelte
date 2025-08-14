<script lang="ts">
	import { iconHome } from '$lib/stores';
	let homeIcon = $iconHome;
</script>

<section class="hero is-default is-bold">
	<div class="hero-body">
		<div class="container has-text-centered">
			<div class="columns is-vcentered">
				<div class="column is-5">
					<figure class="image is-2by1">
						<img class="object-fit" src="/bl3_logo.jpg" alt="home" />
					</figure>
				</div>
				<div class="column is-6 is-offset-1">
					<h1 class="title is-2 mb-5">
						<span class="icon p-3 m-3"><i class={homeIcon}></i></span>
						<p>Welcome to BL3</p>
					</h1>
					<span
						><p class="has-text-centered pb-5">
							Wellington's newest little pub 🍻 Serving great food, great beers & great experiences.
							Find us at 8 Courtenay Place for the comfiest beer in Wellington.
						</p></span
					>
				</div>
			</div>
		</div>
	</div>
</section>
