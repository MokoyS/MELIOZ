import { Loader2 } from 'lucide-react';

export default function LoadingSpinner() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
                <p className="text-text/60 font-sans">Chargement...</p>
            </div>
        </div>
    );
}
