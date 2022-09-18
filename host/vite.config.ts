import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { federation } from './module-federation/vite-federation-plugin';

// https://vitejs.dev/config/
export default defineConfig(async () => ({
	plugins: [svelte(), await federation({ projectName: 'host' })],
}));
