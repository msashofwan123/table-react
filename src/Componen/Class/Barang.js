import React from "react";

import { Table, Button } from "reactstrap";

import DetailBarang from "./DetailBarang";

class Barang extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h1>Daftar Barang di Toko</h1>
        <Table bordered responsive striped>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Stock</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {this.props.dataBarang.map((brg, i) => (
              <DetailBarang
                nomor={++i}
                nama={brg.nama_barang}
                key={i}
                id={brg.id}
                stok={brg.stok}
              />
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default Barang;
