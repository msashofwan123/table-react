import React from "react";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Toast,
  ToastHeader,
  Spinner,
  ToastBody
} from "reactstrap";
import NavbarApp from "../../NavbarApp";
import TableSiswa from "./TableSiswa";

const dataSiswas = [];

let url = "https://table-aef7f-default-rtdb.";
url += "asia-southeast1.firebasedatabase.app";
url += "/datasiswa.json";

function App() {

  useEffect(() => {
    const myFetch = async () => {
      try {
        let response = await fetch(url, { method: "GET" });

        if (!response.ok) {
          console.log("ERROR WOY")
        }
        let responseData = await response.json();
        console.log(responseData);
      } catch (e) {

      }
    }
  })
}


const Pendaftaran = () => {
  // const [jenkel, setJenkel] = React.useState("");
  // const [nama, setNama] = React.useState("");
  // const [beasiswa, setBeasiswa] = React.useState("");
  // const [jurusan, setJurusan] = React.useState("");
  // const [alamat, setAlamat] = React.useState("");
  const [nilai, setNilai] = React.useState({
    nama: "",
    alamat: "",
    jurusan: "",
    jenkel: "",
    beasiswa: false,
    id: "",
    mode: "Simpan"
  });

  // state untuk menampung pesan error
  const [errors, setErrors] = React.useState({
    nama: "",
    alamat: "",
    jurusan: "",
    jenkel: ""
  });

  const initialState = {
    nama: "",
    alamat: "",
    jurusan: "",
    jenkel: "",
    beasiswa: false,
    id: "",
    mode: "Simpan"
  };

  const clearState = () => {
    setNilai({ ...nilai, ...initialState });
  };
  const handleSubmitButtom = () => {
    let pesanErrors = {};
    // validasi nama
    if (nilai.nama.trim() === "") {
      pesanErrors.nama = "Nama tidak boleh kosong";
    }
    if (nilai.jurusan.trim() === "") {
      pesanErrors.jurusan = "Pilih Jurusan Kosong";
    }
    if (nilai.alamat.trim() === "") {
      pesanErrors.alamat = "Alamat harus diisi";
    }
    if (nilai.jenkel.trim() === "") {
      pesanErrors.jenkel = "Pilih Jenis Kelamin";
    }

    setErrors(pesanErrors);

    let formValid = true;
    for (const k in pesanErrors) {
      if (pesanErrors.hasOwnProperty(k)) {
        const e = pesanErrors[k];
        console.log(e);
        if (e.length > 0) {
          formValid = false;
        }
      }
    }

    if (formValid) {
      //  tidak  ada error
      if (nilai.mode === "Simpan") {
        let hasilSubmit;
        hasilSubmit = nilai;
        hasilSubmit.id = Math.floor(Math.round * 6);
        dataSiswas.push(hasilSubmit);
        clearState();
      } else {
        const result = dataSiswas.findIndex((siswa) => siswa.id === nilai.id);
        const newdataSiswa = dataSiswas;
        newdataSiswa.splice(result, 1, nilai);
        clearState();
      }
    } else {
      console.log(errors);
    }
  };

  const handlePilihSiswa = (z) => {
    return setNilai({
      ...nilai,
      nama: z.nama,
      alamat: z.alamat,
      jurusan: z.jurusan,
      jenkel: z.jenkel,
      beasiswa: z.beasiswa,
      id: z.id,
      mode: "edit"
    });
  };

  const handleHapusSiswa = (a) => {
    // return console.log(a);
    let result = dataSiswas.findIndex((siswa) => siswa.id === a);
    console.log(result);
    const newdataSiswa = dataSiswas;
    newdataSiswa.splice(result, 1);
    clearState();
  };

  return (
    <>
      <Container>
        <Form>
          <FormGroup>
            <Label for="nama">Nama</Label>
            <Input
              id="nama"
              name="nama"
              placeholder="Tulis Nama"
              type="text"
              value={nilai.nama}
              onChange={(a) => {
                setNilai({ ...nilai, nama: a.target.value });
              }}
              invalid={errors.nama ? true : false}
            />
            {errors.nama && <FormFeedback>{errors.nama}</FormFeedback>}
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Jurusan</Label>
            <Input
              invalid={errors.jurusan ? true : false}
              id="exampleSelect"
              name="select"
              type="select"
              value={nilai.jurusan}
              onChange={(a) => {
                setNilai({ ...nilai, jurusan: a.target.value });
              }}
            >
              <option> -- </option>
              <option>Hotel</option>
              <option>Akuntansi</option>
              <option>Komputer</option>
              <option>Elektro</option>
              <option>Teknik Sipil</option>
            </Input>
            {errors.jurusan && <FormFeedback>{errors.jurusan}</FormFeedback>}
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Alamat</Label>
            <Input
              id="exampleText"
              name="text"
              type="textarea"
              value={nilai.alamat}
              onChange={(a) => {
                setNilai({ ...nilai, alamat: a.target.value });
              }}
              invalid={errors.alamat ? true : false}
            />
            {errors.alamat && <FormFeedback>{errors.alamat}</FormFeedback>}
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Jenis Kelamin</legend>
            <FormGroup check>
              <Input
                name="radio1"
                type="radio"
                checked={nilai.jenkel === "L"}
                value="L"
                onChange={(a) => {
                  setNilai({ ...nilai, jenkel: a.target.value });
                }}
                invalid={errors.jenkel ? true : false}
              />
              <Label check>Laki-laki</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="radio1"
                type="radio"
                checked={nilai.jenkel === "P"}
                value="P"
                onChange={(a) => {
                  setNilai({ ...nilai, jenkel: a.target.value });
                }}
                invalid={errors.jenkel ? true : false}
              />
              <Label check>Perempuan</Label>
            </FormGroup>

            {errors.jenkel && (
              <small className="text-danger">{errors.jenkel}</small>
            )}
          </FormGroup>
          <FormGroup check>
            <Input
              type="checkbox"
              checked={nilai.beasiswa === true}
              onChange={(a) => {
                setNilai({ ...nilai, beasiswa: a.target.checked });
              }}
            />
            <Label check>Beasiswa</Label>
          </FormGroup>
          <Button color="success" onClick={handleSubmitButtom}>
            {nilai.mode.toUpperCase()}
          </Button>
          &nbsp;&nbsp;
          {nilai.mode === "edit" && (
            <Button
              color="secondary"
              type="button"
              onClick={() => {
                return clearState();
              }}
            >
              Batal
            </Button>
          )}
        </Form>

        <hr />

        <TableSiswa
          datasiswa={dataSiswas}
          onPilihSiswa={handlePilihSiswa}
          onHapus={handleHapusSiswa}
        />

        <Toast isOpen={false}>
          <ToastHeader icon={<Spinner size="sm">Loading...</Spinner>}>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast with a custom icon — check it out!
          </ToastBody>
        </Toast>
      </Container>
    </>
  );
};

export default Pendaftaran;
