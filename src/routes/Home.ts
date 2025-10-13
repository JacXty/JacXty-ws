export function Home() {
    const main = document.getElementById('main-content')!;
    main.innerHTML = '<h1 class="text-2xl font-bold">Welcome to Home</h1>';

    const section = document.createElement('section');
    section.className = 'pt-32';
    section.textContent = 'Hola como estas';

    main.appendChild(section); // <- Aquí agregas la sección al DOM
}
