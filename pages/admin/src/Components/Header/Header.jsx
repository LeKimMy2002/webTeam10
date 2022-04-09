import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom"

const Header = ({title}) => {
  return (
    <> 
    <div className="Header-container d-flex align-items-center justify-content-between">
        <h2>{title}</h2>
        <div className="d-flex align-items-center">
            <ul className="header-toast d-flex align-items-center">
                <li className="position-relative">
                    <span><i className="fa-solid fa-bell"></i></span>
                    <ul className="position-absolute">
                        <li className="d-flex align-items-center">
                            <img src="https://kenh14cdn.com/thumb_w/660/2019/11/4/gat-15728601915341345361930.jpg" alt="" />
                            <Link to="/">
                                <h4>Người dùng 12345 đã đặt hàng</h4>
                                <span>12:20:24 Mar</span>
                            </Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <img src="https://kenh14cdn.com/thumb_w/660/2019/11/4/gat-15728601915341345361930.jpg" alt="" />
                            <Link to="/">
                                <h4>Người dùng 12345 đã đặt hàng</h4>
                                <span>12:20:24 Mar</span>
                            </Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <img src="https://kenh14cdn.com/thumb_w/660/2019/11/4/gat-15728601915341345361930.jpg" alt="" />
                            <Link to="/">
                                <h4>Người dùng 12345 đã đặt hàng</h4>
                                <span>12:20:24 Mar</span>
                            </Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <img src="https://kenh14cdn.com/thumb_w/660/2019/11/4/gat-15728601915341345361930.jpg" alt="" />
                            <Link to="/">
                                <h4>Người dùng 12345 đã đặt hàng</h4>
                                <span>12:20:24 Mar</span>
                            </Link>
                        </li>
                        <li className="d-flex align-items-center">
                            <img src="https://kenh14cdn.com/thumb_w/660/2019/11/4/gat-15728601915341345361930.jpg" alt="" />
                            <Link to="/">
                                <h4>Người dùng 12345 đã đặt hàng</h4>
                                <span>12:20:24 Mar</span>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="user d-flex align-items-center">
                <img src="https://kenh14cdn.com/thumb_w/660/2019/11/4/gat-15728601915341345361930.jpg" alt="cheff" />
                <div>
                    <h3>Gordon Ramsay</h3>
                    <span>Super Admin</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header;