import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import EditModal from "./EditModal";
import firebaseku from "./firebase";
import { getDatabase, ref, onValue, remove } from "firebase/database";

const App = () => {
  const [dataSiswa, setDataSiswa] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const db = getDatabase(firebaseku);
    const starCountRef = ref(db, "datasiswa/");

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const arrayData = [];

      for (const xx in data) {
        if (Object.hasOwnProperty.call(data, xx)) {
          const nama = data[xx];
          arrayData.push({
            alamat: nama.alamat,
            beasiswa: nama.beasiswa,
            jenkel: nama.jenkel,
            jurusan: nama.jurusan,
            nama: nama.nama,
            id: xx,
          });
        }
      }

      setDataSiswa(arrayData);
    });
  }, []);

  const deleteData = (id) => {
    const db = getDatabase(firebaseku);
    remove(ref(db, "datasiswa/" + id))
      .then(() => {
        alert("Data berhasil dihapus");
      })
      .catch((error) => {
        alert("Gagal menghapus data");
      });
  };

  console.log('sebelum open', isModalOpen)

  const openModal = (data) => {
    setSelectedData(data);
    console.log(setSelectedData);
    setIsModalOpen(true);
    console.log('sesudah open', isModalOpen)
  };

  const closeModal = () => {
    setSelectedData(null);
    setIsModalOpen(false);
  };

  const saveData = (editedData) => {
    // Code for saving the edited data
    console.log(editedData);
  };

  return (
    <div className="container">
      <Table bordered striped responsive>
        <thead>
          <tr className="text-center bg-dark text-white">
            <th>Key</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Jurusan</th>
            <th>Jenkel</th>
            <th>Beasiswa</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataSiswa.map((barang, index) => (
            <tr key={index}>
              <td>{barang.id ? barang.id : barang.id}</td>
              <td>{barang.nama ? barang.nama : barang.name}</td>
              <td>{barang.alamat ? barang.alamat : "Tidak Diketahui"}</td>
              <td>{barang.jurusan ? barang.jurusan : "Belum Memilih"}</td>
              <td>{barang.jenkel ? barang.jenkel : "Belum Memilih"}</td>
              <td
                className={barang.beasiswa ? "text-primary" : "text-danger"}
              >
                {barang.beasiswa ? "Mendapat Beasiswa" : "Tidak Beasiswa"}
              </td>
              <td className="text-center">
                <button
                  className="btn btn-sm mx-1 btn-outline-info"
                  onClick={() => openModal(barang)}
                >
                  EDIT
                </button>
                <button
                  className="btn btn-sm mx-1 btn-outline-danger"
                  onClick={() => deleteData(barang.id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {isModalOpen && (
        <EditModal
          isOpen={isModalOpen}
          onClose={closeModal}
          data={selectedData}
          onSave={saveData}
        />
      )}
    </div>
  );
};

export default App;
