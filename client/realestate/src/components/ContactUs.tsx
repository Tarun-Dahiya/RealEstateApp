import {FC} from 'react'

const ContactUs: FC = () => {
    return( 
        <>
        <h2>Contact Us</h2>
        <section className="relative bg-cover bg-center h-64">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 py-20">
            <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
            <p className="text-lg mb-6">Get in touch with us for any queries or to schedule a visit.</p>
            </div>
        </section>  

        <section className="py-20 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">We'd Love to Hear From You</h2>
                    <p className="text-lg text-gray-600">Fill out the form below, and we'll get back to you as soon as possible.</p>
                </div>

                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Your Full Name" required/>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Your Email Address" required/>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" name="message" rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Your Message" required></textarea>
                    </div>
                    
                    <div className="flex justify-center">
                        <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all">
                            Send Message
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </section>

        <section className="py-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Office</h2>
                    <p className="text-lg text-gray-600">Visit us at our office or contact us for more information.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
                        <p className="text-lg text-gray-600 mb-4">123 Real Estate St, Suite 456, City, State, ZIP</p>
                        <p className="text-lg text-gray-600">Phone: (123) 456-7890</p>
                        <p className="text-lg text-gray-600">Email: info@realestate.com</p>
                    </div>

                    <div className="h-64 bg-gray-200 rounded-lg">
                        <iframe src="https://www.google.com/maps/embed/v1/place?q=Real%20Estate%20St&key=AIzaSyD2raHYrMT8xUItIA0ATzSUQprZtabWa9I"
                        className="w-full h-full rounded-lg" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
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

export default ContactUs