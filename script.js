const container = document.getElementById('container');
const jumbotron = container.querySelector('.jumbo');

// Menambahkan event click pada elemen container
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('thumb')) {
    jumbotron.src = e.target.src; // Mengubah gambar jumbotron dari elemen yang diklik
    jumbotron.classList.add('faded'); // Menambahkan kelas faded ke elemen jumbotron untuk animasi transisi
    // Mengatur timeout untuk menghapus kelas faded setelah 500ms
    setTimeout(() => {
      jumbotron.classList.remove('faded');
    }, 500);
  }
});
