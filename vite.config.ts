import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig , searchForWorkspaceRoot } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
	  include: ['three']
	},
	server: {
	  fs: {
		allow: ["assets/images/", "assets/videos/"]
	  },
	},
});
