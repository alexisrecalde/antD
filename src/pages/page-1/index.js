import React from "react";
import { useQuery } from "react-query";
import { getDataPending, getDataToDeliver, getDataDelivered } from "./service";
import { Col, Row, Spin } from "antd";
import Icon from "@ant-design/icons";
import DataTable from "./components/dataTable";

const TableContainer = () => {
  const { data: dataPending, isLoading: isLoadingDataPending } = useQuery(
    "dataPending",
    () => getDataPending()
  );

  const { data: dataToDeliver } = useQuery("productsPreparation", () =>
    getDataToDeliver()
  );
  const { data: dataDelivered } = useQuery("productsDispatched", () =>
    getDataDelivered()
  );

  const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

  const tabOptions = [
    { key: "pending", tab: "En Preparación", data: dataPending },
    { key: "to_deliver", tab: "Despachado", data: dataToDeliver },
    { key: "delivered", tab: "Entregado", data: dataDelivered },
    { key: "rejected", tab: "Rechazado", data: [] },
  ];

  return (
    <div>
      <Row>
        <Col span={8}>
          <h2>Ordenes de compra</h2>
        </Col>
      </Row>

      {isLoadingDataPending ? (
        <Spin indicator={antIcon} />
      ) : (
        <Row>
          <Col span={24}>
            <DataTable
              tabOptions={tabOptions}
              dataPending={dataPending}
              dataToDeliver={dataToDeliver}
              dataDelivered={dataDelivered}
            />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default TableContainer;
