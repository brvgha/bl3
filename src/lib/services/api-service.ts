import { fakeBookings } from "$lib/services/utilities";
import type { Booking } from "$lib/types/bl3-types";
import { redirect } from "@sveltejs/kit";
import axios from "axios";

export const apiService = {
    baseUrl: 'http://localhost:4000',
    async getStatus(): Promise<boolean> {
        let response = await axios.get(`${this.baseUrl}/status`);
        //console.log("Response status:", response.status);
        console.log("Response code", response.status);
        if (!response.status) {
            console.error("API is not available");
            return false;
        }
        return true;
    },
    async login(username: string, password: string): Promise<boolean | { error: string }> {
        // Simulate an API call for login
        console.log(`Logging in with username: ${username} and password: ${password}`);
        if (!username || !password) {
            console.error("Username or password is empty");
            return { error: "Username and password are required" };
        }
        let response = await axios.post(`${this.baseUrl}/login`, { username, password });
        return response.data.login === true ? true : false;
    },

    async logout(): Promise<void> {
        // Simulate an API call for logout
        console.log("Logging out");
        throw redirect(302, '/');
    },
    async getUnAuthBookings(): Promise<any[]> {
        // Simulate an API call to get bookings
        console.log("Fetching bookings");
        try {
            let response = await axios.get(`${this.baseUrl}/get-unauth-bookings`);
            console.log("Response status:", response.status);
            if (response.status === 200) {
                return response.data;
            } else {
                console.error("Failed to fetch bookings, returning fake data");
                return fakeBookings;
            }
        } catch (error) {
            console.error("Error fetching bookings:", error);
            return fakeBookings; // Return fake data in case of error
        }

    },
    async getAuthBookings(): Promise<any[]> {
        // Simulate an API call to get bookings
        console.log("Fetching bookings");
        try {
            let response = await axios.get(`${this.baseUrl}/get-auth-bookings`);
            console.log("Response status:", response.status);
            if (response.status === 200) {
                return response.data;
            } else {
                console.error("Failed to fetch bookings, returning fake data");
                return fakeBookings;
            }
        } catch (error) {
            console.error("Error fetching bookings:", error);
            return fakeBookings; // Return fake data in case of error
        }

    },
    async acceptBooking(bookingId: string): Promise<{ success: boolean; message?: string }> {
        // Simulate an API call to accept a booking
        console.log(`Accepting booking with ID: ${bookingId}`);
        let response = await axios.post(`${this.baseUrl}/accept-booking`, { bookingId });
        console.log("Response status:", response.status);
        if (response.status !== 200) {
            console.error("Failed to accept booking:", response.data);
            return { success: false, message: response.data.message || "Failed to accept booking" };
        }
        return { success: true, message: `Booking ${bookingId} accepted successfully` };
    },
    async rejectBooking(bookingId: string): Promise<{ success: boolean; message?: string }> {
        // Simulate an API call to reject a booking
        console.log(`Rejecting booking with ID: ${bookingId}`);
        let response = await axios.post(`${this.baseUrl}/reject-booking`, { bookingId });
        if (response.status !== 200) {
            console.error("Failed to reject booking:", response.data);
            return { success: false, message: response.data.message || "Failed to reject booking" };
        }
        return { success: true, message: `Booking ${bookingId} rejected successfully` };
    },
    async createBooking(bookingData: Booking): Promise<{ success: boolean; message?: string }> {
        console.log("Creating booking with data:", bookingData);
        let response = await axios.post(`${this.baseUrl}/create-booking`, bookingData);
        console.log("Response status:", response);
        if (response.status !== 200) {
            console.error("Failed to create booking:", response.data);
            return { success: false, message: response.data.message || "Failed to create booking" };
        }
        return { success: response.data.confirm, message: response.data.message || "Booking created successfully" };
    }
};