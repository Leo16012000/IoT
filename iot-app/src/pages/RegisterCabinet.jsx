import { TextField } from "@material-ui/core";
import React from "react";
import SimpleSelect from "../components/SimpleSelect";

function RegisterCabinet() {
  return (
    <div>
      <h2>Thông tin đăng ký</h2>
      <p>Số điện thoại người gửi đồ</p>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <p>Số điện thoại người nhận đồ</p>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <p>Kích thước</p>
      <SimpleSelect />
    </div>
  );
}

export default RegisterCabinet;
