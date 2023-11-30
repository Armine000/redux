import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "../src/App.css";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReduser";
import { useRef } from "react";

const Home = () => {
  const users = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  const hendleDelete = (id: any) => {
    dispatch(
      deleteUser({
        id: id,
      })
    );
  };
  return (
    <div className="container">
      <div className="parag">
        <h2>App with Json Server</h2>
      </div>
      <div className="buttons">
        <Link to="/create" style={{ textDecoration: "none" }}>
          {" "}
          <Button
            style={{
              width: 110,
              height: 50,
              backgroundColor: "green",
              color: "white",
              textDecoration: "none",
            }}
          >
            Create +
          </Button>
        </Link>
      </div>
      <table className="table">
        <thead className="thader">
          <tr className="trs">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {users.map((user: any, index: any) => {
            return (
              <tr key={index} className="tr">
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit/${user.id}`}>
                    <Button className="edit">Edit</Button>
                  </Link>
                  <Button
                    onClick={() => hendleDelete(user.id)}
                    className="delete"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
