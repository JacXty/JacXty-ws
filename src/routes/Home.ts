import { usePayloadApi } from '../hooks/usePayloadApi';

export async function Home() {
  const main = document.getElementById('main-content')!;
  main.innerHTML = '';

  const homeData = await usePayloadApi('pages/690bfd513e95b82f7f3059de?depth=2&draft=false&locale=undefined&trash=false');

  // Section contenedor principal
  const section = document.createElement('section');
  section.className = 'relative flex flex-col items-center justify-center text-white h-[calc(100vh-80px)] px-4';

  // Imagen absoluta centrada (vector.svg)
  const bgImage = document.createElement('img');
  bgImage.src = 'assets/icons/vector.svg';
  bgImage.alt = 'Vector background';
  bgImage.className = 'absolute md:-top-24 top-0 left-1/2 -translate-x-1/2 w-auto opacity-90 md:z-20';

  // Imagen al final a la derecha (vector2.svg)
  const rightImage = document.createElement('img');
  rightImage.src = 'assets/icons/vector2.svg';
  rightImage.alt = 'Vector right';
  rightImage.className = 'absolute right-0 bottom-[-1rem] w-auto opacity-80 z-20';

  // Contenedor de textos y botón
  const contentContainer = document.createElement('div');
  contentContainer.className = 'relative flex flex-col items-center justify-center w-full h-full md:z-30';

  // Subtítulo como hipervínculo
  const subtitle = document.createElement('a');
  subtitle.href = 'https://istdabloja.edu.ec/';
  subtitle.target = '_blank'; // para abrir en nueva pestaña
  subtitle.rel = 'noopener noreferrer';

  subtitle.textContent = homeData?.subtitle || 'Analista en Sistemas';

  subtitle.className = `
  animate__animated animate__fadeInDown
  text-lg md:text-xl font-medium
  underline
  absolute md:top-0 top-8 md:left-1/2 md:-translate-x-1/2`;


  // Título centrado en el div
  const title = document.createElement('h1');
  title.textContent = homeData?.title || 'WE ARE\nFULL SERVICE\nAGENCY';
  title.className = 'md:w-4/5 w-full md:leading-[6rem] leading-none text-2xl md:text-6xl font-bold whitespace-pre-line text-center font-semibold animate__animated animate__fadeInDown';

  // Párrafo a la derecha en escritorio, centrado en móvil
  const paragraph = document.createElement('p');
  paragraph.textContent = homeData?.description || 'Here the description';
  paragraph.className = `
    text-base md:text-sm max-w-md
    self-center md:self-end
    text-center md:text-right
    mb-4 md:mb-0
    md:py-10 py-16
    animate__animated animate__fadeInDown
  `;

  // Botón con icono centrado al final
  const button = document.createElement('button');
  button.className = `
    bg-transparent hover:opacity-80 transition cursor-pointer
    md:absolute md:bottom-18 bottom-24 md:left-1/2 md:-translate-x-1/2
    animate__animated animate__pulse animate__infinite
  `;
  button.setAttribute('aria-label', 'Go to About page');

  // Función para redireccionar a la página About
  button.addEventListener('click', () => {
    window.location.href = '/about'; // <- Aquí pones la URL de la página About
  });


  const icon = document.createElement('img');
  icon.src = 'assets/icons/down.svg';
  icon.alt = 'Scroll down';
  icon.className = 'w-10 h-10';
  button.appendChild(icon);

  // Agregar elementos al contenedor
  contentContainer.appendChild(subtitle);
  contentContainer.appendChild(title);
  contentContainer.appendChild(paragraph);
  contentContainer.appendChild(button);

  // Agregar elementos al section
  section.appendChild(bgImage);
  section.appendChild(rightImage);
  section.appendChild(contentContainer);
  main.appendChild(section);
}
