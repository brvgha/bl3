import type { Booking } from "$lib/types/bl3-types";

export function uniqueArray(array: Iterable<unknown> | null | undefined) {
    return Array.from(new Set(array));
}

export function isValidEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
export function isValidPhone(phone: string): boolean {
    const re = /^(\+?\d{1,3}[- ]?)?\d{10}$/; // Basic validation for international phone numbers
    return re.test(phone);
}
export function isValidDate(date: string): boolean {
    const re = /^\d{4}-\d{2}-\d{2}$/; // ISO date format YYYY-MM-DD
    return re.test(date);
}
export function isValidTime(time: string): boolean {
    const re = /^([01]\d|2[0-3]):([0-5]\d)$/; // 24-hour format HH:mm
    return re.test(time);
}
export function isValidGuests(guests: number): boolean {
    return Number.isInteger(guests) && guests > 0;
}

export function isValidBooking(booking: Booking): boolean {
    if (!booking.name || booking.name.trim() === "") {
        throw new Error("Name is required");
    }
    if (!isValidEmail(booking.email)) {
        throw new Error("Invalid email format");
    }
    if (!isValidPhone(booking.phone)) {
        throw new Error("Invalid phone number format");
    }
    if (!isValidDate(booking.date)) {
        throw new Error("Invalid date format, expected YYYY-MM-DD");
    }
    if (!isValidTime(booking.time)) {
        throw new Error("Invalid time format, expected HH:mm");
    }
    if (!isValidGuests(booking.guests)) {
        throw new Error("Number of guests must be a positive integer");
    }
    return true;
}

export function sortByDateTime(bookings: Booking[]): Booking[] {
    return bookings.sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}`);
        const dateB = new Date(`${b.date}T${b.time}`);
        return dateA.getTime() - dateB.getTime();
    });
}

// Create an array of booking objects
export const fakeBookings: Booking[] = [
    {
        name: 'Aroha Taylor',
        email: 'aroha.t@example.com',
        phone: '022 987 1234',
        date: '2025-09-12',
        time: '18:30',
        guests: 3,
    },
    {
        name: 'Ben Miller',
        email: 'ben.miller@example.net',
        phone: '09 444 5566',
        date: '2025-09-15',
        time: '13:00',
        guests: 5,
    },
    {   
        name: 'Chloe Garcia',
        email: 'c.garcia@example.com',
        phone: '+1 415 555 0182', // International number example
        date: '2025-10-01',
        time: '19:45',
        guests: 2,
    },
];