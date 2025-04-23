export function mostrarNumeros(inicio, fin) {
    for (let i = inicio; i >= fin; i--) {
        console.log(i);
    }
}

mostrarNumeros(0, 1000);
mostrarNumeros(1000, 0);
mostrarNumeros(100, 100);
mostrarNumeros("100", 300);
