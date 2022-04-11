import { Table, Button, Pagination } from 'rsuite';
import React from 'react';  
import 'rsuite/dist/rsuite.min.css';
import "./Table.css";
// import Data from "../../Data/Product.json";

const App = () => {
  let Data = [
    {
        "id":"50",
        "type_prd":"Dịch vụ cơ bản",
        "type":"Dịch vụ cơ bản",
        "name":"Buffet Hải sản",
        "adress":"Đại học Thuỷ Lợi",
        "price":"15",
        "count": 0,
        "image":"/images/product/Dịch vụ cơ bản/blackcofe.jpg"
    },
    {
        "id":"51",
        "type_prd":"Dịch vụ cơ bản",
        "type":"Dịch vụ cơ bản",
        "name":"Buffet Thập cẩm",
        "adress":"Đại học Thuỷ Lợi",
        "price":"15",
        "count": 22,
        "image":"/images/product/Dịch vụ cơ bản/milkcofe.jpg"
    },
    {
        "id":"52",
        "type_prd":"Dịch vụ cơ bản",
        "type":"Dịch vụ cơ bản",
        "name":"Buffet Bánh ngọt",
        "adress":"Đại học Thuỷ Lợi",
        "price":"15",
        "count": 16,
        "image":"/images/product/Dịch vụ cơ bản/blueberry.jpg"
    },
    {
        "id":"53",
        "type_prd":"Dịch vụ cơ bản",
        "type":"Dịch vụ cơ bản",
        "name":"Giặt quần áo",
        "adress":"Đại học Thuỷ Lợi",
        "price":"15",
        "count": 31,
        "image":"/images/product/Dịch vụ cơ bản/nuoceptraicay.jpg"
    },
    {
        "id":"54",
        "type_prd":"Dịch vụ cơ bản",
        "type":"Dịch vụ cơ bản",
        "name":"Dọn dẹp phòng",
        "adress":"Đại học Thuỷ Lợi",
        "price":"15",
        "count": 120,
        "image":"/images/product/Dịch vụ cơ bản/softDịch vụ cơ bản.jpg"
    },
    {
        "id":"55",
        "type_prd":"Dịch vụ cơ bản",
        "type":"Dịch vụ cơ bản",
        "name":"Thuê xe tự lái",
        "adress":"Đại học Thuỷ Lợi",
        "price":"15",
        "count": 0,
        "image":"/images/product/Dịch vụ cơ bản/sinhtobo.jpg"
    },
    {
        "id":"56",
        "type_prd":"Dịch vụ cơ bản",
        "type":"Dịch vụ cơ bản",
        "name":"Thuê hướng dẫn viên du lịch",
        "adress":"Đại học Thuỷ Lợi",
        "price":"15",
        "count": 44,
        "image":"/images/product/Dịch vụ cơ bản/sinhtomatcha.jpg"
    },
    {
        "id":"57",
        "type_prd":"Dịch vụ cơ bản",
        "type":"Dịch vụ cơ bản",
        "name":"Dịch vụ Spa tại phòng",
        "adress":"Đại học Thuỷ Lợi",
        "price":"15",
        "count": 100,
        "image":"/images/product/Dịch vụ cơ bản/soda.jpg"
    },
    {
        "id":"57",
        "type_prd":"Dịch vụ cơ bản",
        "type":"Dịch vụ cơ bản",
        "name":"Quầy bar",
        "adress":"Đại học Thuỷ Lợi",
        "price":"15",
        "count": 100,
        "image":"/images/product/Dịch vụ cơ bản/soda.jpg"
    },
    {
        "id":"57",
        "type_prd":"Dịch vụ cơ bản",
        "type":"Dịch vụ cơ bản",
        "name":"Phòng GYM",
        "adress":"Đại học Thuỷ Lợi",
        "price":"15",
        "count": 100,
        "image":"/images/product/Dịch vụ cơ bản/soda.jpg"
    }
  ]

  const {Column, Cell, HeaderCell} = Table;
  const [sortColumn, setSortColumn] = React.useState();
  const [sortType, setSortType] = React.useState();

  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const [filter, setFilter] = React.useState("Tất cả")

  const [data, setData] = React.useState(Data.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  }))
  
  React.useEffect(() => {
    setData(
      Data.filter((v, i) => {
            const start = limit * (page - 1);
            const end = start + limit;
            return i >= start && i < end;
        })
    )
  }, [page])

  const handleChangeLimit = dataKey => {
    setPage(1);
    setLimit(dataKey);
  };

  const getData = () => {
    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === 'string') {
          x = +x
        }
        if (typeof y === 'string') {
          y = +y
        }
        if (sortType === 'asc') {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return data;
  };

  const handleSortColumn = (sortColumn, sortType) => {
    setTimeout(() => {
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  const StatusCell = ({ rowData, dataKey, onClick, ...props }) => {
    return (
      <Cell {...props} style={{ padding: '6px' }} className="text-center">
        <span className={`status-${rowData[dataKey] === 0 ? "false" : "true"} d-inline-block`}>
            {rowData[dataKey] === 0 || rowData[dataKey] === undefined ? "Tạm đóng" : "Đang mở"}
        </span>
      </Cell>
    );
  };

  const EditCell = ({ rowData, dataKey, onChange, ...props }) => {
    const editing = rowData.status === 'EDIT';
    return (
      <Cell {...props} className={editing ? 'table-content-editing' : ''}>
        {editing ? (
          <input
            className="rs-input"
            value={rowData[dataKey]}
            onChange={event => {
              onChange && onChange(rowData.id, dataKey, event.target.value);
            }}
          />
        ) : (
          <span className="table-content-edit-span">{rowData[dataKey]}</span>
        )}
      </Cell>
    );
  };

  const handleChange = (id, key, value) => {
    const nextData = Object.assign([], data);
    nextData.find(item => item.id === id)[key] = value;
    setData(nextData);
  };
  const handleEditState = id => {
    const nextData = Object.assign([], data);
    const activeItem = nextData.find(item => item.id === id);
    activeItem.status = activeItem.status ? null : 'EDIT';
    setData(nextData);
  };

  const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {
    return (
      <Cell {...props} style={{ padding: '6px' }}>
        <Button className="mx-1 position-relative action-button"
          onClick={() => {
            onClick(rowData.id)
          }}
        >
          <span className="action-cell">{rowData.status === 'EDIT' ? <i className="fa-solid fa-check save"></i> : <i className="fa-solid fa-pen-to-square edit"></i>}</span>
        </Button>
        <Button className="mx-1 position-relative action-button" 
          onClick={() => {
            setData(data.filter(item => item.id !== rowData.id))
          }}
        ><span className="action-cell"><i className="fa-solid fa-trash-can"></i></span></Button>
      </Cell>
    );
  };

  const [newProduct, setNewProduct] = React.useState(false)
  const [addNew, setaddNew] = React.useState({ id:"", name:"", type:"", price:"", count:"", adress:""})

  const ModalTwo = () => {
    return (
      <>
      {newProduct && (<div className="d-block">
        <div className="modal-container">
          <div className="modal-overley"></div>
          <div className="row modal-box py-3 align-items-center position-relative">
            <div onClick={() => setNewProduct(false)} className="position-absolute times-button text-center"><i className="fa-solid fa-xmark"></i></div>
            <div className="w-100 text-center add-member-form">
                <h4 className="mb-2">Thêm một sản phẩm mới</h4>
                <div>
                  <input type="text" placeholder="Mã sản phẩm" 
                    value={ addNew.id }
                    onChange={e => setaddNew({...addNew, id: e.target.value})}
                  />
                </div>
                <div>
                  <input type="text" placeholder="Tên sản phẩm" 
                    value={ addNew.name }
                    onChange={e => setaddNew({...addNew, name: e.target.value})}
                  />
                </div>
                <div>
                  <input type="text" placeholder="Đơn giá ($)" 
                    value={ addNew.price }
                    onChange={e => setaddNew({...addNew, price: e.target.value})}
                  />
                </div>
                <div>
                  <input type="text" placeholder="Trạng thái" 
                    value={ addNew.count }
                    onChange={e => setaddNew({...addNew, count: e.target.value})}
                  />
                </div>
                <button onClick={() => {setData(prev => [addNew, ...prev]); setNewProduct(false)}} className="submit-btn" type="submit">Thêm vào</button>
            </div>
          </div>
        </div>
      </div>)}
      </>
    );
  }

  return (
    <>
    <div className="change-filter">
        <span className={filter === "Tất cả" ? "active-filter":""} onClick={()=> {setData(Data.filter(item => item)); setFilter("Tất cả")}}>Tất cả</span>
        <span onClick={() => setNewProduct(true)}>Thêm dịch vụ</span>
    </div>
    <div className="search-input position-relative mb-3">
        <input className="w-50" placeholder="Bạn muốn tìm gì" />
        <button className="ms-3">Tìm kiếm</button>
    </div>
    <Table
      height={460}
      data={getData()}
      sortColumn={sortColumn}
      sortType={sortType}
      onSortColumn={handleSortColumn}
    >
      <Column width={120} align="center">
        <HeaderCell>Mã dịch vụ</HeaderCell>
        <Cell dataKey="id" />
      </Column>
      <Column width={200} align="center">
        <HeaderCell>Loại dịch vụ</HeaderCell>
        <Cell dataKey="type" />
      </Column>
      <Column width={220} align="center">
        <HeaderCell>Tên dịch vụ</HeaderCell>
        <EditCell dataKey="name" onChange={handleChange}/>
      </Column>
      <Column width={150} align="center" sortable>
        <HeaderCell>Đơn giá (VNĐ)</HeaderCell>
        <EditCell dataKey="count" onChange={handleChange}/>
      </Column>
      <Column width={140} align="center">
        <HeaderCell>Trạng thái</HeaderCell>
        <StatusCell dataKey="count" />
      </Column>
      <Column width={165} align="center">
        <HeaderCell>Action</HeaderCell>
        <ActionCell dataKey="id" onClick={handleEditState}/>
      </Column>
    </Table>
    <div className="pagination-box">
        {
            data &&
            <Pagination
                prev
                next
                first
                last
                ellipsis
                boundaryLinks
                maxButtons={5}
                size="xs"
                layout={[ '-', 'pager']}
                total={Data.length}
                limitOptions={[10, 20]}
                limit={limit}
                activePage={page}
                onChangePage={setPage}
                onChangeLimit={handleChangeLimit}
            />
        }
    </div>
    <ModalTwo />
    </>
  );
};

export default App