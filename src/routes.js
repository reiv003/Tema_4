import Dashboard from './views/Dashboard.vue';
import Quiz from './views/Quiz.vue';
import ContactUs from './views/ContactUs.vue';
import Tabell from './views/Tabell.vue';

export default [
	{ name: 'quiz', path: '/quiz', component: Quiz },
	{ name: 'contact_us', path: '/kontakt-oss', component: ContactUs },
	{ name: 'tabell', path: '/tabell', component: Tabell },
	{ name: 'dashboard', path: '/', component: Dashboard },
]