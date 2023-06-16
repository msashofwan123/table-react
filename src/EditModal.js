import React, { useState } from "react";


const EditModal = ({ isOpen, onClose, data, onSave }) => {
  console.log(isOpen)
  const [editedData, setEditedData] = useState(data);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setEditedData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setEditedData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSave = () => {
    onSave(editedData);
    onClose();
  };

  return (
    <div className={`modal fade ${isOpen} ? "show" : ""`} show={isOpen.toString()} tabIndex="-1" role="dialog" id="exampleModal" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Edit Data</h2>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <label>
                Name:
                <input
                  type="text"
                  name="nama"
                  value={editedData.nama}
                  onChange={handleChange}
                />
              </label>
              <label>
                Alamat :
                <input
                  type="text"
                  name="alamat"
                  value={editedData.alamat}
                  onChange={handleChange}
                />
              </label>
              <label>
                Jurusan :
                <select
                  name="jurusan"
                  value={editedData.jurusan}
                  onChange={handleChange}
                >
                  <option>--</option>
                  <option value="Informatika">Informatika</option>
                  <option value="Bisnis Dan Ekonomi">Bisnis dan Ekonomi</option>
                  <option value="Komputer">Komputer</option>
                  <option value="Teknik Kapal">Teknik Kapal</option>
                  <option value="Service Kulkas">Service Kulkas</option>
                </select>
              </label>
              <label>
                Jenis Kelamin:
                <label>
                  <input
                    type="radio"
                    name="jenkel"
                    value="L"
                    checked={editedData.jenkel === "L"}
                    onChange={handleChange}
                  />
                  Laki - Laki
                </label>
                <label>
                  <input
                    type="radio"
                    name="jenkel"
                    value="P"
                    checked={editedData.jenkel === "P"}
                    onChange={handleChange}
                  />
                  Perempuan
                </label>
              </label>
              <label>
                Beasiswa :
                <input
                  type="checkbox"
                  name="beasiswa"
                  checked={editedData.beasiswa}
                  onChange={handleChange}
                />
              </label>
              <button type="button" onClick={handleSave}>
                Save
              </button>
              <button type="button" onClick={onClose}>
                Cancel
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={() => saveData(selectedData)}>
              Save
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
