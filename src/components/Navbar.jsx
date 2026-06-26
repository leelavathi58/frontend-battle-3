function Navbar() {
  return (
    <header style={{backgroundColor: '#172B36', borderBottom: '1px solid #114C5A'}} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <img src="/cube-16-solid.svg" alt="logo" className="w-8 h-8" style={{filter: 'invert(1)'}} />
          <span style={{fontFamily: 'JetBrains Mono', color: '#FFC801'}} className="font-bold text-xl">NexaFlow</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 list-none">
          <li><a href="#features" style={{color: '#D9E8E2'}} className="hover:text-white transition-colors duration-200">Features</a></li>
          <li><a href="#pricing" style={{color: '#D9E8E2'}} className="hover:text-white transition-colors duration-200">Pricing</a></li>
          <li><a href="#testimonials" style={{color: '#D9E8E2'}} className="hover:text-white transition-colors duration-200">Testimonials</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <a href="#pricing" style={{color: '#D9E8E2'}} className="hidden md:block hover:text-white transition-colors duration-200">Log in</a>
          <a href="#pricing" style={{backgroundColor: '#FFC801', color: '#172B36'}} className="px-5 py-2 rounded-lg font-semibold transition-all duration-200 hover:opacity-90">Get Started</a>
        </div>

      </nav>
    </header>
  )
}

export default Navbar