import { format } from 'date-fns';

export interface EducationItem {
  id: string;
  about: string;
  degree: string;
  school: string;
  description: string;
  startDate: string;  // ISO date
  endDate: string;    // ISO date
  createdAt: string;
  updatedAt: string;
}

export type EducationArray = EducationItem[];

export function Education(data: EducationArray) {
  // WRAPPER GENERAL
  const wrapper = document.createElement('div');
  wrapper.className = 'flex flex-col gap-6 w-full';

  // TITLE (fuera del grid)
  const title = document.createElement('h3');
  title.textContent = 'Education Details';
  title.className = 'text-2xl font-bold text-white';

  // GRID DE 2 COLUMNAS
  const educationGrid = document.createElement('div');
  educationGrid.className = 'grid md:grid-cols-2 grid-cols-1 gap-4';

  data.map((item) => {
    // CARD
    const card = document.createElement('div');
    card.className =
      'border border-solid border-[#e3e2e5] rounded-md p-4 flex flex-col gap-2 bg-[#141414]';

    // ROW: Title + Circle
    const titleRow = document.createElement('div');
    titleRow.className = 'flex items-center justify-between';

    // CARD TITLE
    const cardtitle = document.createElement('h4');
    cardtitle.textContent = item?.degree || 'Not found Title';
    cardtitle.className = 'text-lg font-semibold text-white';

    // DOUBLE CIRCLE
    const outerCircle = document.createElement('div');
    outerCircle.className =
      'w-4 h-4 rounded-full flex items-center justify-center bg-gray-500/40';

    const innerCircle = document.createElement('div');
    innerCircle.className = 'w-2 h-2 rounded-full bg-gray-500';

    outerCircle.appendChild(innerCircle);

    // Add title + circle
    titleRow.append(cardtitle, outerCircle);

    // SUBTITLE (h6) → ej: School name
    const subtitle = document.createElement('h6');
    subtitle.textContent = item?.school || 'Not found School';
    subtitle.className = 'text-sm text-white/70 font-medium';

    // DATE
    const date = document.createElement('h6');
    date.textContent = `${format(item?.startDate, 'yyyy')} - ${format(item?.endDate, 'yyyy')}`;
    date.className = 'text-xs text-white/60 font-semibold';

    // DESCRIPTION
    const description = document.createElement('p');
    description.textContent = item?.description || '';
    description.className = 'text-white/80 text-sm pt-1';

    // Append everything to card
    card.append(titleRow, subtitle, date, description);

    // Add card to grid
    educationGrid.append(card);
  });


  // Add title + grid to wrapper
  wrapper.append(title, educationGrid);

  return wrapper;
}
