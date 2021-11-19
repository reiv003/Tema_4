import Dashboard from './views/Dashboard.vue';
import Quiz from './views/Quiz.vue';
import Tabell from './views/Tabell.vue';

export default [
	{ name: 'dashboard', path: '/', component: Dashboard },
	{ name: 'quiz', path: '/quiz', component: Quiz },
	{ name: 'tabell', path: '/tabell', component: Tabell },


]