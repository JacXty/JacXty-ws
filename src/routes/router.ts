// ts/router.ts
export function setupRouter(routes: { [key: string]: () => void }) {
    function onRouteChange() {
        const path = window.location.pathname; // Ej: '/' o '/about'
        const route = routes[path];

        if (route) {
            route();
        } else if (routes['/404']) {
            console.warn(`Ruta no encontrada: "${path}". Mostrando /404.`);
            routes['/404']();
        } else {
            console.error(`Ruta no encontrada: "${path}" y no hay vista /404 definida.`);
        }
    }

    window.addEventListener('popstate', onRouteChange);
    window.addEventListener('load', onRouteChange);
}

// Navegar a otra ruta
export function navigateTo(path: string) {
    window.history.pushState({}, '', path);
    const event = new PopStateEvent('popstate');
    window.dispatchEvent(event);
}
