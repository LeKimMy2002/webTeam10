import React from 'react';
import Header from "../../Components/Header/Header";
import Table from "../../Components/Table/KH"

const Customer = () => {
  return (
    <>
    <div className="content">
      <Header title="Khách hàng"/>
      <div className="box">
        <Table />
      </div>
    </div>
    </>
  )
}

export default Customer