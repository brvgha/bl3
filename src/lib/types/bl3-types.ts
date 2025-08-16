export interface Session {
    _id: string;
    token: string;
}

export type Booking = {
    _id?: string;
    name: string;
    email: string;
    phone: string;
    date: string; // ISO date string
    time: string; // HH:mm format
    guests: number;
}