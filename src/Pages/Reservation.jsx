import { useState } from "react";
import DateSelector from "../Components/DateSelector";
import TableRes from "../Components/TableRes";

function Reservation() {
  const [selected, setSelected] = useState();
  const [table, setTable] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

  }
    return (<div className="bg-main3 bg-cover flex flex-col justify-center items-center pt-10">
        <h1 className="inline-block w-[28rem] text-4xl text-center font-bold text-coffee-50/95 mt-10 drop-shadow-md border-coffee-700/85 border-x-2 ">Find your spot in the sun<br></br>and savor every sip</h1>
        <form onSubmit={(e) => handleSubmit(e)} method="GET" className="flex flex-col items-center mt-8 bg-coffee-200/90 rounded-lg w-[50vw] min-w-[45rem]">
            <h2 className="text-3xl font-bold text-coffee-800/80 border-b-2 pt-4">Reserve a table</h2>
            <div className="flex justify-between max-[1500px]:justify-center w-[90%]">
            <div className="flex flex-col justify-between">
              <div className="m-5">
                <label for="fullName" className="block text-xl font-bold my-2 text-coffee-800/90 drop-shadow-lg">Fullname</label>
                <input required className="block w-[20rem] h-[2.5rem] pl-3 text-xl font-semibold text-coffee-800/95 rounded-lg drop-shadow-lg focus:outline-coffee-300/75 focus:drop-shadow-xl" name="fullName" id="fullName" type="text" />
              </div>
              <div className="m-5">
                <label for="phone" className="block text-xl font-bold my-2 text-coffee-800/90 drop-shadow-lg">Phone</label>
                <input required className="block w-[20rem] h-[2.5rem] pl-3 text-xl font-semibold text-coffee-800/95 rounded-lg drop-shadow-lg focus:outline-coffee-300/75 focus:drop-shadow-xl" name="phone" id="phone" type="number" />
              </div>
              <div className="m-5">
                <label for="reservation-hour" className="block text-xl font-bold my-2 text-coffee-800/90 drop-shadow-lg">Daytime</label>
                <select required id='reservation-hour' className="block w-[20rem] h-[2.5rem] pl-3 text-xl font-semibold text-coffee-800/95 rounded-lg drop-shadow-lg focus:outline-coffee-300/75 focus:drop-shadow-xl" name='reservation-hour'>
                    <option value="" disabled selected>Choose a reservation time</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                </select>
              </div>
            </div>
            <div className="m-5 drop-shadow-lg">
                <label className="block text-xl font-bold my-2 text-coffee-800/90 drop-shadow-lg">Choose a place</label>
                <input required value={selected} className="bg-none text-coffee-50/0 absolute bg-coffee-800/0 outline-none top-2 left-0"/>
                <DateSelector id="date" selected={selected} setSelected={setSelected}/>
            </div>
            </div>
            <div>
              <TableRes />
            </div>
            <button type="submit" className="block w-[20rem] h-[2.5rem] mb-5 text-2xl bg-coffee-50 font-semibold text-coffee-800/95 rounded-lg drop-shadow-md hover:drop-shadow-xl hover:scale-[102%] active:drop-shadow-lg active:scale-[98%]">Submit Reservation</button>
        </form>
    </div>)
}

export default Reservation;