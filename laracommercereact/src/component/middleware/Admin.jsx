import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
function Admin({ children }) {
	const state = useSelector((state) => state.auth);
	return (state.auth && (state.auth.roles_id===2? {children} : <Redirect to="/dashboard" />))
}
export default Admin;
