function gotologin() {
location.href='pades/login/login.html'
}

function handleSubmit(){
    const label = document.getElementById('clinic1').value

    localStorage.setItem('label',label)
    return ;
    
}




window.addEventListener('load',()=>{
    const params = (new URL(document.location)).searchParams;
    const clinic = params.get('clinic');

    document.getElementById('ClinicsNames').innerHTML = clinic
})
