import Jasa from "./Componen/Function/Jasa";

const dataBarang = [
  {
    id: 1,
    nama_barang: "Shampoo Clear",
    stok: 10,
    harga: 500
  },

  {
    id: 2,
    nama_barang: "Shampoo Sunsilk",
    stok: 14,
    harga: 500
  },
  {
    id: 3,
    nama_barang: "Shampoo Pantene",
    stok: 14,
    harga: 500
  },
  {
    id: 4,
    nama_barang: "Shampoo Dave",
    stok: 24,
    harga: 520
  },
  {
    id: 5,
    nama_barang: "Shampoo Lifeboy",
    stok: 24,
    harga: 520
  }
];

function MyApp() {
  return (
    <div>
      <Jasa />
    </div>
  );
}

export default MyApp;
