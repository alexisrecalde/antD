import { Tabs, Table } from "antd";
import Icon, { FileOutlined, SearchOutlined } from "@ant-design/icons";
import "../dataTable/style.css";
import { useState } from "react";
import CustomInput from "../../../../components/Antd/Input";

const DataTable = ({ tabOptions }) => {
  const [searchText, setSearchText] = useState("");

  const columns = [
    {
      title: "N° de orden",
      dataIndex: "trx_id",
      key: "trx_id",
    },
    {
      title: "Tipo de entrega",
      dataIndex: "delivery_type",
      key: "delivery_type",
      render: (deliveryType) => {
        if (deliveryType === "domicilio") {
          return "Despacho a domicilio";
        } else if (deliveryType === "farmacia") {
          return "Retiro en farmacia";
        } else {
          return deliveryType;
        }
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (deliveryTypeObj) => {
        return deliveryTypeObj.description;
      },
    },
    {
      title: "Fecha y hora",
      dataIndex: "createdAt",
      key: "createdAt",

      render: (createdAt) => {
        const date = new Date(createdAt * 1000);
        const formattedDate = `${("0" + date.getDate()).slice(-2)}/${(
          "0" +
          (date.getMonth() + 1)
        ).slice(-2)}/${date.getFullYear()} ${("0" + date.getHours()).slice(
          -2
        )}:${("0" + date.getMinutes()).slice(-2)}:${(
          "0" + date.getSeconds()
        ).slice(-2)}`;

        return formattedDate;
      },
    },
    {
      align: "center",
      title: "Voucher",
      dataIndex: "url_voucher",
      key: "url_voucher",
      render: (url_voucher) => {
        return (
          <a
            className="link-voucher"
            href={url_voucher}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon className="link-voucher" component={FileOutlined} />
          </a>
        );
      },
    },
    {
      align: "center",
      title: "Detalle",
      dataIndex: "detailOrder",
      key: "detailOrder",
      render: () => {
        return (
          <a href="/" className="link-voucher">
            <Icon className="link-voucher" component={SearchOutlined} />
          </a>
        );
      },
    },
  ];

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = tabOptions.map((tab) => ({
    ...tab,
    data: tab.data?.filter((item) => {
      const trxId = item.trx_id.toString();

      if (searchText === "") {
        return true;
      }

      return trxId.toLowerCase().includes(searchText.toLowerCase());
    }),
  }));

  const operations = (
    <div className="search-container">
      <CustomInput
        onChange={handleSearch}
        placeholder="N° de RUT"
        addonAfter={<SearchOutlined />}
      />
      <CustomInput
        onChange={handleSearch}
        placeholder="N° de orden"
        addonAfter={<SearchOutlined />}
      />
    </div>
  );

  return (
    <div>
      <Tabs tabBarExtraContent={operations}>
        {filteredData.map((tab) => (
          <Tabs.TabPane key={tab.key} tab={tab.tab}>
            <Table dataSource={tab.data} columns={columns} />
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default DataTable;
