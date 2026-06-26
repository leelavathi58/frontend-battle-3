import { useState, useEffect, useRef } from 'react'

const features = [
  {
    id: 0,
    title: 'AI Workflow Engine',
    description: 'Build complex automation pipelines with our drag-and-drop AI workflow builder. No code required.',
    icon: '⚡',
    size: 'large',
  },
  {
    id: 1,
    title: 'Real-time Analytics',
    description: 'Monitor your data streams with live dashboards and instant insights.',
    icon: '📊',
    size: 'small',
  },
  {
    id: 2,
    title: 'Smart Integrations',
    description: 'Connect with 500+ tools and services seamlessly.',
    icon: '🔗',
    size: 'small',
  },
  {
    id: 3,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance built into every layer of the platform.',
    icon: '🔒',
    size: 'small',
  },
  {
    id: 4,
    title: 'Auto Scaling',
    description: 'Automatically scales with your business needs without any manual intervention.',
    icon: '🚀',
    size: 'small',
  },
]

function Features() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const activeIndexRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      if (mobile && !isMobile) {
        setActiveIndex(activeIndexRef.current)
      }
      setIsMobile(mobile)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobile])

  const handleMouseEnter = (id) => {
    if (!isMobile) {
      setActiveIndex(id)
      activeIndexRef.current = id
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveIndex(null)
    }
  }

  const toggleAccordion = (id) => {
    setActiveIndex(activeIndex === id ? null : id)
    activeIndexRef.current = activeIndex === id ? null : id
  }

  return (
    <section id="features" className="py-24 bg-black px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Powerful features designed to supercharge your automation workflows
          </p>
        </div>

        {/* Desktop Bento Grid */}
        {!isMobile && (
          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px]">
            {/* Large card */}
            <div
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              className={`col-span-1 row-span-2 rounded-2xl border p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 ease-in-out ${
                activeIndex === 0
                  ? 'bg-blue-600/20 border-blue-500/50 scale-[1.02]'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="text-5xl">{features[0].icon}</div>
              <div>
                <h3 className="text-white font-bold text-2xl mb-3">{features[0].title}</h3>
                <p className="text-gray-400">{features[0].description}</p>
              </div>
            </div>

            {/* Small cards */}
            {features.slice(1).map((feature) => (
              <div
                key={feature.id}
                onMouseEnter={() => handleMouseEnter(feature.id)}
                onMouseLeave={handleMouseLeave}
                className={`rounded-2xl border p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 ease-in-out ${
                  activeIndex === feature.id
                    ? 'bg-blue-600/20 border-blue-500/50 scale-[1.02]'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile Accordion */}
        {isMobile && (
          <div className="flex flex-col gap-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(feature.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="text-white font-semibold">{feature.title}</span>
                  </div>
                  <span
                    className="text-gray-400 transition-transform duration-300 ease-in-out"
                    style={{ transform: activeIndex === feature.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: activeIndex === feature.id ? '200px' : '0px' }}
                >
                  <p className="text-gray-400 px-5 pb-5">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default Features