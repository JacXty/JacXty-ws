// ts/router.ts
export function setupRouter(routes: { [key: string]: () => void }) {
    function onRouteChange() {
        const path = window.location.pathname; // Ej: '/' o '/about'

        if (routes[path]) {
            routes[path]();
        } else {
            console.warn('Route not found:', path);
        }
    }

    window.addEventListener('popstate', onRouteChange); // Volver atrás/adelante
    window.addEventListener('load', onRouteChange);
}

// Navegar a otra ruta
export function navigateTo(path: string) {
    window.history.pushState({}, '', path);
    const event = new PopStateEvent('popstate');
    window.dispatchEvent(event);
}
