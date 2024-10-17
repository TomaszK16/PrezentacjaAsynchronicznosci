const start = Date.now();
const elapsed = () => `${Date.now() - start} ms`;

function long() {
    let a = 0;
    while(a < 1e9) a++;
    console.log('🍐 Pears', elapsed())
}

console.log('🍒 Cherries', elapsed());

setTimeout(() => long(), 0);

console.log('🍌 Bannanas', elapsed());