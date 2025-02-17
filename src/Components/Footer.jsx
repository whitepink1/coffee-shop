import { useRef } from "react";
import FooterComp from "./FooterComp";
import { FilmIcon, NewspaperIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';

export default function Footer() {
    const enteredEmail = useRef('');
    return(<footer className="flex justify-between h-auto px-[7vw] py-5 bg-coffee-800/95 bg-gradient-to-l from-coffee-100/30">
        <div className="w-[25vw] px-5">
            <h3 className="block text-2xl font-bold text-coffee-100 w-auto">Café Royal</h3>
            <FooterComp>At Café Royal, every sip is a taste of elegance. Sip like royalty. 👑☕</FooterComp>
        </div>
        <div className="w-[30vw] px-2">
            <h3 className="block text-2xl font-bold text-coffee-100 w-auto">Stay Caffeinated! ☕✨</h3>
            <FooterComp>Subscribe to our newsletter and be the first to discover new flavors, exclusive offers, and special events at Café Royal.</FooterComp>
            <div className="flex justify-between pt-4">
                <input ref={enteredEmail} className="rounded-md p-1 w-full font-semibold text-coffee-800/90 focus:outline-none focus:scale-105" placeholder="YOUR E-MAIL"></input>
                <button className="bg-coffee-800/50 text-coffee-100 font-bold px-1 rounded-xl outline-1 outline ml-2 hover:scale-105" onClick={() => enteredEmail.current.value = ''}>SUBSCRIBE</button>
            </div>
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