import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const Requirementform = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
      message: "",
      spices: "",
      pulses: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      contact: Yup.string()
        .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number")
        .required("Contact number is required"),
      message: Yup.string().required("Message is required"),
      spices: Yup.string(),
      pulses: Yup.string(),
    }).test("at-least-one", "Select at least one category", function (values) {
      return values.spices || values.pulses;
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const emailPromise = emailjs.send(
          "service_g3gzaoo",
          "template_5ij1119",
          values,
          "wVnOZeovgApKzKHjW"
        );

        toast.success("Your details have been submitted!", { position: "top-center" });
        resetForm();
        await emailPromise;
      } catch (error) {
        toast.error("Something went wrong. Try again!", { position: "top-center" });
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100 p-4">
      <div className="bg-blue-100 text-black p-6 md:p-8 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Send Us Your Requirement</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="block text-black">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-2 border rounded text-black bg-white"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500">{formik.errors.name}</div>
            )}
          </div>

          <div>
            <label className="block text-black">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email id"
              className="w-full p-2 border rounded text-black bg-white"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>

          <div>
            <label className="block text-black">Contact:</label>
            <input
              type="text"
              name="contact"
              placeholder="Enter your contact number"
              className="w-full p-2 border rounded text-black bg-white"
              {...formik.getFieldProps("contact")}
            />
            {formik.touched.contact && formik.errors.contact && (
              <div className="text-red-500">{formik.errors.contact}</div>
            )}
          </div>

          <div>
            <label className="block text-black">Message:</label>
            <textarea
              name="message"
              placeholder="Write your message here"
              className="w-full p-2 border rounded text-black bg-white"
              rows="4"
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-500">{formik.errors.message}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Requirementform;
