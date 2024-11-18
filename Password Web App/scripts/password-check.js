const pass = document.getElementById('password-check');
const msg = document.getElementById('message');
let str = document.getElementById('strenght');

pass.addEventListener('input', () => {
  if (pass.value.length > 0) {
    msg.style.display = 'block';
  } else {
    msg.style.display = 'none';
  }

  if (pass.value.length < 6) {
    str.innerHTML = 'weak.';
    pass.style.borderColor = '#FF0A23';
    msg.style.color = '#FF0A23';
  } else if (pass.value.length >= 6 && pass.value.length < 12) {
    str.innerHTML = 'medium.';
    pass.style.borderColor = '#FBBC0E';
    msg.style.color = '#FBBC0E';
  } else if (pass.value.length >= 12) {
    str.innerHTML = 'strong.';
    pass.style.borderColor = '#00E038';
    msg.style.color = '#00E038';
  }
})