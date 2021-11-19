import Dashboard from './views/Dashboard.vue';
import Quiz from './views/Quiz.vue';
import ContactUs from './views/ContactUs.vue';
import Tabell from './views/Tabell.vue';

export default [
	{ name: 'dashboard', path: '/dashboard', component: Dashboard },
	{ name: 'quiz', path: '/quiz', component: Quiz },
	{ name: 'contact_us', path: '/kontakt-oss', component: ContactUs },
	{ name: 'tabell', path: '/tabell', component: Tabell },


]