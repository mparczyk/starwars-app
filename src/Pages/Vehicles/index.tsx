import { Link } from "react-router-dom";
import { useState } from "react";
import { List, Card, Pagination } from "antd";

import type { IVehicles } from "../../types/types";

import { useVehiclesQuery } from "../../queries/queries";

export const VehiclesPage = (): JSX.Element => {
  const [pageNum, setPageNum] = useState(1);
  const { data: vehicles } = useVehiclesQuery(pageNum);

  return (
    <>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={vehicles?.results}
        renderItem={(vehicle: IVehicles) => {
          const vehiclesId = vehicle.url.split("/");
          const id = vehiclesId[5];
          return (
            <List.Item>
              <Card title={<Link to={`/vehicles/${id}`}>{vehicle.name}</Link>}>
                <p>{vehicle.model}</p>
                <p>{vehicle.vehicle_class}</p>
                <p>{vehicle.length}</p>
              </Card>
            </List.Item>
          );
        }}
      />
      <Pagination
        style={{ backgroundColor: "white", width: "500px" }}
        pageSize={10}
        total={vehicles?.count}
        onChange={(page) => {
          setPageNum(page);
        }}
      />
    </>
  );
};
