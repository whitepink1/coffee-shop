import SpecCart from "../Components/SpecCart";
import img1 from '../Images/coffee-beans.jpg';
import img2 from '../Images/homemade-baking.jpg';
import img3 from '../Images/cozy-atmosphere.jpg';
import img4 from '../Images/convenient_location.jpg';
import TwoSidedCard from "../Components/TwoSidedCard";
import { useMenu } from "../data/database";


function View() {
    const {coffee} = useMenu();
    const {tea} = useMenu();
    const {pastries} = useMenu();
    const {snacks} = useMenu();

    return (<><main className="h-fit relative">
        <div className="bg-main1 bg-cover flex flex-col items-center justify-start h-full pt-[7rem] pb-[12rem]">
            <h1 className="text-8xl text-coffee-50 font-bold text-center pt-1">Café Royal</h1>
            <p className="text-xl text-coffee-50 text-center w-3/4 mx-auto pt-3 pb-10 underline ">"Majestic coffee, unforgettable moments."</p>
            <a href="#hot-offers" className="bg-coffee-50 text-coffee-800 text-opacity-95 text-center font-bold text-3xl leading-[4rem] h-[4.5rem] w-[15rem] rounded-3xl drop-shadow-md hover:scale-105 hover:ring-2 hover:ring-coffee-700/50 hover:inset-shadow-md transform duration-500">Hot offers</a>
        </div>
        </main>
        <div className="h-fit relative bg-coffee-100 flex-col justify-center items-center">
            <h2 className="text-6xl font-bold drop-shadow-xl text-coffee-700 py-4 text-center">Café Royal is...</h2>
            <div className="flex justify-center flex-wrap py-6">
                <SpecCart img={img1}>Freshly roasted beans</SpecCart>
                <SpecCart img={img2}>Homemade baking</SpecCart>
                <SpecCart img={img3}>Cozy atmosphere</SpecCart>
                <SpecCart img={img4}>Convenient location</SpecCart>
            </div>
        </div>
        <div className="h-[70vh] relative bg-main2 bg-cover">
            abc
        </div>
            
        <div id="hot-offers" className="h-fit relative bg-coffee-100">
            <h2 className="text-6xl font-bold text-coffee-600 py-6 text-center drop-shadow-xl">Hot offers</h2>
            <div className="flex justify-center flex-wrap pb-[3.5rem]">
                <TwoSidedCard name={coffee[2].name} price={coffee[2].price} img={coffee[2].url} sale='25'>{coffee[2].shortInfo}</TwoSidedCard>
                <TwoSidedCard name={tea[5].name} price={tea[5].price} img={tea[5].url} sale='10'>{tea[5].shortInfo}</TwoSidedCard>
                <TwoSidedCard name={pastries[2].name} price={pastries[2].price} img={pastries[2].url} sale='20'>{pastries[2].shortInfo}</TwoSidedCard>
                <TwoSidedCard name={snacks[4].name} price={snacks[4].price} img={snacks[4].url} sale='15'>{snacks[4].shortInfo}</TwoSidedCard>
            </div>
        
        </div>
        </>)
}

export default View;