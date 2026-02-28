// Serveur de développement pour gérer les routes API localement
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Charger les variables d'environnement
const envResult = config({ path: resolve(__dirname, '.env.local') });

if (envResult.error) {
  console.warn('⚠️  Fichier .env.local non trouvé. Les variables d\'environnement ne seront pas chargées depuis ce fichier.');
} else {
  console.log('✅ Variables d\'environnement chargées depuis .env.local');
}

// Vérifier que RESEND_API_KEY est disponible
if (!process.env.RESEND_API_KEY) {
  console.warn('⚠️  RESEND_API_KEY n\'est pas définie dans les variables d\'environnement');
} else {
  console.log('✅ RESEND_API_KEY est configurée');
}

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Middleware pour logger les requêtes
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Route API contact
app.post('/api/contact', async (req, res) => {
  try {
    console.log('📧 Requête de contact reçue:', { 
      name: req.body?.name, 
      email: req.body?.email 
    });

    // Vérifier que la clé API est configurée
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('❌ RESEND_API_KEY n\'est pas configurée');
      return res.status(500).json({ error: 'Configuration serveur manquante' });
    }

    const { name, email, subject, message } = req.body;

    // Validation des champs requis
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Champs requis manquants' });
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Email invalide' });
    }

    console.log('📤 Envoi de l\'email via Resend...');

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
                            <div style="color: #2F362C; font-size: 16px; line-height: 1.8; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</div>
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
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('❌ Erreur Resend:', errorData);
      return res.status(500).json({ 
        error: 'Erreur lors de l\'envoi de l\'email',
        details: errorData 
      });
    }

    const data = await response.json();
    console.log('✅ Email envoyé avec succès:', data);
    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('❌ Erreur API:', error);
    console.error('Stack:', error.stack);
    if (!res.headersSent) {
      res.status(500).json({
        error: 'Erreur serveur',
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      });
    }
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur API de développement sur http://localhost:${PORT}`);
  console.log(`📝 Assurez-vous d'avoir créé un fichier .env.local avec RESEND_API_KEY`);
  console.log(`📧 Route disponible: POST http://localhost:${PORT}/api/contact`);
});
