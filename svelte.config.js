import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			paths: {
				base: dev ? '' : '/daniel-keen.github.io'
			}
		})
	},
	preprocess: vitePreprocess()
};

export default config;
