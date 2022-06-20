import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
    scss: {
      prependData: `@import './src/lib/sass/manifest.scss';`
    }
  }),

	kit: {
		adapter: adapter(),

    vite: {
      server: {
        port: 3003,
        open: false,
      },
    },
	},
};

export default config;
