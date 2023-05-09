



function savedata(){
    let uname = document.getElementById("exampleInputname").value;
    let phone = document.getElementById("exampleInputphone").value;
    let time = document.getElementById("exampleInputtime").value;
    let date = document.getElementById("exampleInputdate").value;

    fetch("https://hakthin-project-default-rtdb.firebaseio.com/reservation.json" ,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name:uname,
        phone:phone,
        time:time,
        date:date,
      })
    });
    console.log(uname)
    console.log(phone)
    console.log(time)
    console.log(date)
      }


   
  
 /*  const result = [];
function loadClinic(){
    fetch('https://hakthin-project-default-rtdb.firebaseio.com/clinec.json')
     .then((response)=>{
        if(response.ok){
            return response.json()
            
        }
     }).then((data)=>{

        console.log(data)
         const result = [];
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
 */

 