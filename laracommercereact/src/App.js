import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import Dashboard from "./pages/Dashboard";
import { Route, Switch, NavLink } from "react-router-dom";
import Category from "./pages/Category";
import { SideBody, SideNav, Pagebody } from "./Global";
import NavMenu from "./component/NavMenu";
import { useState } from "react";
import { FiHome, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineInboxIn } from "react-icons/hi";
function App() {
  const [active, setactive] = useState(true);
  return (
    <div className="App">
      <NavMenu />
      <SideNav
        sidenav={active}
        className="sidenav shadow bg-primary text-primary"
      >
        <Nav defaultActiveKey="/" className="flex-column">
          <NavLink exact activeClassName="active" className="nav-link" to="/">
            <FiHome />
            <span className="ml-4 d-block">Dashboard</span>
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            className="nav-link"
            to="/category"
          >
            <HiOutlineInboxIn />
            <span className="ml-4 d-block">Category</span>
          </NavLink>
        </Nav>
      </SideNav>
      <SideBody sidebody={active}>
        <div className="hambarger">
          <div className="icon" onClick={() => setactive((prev) => !prev)}>
            {
              active?<FiMenu />:<FiX/>
            }
          </div>
        </div>
        <Pagebody>
          <Switch>
            <Route path="/" exact component={() => <Dashboard />} />
            <Route path="/login" component={() => <Dashboard />} />
            <Route path="/signup" component={() => <Dashboard />} />
            <Route path="/category" component={() => <Category />} />
          </Switch>
        </Pagebody>
      </SideBody>
    </div>
  );
}

export default App;
