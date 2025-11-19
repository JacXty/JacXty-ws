import { createIcons, icons } from 'lucide';

import { Card } from '../components/Cards';
import { Modal } from '../components/Modal';
import { usePayloadApi } from '../hooks/usePayloadApi';
import { Education } from '../components/Education';



export async function AboutMe() {

  const aboutData = await usePayloadApi('about/690bfea03e95b82f7f305a43', {
    depth: 2,
    draft: false,
    locale: 'undefined',
    trash: false
  });

  const educationData = await usePayloadApi(`education?where[about.id][equals]=${aboutData?.id}&depth=0`);
  const experienceData = await usePayloadApi(`experience?where[about.id][equals]=${aboutData?.id}&depth=0`);

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
  title.textContent = `${aboutData?.page?.title || 'ABOUT ME'}`;
  title.className = 'animate__animated animate__fadeInDown text-4xl md:text-5xl font-extrabold uppercase';

  const description = document.createElement('p');
  description.textContent = `${aboutData?.page?.subtitle || 'Here s the description'}`;
  description.className = 'animate__animated animate__fadeInDown text-gray-400 text-lg';

  left.append(title, description);

  const right = document.createElement('div');
  right.className = 'animate__animated animate__fadeInDown md:col-span-2 flex flex-col gap-6';

  const cardsData = [
    { id: 1, title: 'User Information', desc: 'Jason Enmanuel Uyaguari Angamarca, Systems Analyst. Professional focused on technical and automated testing to maximize value delivery, ensuring superior results in complex software quality challenges.', icon: 'circle-user-round'},
    { id: 2, title: 'Contact Information', desc: 'Direct contact info (number, email) and professional network presence. Use these channels for immediate communication and technical portfolio review.', icon: 'vibrate'},
    { id: 3, title: 'Experience', desc: 'Trayectoria clave en Deuna (QA Automation, 2021-2023) y Tecsicom (Desarrollador Frontend, 2024-2025). Experiencia en la fusión de metodologías QA con desarrollo de alto rendimiento.', icon: 'rocket', content: { slug: 'experience', data: experienceData} },
    { id: 4, title: 'Skills', desc: 'Mastery of E2E frameworks like Cypress, Playwright, and Selenium. Expert in API testing with Newman/Karate and BDD (Cucumber) methodology for effective collaboration and quality.', icon: 'brick-wall-shield' },
    { id: 5, title: 'Management & Education', desc: 'Technologist in Systems Analysis. Proficient in management tools (Linear, ClickUp) and DevOps (Docker). Experienced in infrastructure monitoring with AWS (CloudWatch, DynamoDB).', icon: 'microscope',  content: { slug: 'education', data: educationData}  },
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
      const card = Card(c.title, c.desc, c.icon, bgColor);

      card.addEventListener('click', () => {
        // Creamos contenido dinámico para el modal
        const content = document.createElement('div');
        content.className = 'flex flex-col gap-4 text-white';
        if (c.content?.slug === 'education') {
           const education = Education(c?.content?.data);
           content.append(education);
        } else {
          content.innerHTML = `
            <h2 class="text-2xl font-bold">${c.title}</h2>
            <p class="">${c.desc}</p>
            <p class="">Icono: 💡</p>
          `;
        }

        Modal({ content, size: 'max-w-5xl', animation: 'animate__zoomIn', bgColor: 'black' });
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
  createIcons({ icons, attrs: { width: 20, height: 20 } });
}
