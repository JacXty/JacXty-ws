import './style.css';
import { setupRouter } from './routes/router';
import { Home } from './routes/Home';
import { Layout } from './layout/Layout';
import 'animate.css';
import { AboutMe } from './routes/aboutMe';

Layout();

// Config routes
setupRouter({
  '/': Home,
  '/about': AboutMe,
});
