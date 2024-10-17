const start = Date.now();
const elapsed = () => `${Date.now() - start} ms`;

mix();

function getIngreedient(index){
    const ingreedients = [
        '🍌 Bannana',
        '🍒 Cherry',
        '🍓 Strawbeary'
    ]

    return new Promise((resolve) => 
        setTimeout(() => resolve(ingreedients[index]), 1000)
    );
}

// async function mix(){
//     let a = await getIngreedient(0);
//     let b = await getIngreedient(1);

//     console.log('🍼 Mix:', [a,b], elapsed());
// }

// async function mix(){
//     let a = getIngreedient(0);
//     let b = getIngreedient(1);

//     Promise.all([a,b]).then(values => console.log('🍼 Mix:', values, elapsed()));
// }