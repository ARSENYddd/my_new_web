import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import BarChart from './components/BarChart'

function main (){ReactDOM.render(
    <React.StrictMode>
      <App />
      
    </React.StrictMode>,
    document.getElementById('root')
  )}

//   function Bar(){ReactDOM.render(
//     <React.StrictMode>
//       <BarChart />
      
//     </React.StrictMode>,
//     document.getElementById('bar')
//   )}
  setInterval(main,100)
 





