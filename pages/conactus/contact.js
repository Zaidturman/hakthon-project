

function requstdata(){
    let uname = document.getElementById("exampleInputname").value;
    let ef = document.getElementById("exampleInputEmailfrom").value;
    let et = document.getElementById("exampleInputEmailto").value;
    let m = document.getElementById("exampleInputmassage").value;

    
    fetch("https://hakthin-project-default-rtdb.firebaseio.com/requst.json" ,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name:uname,
        EmailFrom:ef,
        EmailTo:et,
        Massage:m,
      })
      
    });
    console.log(uname)
      }