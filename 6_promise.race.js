const a = new Promise((resolve) => setTimeout(() => resolve('🍎 Ryd'), 500));
const b = new Promise((resolve) => setTimeout(() => resolve('🍏 Grin'), 300));

Promise.race([a,b]).then(winner => console.log(winner));