import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
function Auth({ cmp: Component, ...rest }) {
	const state = useSelector((state) => state.auth);
	return (state.auth ? <Route {...rest} render={(props) => <Component {...props} />} /> : <Redirect to="/" />)
}
export default Auth;
