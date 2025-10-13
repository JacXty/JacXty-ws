import { Button } from '../components/Button';

export function Home() {
    const app = document.getElementById('app')!;
    app.innerHTML = '';

    const title = document.createElement('h1');
    title.textContent = 'Hello World!';
    title.className = 'text-3xl font-bold underline text-center mb-4';

    const btn = Button('Click Me', () => alert('Button clicked!'));

    app.appendChild(title);
    app.appendChild(btn);
}
