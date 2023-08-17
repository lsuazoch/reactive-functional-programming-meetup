const { fromEvent } = rxjs;
const { debounceTime, pluck, distinctUntilChanged, switchMap } = rxjs.operators;

const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');

fromEvent(searchInput, 'input')
    .pipe(
        debounceTime(500),  // Espera 500ms después de cada entrada
        pluck('target', 'value'),  // Extrae el valor del input
        distinctUntilChanged(),  // Sólo emite si el valor ha cambiado
        switchMap(searchTerm => {
            if (!searchTerm.trim()) {
                return Promise.resolve([]);
            }
            return fetch(`http://localhost:3100/search?q=${searchTerm}`).then(res => res.json());
        })
    )
    .subscribe(movies => {
        results.innerHTML = movies.map(movie => `<li>${movie.title}</li>`).join('');
    });
