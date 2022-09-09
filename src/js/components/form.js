import Inputmask from "inputmask";

// Inputmask
const form = document.querySelector('.modal__form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);
