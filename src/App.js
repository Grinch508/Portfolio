import './App.css';
import AboutMe from './places/components/AboutMe/AboutMe';
import NavLinks from './places/components/NavLink/NavLinks';
import Title from './places/components/title/Title';

function App() {
  return (
    <>
      <header>
        <NavLinks />
      </header>

      <main className='main'>
        <AboutMe />
        <Title />
      </main>
    </>
  );
}

export default App;
