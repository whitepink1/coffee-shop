function SpecCart({children, img, name}) {
    return (
    <div className="overflow-hidden mx-2 my-8 bg-coffee-50 rounded-3xl pb-10 hover:scale-105 hover:drop-shadow-2xl">
        <img className="opacity-95 pb-5 drop-shadow-xl" src={img} alt={name} />
        <h3 className="text-2xl text-center">{children}</h3>
    </div>)
}

export default SpecCart;