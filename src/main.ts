import App from './Home.svelte';
import '@/scss/Home.scss';

const app = new App({
	target: document.body,
	props: {
		name: 'Max'
	}
});

export default app;
