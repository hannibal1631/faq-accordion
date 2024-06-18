const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    this.classList.toggle('active');
    const plusIcon = this.querySelector('.plus-icon');
    const minusIcon = this.querySelector('.minus-icon');
    const answerDescription = this.nextElementSibling;
    console.log(plusIcon);
    console.log(minusIcon);

    if (answerDescription.style.maxHeight) {
      answerDescription.style.maxHeight = null;
      plusIcon.style.display = 'block';
      minusIcon.style.display = 'none';
    } else {
      answerDescription.style.maxHeight = answerDescription.scrollHeight + 'px';
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'block';
    }
  });
});
