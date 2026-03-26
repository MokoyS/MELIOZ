import { Loader2 } from 'lucide-react';

export default function LoadingSpinner() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-melioz-offwhite">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-10 h-10 text-melioz-electric animate-spin" />
                <p className="text-melioz-navy/60 font-body">Chargement...</p>
            </div>
        </div>
    );
}
