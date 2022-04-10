import './App.css';
import "./Style/Circle.css";
import Header from './Components/Header/Header';
import {useState, useEffect} from "react";
import KpiData from "./Data/Kpi.json";
import ProductData from "./Data/Product.json";
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.register(ArcElement)

function App() {
  const [kpiTitle, setKpiTitle] = useState("Ngày")
  const [kpi, setKPI] = useState(KpiData.filter(item => item.title === "Ngày"))
  useEffect(() => {
    setKPI(KpiData.filter(item => item.title === kpiTitle))
  }, [kpiTitle])
  return (
    <>
    <div className="content">
      <Header title="Dashboard" />
      <div className="box">
        <div className="d-flex flex-wrap">
          <div className="col-3">
              <div className="KPI-box position-relative d-flex flex-column align-items-center">
                  <h3>Thu Nhập Mục Tiêu Hàng {kpiTitle}</h3>
                  <div className="KPI-action">
                    <span className={kpiTitle === "Ngày" ? "Kpi-active" : ""} onClick={() => setKpiTitle("Ngày")}>Ngày</span>
                    <span className={kpiTitle === "Tháng" ? "Kpi-active" : ""} onClick={() => setKpiTitle("Tháng")}>Tháng</span>
                    <span className={kpiTitle === "Năm" ? "Kpi-active" : ""} onClick={() => setKpiTitle("Năm")}>Năm</span>
                  </div>  
                  <div className={`circle-item c100 p${kpi.map(item => (Math.floor(item.money / item.KPI * 100)))}`}>
                      <span>{kpi.map(item => (Math.floor(item.money / item.KPI * 100)))}%</span>
                      <div className="slice"><div className="bar"></div><div className="fill"></div></div>
                  </div>
                <h4>${kpi.map(item => (item.money)) > 1000 ? kpi.map(item => (item.money)) / 1000 : kpi.map(item => (item.money))}</h4>
                <span className="d-inline-block">from ${kpi.map(item => (item.KPI))}</span>
              </div>
              <div className="related-food">
                <h3 className="text-center">Món ăn được đặt nhiều nhất</h3>
                <ul>
                  {ProductData.slice(0,5).map((item, index) => {
                    return <li key={index} className="d-flex align-items-center">
                              <span className="d-inline-block text-center">#{index + 1}</span>
                              <div>
                                <h4>{item.name}</h4>
                                <div><span>${item.price}</span><span>order x84</span></div>
                              </div>
                              <img src="https://d2v79rrf7hys7i.cloudfront.net/xhtml/images/menu/Untitled-1.jpg" alt="/" />
                            </li>
                  })}
                </ul>
              </div>
          </div>
          <div className="col-9 chart-line-box">
            <div className="row">
              <div className="col-6">
              <Line
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  datasets: [
                    {
                      data: [166, 121, 198, 146, 310, 280, 133, 120, 99, 178, 150, 269, 111],
                      label: "Khách hàng",
                      borderColor: "#3e95cd",
                      fill: false
                    }
                  ]
                }}
                options={{
                  title: {
                    display: true,
                    text: "Khách hàng trong năm (người)"
                  },
                  legend: {
                    display: true,
                    position: "bottom"
                  },
                  plugins: {
                    title: {
                        display: true,
                        text: 'Biểu đồ Khách hàng'
                    }
                }
                }}
              />
              </div>
              <div className="col-6">
              <Line
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  datasets: [
                    {
                      data: [166, 121, 198, 146, 310, 280, 133, 120, 99, 178, 150, 269, 111],
                      label: "Đơn đặt hàng",
                      borderColor: "#8e5ea2",
                      fill: false
                    }
                  ]
                }}
                options={{
                  title: {
                    display: true,
                    text: "Đơn hàng trong năm"
                  },
                  legend: {
                    display: true,
                    position: "bottom"
                  },
                  plugins: {
                    title: {
                        display: true,
                        text: 'Biểu đồ đơn hàng'
                    }
                }
                }}
              />
              </div>
              <div className="col-12 mt-3">
              <Line
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  datasets: [
                    {
                      data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734, 388, 200],
                      label: "Doanh thu ($)",
                      borderColor: "red",
                      fill: false
                    },
                    {
                      data: [68, 70, 78, 90, 37, 76, 48, 47, 75, 34, 88, 20],
                      label: "Chi phí ($)",
                      borderColor: "#3cba9f",
                      fill: false
                    }
                  ]
                }}
                options={{
                  title: {
                    display: true,
                    text: "Doanh thu ($)"
                  },
                  legend: {
                    display: true,
                    position: "bottom"
                  },
                  plugins: {
                    title: {
                        display: true,
                        text: 'Biểu đồ doanh thu'
                    }
                  }
                }}
              />
              </div>
              <div className="col-6 mt-3">
              <Doughnut
                data={{
                  labels: [
                    "Đồ ăn",
                    "Đồ uống",
                    "Khác"
                  ],
                  datasets: [
                    {
                      label: "Population (millions)",
                      backgroundColor: [
                        "#3cba9f",
                        "#e8c3b9",
                        "#c45850"
                      ],
                      data: [734, 784, 433]
                    }
                  ]
                }}
                option={{
                  plugins: {
                    title: {
                        display: true,
                        text: 'Nguồn doanh thu'
                    }
                  }
                }}
              />
              </div>
              <div className="col-6 mt-3">
              <Doughnut
                data={{
                  labels: [
                    "Nguyên liệu",
                    "Maketing",
                    "Khác"
                  ],
                  datasets: [
                    {
                      label: "Chi phí",
                      backgroundColor: [
                        "#3cba9f",
                        "#e8c3b9",
                        "#c45850"
                      ],
                      data: [734, 784, 433]
                    }
                  ]
                }}
                option={{
                  plugins: {
                    title: {
                        display: true,
                        text: 'Chi phí'
                    }
                  }
                }}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default App; 