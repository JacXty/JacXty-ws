/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Carousel } from '../components/Carousel';

// @ts-expect-error
import { projects } from '../data/projects.js';

export function Portfolio() {
  const main = document.getElementById('main-content');
  if (!main) {
    console.error('Element with id "main-content" not found.');
    return;
  }

  // Limpia el contenido anterior
  main.innerHTML = '';

  // Crea la sección principal
  const section = document.createElement('section');
  section.className = 'animate__animated animate__fadeInDown text-white px-6 md:px-10 pt-4';

  // Crea el título
  const title = document.createElement('h2');
  title.textContent = 'My Works';
  title.className = 'text-center text-3xl font-bold mb-6 uppercase py-4';

  // Llamas al componente Carousel
  const carousel = Carousel(projects);

  // Agrega el título a la sección
  section.appendChild(title);

  section.appendChild(carousel);

  // Agrega la sección al main
  main.appendChild(section);
}
