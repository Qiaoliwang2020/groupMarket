import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.scss';

// import Manatee from './components/Manatee/Manatee';
// import Narwhal from './components/Narwhal/Narwhal';
// import Whale from './components/Whale/Whale';
import Navbar from './components/Header/Header';
import Search from './components/Header/Search';
import StoreList from "./components/index";
import Location from "./components/Header/Location";


const App = () => (
    <div className="App">
        <Navbar/>
        <div className="container  mx-auto px-4 pt-20">
            <Location/>
            <Search/>
            <StoreList/>
            {/*<BrowserRouter>*/}
            {/*    <nav>*/}
            {/*        <ul className="tab flex mt-20 mb-8">*/}
            {/*            <li className="tab-item shadow-md rounded-full px-4 py-2 bg-black  font-medium text-white mr-2"><Link to="/manatee">Manatee</Link></li>*/}
            {/*            <li className="tab-item shadow-md rounded-full px-4 py-2 font-medium text-gray-600 mr-2"><Link to="/narwhal">Narwhal</Link></li>*/}
            {/*            <li className="tab-item shadow-md rounded-full px-4 py-2 font-medium text-gray-600 mr-2"><Link to="/whale">Whale</Link></li>*/}
            {/*        </ul>*/}
            {/*    </nav>*/}
            {/*    <Switch>*/}
            {/*        <Route path="/manatee">*/}
            {/*            <Manatee />*/}
            {/*        </Route>*/}
            {/*        <Route path="/narwhal">*/}
            {/*            <Narwhal />*/}
            {/*        </Route>*/}
            {/*        <Route path="/whale">*/}
            {/*            <Whale />*/}
            {/*        </Route>*/}
            {/*    </Switch>*/}
            {/*</BrowserRouter>*/}

            <a href="http://localhost:8080/home/home.html" id="card_open"
                    className="float-btn inline-flex items-center justify-center w-14 h-14 mr-2 text-indigo-100 transition-colors duration-150 bg-black rounded-full focus:outline-none hover:bg-gray-900">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd" fillRule="evenodd"></path>
                </svg>
            </a>
        </div>
    </div>
);

export default App;