import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { federation } from '@gioboa/vite-module-federation';
import { esBuildAdapter } from './module-federation/esbuild-adapter';

// https://vitejs.dev/config/
export default defineConfig(async () => ({
	plugins: [
		federation({
			options: {
				workspaceRoot: __dirname,
				outputPath: 'dist',
				tsConfig: 'tsconfig.json',
				federationConfig: 'module-federation/federation.config.cjs',
				verbose: false,
			},
			adapter: esBuildAdapter,
		}),
		svelte(),
	],
}));
