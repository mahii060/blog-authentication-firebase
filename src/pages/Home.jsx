import { Link } from 'react-router-dom';
import blog from '../assets/blog.svg'
const Home = () => {
    return (
        <section className="bg-gray-100 text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
                <div className="flex flex-col justify-center py-6 pl-6 text-center rounded-sm lg:max-w-md xl:max-w-3xl lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Explore inspiring stories, insights, and ideas crafted to inform you.
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Our blog shares engaging content, insightful stories, and expert knowledge to inspire, educate, and connect readers with topics they care about.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold rounded bg-indigo-600 text-gray-50">Subscribe</a>
                        <Link to="/" rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Blogs</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 w-full h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={blog} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Home;