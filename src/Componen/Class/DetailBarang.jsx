import React from "react";
import Tombol from "./Tombol";
export default
    class DetailBarang extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nama: this.props.nama,
            i: this.props.id,
            stok: this.props.stok,
        }
    }

    handlerTombol = (e) => {
        console.log(e);
        if (e.tipe === 'tambah') {

            this.setState(
                {
                    stok: this.state.stok + 1,
                }
            )
        } else {
            this.setState(
                {
                    stok: this.state.stok - 1,
                }
            )
        }
        // return alert('Hallo');
    }



    render() {
        return (
            <tr>
                <th>{this.props.nomor}</th>
                <th>{this.state.nama}</th>
                <th>{this.state.stok}</th>
                <th>
                    {
                        <Tombol stok={this.state.stok} onTombol={this.handlerTombol} />
                    }
                    

                </th>
            </tr>
        )
    }
}

