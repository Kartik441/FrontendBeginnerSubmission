import React, { useEffect, useState } from "react";
import "./index.css"
import Card from "./components/Card";

import base_url from "./api/bootapi";
import axios from "axios";
import Spinner from "react-spinkit";

const App = () => {

  const [users, setUsers] = useState([]);



  // functions to call server
  const getAllUsersFromServer = () => {
    
    axios.get(`http://localhost:8080/users`).then(
      (response) => {
        console.log(response.data);
        setUsers(response.data);
      },
      (error) => {
        console.log(error);
      }
    )
  }


  // calling load course server
  useEffect(() => {
    setTimeout(() => {
      getAllUsersFromServer();
    }, 3500)
  }, []);



  


  return (
    <div className="container">
      {
        users.length > 0 ? <div >
        {
          users.map((user) =>{
            return <Card key = {user.id} name={user.name} email={user.email} phone={user.phone} company={user.company} website={user.website} 
            address = {user.address}/>
          }
            )
        }
      </div> :
      <div>
        <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100
            }}
          >
            <Spinner name="three-bounce" color="blue" />
          </div>
        </div>
      
      }
    </div>
  );
}


export default App;