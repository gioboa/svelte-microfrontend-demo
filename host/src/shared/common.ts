import { loadRemoteModule } from '@softarc/native-federation';

export const loadRemoteApp = async (
	remoteEntry: string,
	exposedModule: string
) => {
	const module = await loadRemoteModule({ remoteEntry, exposedModule });
	return module.default;
};
