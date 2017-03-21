function dwarfRollCall(dwarves) {
    var names = []
    for (var i = 0; i < dwarves.length; i++){
        names.push(`${i + 1}. ${dwarves[i]} `)
    }
        names = names.toString()
        return names.replace(/,/g , "");
}

function summonCaptainPlanet(planeteerCalls){
    var up = []
    for (var i = 0; i < planeteerCalls.length; i++){
        up.push(planeteerCalls[i].toUpperCase() + "!")
    }
    return up

}

function longPlaneteerCalls(words) {
    for (var i = 0; i < words.length; i++){
        if (words[i].length > 4){
            return true
        } else {
            return false
        }
    }
}

function findTheCheese (foods) {
    for (var i = 0; i < foods.length; i++){
        switch (foods[i]){
            case 'cheddar':
                return foods[i]
                break;
            case 'gouda':
                return foods[i]
                break;
            case 'camembert':
                return foods[i]
                break;

        }
    }
    return "no cheese!"
}


// for (var i = 0; i < foods.length; i++){
//     // if(foods[i].match(/^(cheddar|gouda|camembert)$/)){
//     //     return foods[i]
//     // } else{
//     //     return "no cheese!"
//     // }
// }
