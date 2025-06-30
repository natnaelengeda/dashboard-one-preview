import React, { useEffect, useState } from "react";
import {
  Typography,
} from "@material-tailwind/react";
import { StatisticsCard } from "@/widgets/cards";
import axios from "../../http/axios";
import SimpleTable from "@/tables/simple-table";

export function Home() {
  const [data, setData] = useState();
  const [info, setInfo] = useState();

  useEffect(() => {
    axios
      .get("/Asset/ViewRecent", {
        withCredentials: true,
      })
      .then(function (response) {
        setData(response.data);
      });

    axios
      .get("/Asset/viewInfo", {
        withCredentials: true,
      })
      .then(function (response) {
        setInfo(response.data);
      });
  }, []);

  async function fetchInfo() {
    const res = await axios.get("view/info");
    return res.data;
  }
  // View();
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {info &&
          info.map((item) => (
            <StatisticsCard
              key={item.id}
              label={item.label}
              title={item.item}
              value={item.amount}
              color={item.color}
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  <strong>{item.footer.label}</strong>
                </Typography>
              }
            />
          ))}
      </div>
      <div className="flex flex-col gap-5" >
        <div className="flex flex-col gap-2">
          <Typography variant="h4">Recent Assets</Typography>
          <hr className="border" />
        </div>
        <div>
          <div className="rounded-xl overflow-hidden">
            {data && 
            <SimpleTable key={data.id} data={data} />}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
