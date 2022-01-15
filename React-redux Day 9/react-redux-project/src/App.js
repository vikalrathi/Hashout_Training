import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import ProductListing from './components/ProductListing'
import ProductDetails from './components/ProductDetails'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route
            exact
            path="/product/:productId"
            element={<ProductDetails />}
          />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
