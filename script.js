let elems = [
    '<div><p class="text">Home</p></div>', 
    '<div><p class="text">About</p></div>', 
    '<div><p class="text">FAQ</p></div>', 
    '<div><p class="text">Contacts</p></div>' 
    ]

let new_elems = elems.map(el => el.replace('<div><p class="text">', '').replace('</p></div>',''));

let words = ['стакан','молоко','табуретка','вода']

function initCap(array){
    console.log(array.map(el => el[0].toUpperCase() + el.substring(1)));
}

initCap(words);

let names = [ 
    'Steven King', 
    'Jonh Snow', 
    'Oliver', 
    'Neena Stich',
     'Grant Laster', 
    'Persius Master', 
    'Lest' 
    ] 

// const full_names = names.map(el => new_array = [el.slice(0, el.indexOf(' ')), el.slice(el.indexOf(' '))]);
const full_names = names.map(el => el.includes(' ') ? new_array = [el.slice(0, el.indexOf(' ')), el.slice(el.indexOf(' ') + 1)] : new_array = [el.slice(0), undefined]);
