import { writable } from "svelte/store";
import type { Session } from "$lib/types/bl3-types";

export const currentSession = writable<Session>();
export const subTitle = writable<string>();
export const appName = writable<string>("BL3");
export const iconChampagne = writable<string>("fa-solid fa-champagne-glasses");
export const iconBeer = writable<string>("fa-solid fa-beer-mug-empty");
export const iconMap = writable<string>("fa-solid fa-map-location-dot");
export const directions = writable<string>("https://www.google.com/maps/dir/?api=1&destination=8+Courtenay+Place,+Te+Aro,+Wellington+6011");
export const bookingEmail = writable<string>("cody@barbl3.co.nz");
export const iconHome = writable<string>("fa-solid fa-house");