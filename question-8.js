
var usernames = ['Wassim', 'Wael', 'Wanda', 'Saleem', 'Salim', 'Salih', 'Sameer'];


const autoComplete = (value) => {
    var output = [];
  
    for (i = 0; i < usernames.length; i++) {
      if ( value === usernames[i].toLowerCase().slice(0, value.length)) {
        output.push(usernames[i]);
      }
      return usernames.filter( e => e.toLowerCase().includes(value.toLowerCase()));
    }
  
    return output;
  }



console.log( autoComplete('sal')); //must return [‘Saleem’, ‘Salim’, ‘Salih’]
console.log( autoComplete('sali')); //must return [‘Salim’, ‘Salih’]
console.log( autoComplete('ee')); //must return ['Saleem', 'Sameer']
console.log( autoComplete('wa')); //must return ['Wassim', 'Wael', 'Wanda']
console.log( autoComplete('ss')); //must return ['Wassim']



