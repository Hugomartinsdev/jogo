function createIntroText() {
    const introText = document.querySelector(".intro-text");
    const letters = "Felipe, Hugo, Ana, Yuri".split("");
  
    introText.innerHTML = letters
      .map(
        (letter) =>
          `<span class="intro-letter" style="opacity: 0">${letter}</span>`
      )
      .join("");
  }
  const LETTER_DURATION = 500; // em milissegundos
  let introTextIndex = 0;
  let introTextTimer = null;
  function animateLetter() {
    const introLetters = document.querySelectorAll(".intro-letter");
  
    // Define a opacidade da letra atual para 0
    introLetters[introTextIndex].style.opacity = 0;
  
    // Move o índice para a próxima letra
    introTextIndex++;
    if (introTextIndex >= introLetters.length) {
      introTextIndex = 0;
    }
  
    // Define a opacidade da próxima letra para 1
    introLetters[introTextIndex].style.opacity = 1;
  
    // Aguarda a duração da animação antes de chamar novamente
    introTextTimer = setTimeout(animateLetter, LETTER_DURATION);
  }
  function startAnimation() {
    // Cria o texto introdutório se ainda não existir
    createIntroText();
  
    // Inicia a animação de letra
    animateLetter();
  }
  const introBtn = document.getElementById("intro-btn");
  introBtn.addEventListener("click", startAnimation);
          