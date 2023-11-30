import { Button, Form, Input } from "antd";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./UserReduser";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelSubmit = (event: any) => {
    dispatch(
      addUser({ id: users[users.length - 1].id + 1, name, email })
    );
    navigate('/')
  };
  return (
    <div
      style={{
        width: "100%",
        height: 500,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 700,
          height: 250,
          display: "flex",
          flexFlow: "column",
          backgroundColor: "gray",
          alignSelf: "center",
          borderRadius: 5,
        }}
      >
        <Form
          style={{ marginLeft: 80, display: "flex", flexFlow: "column" }}
        >
          <h2>Add New User</h2>
          <Form.Item label="Name">
            <Input
              name="name"
              type="text"
              className="form-control"
              onChange={(e: any) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Email" className="form-item">
            <Input
              name="email"
              type="email"
              className="form-control"
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item style={{ alignSelf: "start", marginLeft: 50 }}>
            <Button className="btn" onClick={handelSubmit}> Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Create;
