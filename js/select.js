const body = document.querySelectorAll('select');
    body.forEach((el)=>{       
        el.style.display = "none";
        const selectName = el.name;
        const option = el.querySelectorAll('option');
        let addedRow = '';
        if (el.className === 'contact-form__select_row contact-form__select') {
           addedRow = ' contact-form__select_row'
        }
        if(el.className != 'contact-form__select_row contact-form__select'){
            addedRow = '';
        }
        const arr = [...option].map((item)=> {
            return (
                `<div class="select__item">${item.value}</div>`
            );
        })
        el.insertAdjacentHTML("beforebegin",`<div class="select${addedRow}"><div class="select__header"><span class="select__current">${selectName}</span><div class="select__wrapper-icon"><img class="select__icon" src="./img/Select-Icon.svg" alt="icon"></div></div><div class="select__body">${arr.join('')}</div></div>`)
    })
function runSelect () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }
    selectHeader.forEach(el => {
        el.addEventListener('click', selectToggle)
    });
    selectItem.forEach(el => {
        el.addEventListener('click', selectChoose)
    });
    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            selectCurrent = select.querySelector('.select__current');
        selectCurrent.innerText = text;
        selectCurrent.className += (' select__current_color');
        select.classList.remove('is-active');
    }
};
runSelect();
    