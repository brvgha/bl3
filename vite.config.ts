import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 5173,
		host: true,
		strictPort: true,
		allowedHosts: ['bl3-98d2.onrender.com', 'localhost', '0.0.0.0'],
	}
});
