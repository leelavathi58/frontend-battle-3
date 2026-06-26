
export const pricingConfig = {
  currencies: {
    INR: { symbol: '₹', tariff: 1 },
    USD: { symbol: '$', tariff: 0.012 },
    EUR: { symbol: '€', tariff: 0.011 },
  },
  annualDiscount: 0.8,
  tiers: [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for individuals and small projects',
      basePrice: 999,
      features: [
        '5 AI Automation Workflows',
        '10GB Data Storage',
        'Basic Analytics',
        'Email Support',
        'API Access',
      ],
      highlighted: false,
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Best for growing teams and businesses',
      basePrice: 2999,
      features: [
        'Unlimited AI Workflows',
        '100GB Data Storage',
        'Advanced Analytics',
        'Priority Support',
        'Full API Access',
        'Custom Integrations',
      ],
      highlighted: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large scale operations',
      basePrice: 7999,
      features: [
        'Everything in Pro',
        '1TB Data Storage',
        'Real-time Analytics',
        '24/7 Dedicated Support',
        'White Label Options',
        'SLA Guarantee',
      ],
      highlighted: false,
    },
  ],
}

export function getPrice(basePrice, currency, isAnnual) {
  const { tariff } = pricingConfig.currencies[currency]
  const discount = isAnnual ? pricingConfig.annualDiscount : 1
  return Math.round(basePrice * tariff * discount)
}