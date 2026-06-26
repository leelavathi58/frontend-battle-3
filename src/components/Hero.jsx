function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6" style={{backgroundColor: '#172B36'}}>
      <div className="max-w-7xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border" style={{backgroundColor: '#114C5A', borderColor: '#FFC801', color: '#FFC801'}}>
          <img src="/arrow-trending-up.svg" alt="trending" className="w-4 h-4" style={{filter: 'invert(80%) sepia(100%) saturate(500%) hue-rotate(0deg)'}} />
          <span className="text-sm font-medium" style={{fontFamily: 'JetBrains Mono'}}>Next-Gen AI Automation Platform</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{fontFamily: 'JetBrains Mono', color: '#F1F6F4'}}>
          Automate Everything<br />
          <span style={{color: '#FFC801'}}>With AI Power</span>
        </h1>

        <p className="text-xl max-w-2xl mx-auto mb-10" style={{color: '#D9E8E2', fontFamily: 'Inter'}}>
          NexaFlow transforms your data workflows with intelligent automation, real-time analytics, and seamless integrations — all in one platform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:opacity-90 w-full sm:w-auto text-center" style={{backgroundColor: '#FFC801', color: '#172B36', fontFamily: 'Inter'}}>Start Free Trial</a>
          <a href="#features" className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 w-full sm:w-auto text-center border" style={{borderColor: '#114C5A', color: '#D9E8E2', fontFamily: 'Inter'}}>See Features</a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold" style={{fontFamily: 'JetBrains Mono', color: '#FFC801'}}>99.9%</div>
            <div className="text-sm mt-1" style={{color: '#D9E8E2'}}>Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold" style={{fontFamily: 'JetBrains Mono', color: '#FFC801'}}>10x</div>
            <div className="text-sm mt-1" style={{color: '#D9E8E2'}}>Faster Workflows</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold" style={{fontFamily: 'JetBrains Mono', color: '#FFC801'}}>500+</div>
            <div className="text-sm mt-1" style={{color: '#D9E8E2'}}>Integrations</div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero