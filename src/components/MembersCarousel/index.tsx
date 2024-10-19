// import Group1 from '../assets/Group 2652 (2).png'
import { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);
export default function Guide_section() {

	useEffect(() => {
		const ctx = gsap.context(() => {
			// ---------- selecting all horizontal sections
			const horizontalSections = gsap.utils.toArray(".horizontal-section");

			// ---------- applying horizontal scroll animation
			gsap.to(horizontalSections, {
				xPercent: -100,
				ease: "none",
				scrollTrigger: {
					trigger: "#container",
					pin: true,
					scrub: 1,
					//snap: 1 / (horizontalSections.length - 1),
					end: () => "+=" + document.querySelector("#container").offsetWidth
				}
			});
		});
		return () => ctx.revert();
	}, []);

	return (
		<div className='max-md:hidden justify-start'>
			<h1 className="text-6xl font-extrabold font-amaranth  text-SecondayBlue p-20">How to use Iqamati?</h1>
			<main id="container">
				<section className="horizontal-section">
					{/* <img src={Group1} alt="" className="h-screen widthScreen4" /> */}
					<div className="w-[420px] max-lg:w-80 rounded-3xl absolute first h-52 bg-SecondayBlue p-10 flex flex-col place-content-center place-items-center">
						<h1 className='text-4xl text-black font-extrabold  p-4'>Title</h1>
						<p className='text-black'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
					</div>
					<div className="w-[420px] max-lg:w-80 rounded-3xl absolute second h-52 bg-SecondayBlue p-10 flex flex-col place-content-center place-items-center">
						<h1 className='text-4xl text-black font-extrabold  p-4'>Title</h1>
						<p className='text-black'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
					</div>
					<div className="w-[420px] max-lg:w-80 rounded-3xl absolute third h-52 bg-SecondayBlue p-10 flex flex-col place-content-center place-items-center">
						<h1 className='text-4xl text-black font-extrabold  p-4'>Title</h1>
						<p className='text-black'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
					</div>
					<div className="w-[420px] max-lg:w-80 rounded-3xl absolute fourth h-52 bg-SecondayBlue p-10 flex flex-col place-content-center place-items-center">
						<h1 className='text-4xl text-black font-extrabold  p-4'>Title</h1>
						<p className='text-black'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
					</div>
				</section>

			</main>
		</div>
	)

}