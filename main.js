
let count = document.getElementById('count')
let inp = document.getElementById('inp')

fetch('https://restcountries.com/v3.1/all?fields=name,flags')
.then((data)=>{
    
    return data.json()
})
.then((item)=>{
    item.forEach((counts)=>{
        
        count.innerHTML += `<ul class="kolya">
 <li><img src="${counts.flags.png}"></li>
 <li>${counts.name.common}</li>
 </ul>` 
    })
    
})
.catch((err)=>{
    console.log(err);
    
})

inp.addEventListener('input', ()=>{
    let val = inp.value.toLowerCase()
    const name = document.querySelectorAll('.kolya')
    name.forEach((item)=>{
        if(item.lastElementChild.textContent.toLowerCase().includes(val)){
            item.classList.remove('hidden')
        }else{
            item.classList.add('hidden')

        }
    })
     
})




//  const getData = async () =>{

//      console.log('loading...');
//      const count = await fetch('https://restcountries.com/v3.1/all?fields=name,flags')
//    const name = await count.json()
   
//   return name

//  }
 
//  getData().then((data)=>{
  
//     data.innerHTML += `<ul class="kolya">
//      <li><img src="${data.flags.png}"></li>
//      <li>${data.name.common}</li>
//      </ul>` 
  
//  })

  
