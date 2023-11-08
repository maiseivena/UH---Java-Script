// Program perulangan untuk menampilkan kalimat "anak ayam turun.."
for (var i = 10; i >= 1; i--) {
    if (i === 1) {
        console.log("Anak ayam turun " + i + ", mati satu tinggal induknya.");
    } else {
        console.log("Anak ayam turun " + i + ", mati satu tinggal " + (i - 1) + ".");
    }
}
