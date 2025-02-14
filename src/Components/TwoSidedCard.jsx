function TwoSidedCard({children, img, name, price, sale }) {
    console.log(img);
    return(
    <div className="group h-[28rem] w-[20rem] m-5">
        <div className="relative h-full w-full rounded-xl shadow-xl  transition-all delay-50 duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 flex-col text-center justify-center bg-coffee-50 rounded-3xl overflow-hidden">
                <img src={img} alt={name} className="opacity-95"/>
                <h3 className="text-3xl font-bold text-center py-2 shadow-inner shadow-coffee-800/60">{name}</h3>
                <h4 className="absolute h-[5rem] w-[5rem] leading-[5rem] text-red-500 font-bold top-3 right-3 bg-coffee-50 inline-block text-center rounded-[50%] shadow-inner shadow-coffee-800/50">{sale}% Sale</h4>
                <div className="flex justify-center pt-5 m-auto">
                    <p className="inline-block pr-4 text-2xl font-bold decoration-solid line-through decoration-coffee-800 decoration-2 text-red-100">{price}$</p>
                    <p className="inline-block  text-2xl font-bold"> - </p>
                    <p className="inline-block pl-4  text-2xl font-bold text-green-300">{(price * ((100 - sale) / 100)).toFixed(2)}$</p>
                </div>
            </div>
            <div className="absolute flex justify-between inset-0 h-full w-full rounded-xl bg-coffee-800 bg-gradient-to-tr from-coffee-50/15 [transform:rotateY(-180deg)] [backface-visibility:hidden]">
                <p className="flex justify-center items-center text-center text-2xl text-coffee-50 m-2 shadow-lg shadow-coffee-50 underline decoration-1">{children}</p>
            </div>
        </div>
    </div>)
}

export default TwoSidedCard;