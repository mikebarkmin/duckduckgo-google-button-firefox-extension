const li = document.createElement('li');
li.className = 'zcm__item';

const a = document.createElement('a');
a.className = 'zcm__link';
a.innerHTML = 'Google';
a.href = 'https://google.com/';
li.appendChild(a);

function update() {
  a.href =
    'https://google.com/search?q=' +
    encodeURIComponent(document.querySelector('#search_form_input').value);
}

a.addEventListener('mousedown', update, false);
a.addEventListener('keydown', update, false);

document.querySelector('#duckbar_static').appendChild(li);
