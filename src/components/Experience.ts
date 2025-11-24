import { format } from 'date-fns';

export interface Experience {
    id: string;
    about: string;
    company: string;
    position: string;
    descriptionHTML: string;
    startDate: string;   // ISO date
    endDate: string;     // ISO date
    createdAt: string;   // ISO date
    updatedAt: string;   // ISO date
}

export type ExperienceList = Experience[];

export function Experience(data: ExperienceList = []) {

    // ROOT WRAPPER
    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col gap-6 w-full';

    const header = document.createElement('div');
    header.className = 'flex gap-4';

    // Big Number dinámico
    const bigNumber = document.createElement('span');
    bigNumber.className = 'text-[40px] font-extrabold text-gray-200 leading-none';
    bigNumber.textContent = '01';

    // Title dinámico
    const title = document.createElement('h2');
    title.className = 'md:text-2xl text-base font-semibold text-white flex place-items-end';
    title.textContent = data[0]?.position || 'Untitled';

    header.appendChild(bigNumber);
    header.appendChild(title);

    // Subtitle
    const subtitle = document.createElement('p');
    subtitle.className = 'text-lg text-gray-600';
    subtitle.textContent = 'Work Experience';


    const main = document.createElement('div');
    main.className = 'grid grid-cols-1 md:grid-cols-3 gap-4';

    const buttonsCol = document.createElement('div');
    buttonsCol.className = 'flex flex-col md:gap-6 gap-4';

    const contentCol = document.createElement('div');
    contentCol.className = 'md:col-span-2 p-6 border rounded-xl shadow-sm';

    // Render content
    function renderInfo(index: number) {
        const item = data[index];
        contentCol.innerHTML = `
            <p class="text-gray-600 mt-2 text-justify">${item?.descriptionHTML}</p>
        `;
    }

    data.forEach((item, index) => {
        const btn = document.createElement('button');

        btn.className = `
            w-full text-left px-4 py-2 rounded-lg border border-[#e3e2e5]
            transition font-normal text-gray-400 cursor-pointer
            hover:bg-[#ffffff0d] hover:border-white/30
        `;

        // Internal wrapper
        const lineWrapper = document.createElement('div');

        // Line 1: Company
        const company = document.createElement('div');
        company.textContent = item?.company || 'Not found company';

        // Line 2: Years
        const date = document.createElement('div');
        date.className = 'text-sm text-gray-300';
        date.dataset.role = 'date';
        date.textContent = `${format(item?.startDate, 'yyyy')} - ${format(item?.endDate, 'yyyy')}`;

        lineWrapper.appendChild(company);
        lineWrapper.appendChild(date);
        btn.appendChild(lineWrapper);

        // CLICK HANDLER
        btn.addEventListener('click', () => {
            renderInfo(index);

            // Update bigNumber and title (dynamic)
            bigNumber.textContent = (index + 1).toString().padStart(2, '0');
            title.textContent = item?.position || 'Untitled';

            // Reset all buttons
            buttonsCol.querySelectorAll('button').forEach(b => {
                b.classList.remove('font-semibold', 'text-white');
                b.classList.add('font-normal', 'text-gray-400');

                const d = b.querySelector('[data-role="date"]');
                if (d) {
                    d.classList.remove('text-white');
                    d.classList.add('text-gray-300');
                }
            });

            // Activate current button
            btn.classList.remove('font-normal', 'text-gray-400');
            btn.classList.add('font-semibold', 'text-white');

            date.classList.remove('text-gray-300');
            date.classList.add('text-white');
        });

        // First button active by default
        if (index === 0) {
            btn.classList.remove('text-gray-400', 'font-normal');
            btn.classList.add('text-white', 'font-semibold');

            date.classList.remove('text-gray-300');
            date.classList.add('text-white');
        }

        buttonsCol.appendChild(btn);
    });

    // Default content
    if (data.length > 0) renderInfo(0);

    // Append all
    main.appendChild(buttonsCol);
    main.appendChild(contentCol);

    wrapper.appendChild(header);
    wrapper.appendChild(subtitle);
    wrapper.appendChild(main);

    return wrapper;
}
