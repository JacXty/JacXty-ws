import './style.css';
import { setupRouter } from './routes/router';
import { Home } from './routes/Home';

// Config routes
setupRouter({
    '#home': Home
});
