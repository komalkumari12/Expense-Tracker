import React from "react";

const App = () => {
  return (
    <>
      <div className="flex  flex-col ">
        <div className="flex justify-center bg-indigo-500">
          <h1>Expense Tracker</h1>
        </div>
        <div className=" flex flex-col justify-center bg-blue-500 ">
          <div>Your Balance</div>
          <div>$260</div>
        </div>
        <div className="flex flex-row  h-35 w-70">
          <div className="border-2 bg-red-500">Income</div>
          <div className="border-2 bg-red-500">Expenses</div>
        </div>
        <div>
          <h1>History</h1>
          <div className="flex flex-row justify-between w-1/2a">
            <div>Cash</div>
            <div>+500</div>
          </div>
          <div className="flex flex-row justify-between w-1/2a">
            <div>Bank</div>
            <div>-40</div>
          </div>
          <div className="flex flex-row justify-between w-1/2a">
            <div>Camera</div>
            <div>-200</div>
          </div>
        </div>
        <h1>Add New Transcation</h1>
        <div>
          <form>
            <label>Text</label>
            <br></br>
            <input type="text" placeholder="Enter Text"></input>
            <br></br>
            <label>Amount</label>
            <br></br>
            <input type="text" placeholder="Enter amount"></input>
            <br></br>
            <button
              type="button"
              className="bg-indigo-500 border border-sky-500  border-8"
            >
              Add Transcation
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
