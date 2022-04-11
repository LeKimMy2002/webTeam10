import React from 'react';
import Header from "../../Components/Header/Header"
import Table from "../../Components/Table/pttkTable"
const OrderList = () => {
  return (
    <>
    <div className="content">
      <Header title="Danh sách dịch vụ"/>
      <div className="box">
        <Table />
      </div>
    </div>
    </>
  )
}

export default OrderList