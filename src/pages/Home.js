import { Link } from 'react-router-dom'
import FeaturedWatch from '../components/FeaturedWatch';

const featuredWatches = [
    {'brand': "Patek Philippe", "model": "Nautilus", "image_path": "/images/patek_philippe/5811_1G_001.png", "reference_number": "5811/1G-001", 'description': 'A timeless masterpiece of understated elegance, crafted in white gold for the discerning collector.'},
    {'brand': "Rolex", "model": "Sky-Dweller", "image_path": "/images/rolex/336239-0002.webp", "reference_number": "336935-0001", 'description': 'A perfect fusion of innovation and luxury, crafted for the sophisticated traveler.'},
    {'brand': "Audemars Piguet", "model": "Royal Oak Chronograph", "image_path": "/images/audemars_piguet/26715BC_ZZ_1356BC_02.png", "reference_number": "26715BC.ZZ.1356BC.02", 'description': 'An extraordinary blend of haute horlogerie and diamond-set brilliance, exuding bold luxury.'}
]

export default function Home(){
    return (
        <div className="main">
            <div className='w-full h-[800px] overflow-hidden'>
                <video className='w-full h-full object-cover' id='mainvideo' autoPlay loop muted>
                    <source src={'/videos/watch.mp4'}></source>
                </video>
                <div className="absolute top-[calc(24rem*1.85)] left-0 right-0 flex justify-center items-center">
                    <Link to='/watches' className="bg-gradient-to-l from-accent-primary-100 to-accent-primary-200 text-text font-bold py-2 px-12 rounded-lg hover:from-accent-primary-200 hover:to-accent-primary">
                        Explore Watch Models
                    </Link>
                </div>
            </div>
            <section className="py-16">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Featured Watches</h2>
                        <p className="text-lg mb-12">
                            Explore our handpicked selection of luxury watches.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <FeaturedWatch watch={featuredWatches[0]} index='1'/>
                            <FeaturedWatch watch={featuredWatches[1]} index='2'/>
                            <FeaturedWatch watch={featuredWatches[2]} index='3'/>
                        </div>
                    </div>
            </section>
    </div>
)
}