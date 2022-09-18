import { initFederation } from "@softarc/native-federation";

(async () => {

	// console.log(import.meta.env.DEV);
	await initFederation();
	await import('./bootstrap');

})();
