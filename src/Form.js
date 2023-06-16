import App from "./App";

const url = "https://table-aef7f-default-rtdb.asia-southeast1.firebasedatabase.app/datasiswa.json";

const Form = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Mengambil nilai input
        const nama = event.target.nama.value;
        const alamat = event.target.alamat.value;
        const jurusan = event.target.jurusan.value;
        const jenkel = event.target.jenkel.value;
        const beasiswa = event.target.beasiswa.checked;
        // console.log(event.target.nama.value)
        // Data yang akan dikirim ke database
        const data = {
            nama: nama,
            alamat: alamat,
            jurusan: jurusan,
            jenkel: jenkel,
            beasiswa: beasiswa
        };
        console.log(data)

        const myFetch = async () => {

            try {
                // Mengirim data ke URL database menggunakan metode POST
                let response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                // Memeriksa respons dari server
                if (response.ok) {
                    console.log('Data terkirim ke database');
                    // Lakukan tindakan lain setelah data terkirim
                    // window.location.reload()
                } else {
                    console.log('Terjadi kesalahan saat mengirim data');
                    // Lakukan tindakan lain jika terjadi kesalahan
                }
            } catch (error) {
                console.log('Terjadi kesalahan:', error);
                // Lakukan tindakan lain jika terjadi kesalahan
            }
        }
        myFetch();

        // Mengosongkan nilai input setelah data terkirim
        event.target.reset();
    };
    return (
        <>
            <div className="container">

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nama" className="form-label">Nama</label>
                        <input name="nama" id="nama" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="alamat" className="form-label">Alamat</label>
                        <input name="alamat" id="alamat" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="jurusan" className="form-label">Jurusan</label>
                        <select name="jurusan" className="form-select">
                            <option>--</option>
                            <option value="Informatika">Informatika</option>
                            <option value="Bisnis Dan Ekonomi">Bisnis dan Ekonomi</option>
                            <option value="Komputer">Komputer</option>
                            <option value="Teknik Kapal">Teknik Kapal</option>
                            <option value="Service Kulkas">Service Kulkas</option>
                        </select>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" value="L" name="jenkel" id="jenkelL" />
                        <label htmlFor="jenkelL" className="form-check-label">Laki Laki</label>
                    </div>
                    <div className="form-check mb-3">
                        <input type="radio" className="form-check-input" value="P" name="jenkel" id="jenkelP" />
                        <label htmlFor="jenkelP" className="form-check-label">Perempuan</label>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" name="beasiswa" value="true" id="beasiswa" />
                        <label className="form-check-label" htmlFor="beasiswa">
                            Dapatkan Beasiswa
                        </label>
                    </div>

                    <div className="mb-3">
                        <input type="submit" className="btn btn-success" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;