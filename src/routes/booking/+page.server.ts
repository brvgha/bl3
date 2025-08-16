import { apiService } from "$lib/services/api-service";
import { isValidBooking } from "$lib/services/utilities";
import type { Booking } from "$lib/types/bl3-types";

export const actions = {
    book: async ({ request }) => {
        const form = await request.formData();
        const bookingData = {
            name: form.get("name") as string,
            email: form.get("email") as string,
            phone: form.get("phone") as string,
            date: form.get("date") as string,
            time: form.get("time") as string,
            guests: parseInt(form.get("guests") as string, 10),
        } as Booking;
        let valid = isValidBooking(bookingData);
        if (valid) {
            let response = await apiService.createBooking(bookingData);
            console.log("Booking creation response:", response);
            if (!response.success) {
                console.error("Failed to create booking:", response.message);
                return { success: false, message: response.message };
            }
            return { success: true, message: "Booking created successfully" };
        } else {
            console.error("Invalid booking data:", bookingData);
            return { success: false, message: "Invalid booking data" };
        }

    }
};