const arr = ["Ильяс", "Куба", "Мага", "Нурба", "Нурик"];
function arrayPick(string, array){
     for(let i = 0; i < array.length; i++){
        if(string == array[i]){
            return console.log(array[i], 'найден');
        }
     }
}
// console.log(arr[2]);
let str = prompt('Введите имя')
arrayPick(str, arr)