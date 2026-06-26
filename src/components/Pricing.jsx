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

    const monthlyBtn = document.getElementById('btn-monthly')
    const annualBtn = document.getElementById('btn-annual')
    if (isAnnual) {
      monthlyBtn.style.backgroundColor = 'transparent'
      monthlyBtn.style.color = '#D9E8E2'
      annualBtn.style.backgroundColor = '#FFC801'
      annualBtn.style.color = '#172B36'
    } else {
      annualBtn.style.backgroundColor = 'transparent'
      annualBtn.style.color = '#D9E8E2'
      monthlyBtn.style.backgroundColor = '#FFC801'
      monthlyBtn.style.color = '#172B36'
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
    <section id="pricing" className="py-24 px-6" style={{backgroundColor: '#114C5A20'}}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'JetBrains Mono', color: '#F1F6F4'}}>Simple Pricing</h2>
          <p className="text-xl" style={{color: '#D9E8E2', fontFamily: 'Inter'}}>Choose the plan that works for you</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center rounded-lg p-1 border" style={{backgroundColor: '#172B36', borderColor: '#114C5A'}}>
            <button id="btn-monthly" onClick={() => handleBilling('monthly')} className="px-5 py-2 rounded-md text-sm font-medium transition-all duration-200" style={{backgroundColor: '#FFC801', color: '#172B36', fontFamily: 'Inter'}}>Monthly</button>
            <button id="btn-annual" onClick={() => handleBilling('annual')} className="px-5 py-2 rounded-md text-sm font-medium transition-all duration-200" style={{backgroundColor: 'transparent', color: '#D9E8E2', fontFamily: 'Inter'}}>Annual (20% off)</button>
          </div>

          <select onChange={handleCurrency} className="rounded-lg px-4 py-2 text-sm focus:outline-none border" style={{backgroundColor: '#172B36', borderColor: '#114C5A', color: '#F1F6F4', fontFamily: 'Inter'}}>
            <option value="INR" style={{backgroundColor: '#172B36'}}>₹ INR</option>
            <option value="USD" style={{backgroundColor: '#172B36'}}>$ USD</option>
            <option value="EUR" style={{backgroundColor: '#172B36'}}>€ EUR</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingConfig.tiers.map((tier) => (
            <div key={tier.id} className="rounded-2xl border p-8 flex flex-col transition-all duration-300 hover:scale-[1.02]" style={{backgroundColor: tier.highlighted ? '#114C5A' : '#172B36', borderColor: tier.highlighted ? '#FFC801' : '#114C5A'}}>
              {tier.highlighted && (
                <div className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{color: '#FFC801', fontFamily: 'JetBrains Mono'}}>Most Popular</div>
              )}
              <h3 className="font-bold text-2xl mb-2" style={{fontFamily: 'JetBrains Mono', color: '#F1F6F4'}}>{tier.name}</h3>
              <p className="text-sm mb-6" style={{color: '#D9E8E2', fontFamily: 'Inter'}}>{tier.description}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span id={`symbol-${tier.id}`} className="text-2xl font-bold" style={{fontFamily: 'JetBrains Mono', color: '#FFC801'}}>₹</span>
                <span id={`price-${tier.id}`} className="text-5xl font-bold" style={{fontFamily: 'JetBrains Mono', color: '#F1F6F4'}}>{tier.basePrice.toLocaleString()}</span>
                <span className="text-sm" style={{color: '#D9E8E2'}}>/mo</span>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{color: '#D9E8E2', fontFamily: 'Inter'}}>
                    <img src="/chevron-right.svg" alt="check" className="w-4 h-4" style={{filter: 'invert(80%) sepia(100%) saturate(500%) hue-rotate(0deg)'}} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95 hover:opacity-90" style={{backgroundColor: tier.highlighted ? '#FFC801' : 'transparent', color: tier.highlighted ? '#172B36' : '#F1F6F4', border: tier.highlighted ? 'none' : '1px solid #114C5A', fontFamily: 'Inter'}}>
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