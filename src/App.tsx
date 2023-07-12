import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './layouts/Dashboard';
import { Header } from './common/Header';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
      <Routes>
          <Route path="/" Component={Dashboard} />
          {/* <Route path="/about" Component={About} /> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
