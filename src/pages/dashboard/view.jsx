import React, { useState, useEffect } from "react";
import axios from "../../http/axios";
import BasicTable from "@/tables/basic-table";
import { Typography, Card, CardBody } from "@material-tailwind/react";
export function View() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("/Asset/view", {
        withCredentials: true,
      })
      .then(function (response) {
        setData(response.data);
      });
  }, []);
  return (
    <div className="flex h-96 w-full flex-col gap-3">
      <div className="flex flex-col gap-3">
        <Typography variant="h4" color="blue">
          View All Asset
        </Typography>
        <hr className="border  border-red-800 text-blue-700" />
      </div>
      <div className="rounded-xl">
        <Card className="rounded-xl">{data && <BasicTable data={data} />}</Card>
      </div>
    </div>
  );
}

export default View;
