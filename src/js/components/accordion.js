const accordion = document.querySelector('.accordion');
const accordionItems = accordion.querySelectorAll('.accordion__item');

// функция проходит по всем (кроме кликнутого) элементам аккордеона и закрывает их
function closeAccordionItems(items, evt) {
  items.forEach(el => {
    const content = el.querySelector('.accordion__content');
    if ((el.classList.contains('open') && (el !== evt.currentTarget))) {
      el.classList.remove('open');
      content.style.maxHeight = null;
    }
  });
};

accordionItems.forEach(item => {
  item.addEventListener('click', (e) => {
    closeAccordionItems(accordionItems, e);
    const self = e.currentTarget;
    const target = e.target;
    // проверка для того, чтобы аккордеон не закрывался по клику на текст, а только при клике на button
    if (!target.classList.contains('accordion__content')) {
      const control = self.querySelector('.accordion__button');
      const content = self.querySelector('.accordion__content');
      self.classList.toggle('open');
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    }
  });
});
