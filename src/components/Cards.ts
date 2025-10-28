// components/Cards.ts
export function Card(title: string, description: string, icon: string = 'lightbulb'): HTMLElement {
  const card = document.createElement('div');
  card.className = `
    bg-[#111] border border-[#222] rounded-2xl p-6 
    hover:-translate-y-1 hover:border-[#333] transition-all duration-300
  `;

  const iconEl = document.createElement('div');
  iconEl.className = `
    w-8 h-8 flex items-center justify-center rounded-full 
    bg-[#1a1a1a] text-pink-500 mb-4
  `;
  iconEl.textContent = icon;

  const titleEl = document.createElement('h3');
  titleEl.textContent = title;
  titleEl.className = 'text-white font-semibold mb-2';

  const descEl = document.createElement('p');
  descEl.textContent = description;
  descEl.className = 'text-gray-400 text-sm leading-relaxed';

  card.append(iconEl, titleEl, descEl);
  return card;
}
