import React, { useState } from "react";
import AdminLayout from "../Layout";
import "./Form.css";

export default function Form() {
  return (
    <AdminLayout>
      <div className="container">
        <div className="form_container">
          <form className="form">
            <div className="form_field"></div>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
