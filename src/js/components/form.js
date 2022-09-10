import Inputmask from "inputmask";
import JustValidate from 'just-validate';


// Inputmask
const form = document.querySelector('.modal__form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

// валидация
const validate = new JustValidate('.modal__form');
validate
  .addField('input[name="name"]', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Введите больше 3-х символов',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Введите менее 15-ти символов',
    },
  ])
  .addField('input[name="phone"]', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный номер телефона',
    },
  ])
  .addField('input[name="email"]', [
    {
      rule: 'email',
      errorMessage: 'Введите верный e-mail',
    },
  ])
  .onSuccess((event) => {
    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });
