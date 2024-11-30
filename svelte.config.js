import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false
        }),
	},
	paths: {
		// GitHub Pagesのサブディレクトリ対応
		base: process.env.NODE_ENV === 'production' ? /draw-web/ : '',
	},
	vite: {
		build: {
		  outDir: 'dist' // ビルドされたファイルの出力先ディレクトリをrootに変更
		}
	},
	prerender: {
		default: true
	}
};

export default config;
