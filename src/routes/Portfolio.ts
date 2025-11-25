import { Carousel } from '../components/Carousel';
import { usePayloadApi } from '../hooks/usePayloadApi.js';

export async function Portfolio() {
  const main = document.getElementById('main-content');
  if (!main) {
    console.error('Element with id "main-content" not found.');
    return;
  }

  const aboutData = await usePayloadApi('about/690bfea03e95b82f7f305a43', {
    depth: 2,
    draft: false,
    locale: 'undefined',
    trash: false
  });

  const projectData = await usePayloadApi(
    `projects?where[about.id][equals]=${aboutData?.id}&depth=0`
  );

  // Limpia contenido previo
  main.innerHTML = '';

  // Crea sección
  const section = document.createElement('section');
  section.className =
    'animate__animated animate__fadeInDown text-white px-6 md:px-10 pt-4';

  // Título
  const title = document.createElement('h2');
  title.textContent = 'My Works';
  title.className = 'text-center text-3xl font-bold mb-6 uppercase py-4';

  // ⚠️ IMPORTANTE: Carousel es async → usar await
  const carousel = await Carousel(projectData);

  section.appendChild(title);
  section.appendChild(carousel);

  main.appendChild(section);
}
