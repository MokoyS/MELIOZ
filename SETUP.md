

### 1. Variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
RESEND_API_KEY=votre_clé_api_resend
```

Pour obtenir votre clé API Resend :
1. Créez un compte sur [Resend](https://resend.com)
2. Allez dans Settings > API Keys
3. Créez une nouvelle clé API
4. Ajoutez-la dans votre `.env.local`

**Important** : Ajoutez `.env.local` à votre `.gitignore` pour ne pas commiter vos clés API.

### 2. Configuration Resend

Dans votre compte Resend :
1. Vérifiez votre domaine `agencemelioz.fr` ou utilisez le domaine de test fourni par Resend
2. Configurez les enregistrements DNS nécessaires (SPF, DKIM, DMARC)
3. Une fois vérifié, vous pourrez envoyer des emails depuis `contact@agencemelioz.fr`

### 3. Configuration Tally (pour /book-a-call)

1. Créez un compte sur [Tally](https://tally.so)
2. Créez un formulaire avec les champs :
   - Budget (sélection multiple ou dropdown)
   - Type de projet (sélection multiple ou dropdown)
3. Récupérez l'ID de votre formulaire Tally
4. Dans `src/pages/BookACall.tsx`, remplacez `TALLY_FORM_ID` par votre ID de formulaire

Exemple d'URL Tally : `https://tally.so/embed/abc123?hideTitle=1&transparentBackground=1`

### 4. Configuration Cal.com (pour /book-a-call)

1. Créez un compte sur [Cal.com](https://cal.com)
2. Configurez votre calendrier avec des créneaux de 15 minutes
3. Récupérez votre nom d'utilisateur Cal.com
4. Dans `src/pages/BookACall.tsx`, remplacez `VOTRE_USERNAME` par votre nom d'utilisateur

Exemple d'URL Cal.com : `https://cal.com/melioz/15min`

## 🚀 Déploiement sur Vercel

### Variables d'environnement sur Vercel

1. Allez dans votre projet Vercel
2. Settings > Environment Variables
3. Ajoutez `RESEND_API_KEY` avec votre clé API Resend
4. Sélectionnez tous les environnements (Production, Preview, Development)

### Configuration Vercel

L'API route `/api/contact.ts` sera automatiquement détectée par Vercel comme une Serverless Function.

## 📝 Notes importantes

### RGPD

Assurez-vous que votre Politique de Confidentialité mentionne :
- L'utilisation de Resend pour l'envoi d'emails
- L'utilisation de Cal.com pour la gestion des rendez-vous
- L'utilisation de Tally pour la collecte de données de qualification

### Test de l'API Contact

Pour tester l'API localement, vous pouvez utiliser :

```bash
curl -X POST http://localhost:5173/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "Ceci est un message de test"
  }'
```

**Note** : En développement local, vous devrez peut-être configurer Vite pour proxy les requêtes vers l'API, ou utiliser Vercel CLI pour tester les fonctions serverless.

## 🔍 Vérifications

- [ ] Les dépendances sont installées
- [ ] Les variables d'environnement sont configurées
- [ ] Le domaine Resend est vérifié
- [ ] L'ID du formulaire Tally est configuré
- [ ] Le nom d'utilisateur Cal.com est configuré
- [ ] Les routes sont accessibles (`/contact` et `/book-a-call`)
- [ ] Le formulaire de contact envoie bien les emails
- [ ] Le formulaire Tally redirige vers Cal.com
