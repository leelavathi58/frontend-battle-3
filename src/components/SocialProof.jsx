const testimonials = [
  { name: 'Sarah Johnson', role: 'CTO at TechCorp', text: 'NexaFlow reduced our data processing time by 80%. The AI workflows are incredibly powerful and easy to set up.', avatar: 'SJ' },
  { name: 'Michael Chen', role: 'Lead Engineer at DataSync', text: 'The best automation platform we have used. Seamless integrations and rock-solid reliability.', avatar: 'MC' },
  { name: 'Priya Sharma', role: 'Product Manager at FlowBase', text: 'Our team productivity increased by 3x after switching to NexaFlow. Absolutely worth every penny.', avatar: 'PS' },
]

function SocialProof() {
  return (
    <section id="testimonials" className="py-24 px-6" style={{backgroundColor: '#172B36'}}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'JetBrains Mono', color: '#F1F6F4'}}>Loved by Teams Worldwide</h2>
          <p className="text-xl" style={{color: '#D9E8E2', fontFamily: 'Inter'}}>Join thousands of companies already using NexaFlow</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border p-8 hover:scale-[1.02] transition-all duration-300" style={{backgroundColor: '#114C5A20', borderColor: '#114C5A'}}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <span key={s} style={{color: '#FFC801'}}>★</span>
                ))}
              </div>
              <p className="mb-6 leading-relaxed" style={{color: '#D9E8E2', fontFamily: 'Inter'}}>"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{backgroundColor: '#FFC801', color: '#172B36', fontFamily: 'JetBrains Mono'}}>{t.avatar}</div>
                <div>
                  <div className="font-semibold" style={{color: '#F1F6F4', fontFamily: 'Inter'}}>{t.name}</div>
                  <div className="text-sm" style={{color: '#D9E8E2', fontFamily: 'Inter'}}>{t.role}</div>
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