import './style.css';
import 'animate.css';

import { setupRouter } from './routes/router';
import { Home } from './routes/Home';
import { Layout } from './layout/Layout';
import { AboutMe } from './routes/About';
import { Portfolio } from './routes/Portfolio';

Layout();

// Config routes
setupRouter({
  '/': Home,
  '/about': AboutMe,
  '/portafolio': Portfolio
});
