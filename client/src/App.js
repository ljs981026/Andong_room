import logo from './logo.svg';
import MapBox from './components/map.jsx';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Main from './components/main';
import React from 'react';
import Room1info from './components/room1_info';
import queryString from 'query-string';
// import Rou from './route';

function App() {
		// <MapBox {...this.props} />
					
		let qs = queryString.parse(window.location.search)
		console.log(window.location.pathname)
		let index = window.location.pathname
		index = index.slice(16,18)
		console.log(index)
		return (
			<BrowserRouter>
					<Routes>
						<Route path="/" element={<Main />}></Route>
						<Route path="/room/sol/*" element={<MapBox />}></Route>
						<Route path={`/room/sol/:r_num`} element={<Room1info />}></Route>
					</Routes>
			</BrowserRouter>
		)
}

export default App;
