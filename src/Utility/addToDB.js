const getStoredApp = () => {

    const storedAppSTR = localStorage.getItem("appList");

    if (storedAppSTR){
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;
    }
    else{
        return [];
    }

}

const addToStoredDB = (id) => {
    const storedAppData = getStoredApp();

    if (storedAppData.includes(id)) {
        alert("id already exists")
    }
    else{
        storedAppData.push(id);

        const data = JSON.stringify(storedAppData);
        localStorage.setItem("appList", data)
    }

}

const removeFromLocalStorage = id => {
    const storedApp = getStoredApp()
     const remainingApp = storedApp.filter(storedId =>storedId !== id);
     localStorage.setItem("appList", JSON.stringify(remainingApp))
}

export {addToStoredDB, getStoredApp, removeFromLocalStorage};