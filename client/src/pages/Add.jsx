import React from "react";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ImageValidation } from "../validation/Validation";
import { Post } from "../api/request";
const Add = () => {
  const navigate = useNavigate();
  const handleSubmit = async(values, actions) => {
    await Post(values);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${values.name} posted successfully!`,
      showConfirmButton: false,
      timer: 1500
    })
    actions.resetForm();
    navigate('/hello');
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      image: "",
    },
    validationSchema: ImageValidation,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <Helmet>
        <title>Add Pages</title>
      </Helmet>
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="enter name"
          type="text"
          name="name"
        />
        {formik.errors.name && formik.touched.name && (
          <span>{formik.errors.name}</span>
        )}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          placeholder="enter age"
          type="number"
          name="age"
        />
        {formik.errors.age && formik.touched.age && (
          <span>{formik.errors.age}</span>
        )}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
          placeholder="enter image"
          type="url"
          name="image"
        />
        {formik.errors.image && formik.touched.image && (
          <span>{formik.errors.image}</span>
        )}
        <button
        //   disabled={Object.keys(formik.errors).length !== 0 ? true : false}
          type="submit"
        >
          Add New Models
        </button>
      </form>
    </>
  );
};

export default Add;

