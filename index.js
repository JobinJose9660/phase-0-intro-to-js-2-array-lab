const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    console.log(cats.push(name));
}
destructivelyAppendCat("Raplh");
function destructivelyPrependCat(name){
    console.log(cats.unshift(name));
}
destructivelyPrependCat("Bob")
function destructivelyRemoveLastCat(name){
    console.log(cats.pop(name));
}
destructivelyRemoveLastCat("Ralp");
function destructivelyRemoveFirstCat(name){
    console.log(cats.shift(name));
}
destructivelyRemoveFirstCat("Bob")

function appendCat(){
    return [...cats,"Broom"]
}

function prependCat(){
    return ["Arnold",...cats];
}
function removeLastCat(){
    return cats.slice(0,-1)
}
function removeFirstCat(){
    return cats.slice(1)
}