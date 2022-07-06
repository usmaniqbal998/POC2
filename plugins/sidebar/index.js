import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './src/App';

const lifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: App,
	domElementGetter: () => document.getElementById('nav'),
	errorBoundary(err, info, props) {
		// Customize the root error boundary for your microfrontend here.
		return <div></div>;
	},
});

export const mount = (props) => {
	return lifecycles.mount(props);
};
export const { bootstrap, unmount } = lifecycles;
