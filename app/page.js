/* eslint-disable react/jsx-key */
import React from "react";
import executeQuery from "./db";
import PropTypes from "prop-types";

const page = async () => {
  const result = await executeQuery("select * from users", []);

  return (
    <>
      <div>
        <h1>Fetching data from mysql</h1>
      </div>
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
          {result.map((users) => (
            <tr>
              <td>{users.name}</td>
              <td>{users.email}</td>
              <td>{users.gender}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default page;
