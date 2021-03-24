'use strict';

const datumEl = document.querySelector('.msg');
const datumNow = dayjs();
const datumVoleb = dayjs('2021-10-05');

if (datumNow < datumVoleb) {
  datumEl.textContent = 'ANO';
  datumEl.classList.add('msg--valid');
} else {
  datumEl.textContent = 'NE';
  datumEl.classList.add('msg--invalid');
}
