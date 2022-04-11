import React from 'react';
import Header from "../../Components/Header/Header";
import MemberTable from "../../Components/Table/addRoom"

const OrderDetail = () => {
  return (
    <>
    <div className="content">
      <Header title="Danh sách phòng"/>
      <div className="box">
        <MemberTable />
      </div>
    </div>
    </>
  )
}

export default OrderDetail