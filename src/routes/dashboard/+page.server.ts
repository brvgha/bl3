import { apiService } from "$lib/services/api-service";

export async function load() {
    // Fetch bookings from the API service
    try {
        const unAuthBookings = await apiService.getUnAuthBookings();
        const authBookings = await apiService.getAuthBookings();
        console.log("UnAuth Bookings fetched successfully:", unAuthBookings);
        console.log("Auth Bookings fetched successfully:", authBookings);
        return { unAuthBookings, authBookings };
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return { error: "Failed to fetch bookings" };
    }
};

export const actions = {
    // Define any actions if needed, e.g., for form submissions
    accept: async ({ request }) => {
        const form = await request.formData();
        const bookingId = form.get("bookingId") as string;
        console.log(`Accepting booking with ID: ${bookingId}`);
        let response = await apiService.acceptBooking(bookingId);
        if (!response.success) {
            console.error("Failed to accept booking:", response.message);
            return { success: false, message: response.message };
        } else {
            // remove the booking from the list or handle UI updates as needed
            console.log(`Booking ${bookingId} accepted successfully`);

        }
        return { success: true, message: `Booking ${bookingId} accepted` };
    },

    reject: async ({ request }) => {
        const form = await request.formData();
        const bookingId = form.get("bookingId") as string;
        console.log(`Rejecting booking with ID: ${bookingId}`);
        let response = await apiService.rejectBooking(bookingId);
        if (!response.success) {
            console.error("Failed to reject booking:", response.message);
            return { success: false, message: response.message };
        } else {
            // remove the booking from the list or handle UI updates as needed
            console.log(`Booking ${bookingId} rejected successfully`);
        }
        return { success: true, message: `Booking ${bookingId} rejected` };
    }

};
