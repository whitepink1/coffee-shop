import TwoSidedCard from "../Components/TwoSidedCard";
import { useMenu } from "../data/database";
import MenuButton from "../Components/MenuButton";
import { useState } from "react";

function Menu() {
    const {coffee, tea, snacks, pastries} = useMenu();
    const [category, setCategory] = useState(coffee);


    return (<><div className="flex flex-col justify-center items-center h-fit relative bg-coffee-100 text-center pt-20">
        <h1 className="inline-block w-[22rem] mt-3 mb-5 text-4xl font-bold text-coffee-700/90 rounded-xl border-solid border-coffee-700 border-x-4">Café Royal's Menu</h1>
        <div className="flex justify-around mt-3 mb-6">
            <MenuButton callback={() => setCategory(coffee)}>Coffee</MenuButton>
            <MenuButton callback={() => setCategory(tea)}>Tea</MenuButton>
            <MenuButton callback={() => setCategory(pastries)}>Pastries</MenuButton>
            <MenuButton callback={() => setCategory(snacks)}>Snacks</MenuButton>     
        </div>
        <div id='menus' className="flex justify-center flex-wrap pb-[3.5rem] max-w-[75vw]">
            {category.map(pos => <TwoSidedCard key={pos.name} name={pos.name} price={pos.price} img={pos.url}>{pos.shortInfo}</TwoSidedCard>)}
        </div>
    </div></>)
}

export default Menu;