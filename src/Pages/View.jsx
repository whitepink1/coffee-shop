import SpecCart from "../Components/SpecCart";
import img1 from '../Images/coffee-beans.jpg';
import img2 from '../Images/homemade-baking.jpg';
import img3 from '../Images/cozy-atmosphere.jpg';
import img4 from '../Images/convenient_location.jpg';


function View() {
    return (<><main className="h-[70vh] relative">
        <div className="bg-main1 bg-cover flex flex-col items-center justify-start h-full pt-[7rem]">
            <h1 className="text-8xl text-coffee-50 font-bold text-center pt-1">Café Royal</h1>
            <p className="text-xl text-coffee-50 text-center w-3/4 mx-auto pt-3 pb-10 underline ">"Majestic coffee, unforgettable moments."</p>
            <button className="bg-coffee-50 text-center h-[4.5rem] w-[15rem] rounded-3xl drop-shadow-md hover:scale-105 hover:ring-2 hover:ring-coffee-700/50 hover:inset-shadow-md">Hot offers</button>
        </div>
        </main>
        <div className="h-[60vh] relative bg-coffee-100 flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-coffee-700 py-4 text-center">Café Royal is...</h2>
            <div className="flex justify-center">
                <SpecCart img={img1}>Freshly roasted beans</SpecCart>
                <SpecCart img={img2}>Homemade baking</SpecCart>
                <SpecCart img={img3}>Cozy atmosphere</SpecCart>
                <SpecCart img={img4}>Convenient location</SpecCart>
            </div>
        </div>
        <div>
            <h2 className="text-4xl font-bold text-coffee-800 py-4 text-center">Hot offers</h2>
        </div>
        </>)
}

export default View;