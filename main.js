document.getElementById("email-link").setAttribute("href", atob('bWFpbHRvOnR5bGVyQHR3cmlnaHQudGVjaA=='))


var theme = "";

window.onload = function () {
    if (!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = "dark";
    }else {
        theme = "light";
    }
    toggleTheme();
}

function toggleTheme() {
    if (theme == "light") {
        theme = "dark";
        document.documentElement.style.setProperty('--text-color', 'white'); 
        document.documentElement.style.setProperty('--overlay-color', 'rgba(0, 0, 0, 0.5)');
        document.documentElement.style.setProperty('--footer-color', '#aaa');
        document.documentElement.style.setProperty('--icon-hover-color', '#ccc');    
    }else {
        theme = "light";
        document.documentElement.style.setProperty('--text-color', 'black'); 
        document.documentElement.style.setProperty('--overlay-color', 'rgba(255, 255, 255, 0.5)');
        document.documentElement.style.setProperty('--footer-color', '#333');
        document.documentElement.style.setProperty('--icon-hover-color', '#333');  
    }
}