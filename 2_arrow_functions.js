function funcNormal(a){
    return a + 2;
}

// let funcArrow = (a) => a + 2;
const funcArrow1 = (a) => a + 2;

const funcArrow2 = (a) => {
    return a + 2;
}

setTimeout(function(){
    console.log('🍐 Pear');
}, 500)

setTimeout(() => console.log('🍐 Pear'), 500)