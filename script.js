function showMessage(type) {

    const message = document.getElementById("lab-message");

    message.style.display = "block";

    if (type === "password") {

        message.innerHTML =
            "🔐 Próximamente podrás introducir una contraseña y analizar su seguridad directamente en tu navegador.";

    }

    if (type === "hash") {

        message.innerHTML =
            "🔎 Próximamente podrás escribir un texto y comprobar cómo funciona un hash SHA-256.";

    }

    if (type === "phishing") {

        message.innerHTML =
            "🎣 Próximamente podrás analizar un mensaje y aprender a identificar las señales de phishing.";

    }

}