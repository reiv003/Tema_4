import Dashboard from './views/Dashboard.vue';
import Quiz from './views/Quiz.vue';
import ContactUs from './views/ContactUs.vue';
import TimeTable from './views/TimeTable.vue';

export default [
	{ name: 'quiz', path: '/quiz', component: Quiz },
	{ name: 'contact_us', path: '/kontakt-oss', component: ContactUs },
	{ name: 'time_table', path: '/tabell', component: TimeTable },
	{ name: 'dashboard', path: '/', component: Dashboard },
]