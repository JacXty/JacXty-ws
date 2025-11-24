interface ModalOptions {
  content?: string | HTMLElement;
  size?: string;
  animation?: string;
  bgColor?: string; // color de fondo del modal
}

export function Modal({
  content = '',
  size = 'max-w-3xl',
  animation = 'animate__zoomIn',
  bgColor = 'white', // color de fondo por defecto
}: ModalOptions = {}) {
  const overlay = document.createElement('div');
  overlay.className =
    'fixed inset-0 flex items-center justify-center bg-black/55 z-50';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.55)';

  const modal = document.createElement('div');
  // ✅ Usamos bgColor como prop y mantenemos defaults
  modal.className = `overflow-y-auto h-full rounded-lg shadow-xl w-full mx-4 p-6 relative ${size} animate__animated ${animation}`;
  modal.style.backgroundColor = bgColor;

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '×';
  closeBtn.className =
    'absolute top-2 right-2 text-2xl font-bold text-gray-700 hover:text-gray-900';
  closeBtn.addEventListener('click', () => {
    document.body.style.overflow = '';
    document.body.removeChild(overlay);
  });

  if (typeof content === 'string') {
    modal.innerHTML = content;
  } else if (content instanceof HTMLElement) {
    modal.appendChild(content);
  }

  modal.appendChild(closeBtn);
  overlay.appendChild(modal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      document.body.style.overflow = '';
      document.body.removeChild(overlay);
    }
  });

  document.body.style.overflow = 'hidden';
  document.body.appendChild(overlay);

  return { overlay, modal, closeBtn };
}
