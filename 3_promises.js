new Promise((resolve, reject) => {
    // ...
    // ...
    // ...
    resolve('🦐 Promise Works!');
    // reject('Skill issue');
})
.then(resolved => console.log(resolved))
.catch(err => console.error('❌ Rejected:', err));

// new Promise(resolve => {
//     setTimeout(() => resolve('🐱 Promised Gato'), 1000);
// }).then(resolved => console.log(resolved))

// ######
// THEN
// ######

// new Promise(resolve => setTimeout(() => resolve('🐱 Promised Gato')), 1000)
//     .then(val => val ** 2)
//     .then(val => val - 1)
//     .then(val => console.log(val));

// new Promise(resolve => setTimeout(() => resolve(2)), 1000)
//     .then(val => {
//         val **= 2;
//         val -= 1;
//         console.log(val);
//     })

// fetch('https://catfact.ninja/fact')
//     .then(res => res.json())
//     .then(json => console.log('🐈', json.fact));


// const catFact = fetch('https://catfact.ninja/fact');
// console.log('🐈', catFact)