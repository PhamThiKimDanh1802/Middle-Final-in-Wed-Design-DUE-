const deleteButton = document.querySelector('.delete-button');
const deleteText = document.querySelector('.delete-text');
const trashIcon = document.querySelector('.trash-icon');

deleteButton.addEventListener('click', () => {
  // Hiệu ứng di chuyển nhanh hơn khi click
  deleteText.style.transition = 'all 0.1s ease';
  deleteText.style.transform = `translateX(-${trashIcon.getBoundingClientRect().left}px)`;
});