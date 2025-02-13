import { localStore } from "$lib/infrastructure/LocalStore.js";

export const trainer = localStore("TRAINER");

export const lastSync = localStore("LAST_SYNC");

export const token = localStore("TOKEN");