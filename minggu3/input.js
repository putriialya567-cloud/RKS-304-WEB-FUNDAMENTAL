const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {

    // Mencegah form langsung berpindah halaman
    event.preventDefault();

    // Mengambil nilai input
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const nama = document.getElementById("nama").value.trim();
    const tanggalLahir = document.getElementById("tanggalLahir").value;
    const alamat = document.getElementById("alamat").value.trim();
    const telepon = document.getElementById("telepon").value.trim();

    // Mengambil tempat error
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const namaError = document.getElementById("namaError");
    const tanggalLahirError = document.getElementById("tanggalLahirError");
    const alamatError = document.getElementById("alamatError");
    const teleponError = document.getElementById("teleponError");

    // Membersihkan pesan error
    usernameError.textContent = "";
    passwordError.textContent = "";
    namaError.textContent = "";
    tanggalLahirError.textContent = "";
    alamatError.textContent = "";
    teleponError.textContent = "";

    let valid = true;


    // Validasi Username
    if (username === "") {
        usernameError.textContent = "Username tidak boleh kosong.";
        valid = false;
    } else if (username.length < 3) {
        usernameError.textContent =
            "Username minimal harus 3 karakter.";
        valid = false;
    }


    // Validasi Password
    if (password === "") {
        passwordError.textContent = "Password tidak boleh kosong.";
        valid = false;
    } else if (password.length < 8) {
        passwordError.textContent =
            "Password minimal harus 8 karakter.";
        valid = false;
    }


    // Validasi Nama
    if (nama === "") {
        namaError.textContent = "Nama tidak boleh kosong.";
        valid = false;
    }


    // Validasi Tanggal Lahir
    if (tanggalLahir === "") {

        tanggalLahirError.textContent =
            "Tanggal lahir tidak boleh kosong.";

        valid = false;

    } else {

        const tanggalInput = new Date(tanggalLahir);
        const hariIni = new Date();

        hariIni.setHours(0, 0, 0, 0);

        if (tanggalInput > hariIni) {

            tanggalLahirError.textContent =
                "Tanggal lahir tidak boleh future date.";

            valid = false;
        }
    }


    // Validasi Alamat
    if (alamat === "") {

        alamatError.textContent =
            "Alamat tidak boleh kosong.";

        valid = false;
    }


    // Validasi Nomor Telepon
    if (telepon === "") {

        teleponError.textContent =
            "Nomor telepon tidak boleh kosong.";

        valid = false;

    } else if (!telepon.startsWith("62")) {

        teleponError.textContent =
            "Nomor telepon harus diawali dengan 62.";

        valid = false;
    }


    // Jika semua valid
    if (valid) {

        alert("Registrasi berhasil!");

        form.submit();
    }

});
