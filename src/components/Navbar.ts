export function Navbar(): HTMLElement {
  const nav = document.createElement('nav');
  nav.className = 'bg-[#141414] text-white md:pt-14 pt-6 px-6 md:px-14 flex items-center justify-between z-10 relative';

  // Logo
  const logo = document.createElement('img');
  logo.src = 'assets/icons/logo.svg';
  logo.alt = 'Logo';
  logo.className = 'h-1/2 w-auto';

  const logoLink = document.createElement('a');
  logoLink.href = '/';
  logoLink.appendChild(logo);
  nav.appendChild(logoLink);

  // Links container (desktop)
  const linksContainer = document.createElement('div');
  linksContainer.className = 'hidden md:flex gap-6';

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

  // Botón de menú para móvil
  const menuButton = document.createElement('button');
  menuButton.className = 'md:hidden';
  menuButton.setAttribute('aria-label', 'Open menu');

  const menuIcon = document.createElement('img');
  menuIcon.src = 'assets/icons/menu.svg';
  menuIcon.alt = 'Menu';
  menuIcon.className = 'w-6 h-6';
  menuButton.appendChild(menuIcon);

  nav.appendChild(menuButton);

  // Links móviles
  const mobileLinksContainer = document.createElement('div');
  mobileLinksContainer.className =
    'hidden absolute top-full right-0 bg-[#141414] w-full flex flex-col gap-4 p-6 z-30';
  links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.hash;
    a.textContent = link.text;
    a.className = 'hover:underline';
    mobileLinksContainer.appendChild(a);
  });
  nav.appendChild(mobileLinksContainer);

  // Toggle mobile menu
  menuButton.addEventListener('click', () => {
    mobileLinksContainer.classList.toggle('hidden');
  });

  return nav;
}
