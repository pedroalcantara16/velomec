function logar(){
    firebase.auth().signInWithEmailAndPassword("rogeriomecanico123@hotmail.com", "#ADMvelomec01").then(response =>{
        console.log("success", response)
    }).catch(error => {
      console.log("error", error)
    });
    //window.location.href=""
}

