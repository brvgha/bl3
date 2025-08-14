import { BOOKINGEMAIL } from "$env/static/private";
import { bookingEmail } from "$lib/stores";


export function sendEmail(name: string, email: string, phone: string, date: Date, time: string, guests: number, message: string) {
    const subject = encodeURIComponent(`Booking Request from ${name}`);
    const fromEmail = BOOKINGEMAIL;
    const toEmail = bookingEmail;
    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date.toLocaleDateString()}\nTime: ${time}\nGuests: ${guests}\nMessage: ${message}`
    );
    
}

export function uniqueArray(array: Iterable<unknown> | null | undefined) {
    return Array.from(new Set(array));
}