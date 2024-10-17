async function getCatFact(){
    const result = await fetch('https://catfact.ninja/fact');
    const json = await result.json();
    console.log('🐈', json.fact);
}

getCatFact();

