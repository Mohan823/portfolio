
export default function Projects({ className }) {

    function generateCard(name, img, repo = '#', live = '#', color = 'bg-green-500/80 ') {
        return (
            <li className="relative hover:transition-all duration-700 border border-gray-200/10 hover:border-gray-200/50 hover:shadow-none shadow-lg rounded-lg">
                <div>
                    < a href={live} target="_blank" rel="noreferrer" className="live-project p-3 block" >
                        <div className="rounded-full relative">
                            <img className="w-28 rounded-full aspect-square object-cover" src={img} alt="" />
                        </div>

                        <p className="live-project-title rounded-md rounded-tl-none bg-gray-800/70 text-center text-white font-handWriting text-2xl p-3">{name}</p>
                    </a>

                    <a href={repo} target="_blank" rel="noreferrer" className=" cursor-pointer absolute top-0 right-0 flex font-mono items-center bg-[#333]/10 hover:bg-[#444]/50 p-1 px-2 gap-2 rounded-md text-white shadow-lg">
                        <span className={color + " w-5 h-5 rounded-md shadow-lg"}></span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 animate-pulse">
                            <path d="M6 3a3 3 0 00-3 3v1.5a.75.75 0 001.5 0V6A1.5 1.5 0 016 4.5h1.5a.75.75 0 000-1.5H6zM16.5 3a.75.75 0 000 1.5H18A1.5 1.5 0 0119.5 6v1.5a.75.75 0 001.5 0V6a3 3 0 00-3-3h-1.5zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM4.5 16.5a.75.75 0 00-1.5 0V18a3 3 0 003 3h1.5a.75.75 0 000-1.5H6A1.5 1.5 0 014.5 18v-1.5zM21 16.5a.75.75 0 00-1.5 0V18a1.5 1.5 0 01-1.5 1.5h-1.5a.75.75 0 000 1.5H18a3 3 0 003-3v-1.5z" />
                        </svg>
                        Repo
                    </a>
                </div >
            </li >
        )
    }

    return (
        <section className={className + ' bg-gradient-reverse shadow-lg py-10 lg:px-10 px-5'}>
            <h2 className=' italic heading-2 text-4xl border rounded-lg shadow-md border-green-200/10 text-center text-white p-5 mx-5'>
                Project Insights
            </h2>

            <div className="card-container py-10">
                <ul className="grid md:grid-cols-4 gap-y-16 gap-x-5">
                    {generateCard("Product Preview", require("../images/product-mobile.jpg"), 'https://github.com/Mohan823/product-preview-card-component', 'https://mohan823.github.io/product-preview-card-component')}
                    {generateCard("Qr Code", require("../images/qr-code.png"), 'https://github.com/Mohan823/QR-code-using-flexbox', 'https://mohan823.github.io/QR-code-using-flexbox')}
                    {generateCard("Order Summary", require("../images/illustration-hero.jpg"), 'https://github.com/Mohan823/order-summary', 'https://mohan823.github.io/order-summary')}
                    {generateCard("Nft Card", require("../images/equilibrium.jpg"), 'https://github.com/Mohan823/nft-preview-card', 'https://mohan823.github.io/nft-preview-card')}
                    {generateCard("States Card", require("../images/states-preview.jpg"), 'https://github.com/Mohan823/stats-preview-card', 'https://mohan823.github.io/stats-preview-card')}
                    {generateCard("Landing Page", require("../images/illustration-mockups.jpg"), 'https://github.com/Mohan823/huddle-landing-page', 'https://mohan823.github.io/huddle-landing-page', "bg-yellow-500/80 ")}
                    {generateCard("Profile Card", require("../images/profile-card.png"), 'https://github.com/Mohan823/profile-card', 'https://mohan823.github.io/profile-card')}
                    {generateCard("Profile Card 2", require("../images/profile-card-2.png"), 'https://github.com/Mohan823/kashiv-Assignment-profile-card', 'https://mohan823.github.io/kashiv-Assignment-profile-card/')}
                    {generateCard("Rating Card", require("../images/rating-thank-you.jpg"), 'https://github.com/Mohan823/interactive-rating', 'https://mohan823.github.io/interactive-rating')}
                    {generateCard("Intro with From", require("../images/intro-form.png"), 'https://github.com/Mohan823/intro-component-with-signup-form', 'https://mohan823.github.io/intro-component-with-signup-form', "bg-yellow-500/80 ")}
                    {generateCard("Coming Soon", require("../images/coming-soon.jpg"), 'https://github.com/Mohan823/base-apparel-coming-soon', 'https://mohan823.github.io/base-apparel-coming-soon', "bg-yellow-500/80 ")}
                    {generateCard("Time Tracking", require("../images/mi-fit-report.jpg"), 'https://github.com/Mohan823/mi-band-fit', 'https://mohan823.github.io/mi-band-fit', "bg-yellow-500/80 ")}
                    {generateCard("Demo Site", require("../images/demo-site.png"), 'https://github.com/Mohan823/demo-site', 'https://mohan823.github.io/demo-site', "bg-red-500/80 ")}
                    {generateCard("Expense Chart", require("../images/expense-chart.jpg"), 'https://github.com/Mohan823/expenses-chart', 'https://mohan823.github.io/expenses-chart', "bg-yellow-500/80 ")}

                </ul>
            </div>
        </section >

    )
}
