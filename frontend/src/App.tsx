import Header from './components/Header'
import PersonsProvider from './hooks/provider/PersonsProvider'
import Home from './pages/Home'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="App-content">
        <PersonsProvider>
          <Home />
        </PersonsProvider>
      </div>
    </div>
  )
}

export default App
