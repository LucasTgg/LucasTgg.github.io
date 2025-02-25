function updateWave() {
    // Dividiendo scrollY por 200 para que el efecto sea 10 veces más lento
    let scrollPos = window.scrollY / 60;
    let wavePath = document.getElementById("wavePath");

    let newD = `M0,${160 + Math.sin(scrollPos) * 10}
                L80,${149.3 + Math.sin(scrollPos + 1) * 8}
                C160,${139 + Math.sin(scrollPos + 2) * 10},
                320,${117 + Math.sin(scrollPos + 3) * 12},
                480,${138.7 + Math.sin(scrollPos + 4) * 10}
                C640,${160 + Math.sin(scrollPos + 5) * 8},
                800,${224 + Math.sin(scrollPos + 6) * 6},
                960,${224 + Math.sin(scrollPos + 7) * 8}
                C1120,${224 + Math.sin(scrollPos + 8) * 10},
                1280,${160 + Math.sin(scrollPos + 9) * 12},
                1360,${128 + Math.sin(scrollPos + 10) * 8}
                L1440,${96 + Math.sin(scrollPos + 11) * 6}
                V320H0Z`;

    wavePath.setAttribute("d", newD);
}

// Escuchar el evento scroll para PC
window.addEventListener("scroll", function () {
    requestAnimationFrame(updateWave);
});

