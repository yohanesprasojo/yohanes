function gamePerbandingan() {
    var a = [5, 100, 65];
    var b = [7, 50, 65];
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            if (a[i] > b[j]) {
                console.log(a[i] + ' lebih besar dari ' + b[j]);
            } else if (a[i] < b[j]) {
                console.log(a[i] + ' lebih kecil dari ' + b[j]);
            } else {
                console.log(a[i] + ' sama dengan ' + b[j])
            }
        }
    }
}
gamePerbandingan();
/*//pseudecode
fungsi gamePerbandingan
tentukan angka1 dalam array,simpan
tentukan angka2 dalam array,simpan
lakukan perulangan terhadap angka1
lakukan perulangan terhadap angka2
masuk sebuah kondisi
jika angka1 lebih besar dari angka2
tuliskan angka1 lebih besar dari angka2
jika angka1 lebih kecil dari angka2
tuliskan angka1 lebih kecil dari angka2
jika tidak tuliskan angka1 sama dengan angka2*/