import React, { useState, useEffect } from "react";
import axios from "axios";
import ChartComponent from './ChartComponent'


    export default function Temp() {


    const [data, setdata] = useState([]);
    const [twodata, setDataTwo] = useState([]);

    useEffect(() => {

        axios
        .get("../data/precipitation.json")
        .then((response) => {
            setdata(response.data);
        })
        .catch((err) => {
            // Jika Gagal
            console.log(err)
        });
    }, []);



    useEffect(() => {

        axios
        .get("../data/temperature.json")
        .then((response) => {
            setDataTwo(response.data);
        })
        .catch((err) => {
            // Jika Gagal
            console.log(err)
        });
    }, []);

    

    // useEffect(() => {
    //     const element = document.getElementById('opt_n');
    //     if (element) {
    //       const value = element.value;
    //       console.log(value);
    //     }
    //   }, []);


        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h2>
                            Архив метеослужбы
                            </h2>
                            <div className='btn btn-success disabled'>Температура</div><br /> <br />
                            <div className='btn btn-success disabled'>Oсадки</div>
                        </div>
                        <div className="col-6">
                            
                        <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                            {data &&
                            data.map((item) => (
                            <option>
                                <h1>{item.t}</h1>| <br />
                                <h1>{item.v}</h1>
                            </option>
                            ))}
                        </select>

                        <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                        {twodata &&
                            twodata.map((item) => (
                            <option value={item.t} id="opt_n">
                                <h1>{item.t}</h1> | <br />
                                <h1>{item.v}</h1>
                            </option>
                            ))}
                        </select>
                                

                                < ChartComponent/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }