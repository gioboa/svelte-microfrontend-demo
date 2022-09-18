import type { BuildAdapter } from '@softarc/native-federation/build';
import * as esbuild from 'esbuild';
import { sveltePlugin } from './esbuild-svelte-plugin';

export const esBuildAdapter: BuildAdapter = async (options) => {
	const { entryPoint, external, outfile } = options;

	await esbuild.build({
		entryPoints: [entryPoint],
		external,
		outfile,
		bundle: true,
		sourcemap: false,
		minify: true,
		format: 'esm',
		target: ['esnext'],
		plugins: [sveltePlugin],
	});
};
