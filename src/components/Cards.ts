export function Card(
  title: string,
  description: string,
  icon: string | null,
  bgColor: string = '#141414'
): HTMLElement {
  const card = document.createElement('div');
  card.className = `
  rounded-2xl p-6 border border-[#222] cursor-pointer
  flex flex-col justify-between
  transition-transform duration-300 ease-in-out
  hover:-translate-y-1 hover:scale-105
  h-64 flex-shrink-0
  w-full sm:w-[48%] md:w-[32%]
  `;
  card.style.backgroundColor = bgColor;

  const iconEl = document.createElement('div');
  iconEl.className = `
    w-8 h-8 flex items-center justify-center rounded-full
    bg-[#1f1f1f] text-pink-500 mb-4 text-lg
  `;

  iconEl.innerHTML = `<i data-lucide="${icon}"></i>`;

  const titleEl = document.createElement('h3');
  titleEl.textContent = title;
  titleEl.className = 'text-white font-semibold mb-2';

  const descEl = document.createElement('p');
  descEl.textContent = description;
  descEl.className = 'text-gray-400 text-sm leading-relaxed line-clamp-4 whitespace-normal';

  card.append(iconEl, titleEl, descEl);
  return card;
}
