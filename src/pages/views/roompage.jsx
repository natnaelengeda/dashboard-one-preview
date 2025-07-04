import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CURDTable from "@/tables/curd-table";
import axios from "../../http/axios";

export default function ViewRoom() {
  const [data, setData] = useState();
  const [catdata, setCatdata] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("/AssetLocation/viewRoom", {
        withCredentials: true,
        params: {
          id: id,
        },
      })
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 text-3xl">
        <h1 className="text-4xl font-bold text-blue-700">Room - {id}</h1>
        <hr className="w-1/3 border  border-red-800 text-blue-700" />
      </div>
      <div className="min-h-screen">
        {data && <CURDTable data={data} room={id} />}
      </div>
    </div>
  );
}
