var scriptURL = 'http://127.0.0.1:5500/plugin.main.js';
var cssURL = 'http://127.0.0.1:5500/plugin.main.css';

function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
}
function loadCss() {
    const primaryColor= document.querySelector('#app-root').getAttribute('primary-color')||''
    document.documentElement.style.setProperty("--app-primary-color", primaryColor);
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = cssURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(link);
}
function createElements(){
    var button=document.createElement('button')
    button.type='button'
    button.id='app-float-button'
    button.innerHTML="+"

    var body=document.getElementsByTagName('body')[0];
    body.appendChild(button)
}

export const init=()=>{
    if (import.meta.env.MODE !== "development"){
        window.addEventListener('load',()=>{
            console.log("production")
            createElements()
            loadScript()
            loadCss()
        })


    }
}

