
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, RouterProvider, Routes } from 'react-router-dom';

import HomePage from './Pages/home/HomePage';
import AboutPage from './Pages/About/AboutPage';
import ContactPage from './Pages/Contact/ContactPage';
import SettingsPage from './Pages/SettingsPage/SettingsPage';
import TaskPage from './Pages/TaskPage/TaskPage';
import NewTaskForm from './Pages/newTaskForm/newTaskForm';
import CategoriasPage from './Pages/CategoriasPage/Categoriaspage';


function App() {
  return (
    <Router>
      <>
        <header>
        <Navbar />

        </header>

        <Routes>
        <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/newtaskform" element={<NewTaskForm />} />
          <Route path="/categorias" element={<CategoriasPage />} />
          <Route path="/" element={<HomePage />} />

        </Routes>
      </>
    </Router>
  );
}

export default App;
