/*
    INPUT 'jari' with number
    INPUT 'PI' with 3.14
    COMPUTE 'keliling lingkaran' EQUALS TO 2 x pi kali jari
    DISPLAY hasil keliling lingkaran
    END
*/

let jariLingkaran = 10;
const pi = 3.14;

function kelilingLingkaran(r,p) {
    return 2 * p * r;
}

let hasil = kelilingLingkaran(jariLingkaran, pi);
console.log(`hasil keliling lingkaran: ${hasil}`);