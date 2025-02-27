document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

        const formData = new FormData(this);
        const jsonData = {};

        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        fetch("https://lucastgg.app.n8n.cloud/webhook-test/formulario-contacto", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jsonData)
        })
        .then(response => {
            if (!response.ok) throw new Error("Error en el servidor");
            return response.json();
        })
        .then(data => {
            console.log("Datos enviados correctamente:", data);
            alert("Formulario enviado con éxito");
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Hubo un error al enviar el formulario.");
        });
    });

    // Código para manejar la selección personalizada sin modificar el HTML
    const select = document.querySelector(".custom-select");
    const selectBtn = select.querySelector(".select-btn");
    const dropdown = select.querySelector(".select-dropdown");
    const options = dropdown.querySelectorAll(".option");
    const hiddenInput = document.getElementById("selectedValue");

    selectBtn.addEventListener("click", () => {
        select.classList.toggle("active");
    });

    options.forEach(option => {
        option.addEventListener("click", () => {
            if (!option.classList.contains("disabled")) {
                selectBtn.textContent = option.textContent;
                hiddenInput.value = option.dataset.value;
                select.classList.remove("active");
            }
        });
    });

    document.addEventListener("click", (e) => {
        if (!select.contains(e.target)) {
            select.classList.remove("active");
        }
    });
});
