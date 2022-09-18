import * as path from 'path';
import { esBuildAdapter } from './esbuild-adapter';
import { federationBuilder } from '@softarc/native-federation/build.js';

export async function federation(options: { projectName: string }) {
	return {
		name: 'vite-module-federation', // required, will show up in warnings and errors
		async buildEnd() {
			const outputPath = `dist/${options.projectName || 'not_defiend'}`;

			await federationBuilder.init({
				options: {
					workspaceRoot: path.join(__dirname, '..'),
					outputPath,
					tsConfig: 'tsconfig.json',
					federationConfig: `module-federation/federation.config.cjs`,
					verbose: false,
				},
				adapter: esBuildAdapter,
			});

			await federationBuilder.build();
		},
	};
}
