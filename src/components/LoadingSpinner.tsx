import MLoader from './MLoader';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-melioz-offwhite flex items-center justify-center">
      <MLoader size={48} strokeColor="#3B54CC" strokeWidth={7} />
    </div>
  );
}
