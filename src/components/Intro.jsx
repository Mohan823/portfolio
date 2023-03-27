import { useEffect, useRef } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Intro({ className }) {
    const btnRef = useRef();
    const imageRef = useRef();
    const [text] = useTypewriter({
        words: ["Currently working in kashiv infotech also a freelancer who shows attitude in their projects.",
            "Eager to waiting for your projects..."
        ],
        typeSpeed: 100,
        delaySpeed: 5000,
        deleteSpeed: 0,
        loop: true,
    })

    useEffect(() => {
        btnRef.current.addEventListener("mouseenter", (e) => {
            imageRef.current.style.setProperty("transform", "rotate(1turn) scaleX(-1)")
            imageRef.current.style.setProperty("filter", "contrast(110%)")
        })
        btnRef.current.addEventListener("mouseleave", (e) => {
            imageRef.current.style.removeProperty("transform")
            imageRef.current.style.removeProperty("filter")
        })
    }, [btnRef])




    return (
        <div className={className + ' px-5 py-10 pt-20 text-center justify-evenly gap-5 flex items-center max-lg:flex-col'}>
            <div>
                <img ref={imageRef} className=' rounded-full transition-all duration-1000 mb-5 max-w-sm max-sm:max-w-xs max-h-96' src={require("../images/people.png")} alt="" />
                <a href='#reviews' ref={btnRef} type='button' className=' hire-me shadow-lg px-6 py-3 whitespace-pre-wrap text-white font-handWriting text-4xl'>To Know More!</a>
            </div>
            <div>
                <h1 className=' text-white text-4xl text-shadow'>Hey, Welcome I'm Mohan</h1>
                <span className='text-[#f4cd2a] block p-3 tracking-[8px] font-mono text-shadow'>A web developer </span>
                <div className=' max-w-sm p-5 mt-5 rounded-md shadow-custom'>
                    <p className=' text-gray-300 tracking-widest h-28 '>{text}<Cursor cursorColor='white' /></p>
                </div>
            </div>
        </div>
    )
}
