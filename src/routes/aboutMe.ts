// sections/AboutMe.ts
import { Card } from '../components/Cards';

export function AboutMe() {
    const app = document.getElementById('app')!;
    app.innerHTML = '';

    const section = document.createElement('section');
    section.className = `
        min-h-screen bg-[#0d0d0d] text-white 
        grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-16
    `;

    // === COLUMNA IZQUIERDA: Título y texto ===
    const left = document.createElement('div');
    left.className = 'flex flex-col justify-center space-y-6';

    const title = document.createElement('h2');
    title.textContent = 'ABOUT ME';
    title.className = 'text-4xl md:text-5xl font-extrabold';

    const description = document.createElement('p');
    description.textContent = 'Lorem ipsum dolor';
    description.className = 'text-gray-400 text-lg';

    left.append(title, description);

    // === COLUMNA DERECHA: Tarjetas en 2 filas (2 + 3) ===
    const right = document.createElement('div');
    right.className = 'md:col-span-2 flex flex-col gap-6';

    // Fila 1: 2 tarjetas (centrada visualmente)
    const row1 = document.createElement('div');
    row1.className = 'grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto sm:mx-0';

    // Fila 2: 3 tarjetas
    const row2 = document.createElement('div');
    row2.className = 'grid grid-cols-1 sm:grid-cols-3 gap-4';

    // Datos de las tarjetas (5 en total)
    const cardsData = [
        { title: 'Lorem Ipsum Dolor', desc: 'Lorem ipsum dolor sit amet consectetur. Eu porttitor consequat pellentesque nec augue mattis ut ante.' },
        { title: 'Lorem Ipsum Dolor', desc: 'Lorem ipsum dolor sit amet consectetur. Eu porttitor consequat pellentesque nec augue mattis ut ante.' },
        { title: 'Lorem Ipsum Dolor', desc: 'Lorem ipsum dolor sit amet consectetur. Eu porttitor consequat pellentesque nec augue mattis ut ante.' },
        { title: 'Lorem Ipsum Dolor', desc: 'Lorem ipsum dolor sit amet consectetur. Eu porttitor consequat pellentesque nec augue mattis ut ante.' },
        { title: 'Lorem Ipsum Dolor', desc: 'Lorem ipsum dolor sit amet consectetur. Eu porttitor consequat pellentesque nec augue mattis ut ante.' },
    ];

    // Asignar tarjetas: primeras 2 a row1
    cardsData.slice(0, 2).forEach(c => {
        row1.appendChild(Card(c.title, c.desc, 'lightbulb'));
    });

    // Asignar tarjetas: siguientes 3 a row2
    cardsData.slice(2, 5).forEach(c => {
        row2.appendChild(Card(c.title, c.desc, 'lightbulb'));
    });

    // Añadir filas al contenedor derecho
    right.append(row1, row2);

    // Añadir columnas a la sección
    section.append(left, right);
    app.appendChild(section);
}
