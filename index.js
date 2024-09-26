const rubricsCube = document.querySelector('.rubrics-cube');
const rubrics = document.querySelectorAll('.rubric');

rubrics.forEach(rubric => {
  rubric.addEventListener('mouseover', () => {
    rubricsCube.style.transform = `rotateY(${rubric.dataset.rotation}deg)`;
  });
});