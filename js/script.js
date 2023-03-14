function checkStorageForName() {
    let nameInStorage = localStorage.getItem("name");
    if (nameInStorage) {
      document.getElementById("name").value = nameInStorage;
    }
  }
  
  const saveLocal = function () {
    let utente = document.getElementById("name").value; 
  
    localStorage.setItem("name", utente);
    checkStorageForName();
  };
  
  const removeLocal = function () {
    localStorage.removeItem("name");
    checkStorageForName();
  };
  
  window.addEventListener("DOMContentLoaded", () => {
    checkStorageForName();
  
    const btnSave = document.getElementById("save");
    btnSave.onclick = saveLocal;
  
    const btnRemove = document.getElementById("remove");
    btnRemove.onclick = removeLocal;
  });
  











