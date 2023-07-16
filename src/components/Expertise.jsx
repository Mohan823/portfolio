
export default function Expertise({ className }) {
    function generateCard(content) {
        return (
            <li className="hover:transition-all duration-700 border border-gray-200/10 hover:border-gray-200/50 hover:shadow-none hover:translate-x-1 hover:translate-y-1 shadow-lg p-7 rounded-lg">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#d45" color="#fff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline shadow-lg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                </span>
                <span className="text-white indent-2">&nbsp;&nbsp;{content}</span>
            </li>
        )
    }

    return (
        <section className={className + ' bg-gradient-reverse shadow-lg py-10 lg:px-10 px-5'}>
            <h2 className=' italic heading-2 text-2xl border rounded-lg shadow-md border-green-200/10 text-center text-white p-5 mx-5'>
                Expertise in
            </h2>

            <div className="card-container py-10">
                <ul className="grid md:grid-cols-2 lg:gap-10 gap-5">
                    {generateCard("Creating more dynamic websites involves implementing interactive features, such as animations and dropdown menus, to enhance user engagement. Additionally, integrating real-time data from external sources enables websites to display up-to-date information, keeping content relevant. ")}
                    {generateCard("I excel in creating complex and user-friendly interfaces with eye-catching animations, leveraging my expertise in user interface (UI) design, user experience (UX) design, and responsive web design.")}
                    {generateCard("I am an expert in handling both MERN Stack projects and DOTNET projects, demonstrating proficiency in full-stack web development across diverse technology stacks.")}
                    {generateCard("I possess strong skills in error spotting, resolving issues, and bug fixes, while also specializing in enhancing the look and feel of websites for improved user experiences.")}
                    {generateCard("I am experienced in working with APIs, integrating payment systems, and maintaining projects, including managing GitHub repositories for seamless collaboration and version control.")}
                    {generateCard("Additionally, I have a strong track record of optimizing website performance through code optimization, implementing SEO best practices, and conducting thorough testing to ensure optimal functionality across different browsers and devices")}
                </ul>
            </div>
        </section >

    )
}
