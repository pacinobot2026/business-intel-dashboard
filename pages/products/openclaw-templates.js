import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_live_51T4AreCDxYH1XF8Fyl7NlP772dWq4MlWGBjtSMJPBTXFBu3rkunAgU19e9BUeSr7ryNLGLKieyCqr9FsTn8xgrZH002kdFzZaM')

export default function OpenClawTemplates() {
  const [selectedPack, setSelectedPack] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleCheckout = async (priceId, packName) => {
    setLoading(true)
    try {
      const stripe = await stripePromise
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        mode: 'payment',
        successUrl: `${window.location.origin}/products/openclaw-templates/success`,
        cancelUrl: `${window.location.origin}/products/openclaw-templates`,
      })
      if (error) {
        console.error('Stripe error:', error)
        alert('Checkout error. Please try again.')
      }
    } catch (err) {
      console.error('Error:', err)
      alert('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  const packs = [
    {
      id: 'ecommerce',
      name: 'E-Commerce Operator',
      price: 197,
      priceId: 'price_1T7pbNCDxYH1XF8FkLgfIcEf',
      features: [
        'Customer service agent (inquiries, refunds, tracking)',
        'Inventory monitor with smart alerts',
        'Review management & response automation',
        'Order fulfillment workflows',
        'Email sequences (cart, post-purchase, win-back)'
      ]
    },
    {
      id: 'coaching',
      name: 'Coaching/Consulting Business',
      price: 197,
      priceId: 'price_1T7pbXCDxYH1XF8FHnGxJBho',
      features: [
        'Client onboarding automation',
        'Content creator (posts, newsletters from notes)',
        'Follow-up system with progress tracking',
        'Discovery call qualifier',
        'Testimonial collector & showcase'
      ]
    },
    {
      id: 'local',
      name: 'Local Service Business',
      price: 197,
      priceId: 'price_1T7pbeCDxYH1XF8Fsdlg2YZA',
      features: [
        'Instant lead response agent',
        'Appointment scheduler (book, confirm, remind)',
        'Automated review requests',
        'Local SEO monitoring',
        'Quote generator for services'
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>OpenClaw Business Templates - Pre-Built Agent Workflows</title>
        <meta name="description" content="Pre-built OpenClaw agent configurations for e-commerce, coaching, and local service businesses. From zero to working agent in 15 minutes." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Navigation */}
        <nav className="bg-black/30 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/" className="text-white hover:text-blue-400 transition">
              ← Back to Dashboard
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              OpenClaw Business Templates
            </h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-4">
              Pre-Built Agent Workflows That Work Out of the Box
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Stop starting from scratch. Get battle-tested OpenClaw configurations for your business type. 
              <span className="text-blue-400 font-semibold"> From zero to working agent in 15 minutes.</span>
            </p>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                <p className="text-gray-400">VSL Coming Soon</p>
              </div>
              <p className="text-center text-gray-300">
                Watch how these templates transform your business in minutes, not months.
              </p>
            </div>
          </div>

          {/* Template Packs */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packs.map((pack) => (
              <div
                key={pack.id}
                className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-blue-500/50 transition"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{pack.name}</h3>
                <div className="text-4xl font-bold text-blue-400 mb-6">
                  ${pack.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleCheckout(pack.priceId, pack.name)}
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition"
                >
                  {loading ? 'Loading...' : 'Get This Pack'}
                </button>
              </div>
            ))}
          </div>

          {/* Bundle Offer */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                🔥 All 3 Packs Bundle
              </h3>
              <p className="text-xl text-white/90 mb-6">
                Get all three template packs and save $94
              </p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-2xl text-white/70 line-through">$591</span>
                <span className="text-5xl font-bold text-white">$497</span>
              </div>
              <button
                onClick={() => handleCheckout('price_1T7pbpCDxYH1XF8FbGEiXauX', 'Complete Bundle')}
                disabled={loading}
                className="bg-white text-blue-600 hover:bg-gray-100 disabled:bg-gray-300 font-bold text-xl py-4 px-12 rounded-lg transition"
              >
                {loading ? 'Loading...' : 'Get the Bundle Now'}
              </button>
            </div>
          </div>

          {/* What's Included */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              What You Get in Each Pack
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '⚙️', title: 'Agent Config Files', desc: 'SOUL.md, AGENTS.md, TOOLS.md - ready to deploy' },
                { icon: '🔧', title: 'Pre-Built Skills', desc: 'Industry-specific automations and workflows' },
                { icon: '💬', title: 'Prompt Templates', desc: 'Tested conversation flows that convert' },
                { icon: '🔌', title: 'Integration Guides', desc: 'Connect to your existing tools seamlessly' },
                { icon: '🎥', title: 'Video Walkthrough', desc: '15-minute setup tutorial from Chad himself' },
                { icon: '📋', title: 'Use Case Examples', desc: 'Real scenarios with actual agent responses' }
              ].map((item, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why This Works */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Why OpenClaw Templates Work
            </h2>
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-3">✓</span>
                  <span><strong className="text-white">Battle-tested by real businesses</strong> - Not theory, actual working configs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-3">✓</span>
                  <span><strong className="text-white">No coding required</strong> - Copy, paste, customize</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-3">✓</span>
                  <span><strong className="text-white">Works with free OpenClaw tier</strong> - Start without extra costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-3">✓</span>
                  <span><strong className="text-white">Update access included</strong> - New templates added monthly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-3">✓</span>
                  <span><strong className="text-white">15-minute setup</strong> - Seriously. That's it.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose your template pack and get instant access
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleCheckout(packs[0].priceId, packs[0].name)}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white font-semibold text-lg py-4 px-8 rounded-lg transition"
              >
                {loading ? 'Loading...' : 'Get E-Commerce Pack - $197'}
              </button>
              <button
                onClick={() => handleCheckout('price_1T7pbpCDxYH1XF8FbGEiXauX', 'Complete Bundle')}
                disabled={loading}
                className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-500 text-white font-semibold text-lg py-4 px-8 rounded-lg transition"
              >
                {loading ? 'Loading...' : 'Get All 3 Packs - $497'}
              </button>
            </div>
          </div>
        </div>

        {/* Checkout Modal Placeholder */}
        {selectedPack && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedPack.name}
              </h3>
              <p className="text-3xl font-bold text-blue-400 mb-6">
                ${selectedPack.price}
              </p>
              <p className="text-gray-300 mb-6">
                Stripe checkout integration coming soon
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedPack(null)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg transition"
                >
                  Close
                </button>
                <button
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
