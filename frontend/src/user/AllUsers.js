import React, { useEffect, useState } from "react";
import { getAllUsers } from "../core/apiCore";
import Layout from "./../core/Layout";
function AllUsers() {
  const [allUsers, setAllUsers] = useState();
  useEffect(async () => {
    const allData = await getAllUsers();
    setAllUsers(allData);
  }, []);

  return (
    <Layout>
      <div className="mt-5 p-5">
        <h2 className="">All Users</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Email</th>
              <th scope="col">UserName</th>
            </tr>
          </thead>
          <tbody>
            {allUsers &&
              allUsers.map((users, i) => (
                <>
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{users.email}</td>
                    <td>{users.username}</td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

{
  /* <div key={i} className="col-4 mb-3 d-flex">
              <p className="mr-5">{users.email}</p>
              <p>{users.username}</p>
            </div> */
}

export default AllUsers;
