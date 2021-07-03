import React, { useState } from "react";
import { Title } from "../Global";
import { Badge, Button, Table, Form } from "react-bootstrap";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Product from "../pages/Product";
import Modals from "../component/Modals";
function Category() {
  return (
    <div>
      <div className="title_bar">
        <Title>Category</Title>
        <Modals title="Create Category" body={<Demo />} />
      </div>
      <hr />
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Toy</td>
            <td>
              <Badge variant="success justify-space-between">active</Badge>
            </td>
            <td>
              <div className="d-flex">
                <Button variant="success">
                  <FaPlusCircle />
                </Button>
                <Button variant="danger ml-2">
                  <FaMinusCircle />
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr />
    </div>
  );
}

function Demo() {
  const [error, seterror] = useState({
    category_name: [],
  });
  const [category, setCategory] = useState({
    category_name: "",
    category_status: false,
  });
  const categoryName = (e) => {
    setCategory({
      ...category,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
    console.log(e.target.checked);
  };
  const categorySubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/category/create", {
      method: "POST",
      body: JSON.stringify(category),
      headers: {
        Authorization: "Bearer 3|hND8fU89qtyYn7FrbEEILli0p5WUXEmWtsmyhjnh",
        "Content-Type": "application/json",
        Accept: "applictaion/json",
      },
    })
      .then((e) => e.json())
      .then((res) => {
        if (res.errors) {
          seterror({
            category_name: res.errors.category_name,
          });
          return false;
        }
        seterror({
          category_name: [],
        });
        setCategory({
          category_name:'',
          category_status:false
        })
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(category);
  };
  return (
    <>
      <Form onSubmit={categorySubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            value={category.category_name}
            onChange={categoryName}
            type="text"
            name="category_name"
            placeholder="Enter Category Name"
          />
          {error.category_name ? (
            <p className="text-danger" key={error.category_name[0]}>
              {error.category_name[0]}
            </p>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            checked={category.category_status}
            onChange={categoryName}
            type="checkbox"
            label="Check me out"
            name="category_status"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
export default Category;
