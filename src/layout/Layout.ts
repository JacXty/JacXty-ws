// ts/layout/Layout.ts
import { Navbar } from '../components/Navbar';

export function Layout() {
    const app = document.getElementById('app')!;
    app.innerHTML = ''; // Limpiar contenido

    // Navbar
    const navbar = Navbar();
    app.appendChild(navbar);

    // Main content
    const main = document.createElement('main');
    main.id = 'main-content';
    main.className = 'p-4 bg-[#141414]';
    app.appendChild(main);

}
