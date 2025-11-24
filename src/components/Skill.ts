export interface Skill {
    id: string;
    name: string;
    category: string;
    url?: string;
    logo?: {
        id: string;
        url?: string;
        filename?: string;
        mimeType?: string;
    } | null;
    about: string;
    createdAt: string;
    updatedAt: string;
}

export type SkillsResponse = Skill[];

export function Skill(data: SkillsResponse) {

    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col gap-14 w-[40%]';

    // Index signature -> permite keys dinámicas sin errores TS
    const groups: Record<string, Skill[]> = {};

    data.forEach(item => {
        const cat = item.category || 'other';
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(item);
    });

    // Etiquetas opcionales
    const categoryLabels: Record<string, string> = {
        front: 'Frontend',
        back: 'Backend',
        qa: 'Quality Assurance',
        devops: 'DevOps',
        design: 'Design',
        other: 'Others'
    };

    Object.keys(groups).forEach(category => {
        const section = document.createElement('div');
        section.className = 'flex flex-col gap-3';

        const title = document.createElement('h3');
        title.className = 'text-2xl font-semibold text-white';

        // Si no existe, usa la categoría real
        title.textContent = categoryLabels[category] ?? category;

        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3';

        groups[category].forEach(item => {
            const card = document.createElement('div');
            card.className = `
                flex flex-col items-center justify-center gap-1.5
                p-2 rounded-lg border border-white/10 bg-white/5
                backdrop-blur-sm transition
                hover:bg-white/10 hover:border-white/20
            `;

            const img = document.createElement('img');
            img.src = item.url || '';
            img.alt = item.name;
            img.className = 'w-8 h-8 object-contain';

            const name = document.createElement('p');
            name.className = 'text-xs text-white text-center';
            name.textContent = item.name;

            card.appendChild(img);
            card.appendChild(name);
            grid.appendChild(card);
        });

        section.appendChild(title);
        section.appendChild(grid);
        wrapper.appendChild(section);
    });

    return wrapper;
}
