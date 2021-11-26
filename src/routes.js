import Dashboard from './views/Dashboard.vue';
import Quiz from './views/Quiz.vue';
import ContactUs from './views/ContactUs.vue';
import TimeTable from './views/TimeTable.vue';
import ToDo from './views/ToDo.vue';
import SlideShow from './views/SlideShow.vue';

export default [
	{ name: 'quiz', path: '/quiz', component: Quiz },
	{ name: 'contact_us', path: '/kontakt-oss', component: ContactUs },
	{ name: 'time_table', path: '/tabell', component: TimeTable },
	{ name: 'to_do', path: '/to-do', component: ToDo },
	{ name: 'slideshow', path: '/slidwshow', component: SlideShow },
	{ name: 'dashboard', path: '/', component: Dashboard },
]