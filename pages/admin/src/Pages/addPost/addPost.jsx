import React from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import Header from "../../Components/Header/Header";
import "./addPost.css";

export default () => {
  const { quill, quillRef } = useQuill();
  console.log(quill);
  console.log(quillRef);

  const onSubmit = (data) => console.log(data);
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <div className="content">
        <Header title="Add new Post"/>
        <div className="box">
            <form onSubmit={handleSubmit(onSubmit)} action="#" method="post" className="d-flex align-items-center flex-wrap form-add-post">
                <div className="title-container">
                    <div className="myForm-control">
                        <h4>Tiêu đề bài viết</h4>
                        <input {...register('username', { required: true })} type="text" placeholder="Tiêu đề" />
                        {errors.username && <p>Hãy nhập tài khoản của bạn</p>}
                    </div>
                    <div className="myForm-control">
                        <h4>Tác giả</h4>
                        <input {...register('username', { required: true })} type="text" placeholder="Tác giả" />
                        {errors.username && <p>Hãy nhập tài khoản của bạn</p>}
                    </div>
                </div>
                <div className="text-container">
                    <h4 className="mb-2">Nội dung bài viết</h4>
                    <div ref={quillRef} />
                </div>
                <div className="action-container d-flex align-items-center flex-column">
                    <div className="upload-picture">
                        {selectedImage && (
                            <div>
                                <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                                <button onClick={()=>setSelectedImage(null)}>Remove</button>
                            </div>
                        )}
                        {
                            !selectedImage && (
                                <div class="file-upload">
                                    <input
                                        type="file"
                                        name="myImage"
                                        title=" "
                                        onChange={(event) => {
                                            console.log(event.target.files[0]);
                                            setSelectedImage(event.target.files[0]);
                                    }}/>
                                    <i class="fa fa-arrow-up"></i>
                                </div>
                            )
                        }
                    </div>
                    <button className="mt-5"type="submit">Thêm bài viết</button>
                </div>
            </form>
        </div>
  </div>
  );
};