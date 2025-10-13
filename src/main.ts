import './style.css';
import { setupRouter } from './routes/router';
import { Home } from './routes/Home';
import { Layout } from './layout/Layout';

Layout();

// Config routes
setupRouter({
  '/': Home
});
