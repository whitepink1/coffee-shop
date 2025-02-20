import { useRef, useState } from "react";
import FooterComp from "./FooterComp";
import { FilmIcon, NewspaperIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';

export default function Footer() {
    const [subscribe, setSubscribe] = useState(false);
    const [subsribeStatus, setSubsribeStatus] = useState(true);
    const enteredEmail = useRef('');
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    function handleSubmit(e) {
        e.preventDefault();
        if(validateEmail(enteredEmail.current.value)){
            enteredEmail.current.value = '';
            setSubscribe(true);
            setSubsribeStatus(true);
        } else {
            setSubsribeStatus(false);
        }
        return;
    }
    
    return(<footer className="flex justify-between h-auto px-[7vw] py-5 bg-coffee-800/95 bg-gradient-to-l from-coffee-100/30">
        <div className="w-[25vw] px-5">
            <h3 className="block text-2xl font-bold text-coffee-50 w-auto">Café Royal</h3>
            <FooterComp>At Café Royal, every sip is a taste of elegance. Sip like royalty. 👑☕</FooterComp>
        </div>
        <div className="w-[30vw] px-2">
            <h3 className="block text-2xl font-bold text-coffee-50 w-auto">Stay Caffeinated! ☕✨</h3>
            <FooterComp>Subscribe to our newsletter and be the first to discover new flavors, exclusive offers, and special events at Café Royal.</FooterComp>
            <form onSubmit={(e) => handleSubmit(e)} method="get" className="flex justify-between pt-4">
                {!subscribe ? <>
                    <input required ref={enteredEmail} className={`rounded-md p-1 w-[80%] font-semibold text-coffee-800/90 focus:outline-none focus:scale-10 ${subsribeStatus ? "" : 'border-red-300/65 border-2'}`} placeholder="YOUR E-MAIL"></input>
                    <button type="submit" className="bg-coffee-800/50 text-coffee-100 font-bold px-1 rounded-xl outline-1 outline ml-2 hover:scale-105 active:scale-95 ">SUBSCRIBE</button>
                </> : <p className="uppercase text-lg font-bold text-coffee-50/90 underline underline-2">Thanks for subscribe!</p>}
            </form>
        </div>
        <div className="flex justify-around w-[30vw] py-7 px-2">
            <div className="flex flex-col ">
                <FooterComp>FOLLOW US</FooterComp>
                <div className="flex justify-between opacity-85">
                    <FilmIcon className="hover:scale-110 cursor-pointer"/>
                    <NewspaperIcon className="hover:scale-110 cursor-pointer"/>
                    <PaperAirplaneIcon className="hover:scale-110 cursor-pointer"/>
                </div>
            </div>
            <div className="flex flex-col">
                <FooterComp>CALL US</FooterComp>
                <p className="font-bold text-coffee-50/85">01 - 2345 - 6789</p>
            </div>

        </div>
    </footer>)
}