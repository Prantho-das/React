import React, { useEffect, useState } from 'react';
import { Title } from '../Global';
import { Badge, Button, Table, Spinner } from 'react-bootstrap';
import { FaPlusCircle, FaMinusCircle, FaEye } from 'react-icons/fa';
import Modals from '../component/Modals';
import toastify from '../helper.js';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import { FiEyeOff } from 'react-icons/fi';
import Categoryinput from "../component/Categoryinput";

function Category() {
  const [category, setCategory] = useState({});
  const catUpdate = (id) => {
    window.confirm('Are you sure you want to update');
    console.log(id);
  };
  const catDelete = (id) => {
    window.confirm('Are you sure you want to Delete');
    axios
      .delete(`api/category/delete/${id}`)
      .then((res) => {
        toastify('info', res.data.msg);
        catfetch();
      })
      .catch((err) => {
        toastify('error', err.response.msg);
      });
  };
  const catStatus = (id) => {
    window.confirm('Are you Want to Update Status');
    axios
      .post(`api/category/disabled/${id}`)
      .then((res) => {
        catfetch();
        toastify('info', res.data.msg);
      })
      .catch((err) => {
        toastify('error', err.response.msg);
      });
  };
  const catfetch = (pageno = 1) => {
    axios
      .get('/api/category?page=' + pageno)
      .then((response) => {
        setCategory({ ...response.data });
      })
      .catch((error) => {
        toastify('error', 'Some problem occured');
      });
  };
  useEffect(() => {
    catfetch();
  }, []);
  return (
    <>
      <div className="title_bar">
        <Title>Category</Title>
        <Modals title="Create Category" body={<Categoryinput catfetch={catfetch} />} />
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
          {
            category && category.data ? (
              category.data.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{++i}</td>
                    <td>{data.category_name}</td>
                    <td>
                      <Badge variant="{data.category_status?'success':'danger'} justify-space-between">
                        {data.category_status ? 'active' : 'deactive'}
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex">
                        <Button variant="success" onClick={() => catUpdate(data.id)}>
                          <FaPlusCircle />
                        </Button>
                        <Button variant="danger ml-2" onClick={() => catDelete(data.id)}>
                          <FaMinusCircle />
                        </Button>
                        <Button variant="info ml-2" onClick={() => catStatus(data.id)}>
                          {data.category_status ? <FiEyeOff /> : <FaEye />}
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              }))
              :
              <Spinner className='mx-auto' animation="border" variant="success" size="lg" />
          }
        </tbody>
      </Table>
      {category.data && (
        <div className="pagination mx-auto">
          <Pagination
            activePage={category.current_page}
            itemsCountPerPage={category.per_page}
            totalItemsCount={category.total}
            pageRangeDisplayed={5}
            onChange={catfetch}
            itemClass="page-item"
            activeClass="active"
            innerClass="pagination"
            linkClass="page-link"
            disabledClass="disabled"
          />
        </div>
      )}
      <hr />
    </>
  );
}

export default Category;
