import React from "react";
import Button from "@material-ui/core/Button";
import "../styles/Todo.css";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";

function Todo() {
  return (
    <div>
      <div className="todo">
        <Link to="/send/register">
          <Button variant="contained" color="primary">
            Gửi đồ
          </Button>
        </Link>
        <Link to="/receive">
          <Button variant="contained" color="secondary">
            Nhận đồ
          </Button>
        </Link>
      </div>
      <Contact />
    </div>
  );
}

export default Todo;
