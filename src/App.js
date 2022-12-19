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

      import React, { useState } from 'react';

import './App.css';

import Table from './Table';
import Chart from './Chart';
import calculate from './calculations';

const defaultOverpayment = { month: '1', year: '0', amount: '0' };

export default () => {
  const [initial, setInitial] = useState('200000');
  const [rate, setRate] = useState('5');
  const [years, setYears] = useState('25');
  const [monthlyOverpayment, setMonthlyOverpayment] = useState('0');
  const [overpayments, setOverpayments] = useState([defaultOverpayment]);

  const updateOverpayment = index => ({ target }) =>
    setOverpayments(
      overpayments.map((overpayment, i) =>
        i === index
          ? { ...overpayment, [target.name]: target.value }
          : overpayment
      )
    );

  const { monthlyPayment, payments } = calculate({
    initial: +initial,
    years: +years,
    rate: +rate,
    monthlyOverpayment: +monthlyOverpayment,
    overpayments
  });

  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <div className="navbar-brand">Mortgage Overpayment Calculator</div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="col-md-8 col-sm-12">
          <div className="col-sm-4">
            <div>
              <h2>Initial</h2>
              <label>Amount</label>
              <input
                maxLength={7}
                value={initial}
                onChange={e => setInitial(e.target.value)}
              />
            </div>
            <div>
              <label>Years</label>
              <input
                type="number"
                maxLength={2}
                value={years}
                onChange={e => setYears(e.target.value)}
              />
            </div>
            <div>
              <label>Rate</label>
              <input
                type="number"
                step={0.1}
                value={rate}
                onChange={e => setRate(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-8">
            <div>
              <h2>Overpayment</h2>
              <label>Monthly</label>
              <input
                type="number"
                maxLength={5}
                value={monthlyOverpayment}
                onChange={e => setMonthlyOverpayment(e.target.value)}
              />
            </div>
            <div>
              <label>Year</label>
              <label>Month</label>
              <label>Amount</label>
            </div>
            {overpayments.map(({ year, month, amount }, i) => (
              <div key={i}>
                <input
                  type="number"
                  min="0"
                  max={years}
                  value={year}
                  name="year"
                  onChange={updateOverpayment(i)}
                />
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={month}
                  name="month"
                  onChange={updateOverpayment(i)}
                />
                <input
                  type="text"
                  value={amount}
                  name="amount"
                  onChange={updateOverpayment(i)}
                />

                {i === overpayments.length - 1 ? (
                  <button
                    className="btn btn-xs"
                    onClick={() =>
                      setOverpayments([...overpayments, defaultOverpayment])
                    }
                  >
                    +
                  </button>
                ) : (
                  <button
                    className="btn btn-xs"
                    onClick={() =>
                      setOverpayments(overpayments.filter((_, j) => j !== i))
                    }
                  >
                    X
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="col-sm-12">
            <h2>
              Monthly Payment
              <span className="money">
                {(+monthlyOverpayment + monthlyPayment).toFixed(2)}
              </span>
            </h2>
            <Chart payments={payments} />
          </div>
        </div>
        <Table className="col-sm-4" payments={payments} />
      </div>
    </div>
  );
};

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



  

