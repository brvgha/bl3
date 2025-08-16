<script lang="ts">
	import Card from "$lib/ui/Card.svelte";


    export let data;

    let totalUnauth = (data.unAuthBookings ? data.unAuthBookings.length : 0);
    let totalAuth = (data.authBookings ? data.authBookings.length : 0);
    let totalBookings = totalUnauth + totalAuth;

</script>

<div class="dashboard">
    <h1 class="title">Dashboard</h1>
    <p class="subtitle">Welcome to the Admin page, here you can manage your bookings and view statistics.</p>
    
    {#if data}
        <div class="data-overview">
            <h2 class="subtitle">
                Overview
            </h2>
            <h3>Total Bookings: {totalBookings}</h3>
            <Card title="Unauthenticated Bookings">
                <p>Total Unauthenticated Bookings: {totalUnauth}</p>
                <ul>
                {#each data.unAuthBookings as item, i}
                    <li>{i + 1}: {item.name}, {item.email}, {item.phone} for {item.guests} at {item.time} on {item.date} 
                        <div class="buttons is-right">
                            <input type="hidden" name="bookingId" value={item._id} />
                            <form method='post' action="?/accept" name="accept"><button class="button is-success">Accept</button></form>
                            <form method='post' action="?/reject" name="reject"><button class="button is-danger">Reject</button></form>
                        </div>
                    </li>
                {/each}
            </ul>
            </Card>
            <Card title="Authenticated Bookings">
                <p>Total Authenticated Bookings: {totalAuth}</p>
                <ul>
                {#each data.authBookings as item, i}
                    <li>{i + 1}: {item.name}, {item.email}, {item.phone} for {item.guests} at {item.time} on {item.date} 
                    </li>
                {/each}
            </ul>
            </Card>
            
        </div>
    {:else}
        <div class="notification is-warning">
            <p>No data available. Please check back later.</p>
        </div>
    {/if}
</div>


