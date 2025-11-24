export interface ContactItem {
    id: string;
    network: string;
    profile: string;
    url: string;
}

export interface ContactGroup {
    id: string;
    createdAt: string;
    updatedAt: string;
    about: string;
    items: ContactItem[];
}

export type ContactData = ContactGroup[];

export function InfoContacts(data: ContactData = []): HTMLDivElement {
    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col gap-6 w-full';

    if (!Array.isArray(data) || data.length === 0 || !Array.isArray(data[0]?.items)) {
        wrapper.innerHTML = `
            <div class="text-center text-gray-500">No contact information available.</div>
        `;
        return wrapper;
    }

    const items: ContactItem[] = data[0].items;

    // Title
    const title = document.createElement('h2');
    title.className = 'text-2xl font-semibold';
    title.textContent = 'Contact Information';
    wrapper.appendChild(title);

    const content = document.createElement('div');
    content.className = 'flex flex-col gap-4';

    // Group into pairs for 2-column layout
    for (let i = 0; i < items.length; i += 2) {
        const left = items[i];
        const right = items[i + 1]; // may be undefined

        const row = document.createElement('div');
        row.className = 'grid grid-cols-2 gap-6 py-4';

        row.innerHTML = `
            <div>
                <div class="text-white capitalize font-semibold">${left.network}</div>
                <div class="text-blue-400 underline">
                    <a href="${left.url}" target="_blank">${left.profile}</a>
                </div>
            </div>

            <div>
                ${right ? `
                <div class="text-white capitalize font-semibold">${right.network}</div>
                <div class="text-blue-400 underline">
                    <a href="${right.url}" target="_blank">${right.profile}</a>
                </div>
                ` : ''}
            </div>
        `;

        content.appendChild(row);
    }

    wrapper.appendChild(content);

    return wrapper;
}
