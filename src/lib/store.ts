import { writable, type Writable } from 'svelte/store';

export const menuState: Writable<{
  isOpen: boolean,
  theme: string | null,
}> = writable({
  isOpen: false,
  theme: 'dark',
});
