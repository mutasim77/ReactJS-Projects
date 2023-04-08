import Header from '../Header/Header';
import Cards from '../Cards/Cards';

const App = () => {

  const arr = [];
  for (let i = 0; i < 100; i++) {
    let x = '#' + Math.random().toString().substring(2, 8);
    arr.push(x);
  }

  return (
    <>
      <Header />
      <div className="container">
        <Cards colors={arr} />
      </div>
    </>
  )
}

export default App;
