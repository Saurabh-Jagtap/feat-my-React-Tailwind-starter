import React from 'react'

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-primary text-dark">
                <div className="mx-14 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-3xl mb-4 text-white font-bold">MindScribe AI
                    </h1>
                    <p className="mb-8 leading-relaxed text-gray-50 text-xl">Write smarter, not harder. MindScribe helps you brainstorm faster and sound professional.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mr-14" >
                    <img className="object-cover object-center rounded" alt="hero" src="Hero_img.jpg" height={720} width={600} style={{ width: "800px", height: "400px" }}></img>
                </div>
            </div>
        </section>
    )
}

export default Hero
