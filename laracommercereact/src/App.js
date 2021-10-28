import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import { Route, Switch } from 'react-router-dom';
import Category from './pages/Category';
import Product from './pages/Product';
import { SideBody, Pagebody } from './Global';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './component/Header';
import Auth from './component/middleware/Auth';
import Search from './pages/Search';
import { useDispatch } from 'react-redux';
import { login_check } from './store/actions/auth';
import { FaBackspace } from 'react-icons/fa';
let token = localStorage.getItem('token')

function App() {
	const [active, setactive] = useState(true);
	const dispatch = useDispatch();
	const history = useHistory()
	useEffect(() => {
		if (token) {
			dispatch(login_check());
		}
	}, []);
	return (
		<>
			<div className="App">
				<Header active={active} />
				<SideBody sidebody={active}>
					<div className="hambarger">
						<div className="icon " onClick={() => setactive((prev) => !prev)}>
							{active ? <FiMenu /> : <FiX />}
						</div>
						<div className="icon">
							<FaBackspace onClick={() => history.goBack()} />
						</div>
					</div>
					<Pagebody>
						<Switch>
							<Route path="/" exact component={() => <Dashboard />} />
							<Auth path="/category" cmp={Category} />
							<Route path="/product" component={() => <Product />} />
							<Route path="/search" component={() => <Search />} />
						</Switch>
						<h5 className='text-center'>&copy; Prantho das $ {`${new Date().getFullYear() - 1}-${new Date().getFullYear()}`}</h5>
					</Pagebody>
					<ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
				</SideBody>
			</div>
		</>
	);
}

export default App;
