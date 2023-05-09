function savedata() {
  let uname = document.getElementById("exampleInputname").value;
  let phone = document.getElementById("exampleInputphone").value;
  let time = document.getElementById("exampleInputtime").value;
  let date = document.getElementById("exampleInputdate").value;

  fetch(
    "https://hakthin-project-default-rtdb.firebaseio.com/reservation.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: uname,
        phone: phone,
        time: time,
        date: date,
      }),
    }
  );
  console.log(uname);
  console.log(phone);
  console.log(time);
  console.log(date);
}


// this is code to return data in firebase 


/* let asidebar = document.getElementById("asidebar");
let res = [];

let myRequesr = new XMLHttpRequest();
myRequesr.open(
  "GET",
  "https://hakthin-project-default-rtdb.firebaseio.com/clinec.json"
);
myRequesr.send();
console.log(myRequesr);

myRequesr.onreadystatechange = function () {
  console.log(myRequesr.readyState);
  console.log(myRequesr.status);

  if (myRequesr.readyState === 4 && myRequesr.status === 200) {
    //console.log(this.responseText)
    let jsData = JSON.parse(this.responseText);
    //console.log(jsData)
    for (let i = 0; i < 4; i++) {
      res[i] = jsData[i].name;

      /*  let repoName=document.createTextNode(jsData[i].name) 
            asidebar.appendChild(repoName);

            document.body.appendChild(asidebar)*/
 /*        }
        console.log(res[0]);
  }
};
 */ */
/*     fetch('https://hakthin-project-default-rtdb.firebaseio.com/clinec.json').then((result)=>{
       console.log(result);
       let myData = result.json();
       console.log(myData);
       return myData;
    })
    .then((full) => {
        full.length = 10 ;
        return full 
    })
    .then((ten)=>{
        console.log(ten[0].name);
    }); 
 */
 let result = [];
function load(){
    fetch('https://hakthin-project-default-rtdb.firebaseio.com/clinec.json')
     .then((response)=>{
        if(response.ok){
            return response.json()
            
        }
     }).then((data)=>{

        console.log(data)
         let result = [];
        for(const id in data){
            result.push({
                id:id,
                name:data[id].name,
                
            })
            
        }
        console.log(result) 
        
        
        this.result = result
    })
    

}
 

/*  const label = localStorage.getItem('label')

 document.getElementById('ClinicsNames').innerHTML=label */
