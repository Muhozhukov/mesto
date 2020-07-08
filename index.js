const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditCloseButton = document.querySelector('.modal-form__close-button');
const profileEditSaveButton = document.querySelector('.modal-form__submit-button');
const profileEditorWindow = document.querySelector('.modal-container');

let nameInput = document.querySelector('.modal-form__input-name');
let jobInput = document.querySelector('.modal-form__input-profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');


function openEditor() {
  profileEditorWindow.classList.add('modal-container_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}
profileEditButton.addEventListener('click', openEditor);

function closeEditor () {
  profileEditorWindow.classList.remove('modal-container_opened');
}
profileEditCloseButton.addEventListener('click', closeEditor);


function saveEditorChanges() {
  profileEditorWindow.classList.remove('modal-container_opened');
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
}

function saveByEnter() {
  if (e.keyCode === 13) {
    saveEditorChanges();
  }
}

profileEditSaveButton.addEventListener('click', saveEditorChanges);
profileEditSaveButton.addEventListener('keydown', saveByEnter);


function formSubmitHandler (evt) {
    evt.preventDefault();
}

profileEditorWindow.addEventListener('submit', formSubmitHandler);
