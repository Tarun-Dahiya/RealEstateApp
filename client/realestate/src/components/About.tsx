import {FC} from 'react'

const About: FC = () => {
    return(
        <>
            <section className="relative bg-cover bg-center h-screen">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 py-20">
                <h1 className="text-4xl font-extrabold mb-4">Find Your Dream Home</h1>
                <p className="text-lg mb-6">Explore a wide range of properties and make your next move with confidence.</p>
                <a href="/properties" className="bg-blue-600 px-6 py-3 rounded-full text-xl font-semibold hover:bg-blue-700 transition-all">Browse Properties</a>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-screen-xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
                <p className="text-lg text-gray-600">Browse our featured listings and find the perfect home for you.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto px-4">
                
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="https://via.placeholder.com/500x300" alt="Property 1" className="w-full h-64 object-cover"/>
                    <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Luxury Family Home</h3>
                    <p className="text-gray-600 mb-4">$850,000 - 4 Beds, 3 Baths</p>
                    <a href="/properties/1" className="text-blue-600 hover:underline">View Details</a>
                    </div>
                </div>

                
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="https://via.placeholder.com/500x300" alt="Property 2" className="w-full h-64 object-cover"/>
                    <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Modern Condo</h3>
                    <p className="text-gray-600 mb-4">$550,000 - 2 Beds, 2 Baths</p>
                    <a href="/properties/2" className="text-blue-600 hover:underline">View Details</a>
                    </div>
                </div>

                
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="https://via.placeholder.com/500x300" alt="Property 3" className="w-full h-64 object-cover"/>
                    <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Beachfront Villa</h3>
                    <p className="text-gray-600 mb-4">$1,200,000 - 5 Beds, 6 Baths</p>
                    <a href="/properties/3" className="text-blue-600 hover:underline">View Details</a>
                    </div>
                </div>
                </div>
            </section>

            
            <section className="bg-blue-800 text-white text-center py-20">
                <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Home?</h2>
                <p className="mb-6">Our team is here to help you every step of the way. Get in touch today to start your journey.</p>
                <a href="/contactus" className="bg-white text-blue-800 px-8 py-3 rounded-full text-xl font-semibold hover:bg-gray-200 transition-all">Contact Us</a>
            </section>

            
            <footer className="bg-gray-800 text-white py-10">
                <div className="max-w-screen-xl mx-auto px-4 flex justify-between">
                <div>
                    <h3 className="text-2xl font-semibold">Real Estate</h3>
                    <p className="text-sm mt-2">Your trusted partner in finding the perfect property.</p>
                </div>
                <ul className="space-y-4 text-sm">
                    <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
                    <li><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:text-gray-300">Terms of Service</a></li>
                    <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
                </div>
                <div className="text-center text-sm text-gray-400 mt-6">
                <p>&copy; 2024 Real Estate Inc. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default About