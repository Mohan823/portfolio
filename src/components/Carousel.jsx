
import { Rating } from 'react-simple-star-rating'
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"

export default function Carousel({ className }) {

    function generateCarousel(name, img, designation, review) {
        return (
            <SplideSlide className="gap-3 hover:border border border-gray-200/10 hover:border-gray-200/50 hover:shadow-none transition-all duration-500 hover:translate-x- card flex flex-col items-center shadow-xl rounded-xl p-7">
                <img className='w-20 h-20 object-cover rounded-full shadow-lg border-2 ' src={img} alt="" />
                <span className=' font-mono tracking-wider'>{name}</span>
                <span className=' tracking-[0.5rem] text-sm text-[#f4cd2a]'>{designation}</span>
                <Rating initialValue={5} size={16} readonly={true} />
                <p className='text-gray-300'>{review}</p>
            </SplideSlide>
        )
    }
    return (
        <section id="reviews" className={className + ' bg-gradient-reverse shadow-lg py-10 lg:px-10'}>
            <h2 className=' italic heading-2 text-2xl border rounded-lg shadow-md border-green-200/10 text-center text-white p-5 mx-5'>
                Our Customer Reviews
            </h2>
            <div className="card-container">

                <Splide
                    hasTrack={false}
                    options={{
                        gap: '1rem',
                        perPage: 3,
                        rewind: true,
                        autoplay: true,
                        speed: 1000,
                        perMove: 1,
                        padding: '16px',
                        breakpoints: {
                            1100: {
                                perPage: 2
                            },
                            800: {
                                perPage: 1
                            }
                        }
                    }}
                >
                    <SplideTrack className='py-10'>
                        {generateCarousel(
                            "JHON DEO",
                            require("../images/people-1.webp"),
                            "WEB DESIGER",
                            "Seo Expert who will do all the link building for you. Dan Brown is the best in his business. He's a great author, and he can be your best SEO consultant too!"
                        )}
                        {generateCarousel(
                            "MARIA MAK",
                            require("../images/people-2.jpg"),
                            "WEB EXPERT",
                            "The web should be the place where you want to spend most of your time. So make sure there's no room for errors by experts who will help not just design but also fix."
                        )}
                        {generateCarousel(
                            "JACKMA KALIN",
                            require("../images/people-3.jpg"),
                            "ELEMENTOR EXPERT",
                            "I am a Elementor expert, who can create sites that will be presentable to your audience and will help you improve your business. I love what I do and it shows in my work."
                        )}
                        {generateCarousel(
                            "AMILY MOALIN",
                            require("../images/people-4.jpg"),
                            "WP OFFICER",
                            "Hi everyone. I'm an officer from the WP Police Force and I wanted to let you know that we've updated our Privacy Policy . Here are the highlights!"
                        )}
                        {generateCarousel(
                            "ENAGOL AME",
                            require("../images/people-5.jpg"),
                            "WP DEVELOPER",
                            "Developers write code. They are responsible for the software products that organizations and companies use to operate their businesses."
                        )}
                    </SplideTrack>
                </Splide>
            </div>
        </section>
    )
}
