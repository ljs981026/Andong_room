import MapBox from './components/map_sol.jsx';
import MapBox2 from './components/map_non.jsx';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Main from './components/main';
import React from 'react';
import Room1info from './components/room1_info';
import Room2info from './components/room2_info';
import MapSort from './components/map_sort';
import MapAround from './components/map_around';
import PlaceInfo from './components/place_info';
import Login from './components/login.jsx';

function App() {
		return (
			<BrowserRouter>
					<Routes>
						<Route path="/" element={<Main />}></Route>
						<Route path="/room/sol/*" element={<MapBox />}></Route>
						<Route path="/room/non/*" element={<MapBox2 />}></Route>
						<Route path="/around" element={<MapSort />}></Route>
						<Route path={`/room/sol:r_num`} element={<Room1info />}></Route>
						<Route path={`/room/non:r_num`} element={<Room2info />}></Route>
						<Route path={`/around/food`} element={<MapAround />}></Route>
						<Route path={`/around/alchole`} element={<MapAround />}></Route>
						<Route path={`/around/play`} element={<MapAround />}></Route>
						<Route path={`/around/convinience`} element={<MapAround />}></Route>
						<Route path={`/around/food:r_num`} element={<PlaceInfo/>}></Route>
						<Route path={`/around/alchole:r_num`} element={<PlaceInfo/>}></Route>
						<Route path={`/around/play:r_num`} element={<PlaceInfo/>}></Route>
						<Route path={`/around/convinience:r_num`} element={<PlaceInfo/>}></Route>
						<Route path='/login' element={<Login />}></Route>
					</Routes>
			</BrowserRouter>
		)
}

export default App;
