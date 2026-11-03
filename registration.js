'use strict';
// Paste the Web app URL from registration-backend.gs here (it ends in /exec).
const ENDPOINT = 'https://script.google.com/macros/s/AKfycbwgRf64KWTXMpoIkuI_9uyEOsbxj2Z_XLWfYRHl45_lAchwDmZ7v2DG4on1NmWxlE4q/exec';

const form = document.querySelector('#reg-form');
if (form) {
  const status = document.querySelector('#reg-status');
  const submit = form.querySelector('.reg-submit');
  const position = form.querySelector('#f-pos');
  const positionOther = document.querySelector('#pos-other-wrap');
  const dietary = document.querySelector('#dietary-wrap');
  const dayBoxes = form.querySelectorAll('input[name="days"]');

  const showStatus = (message, kind) => {
    status.textContent = message;
    status.className = 'reg-status ' + kind;
    status.hidden = false;
  };

  position.addEventListener('change', () => {
    positionOther.hidden = position.value !== 'Other';
  });

  form.querySelectorAll('input[name="dinner"]').forEach(radio => {
    radio.addEventListener('change', () => {
      dietary.hidden = form.elements.dinner.value !== 'Yes';
    });
  });

  const checkDays = () => {
    const any = Array.from(dayBoxes).some(box => box.checked);
    dayBoxes[0].setCustomValidity(any ? '' : 'Select at least one day.');
  };
  dayBoxes.forEach(box => box.addEventListener('change', checkDays));
  checkDays();

  form.addEventListener('submit', async event => {
    event.preventDefault();
    checkDays();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (ENDPOINT.indexOf('PASTE') !== -1) {
      showStatus('Registration is not open yet.', 'error');
      return;
    }
    submit.disabled = true;
    showStatus('Sending...', 'info');
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        body: new URLSearchParams(new FormData(form))
      });
      const result = await response.json();
      if (!result.ok) throw new Error(result.error || 'Request failed');
      form.reset();
      status.hidden = true;
      form.hidden = true;
      const done = document.createElement('div');
      done.className = 'notice';
      done.setAttribute('role', 'status');
      done.innerHTML = '<strong>Thank you for registering.</strong> If you selected the conference dinner ($50), payment instructions will be sent to the email address you provided.';
      form.insertAdjacentElement('afterend', done);
      done.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (error) {
      submit.disabled = false;
      showStatus('The registration could not be sent. Please try again in a few minutes.', 'error');
    }
  });
}
