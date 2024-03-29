
export default function Contact({ className }) {

    function genContext(skill) {

        return (
            <li className={"  hover:transition-all duration-700 border border-gray-200/10 hover:border-gray-200/50 hover:shadow-none hover:translate-x-1 hover:translate-y-1 shadow-lg p-7 rounded-lg"}>
                <span>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 inline shadow-lg">
                        <path fillRule="evenodd" d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z" clipRule="evenodd" />
                    </svg>

                </span>
                <a href="mailto:mohankrishnadeveloper@gmail.com" className="text-white indent-2">&nbsp;&nbsp;&nbsp;&nbsp;{skill}</a>

            </li>
        )
    }


    return (
        <section className={className + ' expertise bg-gradient-reverse shadow-lg p-10 max-sm:px-5'}>
            <h2 className=' italic heading-2 text-2xl border rounded-lg shadow-md border-green-200/10 text-center text-white p-5 mx-5 mb-10'>
                Contact
            </h2>

            <div>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {genContext("Mohankrishnadeveloper@gmail.com")}
                </ul>
            </div>

        </section>
    )
}
