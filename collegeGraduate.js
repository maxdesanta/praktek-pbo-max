/*
    INPUT 'nama' with string 
    INPUT 'skor' with number 

    READ 'nama','skor' 
    IF skor >= 80 AND skor <= 100
    DISPLAY 'skor A'
    IF ELSE skor >=65 AND skor <= 79
    DISPLAY 'skor B' 
    IF ELSE skor >= 50 AND skor <= 64
    DISPLAY 'skor c' 
    IF ELSE skor >= 35 AND skor <= 49
    DISPLAY 'skor D' 
    IF ELSE skor >= 0 AND skor <= 34
    DISPLAY 'skor E' 
    ELSE DISPLAY 'nilai invalid'
*/

let nama = 'max';
let skor = 80;

if (skor >= 80 && skor <= 100) {
    console.log(`${nama} mendapat skor A`);
} else if (skor >= 65 && skor <= 79) {
    console.log(`${nama} mendapat skor B`);
} else if (skor >= 50 && skor <= 64) {
    console.log(`${nama} mendapat skor C`);
} else if (skor >= 35 && skor <= 49) {
    console.log(`${nama} mendapat skor D`);
} else if (skor >= 0 && skor <= 34) {
    console.log(`${nama} mendapat skor E`);
} else {
    console.log('nilai invalid');
}    