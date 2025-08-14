<script lang="ts">
    import { subTitle } from "$lib/stores";
    import Card from "$lib/ui/Card.svelte";
    import BookingScreen from "./BookingScreen.svelte";

    subTitle.set('Booking');
</script>

<Card title="Booking">
    <BookingScreen />
</Card>