// import { Link } from "react-router-dom";

export default function About(){

    return (
        <div className="main container mx-auto px-6 py-12 bg-background text-text">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">About Watch Tracker</h1>
                <p className="text-lg max-w-2xl mx-auto">
                Welcome to Watch Tracker, your ultimate platform for tracking, exploring, and valuing the finest timepieces. Whether you're a seasoned collector or new to the world of watches, we’re here to help you stay informed and organized.
                </p>
            </div>

            <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg">
                At Watch Tracker, our mission is to provide watch enthusiasts with the tools they need to easily manage and track their collections. We believe every watch tells a story, and we aim to help you preserve those stories by keeping your collection organized and up-to-date.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="feature bg-primary p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">Comprehensive Watch Tracking</h3>
                    <p className="text-text-gray">
                    Easily add, manage, and keep track of your entire watch collection in one place. Stay organized with our simple and intuitive tracking tools.
                    </p>
                </div>
                <div className="bg-primary p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">Market Insights</h3>
                    <p className="text-text-gray">
                    Stay up-to-date with the latest trends and valuations in the watch market, so you always know the value of your timepieces.
                    </p>
                </div>
                <div className="bg-primary p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">Explore Watch Models</h3>
                    <p className="text-text-gray">
                    Browse and discover iconic watch models from the world’s most prestigious brands, complete with detailed descriptions and features.
                    </p>
                </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-accent-primary-100 to-primary text-text p-8 rounded-lg mb-12">
                <h2 className="text-4xl font-bold mb-4">A Note from the Founder</h2>
                <p className="text-lg">
                Watch Tracker was born out of a deep passion for timepieces. As a collector myself, I realized the need for a platform that not only helps enthusiasts like me track their collections, but also explore the rich history and value behind each watch. I hope this platform serves as an invaluable tool in your watch-collecting journey.
                </p>
                <p className="text-lg font-semibold mt-6">- TM, Founder of Watch Tracker</p>
            </section>

            {/* <section className="text-center">
                <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
                <p className="text-lg mb-8 text-text-gray">
                Ready to take control of your watch collection? Create your free account today and start exploring the world of fine timepieces.
                </p>
                <Link to="/signup" className="bg-accent-primary text-primary py-3 px-6 rounded-lg hover:bg-accent-primary-200">
                Get Started
                </Link>
            </section> */}
        </div>
    )
};