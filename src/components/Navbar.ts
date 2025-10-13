export function Navbar(): HTMLElement {
    const nav = document.createElement('nav');
    nav.className = 'bg-[#141414] text-white pt-14 pb-4 px-14 flex items-center justify-between';

    // Crear logo
    const logo = document.createElement('img');
    logo.src = 'assets/icons/logo.svg';
    logo.alt = 'Logo';
    logo.className = 'h-1/2 w-auto';

    // Envolver logo en enlace a '/'
    const logoLink = document.createElement('a');
    logoLink.href = '/';
    logoLink.appendChild(logo);
    nav.appendChild(logoLink);

    // Contenedor de links alineado a la derecha
    const linksContainer = document.createElement('div');
    linksContainer.className = 'flex gap-6';

    const links = [
        { text: 'Portafolio', hash: '/portafolio' },
        { text: 'Contact', hash: '/contact' }
    ];

    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.hash;
        a.textContent = link.text;
        a.className = 'hover:underline';
        linksContainer.appendChild(a);
    });

    nav.appendChild(linksContainer);

    return nav;
}
