const registerBtn = document.getElementById('register-btn')
const loginBtn = document.getElementById('login-btn')

const registerModal = document.querySelector('.register')
const loginModal = document.querySelector('.login')

const closeLoginModalBtn = loginModal.querySelector('.modal__wrapper-btn')
const closeRegisterModalBtn = registerModal.querySelector('.modal__wrapper-btn')



registerBtn.addEventListener('click', () => {
  addModalActiveClass(registerModal, 'register')
});

loginBtn.addEventListener('click', () => {
  addModalActiveClass(loginModal, 'login')
});

closeLoginModalBtn.addEventListener('click', () => {
  removeActiveClass(loginModal, 'login')
});

closeRegisterModalBtn.addEventListener('click', () => {
  removeActiveClass(registerModal, 'register')
});

function addModalActiveClass(modal, nameOfModal) {
  modal.classList.add(`${nameOfModal}--active`)
}

function removeActiveClass(modal, nameOfModal) {
  modal.classList.remove(`${nameOfModal}--active`)
}



//сократить код
//добавить функционал хранения в localStorage
//когда авторизован - нет кнопок register login, вы не авторизованы
//появляется кнопка выйти
//запоминать данные и при входе пользоваться localStorage данными, чтобы авторизоваться(после регистрации)
//если уже вошел, то при перезагрузи страницы все будет ок, будет алексей
//попробовать потом создать имиитацию сервера, а потом вообще создать сервер, а потом вообще создать БД, где все это хранить