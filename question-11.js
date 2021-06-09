const sortTrip = (array) => {
    let result = [];
    let i = 1;
    let j = 0;
    var k;
    var currentCountry = array[j].to;
    result = array[j].from;
    while ( j != array.length && i != array.length + 1){
        for( k = 0; k < array.length; k++ ){
            if( currentCountry == array[k].from){
                result.push( array[k].from);
                currentCountry = array[k].to;
                i++;
                break;
            }
        }
        if( i == array.length){
            result.push(array[k].to);
            break;
        }
        if( k == array.length){
            i = 1;
            j++;
            currentCountry = array[j].to;
            result = [];
            result.push(array[j].from)
        }
    }
    return result;
}



console.log(sortTrip([{'from':"Aleppo", "to": "Montreal YUL"}, {'from':"Turkey", "to": "Ibiza Airport"}, {'from':"Ibiza Airport", "to": "Aleppo"}, {'from':"Beirut", "to": "Turkey"}]));
// Output: ["Beirut", "Turkey", "Ibiza Airport", "Aleppo", "Montreal YUL"]