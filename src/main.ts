import './style.css';
import { setupRouter } from './routes/router';
import { Home } from './routes/Home';
import { Layout } from './layout/Layout';
import 'animate.css';

Layout();

// Config routes
setupRouter({
  '/': Home
});
