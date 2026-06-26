import { useState, useEffect, useRef } from 'react'

const features = [
  { id: 0, title: 'AI Workflow Engine', description: 'Build complex automation pipelines with our drag-and-drop AI workflow builder. No code required.', icon: '/cog-8-tooth.svg', size: 'large' },
  { id: 1, title: 'Real-time Analytics', description: 'Monitor your data streams with live dashboards and instant insights.', icon: '/chart-pie.svg', size: 'small' },
  { id: 2, title: 'Smart Integrations', description: 'Connect with 500+ tools and services seamlessly.', icon: '/link-solid.svg', size: 'small' },
  { id: 3, title: 'Auto Sync', description: 'Automatically sync your data across all platforms in real time.', icon: '/arrow-path.svg', size: 'small' },
  { id: 4, title: 'Auto Scaling', description: 'Automatically scales with your business needs without any manual intervention.', icon: '/arrow-trending-up.svg', size: 'small' },
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
    if (!isMobile) setActiveIndex(null)
  }

  const toggleAccordion = (id) => {
    const next = activeIndex === id ? null : id
    setActiveIndex(next)
    activeIndexRef.current = next
  }

  return (
    <section id="features" className="py-24 px-6" style={{backgroundColor: '#172B36'}}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'JetBrains Mono', color: '#F1F6F4'}}>Everything You Need</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{color: '#D9E8E2', fontFamily: 'Inter'}}>Powerful features designed to supercharge your automation workflows</p>
        </div>

        {/* Desktop Bento Grid */}
        {!isMobile && (
          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px]">
            <div
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              className="col-span-1 row-span-2 rounded-2xl border p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: activeIndex === 0 ? '#114C5A' : '#172B36',
                borderColor: activeIndex === 0 ? '#FFC801' : '#114C5A',
                transform: activeIndex === 0 ? 'scale(1.02)' : 'scale(1)'
              }}
            >
              <img src={features[0].icon} alt={features[0].title} className="w-12 h-12" style={{filter: 'invert(80%) sepia(100%) saturate(500%) hue-rotate(0deg)'}} />
              <div>
                <h3 className="font-bold text-2xl mb-3" style={{fontFamily: 'JetBrains Mono', color: '#F1F6F4'}}>{features[0].title}</h3>
                <p style={{color: '#D9E8E2', fontFamily: 'Inter'}}>{features[0].description}</p>
              </div>
            </div>

            {features.slice(1).map((feature) => (
              <div
                key={feature.id}
                onMouseEnter={() => handleMouseEnter(feature.id)}
                onMouseLeave={handleMouseLeave}
                className="rounded-2xl border p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  backgroundColor: activeIndex === feature.id ? '#114C5A' : '#172B36',
                  borderColor: activeIndex === feature.id ? '#FFC801' : '#114C5A',
                  transform: activeIndex === feature.id ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                <img src={feature.icon} alt={feature.title} className="w-10 h-10" style={{filter: 'invert(80%) sepia(100%) saturate(500%) hue-rotate(0deg)'}} />
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{fontFamily: 'JetBrains Mono', color: '#F1F6F4'}}>{feature.title}</h3>
                  <p className="text-sm" style={{color: '#D9E8E2', fontFamily: 'Inter'}}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile Accordion */}
        {isMobile && (
          <div className="flex flex-col gap-3">
            {features.map((feature) => (
              <div key={feature.id} className="rounded-2xl border overflow-hidden" style={{borderColor: '#114C5A', backgroundColor: '#114C5A20'}}>
                <button onClick={() => toggleAccordion(feature.id)} className="w-full flex items-center justify-between p-5 text-left">
                  <div className="flex items-center gap-3">
                    <img src={feature.icon} alt={feature.title} className="w-6 h-6" style={{filter: 'invert(80%) sepia(100%) saturate(500%) hue-rotate(0deg)'}} />
                    <span className="font-semibold" style={{fontFamily: 'JetBrains Mono', color: '#F1F6F4'}}>{feature.title}</span>
                  </div>
                  <img
                    src={activeIndex === feature.id ? '/chevron-up.svg' : '/chevron-down.svg'}
                    alt="toggle"
                    className="w-5 h-5 transition-transform duration-300"
                    style={{filter: 'invert(1)'}}
                  />
                </button>
                <div className="overflow-hidden transition-all duration-300 ease-in-out" style={{maxHeight: activeIndex === feature.id ? '200px' : '0px'}}>
                  <p className="px-5 pb-5" style={{color: '#D9E8E2', fontFamily: 'Inter'}}>{feature.description}</p>
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