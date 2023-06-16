import React from "react";

import { Table, Button } from "reactstrap";

const Jasa = () => {
  const [jasa, setJasa] = React.useState("Service Motor");
  const [montir, setMontir] = React.useState({
    satu: "Yuda",
    dua: "Rudi"
  });
  const handlerButtonClick = () => {
    // console.log(`Hallo ${montir.satu}`);
    setJasa("Jasa Pergantian Oli Mesin");
    setMontir({ ...montir, dua: "Rico" });
    console.log(montir);
  };
  return (
    <>
      {/* {console.log(montir)} */}
      <p>Ini Jasa Pelayanan Kami</p>
      <h2>{jasa}</h2>
      <ul>
        <li>{montir.satu}</li>
        <li>{montir.dua}</li>
      </ul>
      <Button color="primary" onClick={handlerButtonClick}>
        Ubah Jasa
      </Button>
    </>
  );
};

export default Jasa;
