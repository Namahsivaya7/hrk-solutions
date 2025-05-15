import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import SearchableUserList from './components/SearchableUserList';
import Timer from './components/Timer';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
     <SearchableUserList/>
       <div>
        <h3>Modal Task</h3>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>Hello, This is Namah sivaya Kureti</p>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
    <Timer/>
    </div>
  );
}

export default App;
