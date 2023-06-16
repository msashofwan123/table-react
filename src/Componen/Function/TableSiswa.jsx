import React from "react";

import { Button, Table } from "reactstrap";

const TableSiswa = (props) => {
  const handleButtonPilih = (a) => {
    // console.log(a);
    // return console.log("Ok" + a.nama);

    props.onPilihSiswa(a);
  };

  return (
    <>
      <h2>Data Siswa</h2>
      <Table hover responsive striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Jenis Kelamin</th>
            <th>Jurusan</th>
            <th>Jalur Beasiswa</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {props.datasiswa.map((siswa, i) => (
            <tr key={i}>
              <th scope="row">{++i}</th>
              <td>{siswa.nama}</td>
              <td>{siswa.alamat}</td>
              <td>{siswa.jenkel}</td>
              <td>{siswa.jurusan}</td>
              <td> {siswa.beasiswa.toString()} </td>
              <td>
                <div>
                  <Button color="info" onClick={() => handleButtonPilih(siswa)}>
                    Ubah
                  </Button>
                  &nbsp;
                  <Button
                    color="danger"
                    onClick={() => props.onHapus(siswa.id)}
                  >
                    Hapus
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableSiswa;
