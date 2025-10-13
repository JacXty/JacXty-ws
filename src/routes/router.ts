export function setupRouter(routes: { [key: string]: () => void }) {
    function onRouteChange() {
        const hash = window.location.hash || '#home';
        if (routes[hash]) {
            routes[hash]();
        }
    }

    window.addEventListener('hashchange', onRouteChange);
    window.addEventListener('load', onRouteChange);
}
