const loadCountries =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data.name));
}
// loadCountries();
const displayCountries =countries=>{
    console.log(countries);
    const countriesDiv = document.getElementById('countries');
countries.forEach(country => {
    console.log(country);
    const div = document.createElement('div');
    div.classList.add('coutry')
    div.innerHTML=`
    <h3>Name of Country: ${country}</h3>
    <p>Capital Name : ${country.capital}</p>
    
    `
    countriesDiv.appendChild(div);
}) ; 
}