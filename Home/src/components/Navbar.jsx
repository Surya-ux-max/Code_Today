function Navbar() {
    return (

        <div className="bg-black text-white">  
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* These defines page and text colour and the nav tag defines the navigation bar with a maximum width, centered alignment, padding, and flexbox layout for spacing and alignment of its child elements. */}

                <h1 className="text-2xl font-bold">X-Platform</h1> 
                <div className="flex gap-8">
                    <a href="#" className="hover:text-blue-500">Home</a>  
                    <a href="#" className="hover:text-blue-500">About</a> 
                    <a href="#" className="hover:text-blue-500">Contact</a>   
                </div>

                {/* The h1 tag displays the website's name "X-Platform" with a larger font size and bold weight. The div contains three anchor tags representing navigation links (Home, About, Contact) with a hover effect that changes their text color to blue. */}
            </nav>
        </div>
    )
}
export default Navbar;