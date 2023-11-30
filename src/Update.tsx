import { Button, Form, Input } from "antd";
import "./App.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from "./UserReduser";

const Update = ()=>{
    const {id} = useParams();
    const users = useSelector((state:any)=> state.users);
    const existingUser = users.filter((f:any)=> f.id == id);
    const {name,email} = existingUser[0];
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handelChangUpdate = (event:any)=>{
         
          dispatch(updateUser({
            id:id,
            name:uname,
            email:uemail
          }))
          navigate('/')
    }
    return(
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
            <h2>Update User</h2>
            <Form.Item label="Name">
              <Input
                name="name"
                type="text"
                className="form-control"
                 value={uname}
                 onChange={((e:any)=> setName(e.target.value))}
              />
            </Form.Item>
            <Form.Item label="Email" className="form-item">
              <Input
                name="email"
                type="email"
                className="form-control"
                value={uemail}
                onChange={((e:any)=> setEmail(e.target.value))}
              />
            </Form.Item>
            <Form.Item style={{ alignSelf: "start", marginLeft: 50 }}>
              <Button className="btn" onClick={handelChangUpdate}> Update</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
}

export default Update;