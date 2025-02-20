import {DayPicker} from "react-day-picker";

export default function DateSelector({selected, setSelected}) {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');


    return(<div className="racking-wider bg-coffee-50 text-lg rounded-md py-3 px-10 ">
            <DayPicker classNames={{selected: `bg-coffee-300 rounded-lg`, today: `text-center ${selected?.toLocaleDateString().split('/')[1] === day ? 'bg-coffee-300' : 'bg-coffee-300/30'} rounded-[50%]`, months: `w-[14rem] text-center`, month_grid: 'w-full'}}
            
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={
        selected ? <p className="font-semibold tracking-normal text-md text-coffee-800 border-t-2 px-2">Selected: {selected?.toLocaleDateString()}</p> : <p className="font-semibold tracking-normal text-md text-coffee-800 border-t-2 px-2">Pick a day</p>
      }/>
        </div>)
}