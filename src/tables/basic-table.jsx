import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";

const BasicTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "ID",
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "asset_group",
        header: "Address",
      },
      {
        accessorKey: "asset_status",
        header: "Asset Status",
      },
      {
        accessorKey: "class_code",
        header: "Class Code",
      },
      {
        accessorKey: "posting_group",
        header: "Posting Group",
      },
      {
        accessorKey: "sub_code",
        header: "Sub Code",
      },
      {
        accessorKey: "location_code",
        header: "Location Code",
      },
      {
        accessorKey: "owner",
        header: "Owner",
      },
      {
        accessorKey: "entrust_id",
        header: "Entrust Id",
      },
      {
        accessorKey: "value",
        header: "Value",
      },

      {
        accessorKey: "quantity",
        header: "Quantity",
      },
      {
        accessorKey: "unit",
        header: "Unit",
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default BasicTable;
