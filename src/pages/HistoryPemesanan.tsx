import React from "react";

import Layout from "components/Layout";

const History = () => {
    return(
        <Layout>
        <h1 className="text-right font-poppins text-black font-extrabold text-4xl flex justify-center pl-5 pr-5 mr-5 ml-5 mt-10 overflow-x-auto">History Pemesanan</h1>
            <div className="flex justify-center pl-5 pr-5 mr-5 ml-5 mt-20 overflow-x-auto">
                <table className="table table-zebra h-96 w-9/12 bg-no-repeat font-poppins">
                    {/* head */}
                    <thead className="bg-slate-500 font-extrabold">
                    <tr>
                        <th>No.</th>
                        <th>Nama Homestay</th>
                        <th>Tanggal Menginap</th>
                        <th>Status</th>
                        <th>Ulasan</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Bali Homestay</td>
                        <td>22/03/2023 - 27/03/2023</td>
                        <td>Masih Menginap</td>
                        <td>-</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>2</th>
                        <td>Lombok Homestay</td>
                        <td>18/03/2023 - 21/03./2023</td>
                        <td>Selesai</td>
                        <td>-</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    </tbody>
                </table>
            </div>
            <h1 className="text-slate-500 font-bold text-center mt-56 pb-10 text-xl font-poppins">
                Copyright @2023 StayApp
            </h1>
        </Layout>
    )
}

export default History;