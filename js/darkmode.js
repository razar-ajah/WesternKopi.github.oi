let darkmode = localStorage.getitem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () =>{
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmodeDarkmode = () =>{
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', 'null')
}


themeswitch.addEventListener("click", () => {
    if(darkmode !==" active"){
        enableDarkmode()
    }
    else{
        disableDarkmode()
    }
})
