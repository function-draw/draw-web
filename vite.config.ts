import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],

	server: {
		fs: {
			allow: ["/draw/draw-web/images/", "/draw/draw-web/videos", "/draw/draw-web/src/routes/"]
		}
	}
});