export function Soon() {

  const main = document.getElementById('main-content')!;
  main.innerHTML = '';

  document.body.style.overflow = 'hidden'; // permite scroll si se necesita
  main.style.overflow = 'hidden'; // el contenedor principal no agrega scroll
  main.style.minHeight = '100vh';
  main.style.height = '100%';

  // --- SECTION ---
  const section = document.createElement('section');
  section.id = 'soon';
  section.className = `
    relative flex flex-col items-center justify-center 
    text-center text-white overflow-hidden
    // CAMBIO CLAVE: Fondo negro uniforme (#000 o #111) en lugar de degradado
    bg-[#141414]
    h-screen w-full
  `;



  // --- TITLES ---
  const soon = document.createElement('h3');
  soon.textContent = 'Soon . . .';
  soon.className = 'text-base font-medium mb-1 tracking-widest text-white/80 z-10'; // Ajuste de tamaño y tracking

  const title = document.createElement('h2');
  title.textContent = 'WE ARE WORKING ON IT';
  title.className = 'text-4xl md:text-5xl font-extrabold mb-1 uppercase z-10'; // Ajuste de tamaño y espaciado

  const subtitle = document.createElement('p');
  subtitle.textContent = '. . .';
  subtitle.className = 'absolute text-[12rem]';
  subtitle.style.right = '35%'; 
  // --- IMAGE ---
  const image = document.createElement('img');
  image.src = '/foxcode.png';
  image.alt = 'soon';
  image.className = `
    // Ajuste de tamaño: un poco más pequeño
    absolute
    w-90 md:w-100 
    // La imagen en la original NO está volteada
    // He quitado 'scale-x-[-1]'
    mb-10 relative z-10
    drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]  w-1/2 md:w-1/3 scale-x-[-1]
    filter brightness-[0.2]
  `;

  // --- DOTS (Puntos de Carga) ---
  // La imagen original NO usa el texto ". . .". Usa tres puntos circulares separados.
  // Vamos a replicar los tres puntos con un div y spans.
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'flex justify-center items-center space-x-3 mb-12 relative z-10';
  
  // Puedes usar este CSS para la animación de carga, pero para la estática replicamos los puntos:
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement('span');
    dot.className = 'w-2 h-2 rounded-full bg-white/70 opacity-100 transition-opacity duration-500';
    // Si quieres la animación, podrías añadir una clase de Tailwind como:
    dot.className = 'animate-[pulse_1.5s_infinite]';
    dotsContainer.appendChild(dot);
  }

  // --- BUTTON (Llamado a la Acción) ---
  const button = document.createElement('button');
  // CAMBIO CLAVE: Texto en español "Ponte en Contacto"
  button.textContent = 'Ponte en Contacto'; 
  button.className = `
    text-white/80 font-normal text-base relative z-10
    // Estilo de la línea debajo del texto (border-bottom)
    border-b border-white/80 pb-1 
    hover:text-white hover:border-white
    focus:outline-none transition-all duration-300
    animate__animated animate__pulse
  `;
  button.setAttribute('aria-label', 'Go to Contact page');
  button.addEventListener('click', () => {
    window.location.href = '/contact'; 
  });
  // --- APPEND ---

  section.appendChild(soon);
  section.appendChild(title);
  section.appendChild(subtitle);
  section.appendChild(image);
  section.appendChild(dotsContainer); // Usamos el nuevo contenedor de puntos
  section.appendChild(button);
  main.appendChild(section);
}
