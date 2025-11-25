import { Modal } from './Modal';

export interface TechItem {
  id: string;
  name: string;
}
export interface Project {
  id: string;

  createdAt: string | Date;
  updatedAt: string | Date;

  about: string;

  title: string;
  description: string;
  role: string;

  techStack: TechItem[];

  repoUrl?: string | null;
  demoUrl?: string | null;

  background: string;
  thumbnail: string;

  startDate: string | Date;
  endDate: string | Date;
}


export function Carousel(items: Project[] = []) {
  const itemsPerPage = 3;
  let currentIndex = 0;

  const section = document.createElement('section');
  section.className = 'w-full mx-auto flex flex-col gap-4';

  const header = document.createElement('div');
  header.className = 'flex justify-end items-center gap-2';

  const prevBtn = document.createElement('button');
  prevBtn.innerHTML = '<img src="assets/icons/right.svg" alt="prev" class="w-6 h-6" />';
  prevBtn.className =
    'p-2 disabled:opacity-40 transition hover:scale-105';
  prevBtn.disabled = true;

  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = '<img src="assets/icons/left.svg" alt="next" class="w-6 h-6" />';
  nextBtn.className =
    'p-2 disabled:opacity-40 transition hover:scale-105';

  header.appendChild(prevBtn);
  header.appendChild(nextBtn);

  const container = document.createElement('div');
  container.className =
    'grid grid-cols-2 gap-4 transition-all duration-300 ease-in-out';

  const render = () => {
    container.innerHTML = '';

    const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

    visibleItems.forEach(async (item, index) => {
      const globalIndex = currentIndex + index; // índice real dentro del array original
      const card = document.createElement('div');

      const patternIndex = globalIndex % 6; // cada 6 items se repite el patrón

      if (patternIndex === 0 || patternIndex === 5) {
        card.className = 'col-span-2 relative h-[40vh] rounded-md overflow-hidden';
      } else {
        // Imágenes 2–5 → 50% ancho
        card.className = 'col-span-2 md:col-span-1 relative h-[40vh] rounded-md overflow-hidden';
      }

      const img = document.createElement('img');

      img.src = item.background;
      img.alt = item.title;
      img.className = 'md:border-0 border border-bg-white/5 object-cover object-center cursor-pointer w-full h-full object-cover rounded-xl';

      img.addEventListener('mouseenter', () => {
        img.classList.add('animate__animated', 'animate__pulse');
      });

      img.addEventListener('mouseleave', () => {
        img.classList.remove('animate__animated', 'animate__pulse');
      });

      // 👆 Click para abrir modal
      img.addEventListener('click', () => {
        // Creamos contenido dinámico usando el objeto `item`
        const content = document.createElement('div');
        content.className = 'flex flex-col gap-4';

        // ⬇️ CORREGIDO: usar tech.name
        const techBadges = item.techStack && Array.isArray(item.techStack)
          ? item.techStack.map(tech =>
            `<span class="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
          ${tech.name}
        </span>`
          ).join('')
          : '<span class="text-gray-400">No tech stack</span>';

        content.innerHTML = `
          <h2 class="text-2xl font-bold">${item.title}</h2>
          <p class="text-gray-600"><strong>Role:</strong> ${item.role}</p>
          <p class="text-gray-500">${item.description}</p>

          <img src="${item.background}" alt="${item.title}" class="w-full h-64 object-cover rounded-lg" />

          <div class="flex flex-col gap-2">
            <p class="text-gray-400 font-semibold">Tech Stack:</p>
            <div class="flex flex-wrap gap-2">
              ${techBadges}
            </div>
          </div>
        `;

        // Abrimos el modal y pasamos el contenido
        Modal({
          content,
          size: 'max-w-2xl md:h-[80vh]',
          animation: 'animate__zoomIn'
        });
      });


      const overlay = document.createElement('div');
      overlay.className =
        'absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] px-4 py-2 flex items-center justify-start gap-3 bg-white/5 backdrop-blur-lg text-white rounded-lg';

      overlay.innerHTML = `
        <span class="md:text-base text-xs font-semibold drop-shadow-lg text-start flex-1">${item.title}</span>
        <img src="assets/icons/arrow_left.svg" alt="icon" class="w-6 h-6 opacity-90">
      `;

      card.appendChild(img);
      card.appendChild(overlay);
      container.appendChild(card);
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex + itemsPerPage >= items.length;
  };


  nextBtn.addEventListener('click', () => {
    if (currentIndex + itemsPerPage < items.length) {
      currentIndex += itemsPerPage;
      render();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex - itemsPerPage >= 0) {
      currentIndex -= itemsPerPage;
      render();
    }
  });

  render();

  section.appendChild(header);
  section.appendChild(container);

  return section;
}
