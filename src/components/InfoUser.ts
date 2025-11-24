export interface UserInfoItem {
    id: string;
    label: string;
    value: string;
}

export interface UserInfoGroup {
    items: UserInfoItem[];
}

export type UserInfoData = UserInfoGroup[];

export function InfoUser(data: UserInfoData = []): HTMLDivElement {
    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col gap-6 w-full';

    // Safety check
    if (!Array.isArray(data) || data.length === 0 || !Array.isArray(data[0]?.items)) {
        wrapper.innerHTML = `
            <div class='text-center text-gray-500'>No user information available.</div>
        `;
        return wrapper;
    }

    const items: UserInfoItem[] = data[0].items;

    // Title
    const title = document.createElement('h2');
    title.className = 'text-2xl font-semibold';
    title.textContent = 'User Information';
    wrapper.appendChild(title);

    const content = document.createElement('div');
    content.className = 'flex flex-col gap-6';

    // Separate 'Presentation' from normal items
    const normalItems: UserInfoItem[] = [];
    let presentation: UserInfoItem | null = null;

    items.forEach((item: UserInfoItem) => {
        const label = item.label ?? '';
        if (label.toLowerCase() === 'letter') { // keep your condition
            presentation = item;
        } else {
            normalItems.push(item);
        }
    });

    // Group into pairs for 2-column layout
    for (let i = 0; i < normalItems.length; i += 2) {
        const left = normalItems[i];
        const right = normalItems[i + 1]; // may be undefined if odd number

        const row = document.createElement('div');
        row.className = 'grid grid-cols-2 gap-6 py-4';

        row.innerHTML = `
            <div>
                <div class='font-medium text-gray-400'>${left.label}</div>
                <div class='text-white'>${left.value}</div>
            </div>

            <div>
                <div class='font-medium text-gray-400'>${right?.label ?? ''}</div>
                <div class='text-white'>${right?.value ?? ''}</div>
            </div>
        `;

        content.appendChild(row);
    }

    wrapper.appendChild(content);

    // Render 'Presentation' at the end
    if (presentation !== null) {
        const pres = document.createElement('div');
        pres.className = 'mt-4';

        // Assert type to UserInfoItem for TypeScript
        const presItem: UserInfoItem = presentation;

        pres.innerHTML = `
        <h3 class='text-lg font-semibold mb-2'>Presentation</h3>
        <p class='text-white font-light leading-8'>${presItem.value}</p>
    `;

        wrapper.appendChild(pres);
    }

    return wrapper;
}
