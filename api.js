const loadApi =() =>{
    fetch('https://api.kanye.rest/').
    then(res => res.json()). 
    then(data=>fetchData(data) );
    
}
// loadApi();
const fetchData=(data)=>{
    console.log(data.quote);
    const display = document.getElementById('quotes');
    display.innerText=data.quote;
}
document.getElementById('press').addEventListener('click',()=>{

  loadApi();
})