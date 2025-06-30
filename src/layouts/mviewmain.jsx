import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "@/components/QRCode";
import axios from "../http/axios";
import { Card, Box } from "@mui/joy";

// Images
import logo from "../assets/images/logo.png";

export function MViewmain() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("/MView", {
        params: {
          id: id,
        },
        withCredentials: true,
      })
      .then(function (response) {
        setData(response.data);
      })
      .then(
        axios.put(
          "/Inventory/count",
          { id: id },
          {
            withCredentials: true,
          }
        )
      )
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="bg-gray-200">
      <nav className="sticky h-24 w-full border border-gray-200 bg-white px-5 shadow-xl lg:px-20 ">
        <img src={logo} alt="Dashboard Logo" className="w-24" />
      </nav>
      <section className="grid min-h-screen grid-cols-1 gap-4 px-5 py-10 lg:grid-cols-2 lg:px-20">
        <div className="flex justify-center">
          <div className="normshad h-64 w-auto rounded-xl bg-white p-5 shadow-xl">
            <QRCode data={id} qrsize={50} imagesize={50} />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 text-3xl">
            <h1 className="text-4xl font-bold text-blue-700">Asset Info</h1>
            <hr className="w-1/3 border  border-red-800 text-blue-700" />
          </div>
          <div className="flex flex-col gap-2 py-2">
            {data && (
              <>
                <div className="viewtop">
                  <h1 className="viewhead">Name:</h1>
                  <p className="viewdet">{data.name}</p>
                </div>
                <div className="viewtop">
                  <h1 className="viewhead">Asset Status:</h1>
                  <p className="viewdet">{data.asset_status}</p>
                </div>
                <div className="viewtop">
                  <h1 className="viewhead">Sub Code:</h1>
                  <p className="viewdet">{data.sub_code}</p>
                </div>
                <div className="viewtop">
                  <h1 className="viewhead">Owner:</h1>
                  <p className="viewdet">{data.owner}</p>
                </div>
                <div className="viewtop">
                  <h1 className="viewhead">Entrusted Id:</h1>
                  <p className="viewdet">{data.entrusted_id}</p>
                </div>
                <div className="viewtop">
                  <h1 className="viewhead">Room:</h1>
                  <p className="viewdet">{data.location_code}</p>
                </div>
                <div className="viewtop">
                  <h1 className="viewhead">Entrusted Id:</h1>
                  <p className="viewdet">{data.entrusted_id}</p>
                </div>
                <div className="viewtop">
                  <h1 className="viewhead">Price:</h1>
                  <p className="viewdet">{data.price} Birr.</p>
                </div>
                <div className="viewtop">
                  <h1 className="viewhead">Residual Value:</h1>
                  <p className="viewdet">{data.residual_value}</p>
                </div>
                <div className="viewtop">
                  <h1 className="viewhead">Asset Life:</h1>
                  <p className="viewdet">{data.asset_life}</p>
                </div>
                <div className="viewtop">
                  <h1 className="viewhead">Asset Number:</h1>
                  <p className="viewdet">{data.asset_no}</p>
                </div>
                <div className="viewtop">
                  <h1 className="viewhead">Class Code:</h1>
                  <p className="viewdet">{data.class_code}</p>
                </div>
                <div className="viewtop">
                  <h1 className="viewhead">Posting Group:</h1>
                  <p className="viewdet">{data.posting_group}</p>
                </div>
                <div className="viewtop">
                  <h1 className="viewhead">Purchase Date:</h1>
                  <p className="viewdet">{data.purchase_date}</p>
                </div>
                <div className="viewtop">
                  <h1 className="viewhead">Commission Date:</h1>
                  <p className="viewdet">{data.commission_date}</p>
                </div>
                <div className="viewtop">
                  <h1 className="viewhead">Depreciation Start Date:</h1>
                  <p className="viewdet">{data.depreciation_start_date}</p>
                </div>
                <div className="viewtop">
                  <h1 className="viewhead">Quantity:</h1>
                  <p className="viewdet">{data.quantity}</p>
                </div>
                <div className="viewtop">
                  <h1 className="viewhead">Unit:</h1>
                  <p className="viewdet">{data.unit}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

MViewmain.displayName = "src/layout/mviewmain.jsx";

export default MViewmain;
