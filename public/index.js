
    var search = document.getElementById("navbar-search");
    let position = document.getElementById("nav-collapse");
    var cloneSearch = search.cloneNode(true); 
    
    cloneSearch.id = "navbar-search-2";
    cloneSearch.classList.remove("mobile-search");
    
    var refernceChild = position.children[1];
    position.insertBefore(cloneSearch, refernceChild);
    
    // let button = document.getElementById("login-button");
    // let clonedbtn = button.cloneNode(true);
        
    