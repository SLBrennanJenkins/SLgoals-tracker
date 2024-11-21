import Nav from './components/Nav/Nav';
import './App.css';
import './styles/global.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Month from './pages/Month';
import All from './pages/All';

const menuItems = [
  { id: 1, path: '/', element: <Dashboard /> },
  { id: 2, path: '/month', element: <Month /> },
  { id: 3, path: '/all', element: <All /> },
];


function App() {
  return (
    <div className="App ml-[10%] px-[5%] pt-[5vw]">
      <Nav />
      <Routes>
        {menuItems.map((menuItem) => (
          <Route
            key={menuItem.id}
            path={menuItem.path}
            element={menuItem.element}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
