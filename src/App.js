import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="App" style={{ backgroundColor: isDarkMode ? '#282c34' : '#ffffff' }}>
      <header className="App-header" style={{ backgroundColor: isDarkMode ? '#282c34' : '#f3f3f3' }}>
        <img src={logo} className="App-logo" alt="logo" />
        
        <div style={{ marginBottom: '20px' }}>
          <h2>计数器: {count}</h2>
          <button 
            onClick={handleIncrement}
            style={{ padding: '10px 20px', margin: '10px', fontSize: '16px' }}
          >
            点击增加
          </button>
        </div>

        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{ padding: '10px 20px', margin: '10px', fontSize: '16px' }}
        >
          切换{isDarkMode ? '浅色' : '深色'}模式
        </button>

        <p>
          编辑 <code>src/App.js</code> 并保存以重新加载
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          学习 React
        </a>
      </header>
    </div>
  );
}

export default App;
