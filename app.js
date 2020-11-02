document.addEventListener('DOMContentLoaded', function(){

  const list = document.querySelector('#album-list ul');
  const forms = document.forms;

  // delete albums
  list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  // add albums
  const addForm = forms['add-album'];
  addForm.addEventListener('submit', function(e){
    e.preventDefault();

    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const albumName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add text content
    albumName.textContent = value;
    deleteBtn.textContent = 'delete';

    // add classes
    albumName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to DOM
    li.appendChild(albumName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  // hide albums
  const hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
  });

  // filter albums
  const searchBar = forms['search-albums'].querySelector('input');
  searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const albums = list.getElementsByTagName('li');
    Array.from(albums).forEach((album) => {
      const title = album.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(e.target.value) != -1){
        album.style.display = 'block';
      } else {
        album.style.display = 'none';
      }
    });
  });

  // tabbed content
  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
      const targetPanel = document.querySelector(e.target.dataset.target);
      Array.from(panels).forEach((panel) => {
        if(panel == targetPanel){
          panel.classList.add('active');
        }else{
          panel.classList.remove('active');
        }
      });
    }
  });

})
