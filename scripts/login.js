
firebase.auth().onAuthStateChanged(user => {
  if(user){
    window.location.href="../menu.html"
  }
});


function logar(){
  let login = document.getElementById('id-usuario').value;
  let senha = document.getElementById('id-senha').value; 
  firebase.auth().signInWithEmailAndPassword(login, senha).then(response =>{
    window.location.href="../menu.html"
    //console.log("success", response)
  }).catch(error => {
    alert("Email ou senha incorretos!");
    //console.log("error", error)
  });
  

}




