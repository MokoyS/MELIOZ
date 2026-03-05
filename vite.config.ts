import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Plugin pour gérer les routes API directement dans Vite
function apiPlugin() {
  return {
    name: 'api-plugin',
    configureServer(server: any) {
      // Charger les variables d'environnement
      const env = loadEnv(server.config.mode, process.cwd(), '')
      
      server.middlewares.use(async (req: any, res: any, next: any) => {
        if (req.url?.startsWith('/api/')) {
          try {
            const apiPath = req.url.replace('/api/', '').replace(/\?.*$/, '')
            
            if (apiPath === 'contact') {
              // Parser le body
              let body = {}
              if (req.method === 'POST') {
                const chunks: Buffer[] = []
                req.on('data', (chunk: Buffer) => chunks.push(chunk))
                await new Promise<void>((resolve) => {
                  req.on('end', () => resolve())
                })
                const bodyString = Buffer.concat(chunks).toString()
                if (bodyString) {
                  try {
                    body = JSON.parse(bodyString)
                  } catch {
                    body = {}
                  }
                }
              }

              // Vérifier que la clé API est configurée
              const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY
              if (!apiKey) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: 'Configuration serveur manquante: RESEND_API_KEY' }))
                return
              }

              const { name, email, subject, message } = body as any

              // Validation des champs requis
              if (!name || !email || !message) {
                res.statusCode = 400
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: 'Champs requis manquants' }))
                return
              }

              // Validation de l'email
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
              if (!emailRegex.test(email)) {
                res.statusCode = 400
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: 'Email invalide' }))
                return
              }

              // Appel à l'API Resend
              const response = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                  from: 'MELIOZ Contact <contact@agencemelioz.com>',
                  to: ['contact@agencemelioz.com'],
                  reply_to: email,
                  subject: subject || `Nouveau message de ${name}`,
                  html: `
                    <!DOCTYPE html>
                    <html lang="fr">
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    </head>
                    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #F8F9F5; line-height: 1.6;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #F8F9F5; padding: 40px 20px;">
                        <tr>
                          <td align="center">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px -10px rgba(47, 54, 44, 0.08);">
                              <!-- Header avec logo -->
                              <tr>
                                <td style="background: linear-gradient(135deg, #B2C2A2 0%, #849673 100%); padding: 40px 40px 30px; text-align: center;">
                                  <div style="margin-bottom: 20px;">
                                    <svg width="120" height="40" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g transform="translate(10, 15) scale(0.3)">
                                        <path d="M20 85V45C20 31.1929 31.1929 20 45 20C58.8071 20 70 31.1929 70 45V85" stroke="#FFFFFF" stroke-width="14" stroke-linecap="round"/>
                                        <path d="M70 85V45C70 31.1929 81.1929 20 95 20C108.807 20 120 31.1929 120 45V85" stroke="#FFFFFF" stroke-width="14" stroke-linecap="round"/>
                                      </g>
                                      <text x="135" y="75" fill="#FFFFFF" style="font-family: 'Space Grotesk', sans-serif; font-weight: 800; font-size: 48px; letter-spacing: 2px;">MELIOZ</text>
                                    </svg>
                                  </div>
                                  <h1 style="margin: 0; color: #FFFFFF; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">Nouveau message de contact</h1>
                                </td>
                              </tr>
                              
                              <!-- Contenu principal -->
                              <tr>
                                <td style="padding: 40px;">
                                  <div style="margin-bottom: 32px;">
                                    <div style="background-color: #F8F9F5; border-left: 4px solid #B2C2A2; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
                                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                        <tr>
                                          <td style="padding-bottom: 16px;">
                                            <div style="color: #849673; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Nom complet</div>
                                            <div style="color: #2F362C; font-size: 18px; font-weight: 600;">${name}</div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td style="padding-bottom: 16px;">
                                            <div style="color: #849673; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Email</div>
                                            <div style="color: #2F362C; font-size: 16px;">
                                              <a href="mailto:${email}" style="color: #B2C2A2; text-decoration: none; font-weight: 500;">${email}</a>
                                            </div>
                                          </td>
                                        </tr>
                                        ${subject ? `
                                        <tr>
                                          <td style="padding-bottom: 16px;">
                                            <div style="color: #849673; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Sujet</div>
                                            <div style="color: #2F362C; font-size: 16px; font-weight: 500;">${subject}</div>
                                          </td>
                                        </tr>
                                        ` : ''}
                                      </table>
                                    </div>
                                    
                                    <div style="background-color: #FFFFFF; border: 2px solid #F8F9F5; padding: 24px; border-radius: 12px;">
                                      <div style="color: #849673; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">Message</div>
                                      <div style="color: #2F362C; font-size: 16px; line-height: 1.8; white-space: pre-wrap;">${(message as string).replace(/\n/g, '<br>')}</div>
                                    </div>
                                  </div>
                                  
                                  <!-- Bouton Répondre -->
                                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                      <td align="center" style="padding-top: 20px;">
                                        <a href="mailto:${email}?subject=${encodeURIComponent('Re: ' + (subject || `Message de ${name}`))}" style="display: inline-block; background-color: #B2C2A2; color: #FFFFFF; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px; transition: background-color 0.3s;">Répondre à ${name}</a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              
                              <!-- Footer -->
                              <tr>
                                <td style="background-color: #F8F9F5; padding: 30px 40px; text-align: center; border-top: 1px solid #E5E5E5;">
                                  <p style="margin: 0; color: #849673; font-size: 14px; line-height: 1.6;">
                                    Ce message a été envoyé depuis le formulaire de contact de<br>
                                    <a href="https://agencemelioz.com" style="color: #B2C2A2; text-decoration: none; font-weight: 600;">agencemelioz.com</a>
                                  </p>
                                  <p style="margin: 16px 0 0; color: #849673; font-size: 12px;">
                                    © ${new Date().getFullYear()} MELIOZ - Agence digitale
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </body>
                    </html>
                  `,
                  text: `
                    Nouveau message depuis le formulaire de contact
                    
                    Nom: ${name}
                    Email: ${email}
                    ${subject ? `Sujet: ${subject}` : ''}
                    
                    Message:
                    ${message}
                  `,
                }),
              })

              if (!response.ok) {
                const errorData = await response.json().catch(() => ({}))
                console.error('Resend error:', errorData)
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ 
                  error: 'Erreur lors de l\'envoi de l\'email',
                  details: errorData 
                }))
                return
              }

              const data = await response.json()
              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ success: true, data }))
              return
            }
          } catch (error: any) {
            console.error('API Error:', error)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ 
              error: 'Erreur serveur',
              message: error.message 
            }))
            return
          }
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apiPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimisations de build pour la production
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false, // Désactiver en production pour réduire la taille
    rollupOptions: {
      output: {
        // Code splitting optimisé par route
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-helmet-async'],
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'motion-vendor': ['framer-motion'],
          'ui-vendor': ['lucide-react'],
        },
        // Optimisation des noms de chunks
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[ext]/[name]-[hash][extname]`;
        },
      },
    },
    // Augmenter la limite de taille des chunks (pour les gros bundles)
    chunkSizeWarningLimit: 1000,
  },
  // Optimisations pour le développement
  server: {
    hmr: {
      overlay: true,
    },
    // Précharger les dépendances pour accélérer le démarrage
    warmup: {
      clientFiles: [
        './src/main.tsx',
        './src/App.tsx',
        './src/components/Navbar.tsx',
        './src/components/Hero.tsx',
      ],
    },
  },
  // Optimisation des dépendances
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-helmet-async',
      'framer-motion',
      'lucide-react',
    ],
    exclude: [],
    // Forcer la pré-optimisation
    force: false,
  },
  // Désactiver le code splitting en dev pour plus de rapidité
  esbuild: {
    // Garder les noms de fonctions pour un meilleur debugging
    keepNames: true,
  },
})
