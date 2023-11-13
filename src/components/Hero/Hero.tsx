const Hero = () => {
    return (
        <section id="hero">
            {/* Hero container */}
            <div className="container flex flex-col mx-auto p-6 lg:flex-row">
                {/* Content Container */}
                <div className="flex flex-col space-y-10 mb-44 lg:mt-16 xl:mb-52 lg:w-1/2">
                    <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
                        More than just shorter links
                    </h1>

                    <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
                         Build your brand's recongition and get detailed insights on how your links are performing
                    </p>
                    <div className="mx-auto lg:mx-0">
                        <a href="" className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70">
                            Get Started
                        </a>
                    </div>
                </div>
                {/* Image container */}
                <div className="md-24 mx-auto md:w-180 lg:w-1/2 lg:mb-0">
                    <img src="/images/illustration-working.svg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero