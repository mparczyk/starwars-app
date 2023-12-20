import { useState } from "react";
import { List } from "antd";
import Meta from "antd/es/card/Meta";

import type { IVehicles } from "../../types/types";

import { useVehiclesQuery } from "../../api/vehicles/queries";

import { CustomPagination } from "../../UI/Pagination";
import { StyledCard, StyledLink, StyledSkeleton } from "../../styles/styles";

export const VehiclesPage = (): JSX.Element => {
  const [pageNum, setPageNum] = useState(1);
  const { data: vehicles, isLoading } = useVehiclesQuery(pageNum);

  return (
    <StyledSkeleton loading={isLoading} active paragraph={{ rows: 10 }}>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={vehicles?.results}
        renderItem={(vehicle: IVehicles) => {
          const vehiclesId = vehicle.url.split("/");
          const id = vehiclesId[5];
          return (
            <List.Item>
              <StyledCard
                cover={
                  <img
                    alt="example"
                    src="https://icon-library.com/images/darth-vader-icon/darth-vader-icon-2.jpg"
                  />
                }
              >
                <Meta
                  title={
                    <StyledLink to={`/vehicles/${id}`}>
                      {vehicle.name}
                    </StyledLink>
                  }
                />
              </StyledCard>
            </List.Item>
          );
        }}
      />
      {vehicles && (
        <CustomPagination
          totalNum={vehicles?.count}
          setPageNum={setPageNum}
          pageNum={pageNum}
        />
      )}
    </StyledSkeleton>
  );
};
