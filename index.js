const formInput = document.querySelectorAll('.form-input');
const formSpan = document.querySelectorAll('.error-span');

formInput.forEach((e, i) => {
    e.addEventListener('blur', () => {
        if(!e.value) {
            formSpan[i].classList.add('reveal');
            e.classList.add('empty-input');
            
        } else if(e.id === 'email-address') {
            if (/\S+@\S+\.\S+/.test(e.value)) {
                e.classList.remove('empty-input');
                formSpan[i].classList.remove('reveal');
            } else {
                e.classList.add('empty-input');
                formSpan[i].classList.add('reveal');
            }
        } else {
            e.classList.remove('empty-input');
            formSpan[i].classList.remove('reveal');
        }

    })
})
