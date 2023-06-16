import React from "react";
import { findDOMNode } from "react-dom";
import { useState } from "react";
import { Button, Alert, Input, Container, Label, FormGroup } from "reactstrap";
const SiswaInput = () => {
  const [nilai, setNilai] = React.useState({
    nama: "",
    alamat: "",
    jurusan: "",
    jenkel: "",
    beasiswa: false,
    pesanError: ""
  });

  const handleSimpanButton = () => {
    // console.log(nilai);
    if (nilai.nama === "") {
      setNilai({ ...nilai, pesanError: "Nama Kosong" });
    }

    // console.log(nilai);
  };

  const handleInputChange = (e) => {
    let dataInput = e.target.value;
    let dataType = e.target.type;
    dataType === "checkbox"
      ? setNilai({ ...nilai, [e.target.name]: e.target.checked })
      : setNilai({ ...nilai, [e.target.name]: dataInput });
  };

  return (
    <>
      <Container>
        {nilai.pesanError !== "" && (
          <Alert color="primary">{nilai.pesanError}</Alert>
        )}
        <p>
          Nama :
          <Input name="nama" onChange={handleInputChange} />
        </p>
        <p>
          Alamat :
          <Input
            id="exampleText"
            onChange={handleInputChange}
            name="alamat"
            type="textarea"
          />
        </p>
        <p>
          Pilih Jurusan :
          <Input
            id="exampleSelect"
            name="jurusan"
            type="select"
            onChange={handleInputChange}
          >
            <option>Teknik Kimia</option>
            <option>Teknik Elektro</option>
            <option>Teknik Sipil</option>
            <option>Management Informatika</option>
            <option>Perhotelan</option>
          </Input>
        </p>
        Jenis Kelamin
        <div>
          <FormGroup check>
            <Input
              name="jenkel"
              value="Laki-laki"
              type="radio"
              onChange={handleInputChange}
            />
            <Label check>Laki-laki</Label>
          </FormGroup>

          <FormGroup check>
            <Input
              name="jenkel"
              value="Perempuan"
              type="radio"
              onChange={handleInputChange}
            />
            <Label check>Perempuan</Label>
          </FormGroup>
        </div>
        <hr />
        <FormGroup check>
          <Input name="beasiswa" type="checkbox" onChange={handleInputChange} />
          <Label check>Beasiswa</Label>
        </FormGroup>
        <Button onClick={handleSimpanButton}>Simpan</Button>
      </Container>
    </>
  );
};

export default SiswaInput;
