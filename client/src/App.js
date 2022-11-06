import logo from './logo.svg';
import MapBox from './components/map.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './components/main';
// import Rou from './route';

function App() {
  return (
    <BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/room/sol" element={<MapBox />}></Route>
				</Routes>
		</BrowserRouter>
  );
}

export default App;
