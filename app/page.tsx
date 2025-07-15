"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Link as LinkIcon, Copy, Check, Loader2, Eye, Download, Share2, Zap } from "lucide-react"

export default function Preview123Page() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [preview, setPreview] = useState(null)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState("")

  const handleGeneratePreview = async () => {
    if (!url) return
    
    setIsLoading(true)
    setError("")
    
    try {
      // Simuler la génération d'aperçu
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setPreview({
        title: "Exemple de titre de page",
        description: "Ceci est un exemple de description de page web qui apparaît dans les aperçus de liens.",
        image: "https://via.placeholder.com/1200x630/667eea/ffffff?text=Preview+Image",
        url: url
      })
    } catch (err) {
      setError("Erreur lors de la génération de l'aperçu")
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = async () => {
    if (preview) {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const exampleUrls = [
    "https://example.com",
    "https://github.com",
    "https://stackoverflow.com"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Preview123
                </h1>
                <p className="text-sm text-gray-400">Générateur d'aperçus de liens</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <button className="text-gray-400 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all">
                Connexion
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white mb-8"
            >
              <Zap className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Génération instantanée d'aperçus</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Créez des aperçus
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 bg-clip-text text-transparent">
                en un clic
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Transformez vos liens en aperçus visuels attrayants. Parfait pour les réseaux sociaux, 
              les présentations et plus encore.
            </p>
          </motion.div>

          {/* URL Input Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <LinkIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="Collez votre URL ici..."
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGeneratePreview}
                  disabled={!url || isLoading}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white font-semibold transition-all flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Génération...
                    </>
                  ) : (
                    <>
                      <Eye className="w-5 h-5 mr-2" />
                      Générer l'aperçu
                    </>
                  )}
                </motion.button>
              </div>
              
              {/* Example URLs */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-3">Exemples d'URLs :</p>
                <div className="flex flex-wrap gap-2">
                  {exampleUrls.map((exampleUrl, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setUrl(exampleUrl)}
                      className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 hover:text-white transition-all"
                    >
                      {exampleUrl}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-4xl mx-auto mb-8"
              >
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-center">
                  {error}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Preview Result */}
          <AnimatePresence>
            {preview && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">Aperçu généré</h2>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCopy}
                      className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Copié !
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copier le lien
                        </>
                      )}
                    </motion.button>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl overflow-hidden">
                    <img 
                      src={preview.image} 
                      alt="Preview" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{preview.title}</h3>
                      <p className="text-gray-300 mb-4">{preview.description}</p>
                      <p className="text-sm text-gray-400">{preview.url}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-white font-medium transition-all"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger l'image
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-all"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Partager
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Features Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Pourquoi choisir Preview123 ?</h2>
              <p className="text-xl text-gray-300">Des fonctionnalités puissantes pour vos aperçus de liens</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Génération instantanée",
                  description: "Obtenez vos aperçus en quelques secondes avec notre technologie optimisée."
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Aperçus visuels",
                  description: "Des aperçus riches avec images, titres et descriptions pour un impact maximal."
                },
                {
                  icon: <Share2 className="w-8 h-8" />,
                  title: "Partage facile",
                  description: "Partagez vos aperçus sur tous vos réseaux sociaux en un clic."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Preview123 - Créé avec ❤️ pour des aperçus parfaits
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}