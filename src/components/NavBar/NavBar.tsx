import Image from "next/image"

const Navbar = () => {
    return (
        <nav className="relative container mx-auto p-6">
            {/* flex container for all items*/}
            <div className="flex items-center justify-between">
                {/* flex container for logo and menu*/}
                <div className="flex items-center space-x-20">
                    <Image
                      src={'/images/logo.svg'}
                      width={100}
                      height={100}
                      alt=""
                      priority
                       />

                       <div className="hidden lg:flex space-x-8 font-bold">
                          <a href="" className="text-grayishViolet hover:text-veryDarkViolet">Features</a>
                          <a href="" className="text-grayishViolet hover:text-veryDarkViolet">Pricing</a>
                          <a href="" className="text-grayishViolet hover:text-veryDarkViolet">Resources</a>
                       </div>
                </div>

                {/* Right buttons menu */}
                <div className="hidden items-center space-x-6 font-bold text-grayishViolent lg:flex">
                    <div className="hover:text-veryDarkViolent">Login</div>
                    <a href="" className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">
                        SignUp
                    </a>
                </div>
                {/* TODO hamburger menu */}
            </div>
            {/* TODO Mobile menu */}
        </nav>
    )
}

export default Navbar