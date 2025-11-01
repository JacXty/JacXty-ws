export function Button(text: string, onClick: () => void) {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    btn.addEventListener('click', onClick);
    return btn;
}
