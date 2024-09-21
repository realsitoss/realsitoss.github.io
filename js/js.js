<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Día de las Flores Amarillas</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <!-- Sección Inicial -->
        <div class="section" id="intro">
            <h1 class="title">21 de Septiembre - El Día de las Flores Amarillas</h1>
            <p class="description">
                El 21 de septiembre es el día perfecto para recordar que las flores amarillas simbolizan esperanza, amor y nuevas oportunidades. Quiero aprovechar este día especial para recordarte lo mucho que significas para mí.
            </p>
            <button class="next-button" id="nextButton">Siguiente</button>
        </div>
        
        <!-- Sección del Mensaje -->
        <div class="section hidden" id="message">
            <h2 class="message-title">Lo mucho que te amo</h2>
            <p class="message-text">
                Gracias por aparecer en mi vida, por iluminarla como el sol ilumina el día. Eres una de las mejores cosas que me han pasado, y no puedo estar más agradecido por tenerte a mi lado.
            </p>
            <button class="next-button" id="poemButton">Para ti</button>
        </div>
        
        <!-- Sección del Poema y la Imagen -->
        <div class="section hidden" id="poemSection">
            <h2 class="poem-title">Un Poema para Ti</h2>
            <p class="poem">
                Como las flores amarillas que en septiembre florecen,<br>
                llenas mi vida de colores y haces que mi corazón vuele.<br>
                Cada día a tu lado es un regalo,<br>
                y por eso siempre te amaré.
            </p>
            <img src="https://i.imgur.com/YwSTQJg.jpg" alt="Flores Amarillas" class="flower-image">
        </div>
    </div>

    <script>
        // Funciones de navegación entre secciones
        const nextButton = document.getElementById('nextButton');
        const introSection = document.getElementById('intro');
        const messageSection = document.getElementById('message');
        const poemButton = document.getElementById('poemButton');
        const poemSection = document.getElementById('poemSection');

        // Mostrar la sección de mensaje al hacer clic en "Siguiente"
        nextButton.addEventListener('click', () => {
            introSection.classList.add('hidden');
            messageSection.classList.remove('hidden');
        });

        // Mostrar la sección del poema al hacer clic en "Para ti"
        poemButton.addEventListener('click', () => {
            messageSection.classList.add('hidden');
            poemSection.classList.remove('hidden');
        });
    </script>
</body>
</html>
