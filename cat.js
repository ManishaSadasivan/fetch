async function search(){

    const response=await fetch("https://aws.random.cat/meow");
    const data=await response.json();
    console.log(data);
   const url= data.file;
 
 document.getElementById("div").innerHTML=`
 <h1>Random Cat Image</h1><img id="catImg" width="100%" height="50%"src="${url}">
 `;
 
  }
  search();