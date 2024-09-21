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
                El 21 de septiembre, las flores amarillas llenan el aire con esperanza, amor y gratitud. Un símbolo de lo nuevo, lo cálido y lo brillante. Hoy quiero agradecerte por estar en mi vida.
            </p>
            <button class="next-button" id="nextButton">Siguiente</button>
        </div>
        
        <!-- Sección del Mensaje -->
        <div class="section hidden" id="message">
            <h2 class="message-title">Lo mucho que te amo</h2>
            <p class="message-text">
                Gracias por aparecer en mi vida, por iluminar mis días como un rayo de sol y hacer que todo sea mejor. Hoy, en el Día de las Flores Amarillas, te agradezco por ser esa persona especial que llena mi corazón de alegría.
            </p>
            <button class="next-button" id="poemButton">Para ti</button>
        </div>
        
        <!-- Sección del Poema y la Imagen -->
        <div class="section hidden" id="poemSection">
            <h2 class="poem-title">Un Poema para Ti</h2>
            <p class="poem">
                Como las flores amarillas en primavera,<br>
                iluminas mi mundo con tu belleza,<br>
                cada día a tu lado es una bendición,<br>
                y en tu amor encuentro mi inspiración.
            </p>
            <img src="https://i.imgur.com/YwSTQJg.jpg" alt="Flores Amarillas" class="flower-image">
        </div>
    </div>

    <script>
        const nextButton = document.getElementById('nextButton');
        const introSection = document.getElementById('intro');
        const messageSection = document.getElementById('message');
        const poemButton = document.getElementById('poemButton');
        const poemSection = document.getElementById('poemSection');

        // Animación al hacer clic en "Siguiente" (para el mensaje de amor)
        nextButton.addEventListener('click', () => {
            introSection.classList.add('fade-out');
            setTimeout(() => {
                introSection.classList.add('hidden');
                messageSection.classList.remove('hidden');
                messageSection.classList.add('fade-in');
            }, 1000);
        });

        // Animación al hacer clic en "Para ti" (para el poema y la imagen)
        poemButton.addEventListener('click', () => {
            messageSection.classList.add('fade-out');
            setTimeout(() => {
                messageSection.classList.add('hidden');
                poemSection.classList.remove('hidden');
                poemSection.classList.add('fade-in');
            }, 1000);
        });
    </script>
</body>
</html>
