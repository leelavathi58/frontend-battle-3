import { useRef } from 'react'
import { pricingConfig, getPrice } from '../data/pricingMatrix'

function Pricing() {
  const billingRef = useRef('monthly')
  const currencyRef = useRef('INR')

  const updatePrices = () => {
    const isAnnual = billingRef.current === 'annual'
    const currency = currencyRef.current
    const { symbol } = pricingConfig.currencies[currency]

    pricingConfig.tiers.forEach((tier) => {
      const price = getPrice(tier.basePrice, currency, isAnnual)
      const el = document.getElementById(`price-${tier.id}`)
      const symEl = document.getElementById(`symbol-${tier.id}`)
      if (el) el.textContent = price.toLocaleString()
      if (symEl) symEl.textContent = symbol
    })

    // Update billing toggle UI
    const monthlyBtn = document.getElementById('btn-monthly')
    const annualBtn = document.getElementById('btn-annual')
    if (monthlyBtn && annualBtn) {
      if (isAnnual) {
        monthlyBtn.classList.remove('bg-blue-600', 'text-white')
        monthlyBtn.classList.add('text-gray-400')
        annualBtn.classList.add('bg-blue-600', 'text-white')
        annualBtn.classList.remove('text-gray-400')
      } else {
        annualBtn.classList.remove('bg-blue-600', 'text-white')
        annualBtn.classList.add('text-gray-400')
        monthlyBtn.classList.add('bg-blue-600', 'text-white')
        monthlyBtn.classList.remove('text-gray-400')
      }
    }
  }

  const handleBilling = (type) => {
    billingRef.current = type
    updatePrices()
  }

  const handleCurrency = (e) => {
    currencyRef.current = e.target.value
    updatePrices()
  }

  return (
    <section id="pricing" className="py-24 bg-black px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple Pricing</h2>
          <p className="text-gray-400 text-xl">Choose the plan that works for you</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center bg-white/5 rounded-lg p-1 border border-white/10">
            <button
              id="btn-monthly"
              onClick={() => handleBilling('monthly')}
              className="px-5 py-2 rounded-md text-sm font-medium transition-colors duration-200 bg-blue-600 text-white"
            >
              Monthly
            </button>
            <button
              id="btn-annual"
              onClick={() => handleBilling('annual')}
              className="px-5 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-400"
            >
              Annual (20% off)
            </button>
          </div>

          <select
            onChange={handleCurrency}
            className="bg-white/5 border border-white/10 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
          >
            <option value="INR" className="bg-black">₹ INR</option>
            <option value="USD" className="bg-black">$ USD</option>
            <option value="EUR" className="bg-black">€ EUR</option>
          </select>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingConfig.tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl border p-8 flex flex-col transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-blue-600/10 border-blue-500/50'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {tier.highlighted && (
                <div className="text-blue-400 text-sm font-semibold mb-4 uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-white font-bold text-2xl mb-2">{tier.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{tier.description}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span id={`symbol-${tier.id}`} className="text-white text-2xl font-bold">₹</span>
                <span id={`price-${tier.id}`} className="text-white text-5xl font-bold">
                  {tier.basePrice.toLocaleString()}
                </span>
                <span className="text-gray-400 text-sm">/mo</span>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="text-blue-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  tier.highlighted
                    ? 'bg-blue-600 hover:bg-blue-500 text-white'
                    : 'border border-white/20 hover:border-white/40 text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Pricing