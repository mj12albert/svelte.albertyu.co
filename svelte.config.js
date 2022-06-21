import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
    scss: {
      includePaths: [
        'src',
        'node_modules',
      ],
      prependData: `
        @use '@nirazul/scss-mq' as mq;
        @include mq.configure(('xs' 30em 'sm' 48em 'md' 62em 'lg' 75em 'xl'));
        @import './src/lib/sass/manifest.scss';
       `
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
