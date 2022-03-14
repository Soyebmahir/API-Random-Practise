let count = 0;

const first = () => {

    console.log(count++)
}

console.log('First');
console.log('Second');

// setTimeout(function(){
//     console.log('another');
// },5000);
setInterval(first, 1000);

// setTimeout(first,5000);

console.log('third');
console.log('forth');
console.log('fifth');