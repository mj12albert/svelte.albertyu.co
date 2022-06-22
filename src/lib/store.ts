import { writable } from 'svelte/store';

export const menuState = writable({
  isOpen: false,
  theme: 'dark',
});
