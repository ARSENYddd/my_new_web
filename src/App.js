// import React, { createElement } from "react";
import './stile.css'
import r from "./utils";
import BarChart from './components/BarChart';

function App() {
  // const Bar = <div><BarChart/></div>;  
  let clicked = false;
  let p = false;
  let tema1 = 'night'
  let tema2 = 'day'

  function render() {
    return [(p ? content(clicked) : main(clicked))]
  }

  function changeP() {
    p = !p
  }
  
  function changeClicked() {
      clicked = !clicked
    
  }
  let f = 0;
  const main = (cl) => [
      r('div',{ className: cl ? 'centerd' : 'center' },
          r('div',{ className: cl ? 'maind' : 'main' },
          r('p',{ className: 'Mt' },' Some of my modest works ')),
          r('button',{ className : 'bn16', onClick: changeClicked }, clicked ? tema2 : tema1 ),
          r('button',{ className : 'bn16', onClick: changeP}, 'about me')),
          // r('button',{ className : 'bn16', onClick: () => {
            
          //   const params = { 
          //     type: 'gay',
          //     age: 18,
          //   }
          //   const q = new URLSearchParams(params) // 'type=gay&age=18'
          //   console.log(q)


          //   fetch('http://localhost:9090/userData'+'?'+q, {
          //     method: 'GET',
          //     headers: {
          //         "Accept": "application/json",
          //         "Content-Type": "application/json",
          //     },
          //     "mode": 'cors'
              
          //   }).then(res => console.log(res))
          // }}, 'about me'),

     
      // f && r('canvas', { id: 'myChart'}),
      r('script',{src: '/components/BarChart.js'}),
      (() => { f = 1 })()
  ];
  
  const content = (cl) => [
    r('div',{className: cl ? 'd2' : 'l2'},
      r('button',{ className : 'bn17', onClick: changeP}, 'back to main'),
      r('div',{className: cl ? 'd_s' : 'l_s'},
          r('a',{ className: cl ? 'maind' : 'main', href : "https://t.me/arsen_sharp" },r('p',{ className: 'Mt' },' My Telegramm ')),
          r('a',{ className: cl ? 'maind2' : 'main2', href : "https://vk.com/xxbochonokxx"},r('p',{ className: 'Mt' },' My VK ')),
          r('a',{ className: cl ? 'maind3' : 'main3',  },r('p',{ className: 'Mt' },' My instagramm'))
          ))
    ]
    
 
  return { render }
}

export default App;



  

