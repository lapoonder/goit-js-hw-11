'use strict';
import fetchImages from './js/pixabay-api.js';
import { message, checkData, galleryShow } from './js/render-functions.js';

const btnSearch = document.querySelector('.btn-search'),
  searchInputField = document.querySelector('.search-img'),
  gallerySite = document.querySelector('.gallery'),
  loaderImages = document.querySelector('.loader');

btnSearch.addEventListener('click', checkInput);

function checkInput(e) {
  e.preventDefault();
  const searchText = searchInputField.value.trim(); // Поисковый запрос пользователя
  searchInputField.value = ''; // Очистка поля ввода поискового запроса
  gallerySite.innerHTML = ''; // Удаление текущей галлереи изображений с сайта
  loaderImages.style.display = 'block'; // Отоброзить прогресс загрузки результатов поиска
  if (!searchText.length) {
    message('Sorry, search query cannot be empty!'); // Если поле поиска пустое
  } else {
    fetchImages(searchText)
      .then(data => checkData(data)) // Обработка введенного запроса
      .then(gallery => {
        loaderImages.style.display = 'none'; // Скрыть прогресс загрузки результатов поиска
        gallerySite.innerHTML = gallery; // Отобразить найденные изображения
        galleryShow.refresh(); // Обновление компонента просмотра увеличенных изображений
      })
      .catch(error => {
        message(error); // Если ничего не найдено в базе изображений, отобразить сообщение об отсутствии результатов поиска по запросу
        loaderImages.style.display = 'none'; // Скрыть прогресс загрузки результатов поиска
      });
  }
}
