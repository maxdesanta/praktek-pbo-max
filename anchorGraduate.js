/* siapkan bahan */

let nama = "max";
let nilai = 80;
let absen = 6;

/* algoritma kenaikan kelas */
if (nilai >= 70 && absen < 5) {
    console.log(`${nama} mendapatkan ${nilai} dan kehadiran ${absen}. jadi ${nama} sudah lulus`);
} else {
    console.log(`maaf, ${nama} tidak lulus`);
}

/* Pseucode
    INPUT 'name' with any string
    INPUT 'nilai with any number
    INPUT 'absent' with any number
    
    READ 'name','nilai','absent'
    IF nilai >= 70 AND absent < 5
    DISPLAY 'nama' 'lulus'
    ELSE DISPLAY 'nama' 'tidak lulus'
    END IF
*/