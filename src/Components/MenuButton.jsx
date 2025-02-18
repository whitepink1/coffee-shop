export default function MenuButton({children, callback}){
    return (
        <button onClick={() => callback()} className="bg-coffee-50 px-5 py-1 mx-6 text-2xl drop-shadow-md tracking-wide font-bold text-coffee-800/80 rounded-md outline outline-2 outline-coffee-100/80 hover:scale-105 hover:drop-shadow-lg active:scale-95 active:drop-shadow-md">{children}</button>
    )
}
