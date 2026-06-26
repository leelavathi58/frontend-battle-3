function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-black flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span className="text-blue-400 text-sm font-medium">Next-Gen AI Automation Platform</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Automate Everything With AI Power
        </h1>

        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
          NexaFlow transforms your data workflows with intelligent automation, real-time analytics, and seamless integrations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 w-full sm:w-auto text-center">Start Free Trial</a>
          <a href="#features" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 w-full sm:w-auto text-center">See Features</a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">99.9%</div>
            <div className="text-gray-500 text-sm mt-1">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">10x</div>
            <div className="text-gray-500 text-sm mt-1">Faster Workflows</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-gray-500 text-sm mt-1">Integrations</div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero