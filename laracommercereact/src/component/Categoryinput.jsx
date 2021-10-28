import React, { useState } from 'react'
import axios from 'axios';
import { Form, Spinner } from 'react-bootstrap';
import { Button } from '../Global';
import toastify from '../helper';

function Categoryinput({catfetch}) {
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState({});
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
  };
  const categorySubmit = (e) => {
    setLoading(true);
    seterror({});
    e.preventDefault();
    axios.post("api/category/create", category).then((res) => {
      if (res.status === 200) {
        setCategory({
          category_name: "",
          category_status: false,
        });
        setLoading(false);
        catfetch()
        toastify("success", "Category Added");
        return false;
      }
    }).catch((err) => {
      toastify("error", "must be some problem");
      setLoading(false);
      seterror({ ...err.response.data });
    });
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
          {(error.errors && (error.errors).category_name) && <h5 className="text-danger">{error.errors['category_name']}</h5>}
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
          {loading ? (
            <Spinner animation="border" variant="success" size="sm" />
          ) : (
            "Submit"
          )}
        </Button>
      </Form>
    </>
    )
}

export default Categoryinput
