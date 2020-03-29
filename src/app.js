const $input = document.querySelector('.file-input');
const $wrap = document.querySelector('.file');
const $msg = document.querySelector('.msg');
const apiUrl = 'https://api.imgur.com/3/image';
const clientId = '741c2aa90ed7461';

$input.addEventListener('change', event => {
  const formData = new FormData();
  formData.append('image', event.target.files[0]);

  $wrap.classList.add('active');
  fetch(apiUrl, {
    method: 'POST',
    headers: new Headers({
      Authorization: `Client-ID ${clientId}`,
    }),
    body: formData,
  })
    .then(res => res.json())
    .then(data => {
      $wrap.classList.remove('active');
      console.log(data);
      $msg.innerHTML = `<a href="${data.data.link}">${data.data.link}</a>`;
    });
});
