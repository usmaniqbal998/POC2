import { registerApplication, start } from 'single-spa';

registerApplication({
	name: '@trendyol/sidebar',
	app: () => System.import('https://localhost:8001/main.js'),
	activeWhen: () => true,
});

registerApplication({
	name: '@trendyol/plugin-a',
	app: () => System.import('https://localhost:8002/main.js'),
	activeWhen: '/pluginA',
});

start({
	urlRerouteOnly: true,
});
