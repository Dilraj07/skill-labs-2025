import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav className="bg-green-700">
          <div className="logo flex justify-start items-center p-2 px-10">
            <div className="image">
              <lord-icon
                src="https://cdn.lordicon.com/kkdnopsh.json"
                trigger="hover"
                state="hover-spending"
                colors="primary:#ffffff,secondary:#08a88a"
                style={{ width: '50px', height: '50px' }}
                
              ></lord-icon>
            </div>
            <div className="text-white font-bold text-xl px-2">XPaise</div>
          </div>
        </nav>
      </div>

      <div className="content">
        <div className="left">
        <div className="form p-2 bg-green-200 rounded-md w-[35%] m-5 border-2 border-green-900 shadow-lg">
          <form className="w-[50%] my-2 px-5">
            <div className="category">
              <div className="expense_type flex flex-col">
                <div className="select_cat font-bold py-2">Select Category :</div>
                <div className="select w-[25%]">
                  <select
                    name="expense_type"
                    id="expense_type"
                    className="border-2 border-gray-300 rounded-md p-2 mt-2 focus:border-green-900 outline-none bg-white"
                  >
                    <option value="food">Food</option>
                    <option value="travel">Travel</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="amount">
              <div className="total font-bold py-2">Enter Amount :</div>
              <div className="input_amount w-[25%] mt-2">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className="border-2 border-gray-300 rounded-md p-2 bg-white focus:border-green-900 outline-none"
                  placeholder="Amount in Rs."
                />
              </div>
            </div>

            <div className="add">
              <button
                type="submit"
                className="bg-green-700 text-white font-bold rounded-md p-2 mt-4 hover:bg-green-900"
              >
                Add Expense
              </button>
            </div>
          </form>
        </div>
        {/* //Expense Logs */}
        <div className="logs">
          <div className="table border-2 rounded-lg w-[35%] overflow-hidden m-5  bg-gray-100 shadow-lg">
            <table border="1" className="w-full text-center">

              <tr>
                <th className='p-5 '>S.no.</th>
                <th className='p-5 '>Category</th>
                <th className='p-5 '>Amount (Rs.)</th>
              </tr>
              <tr>
                <td className='p-5'>1.</td>
                <td className='p-5'>Entertaiment</td>
                <td className='p-5'>300</td  >
              </tr>
              <tr>
                <td className='p-5'>2.</td>
                <td className='p-5'>Food</td>
                <td className='p-5'>100</td  >
              </tr>
              <tr>
                <td className='p-5'>3.</td>
                <td className='p-5'>Travel</td>
                <td className='p-5'>70</td  >
              </tr>

            </table>
          </div>
        </div>
        </div>
        <div className="right">
          <div className="pi">
            <div className="piechart border-2 rounded-lg w-[50%] h-[50%] m-5 bg-gray-100 shadow-lg flex justify-center items-center">
              <div className="text-green-900 font-bold">expenditure chart</div>
              <figure className="highcharts-figure">  
                <img src="src\assets\piechart.png" alt="Pie Chart" className="w-[80%] h-[80%]"/>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App