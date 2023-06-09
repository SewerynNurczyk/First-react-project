//import logo from './logo.svg';
//import './App.css';
//import Hero from './components/Hero/Hero'
//import SearchForm from './components/SearchForm/SearchForm'
//import List from './components/List/List';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './Home';
import About from './components/About/About';
import Favorite from './Favorite/Favorite';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import List from './components/List/List';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Container>
 </main>
  );
};

export default App;