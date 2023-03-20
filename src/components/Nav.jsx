import brand from "../images/man.png"

export default function Nav() {
    return (
        <nav className='fixed left-0 right-0 bg-gradient shadow-lg z-50'>
            <a href="http" className='p-2 flex items-end gap-3'>
                <img className='w-8  rounded shadow-xl' src={brand} alt="brand-logo" />
                <span className='brand leading-5 text-white text-3xl font-handWriting'>PortFolio</span>
            </a>
        </nav>
    )
}
