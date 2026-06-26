const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    text: 'NexaFlow reduced our data processing time by 80%. The AI workflows are incredibly powerful and easy to set up.',
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Lead Engineer at DataSync',
    text: 'The best automation platform we have used. Seamless integrations and rock-solid reliability.',
    avatar: 'MC',
  },
  {
    name: 'Priya Sharma',
    role: 'Product Manager at FlowBase',
    text: 'Our team productivity increased by 3x after switching to NexaFlow. Absolutely worth every penny.',
    avatar: 'PS',
  },
]

function SocialProof() {
  return (
    <section id="testimonials" className="py-24 bg-black px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Loved by Teams Worldwide
          </h2>
          <p className="text-gray-400 text-xl">
            Join thousands of companies already using NexaFlow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors duration-200"
            >
              <p className="text-gray-300 mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SocialProof