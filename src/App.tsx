import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import About from './components/about/About';
import MyProjects from './components/myProjects/MyProjects';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="/about" element={ <About /> } />
        <Route path="/projects" element={ <MyProjects /> } />

      </Route>
    </Routes>
  );
}

export default App;
