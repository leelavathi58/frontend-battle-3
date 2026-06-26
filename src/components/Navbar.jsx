function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="text-white font-bold text-xl">NexaFlow</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 list-none">
          <li><a href="#features" className="text-gray-400 hover:text-white transition-colors duration-200">Features</a></li>
          <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors duration-200">Pricing</a></li>
          <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-200">Testimonials</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <a href="#pricing" className="hidden md:block text-gray-400 hover:text-white transition-colors duration-200">Log in</a>
          <a href="#pricing" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-200">Get Started</a>
        </div>

      </nav>
    </header>
  )
}

export default Navbar