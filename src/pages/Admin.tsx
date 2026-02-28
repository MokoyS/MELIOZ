import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from '../lib/framer-motion';
import {
  ClipboardCopy,
  NotebookPen,
  ShieldCheck,
  Trash2,
  Link as LinkIcon,
  Info,
} from 'lucide-react';

const ADMIN_USER = import.meta.env.VITE_ADMIN_USER ?? '';
const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS ?? '';
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? '';
const AUTH_STORAGE_KEY = 'studio2m-admin-auth';
const STORAGE_KEY = 'studio2m-admin-notes';

interface AdminNote {
  id: string;
  title: string;
  content: string;
  createdAt: number;
}

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [notes, setNotes] = useState<AdminNote[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const credentialsConfigured = Boolean(ADMIN_USER && ADMIN_PASS);

  useEffect(() => {
    const savedAuth = sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setNotes(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Unable to parse stored notes', error);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [isAuthenticated, notes]);

  const sortedNotes = useMemo(
    () => [...notes].sort((a, b) => b.createdAt - a.createdAt),
    [notes],
  );

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!credentialsConfigured) {
      setLoginError('Configuration manquante. Définissez VITE_ADMIN_USER et VITE_ADMIN_PASS dans votre fichier .env.local.');
      return;
    }

    if (username.trim() === ADMIN_USER && password === ADMIN_PASS) {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
      setLoginError('');
      setUsername('');
      setPassword('');
    } else {
      setLoginError('Identifiants incorrects. Merci de vérifier vos accès.');
    }
  };

  const handleAddNote = () => {
    if (!title.trim() || !content.trim()) return;
    const newNote: AdminNote = {
      id: crypto.randomUUID(),
      title: title.trim(),
      content: content.trim(),
      createdAt: Date.now(),
    };
    setNotes((prev) => [...prev, newNote]);
    setTitle('');
    setContent('');
  };

  const handleDelete = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setNotes([]);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    setLoginError('');
    setUsername('');
    setPassword('');
  };

  const handleCopyKey = async () => {
    if (!WEB3FORMS_KEY) {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 2000);
      return;
    }

    try {
      await navigator.clipboard.writeText(WEB3FORMS_KEY);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000);
    } catch (error) {
      console.error('Clipboard error', error);
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 2000);
    }
  };

  if (!isAuthenticated) {
    return (
      <motion.section
        className="relative min-h-screen overflow-hidden bg-[#0a0a0a] py-24 sm:py-32"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />
        <div className="absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-md px-4">
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-200">
              Accès restreint
            </div>
            <h1 className="mt-6 text-3xl font-semibold text-white">Console interne Melioz</h1>
            <p className="mt-3 text-sm text-gray-400">
              Déverrouillez l'espace d'administration pour partager les informations sensibles avec l'équipe.
            </p>

            {!credentialsConfigured && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-xs text-amber-200"
              >
                Identifiants non configurés. Ajoutez VITE_ADMIN_USER et VITE_ADMIN_PASS dans le fichier .env.local puis relancez le serveur.
              </motion.p>
            )}

            {loginError && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-sm text-red-300"
              >
                {loginError}
              </motion.p>
            )}

            <form onSubmit={handleLogin} className="mt-8 space-y-4" autoComplete="off">
              <div className="space-y-2">
                <label
                  htmlFor="admin-username"
                  className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400"
                >
                  Identifiant
                </label>
                <input
                  id="admin-username"
                  name="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="Pseudo administrateur"
                  autoComplete="username"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-blue-500/40 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="admin-password"
                  className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400"
                >
                  Mot de passe
                </label>
                <input
                  id="admin-password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Mot de passe sécurisé"
                  autoComplete="current-password"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-blue-500/40 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 py-3 text-sm font-semibold text-white transition hover:shadow-[0_18px_40px_-24px_rgba(56,189,248,0.55)]"
              >
                Se connecter
              </button>
            </form>

            <p className="mt-6 text-xs text-gray-500">
              Astuce&nbsp;: les identifiants sont partagés en interne. Changez-les régulièrement et évitez de
              conserver cet onglet ouvert sur un poste public.
            </p>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] py-24 sm:py-32"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
              Admin Melioz
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Espace interne
                <span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Notes & ressources confidentielles
                </span>
              </h1>
              <p className="mt-4 text-gray-400 max-w-2xl">
                Centralisez les informations critiques du site, les accès et les points d'attention pour l'équipe. Ces notes sont stockées uniquement sur cet appareil (localStorage) et ne quittent pas votre navigateur.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Déconnexion
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px,1fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
                <ShieldCheck className="h-5 w-5 text-blue-400" />
                Accès critiques
              </h2>
              <p className="mt-3 text-sm text-gray-400">
                Clé Web3Forms utilisée par le formulaire de contact.
              </p>
              <div className="mt-4 flex items-center justify-between rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-sm text-blue-100">
                <span className="truncate text-xs sm:text-sm">
                  {WEB3FORMS_KEY || 'VITE_WEB3FORMS_KEY non configurée'}
                </span>
                <button
                  type="button"
                  onClick={handleCopyKey}
                  className="ml-3 inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-1 text-xs font-medium text-white transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={!WEB3FORMS_KEY}
                >
                  <ClipboardCopy className="h-3.5 w-3.5" />
                  {copyStatus === 'copied' ? 'Copié' : copyStatus === 'error' ? 'Clé manquante' : 'Copier'}
                </button>
              </div>
              <div className="mt-4 space-y-2 text-xs text-gray-400">
                <p className="flex items-center gap-2">
                  <LinkIcon className="h-4 w-4 text-cyan-300" />
                  Endpoint&nbsp;: https://api.web3forms.com/submit
                </p>
                <p className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-amber-300" />
                  Modifier la clé ? Mettez à jour VITE_WEB3FORMS_KEY dans votre fichier .env.local (réutilisée dans src/components/CTA.tsx).
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
                <NotebookPen className="h-5 w-5 text-blue-400" />
                Nouvelle note
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Gardez une trace des accès, to-do internes ou décisions clients. Les notes restent privées sur votre machine.
              </p>

              <div className="mt-6 space-y-4">
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Titre de la note (ex: Accès staging)"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-blue-500/40 focus:outline-none"
                />
                <textarea
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                  placeholder="Détaillez ici les informations utiles pour l'équipe. Pensez aux comptes, deadlines, retours clients, etc."
                  rows={4}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-blue-500/40 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleAddNote}
                  className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 py-3 text-sm font-semibold text-white transition hover:shadow-[0_18px_40px_-24px_rgba(56,189,248,0.55)]"
                >
                  Ajouter la note
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Notes internes</h2>
                <span className="text-xs text-gray-500">Stockage local</span>
              </div>

              {sortedNotes.length === 0 ? (
                <div className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-dashed border-white/10 bg-black/20 px-6 py-12 text-center">
                  <NotebookPen className="h-8 w-8 text-gray-600" />
                  <p className="text-sm text-gray-400">
                    Pas encore de note enregistrée. Ajoutez vos informations sensibles via le formulaire à gauche.
                  </p>
                </div>
              ) : (
                <ul className="mt-6 space-y-4">
                  {sortedNotes.map((note) => (
                    <li
                      key={note.id}
                      className="group rounded-xl border border-white/10 bg-black/20 px-5 py-4 transition hover:border-blue-500/30 hover:bg-black/30"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h3 className="text-base font-semibold text-white">{note.title}</h3>
                          <p className="text-xs text-gray-500">
                            {new Date(note.createdAt).toLocaleString('fr-FR', {
                              dateStyle: 'medium',
                              timeStyle: 'short',
                            })}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleDelete(note.id)}
                          className="rounded-lg border border-white/10 p-2 text-gray-400 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-300"
                          aria-label="Supprimer la note"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-gray-300">
                        {note.content}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Admin;
