import React from 'react';
import Header from "../../Components/Header/Header";
import "./Blogs.css";
import Data from "../../Data/Blogs.json"

const Blogs = () => {
  const [data, setData] = React.useState(Data)
  return (
    <>
    <div className="content">
      <Header title="Blogs"/>
      <div className="box">
        <div className="d-flex flex-wrap">
          {data.map((item, index) => {
            return <div key={index} className="post d-flex mb-3">
                      <div class="post-image">
                          <img src={item.image_1} alt="/" />
                      </div>
                      <div class="post-content d-flex flex-column">
                          <h3 className="mb-2">{item.namepost}</h3>
                          <span class="time-post">
                              <span class="date">{item.time}</span>
                                  <span class="space-text">/</span>
                              <span class="author">{item.author}</span>
                                  <span class="space-text">/</span>
                              <span><i class="fas fa-eye"></i></span>
                              <span class="total-view">{item.view}</span>
                          </span>
                          <p className='mt-2'>{item.description}</p>
                          <div className="mt-3">
                            <a href='/' class="more-btn mt-auto d-inline-block me-2">Sửa bài viết</a>
                            <span onClick={() => setData(data.filter(elm => elm.id != item.id))}class="more-btn mt-auto d-inline-block">Xóa bài viết</span>
                          </div>
                      </div>
                    </div>
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default Blogs