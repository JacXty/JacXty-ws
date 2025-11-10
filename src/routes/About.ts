import { Card } from '../components/Cards';
import { Modal } from '../components/Modal';
import { usePayloadApi } from '../hooks/usePayloadApi';

export async function AboutMe() {
  const aboutData = await usePayloadApi('about/690bfea03e95b82f7f305a43', {
  depth: 2,
  draft: false,
  locale: 'undefined',
  trash: false
  });
  console.log(aboutData);

  const main = document.getElementById('main-content')!;
  main.innerHTML = '';

  const section = document.createElement('section');
  section.id = 'about';
  section.className = `
    bg-[#141414] text-white
    grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-16 min-h-screen
  `;

  const left = document.createElement('div');
  left.className = 'flex flex-col justify-center space-y-6';

  const title = document.createElement('h2');
  title.textContent = 'ABOUT ME';
  title.className = 'animate__animated animate__fadeInDown text-4xl md:text-5xl font-extrabold';

  const description = document.createElement('p');
  description.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt non masa sed vestibulum.';
  description.className = 'animate__animated animate__fadeInDown text-gray-400 text-lg';

  left.append(title, description);

  const right = document.createElement('div');
  right.className = 'animate__animated animate__fadeInDown md:col-span-2 flex flex-col gap-6';

  const cardsData = [
    { title: 'Experiencia Profesional', desc: 'Más de 5 años en desarrollo backend con Node.js, bases de datos SQL y arquitecturas serverless.' },
    { title: 'Especialización', desc: 'Diseño e implementación de APIs escalables, optimización de rendimiento y patrones de arquitectura.' },
    { title: 'Frontend', desc: 'Desarrollo con React, Svelte y TailwindCSS, creando interfaces limpias y funcionales.' },
    { title: 'DevOps', desc: 'Uso de Docker, AWS Lambda y CI/CD para flujos de entrega automatizados y despliegues eficientes.' },
    { title: 'Colaboración', desc: 'Trabajo en equipos ágiles con metodologías SCRUM y enfoque en comunicación efectiva.' },
  ];

  let index = 0;
  let firstRow = true;
  let globalIndex = 0;

  while (index < cardsData.length) {
    const chunkSize = firstRow ? 2 : 3;
    const rowItems = cardsData.slice(index, index + chunkSize);

    const row = document.createElement('div');
    row.className = 'flex flex-wrap gap-4 justify-center sm:justify-start md:justify-end w-full';

    rowItems.forEach(c => {
      // IMPARES → #181818, PARES → #141414
      const bgColor = globalIndex % 2 === 0 ? '#181818' : '#141414';
      const card = Card(c.title, c.desc, '💡', bgColor);

      card.addEventListener('click', () => {
        // Creamos contenido dinámico para el modal
        const content = document.createElement('div');
        content.className = 'flex flex-col gap-4 text-white';
        content.innerHTML = `
          <h2 class="text-2xl font-bold">${c.title}</h2>
          <p class="">${c.desc}</p>
          <p class="">Icono: 💡</p>
        `;

        Modal({ content, size: 'max-w-xl', animation: 'animate__zoomIn', bgColor: 'black' });
      });

      row.appendChild(card);
      globalIndex++;
    });

    right.appendChild(row);
    index += chunkSize;
    firstRow = false;
  }

  section.append(left, right);
  main.appendChild(section);
}
