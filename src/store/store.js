import { writable } from 'svelte/store';

export const searchedShortcuts = writable('');
export const pressedKeys = writable([]);