function checkStorageForName() {
    let nameInStorage = localStorage.getItem("name");
    if (nameInStorage) {
      document.getElementById("name").value = nameInStorage;
    }
  }
  
  const saveLocal = function () {

    let pName = document.getElementById("saveItems");
    let utente = document.getElementById("name").value; 

    localStorage.setItem("name", utente);
    document.getElementById("name").value = "";

    
    
    pName.innerText = utente;

    checkStorageForName();

    
  };
  
  const removeLocal = function () {
    let pName = document.getElementById("saveItems");

    localStorage.removeItem("name");
    document.getElementById("name").value = "";

   pName.innerText = "";

    checkStorageForName();
  };
  
  window.addEventListener("DOMContentLoaded", () => {
    checkStorageForName();
  
    const btnSave = document.getElementById("save");
    btnSave.onclick = saveLocal;
  
    const btnRemove = document.getElementById("remove");
    btnRemove.onclick = removeLocal;

  });

let count = sessionStorage.getItem('count') || 0;

window.onload = setInterval(function() {
  count++;
  sessionStorage.setItem('count', count);
}, 1000);
  











