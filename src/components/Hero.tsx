import { ArrowRight } from 'lucide-react';
import { motion } from '../lib/framer-motion';
import { MeliozGlass3DLazy } from './hero/MeliozGlass3DLazy';
import { useCanRender3D } from '../hooks/useCanRender3D';

const M_PATH = "M284.241 348.135C262.421 349.385 243.561 339.045 240.891 321.255C235.411 284.825 291.761 232.455 321.261 206.985C342.321 188.805 364.711 172.025 387.201 154.975L454.171 104.215C460.911 86.9053 471.811 55.8453 463.881 39.0053C457.651 25.7753 438.481 27.3553 424.671 30.5353C413.481 33.1153 403.501 37.1153 393.221 41.6353C378.171 48.8153 364.241 56.6453 350.361 65.3353C324.701 81.3952 300.721 98.8253 277.851 117.305C258.671 165.185 233.611 211.435 198.591 252.965C175.111 280.705 147.041 306.815 112.801 326.075C90.7306 338.485 56.4106 352.505 29.1306 346.955C11.9606 343.455 0.0806263 331.415 0.000626302 317.025C-0.159374 289.595 30.3706 259.545 52.6806 240.255C68.0106 226.995 83.7006 214.455 100.571 202.395L168.511 153.825L235.461 104.445C244.011 84.5153 256.711 48.6853 247.131 29.0753C241.731 18.0153 228.231 16.2152 215.001 17.8352C189.081 21.0052 163.661 33.7252 143.051 46.4252C113.001 65.2652 86.7406 87.2653 64.0906 112.145L25.6406 95.3552C46.2406 76.4152 69.2006 59.6953 94.2406 44.6053C132.101 21.9553 179.201 0.455262 227.521 0.00526234C258.341 -0.274738 284.391 10.6053 291.701 35.9353C296.461 52.6853 292.891 69.2153 288.661 86.2953C309.941 69.4553 331.521 53.7553 355.141 39.3853C376.401 26.4553 399.301 14.4852 424.741 7.89525C444.371 2.81525 470.241 0.715251 488.271 10.2753C495.951 14.3553 501.331 20.1453 505.011 26.9453C512.851 41.4153 511.581 59.9353 507.741 75.1653C507.161 77.4753 506.771 79.6353 506.461 81.6253C534.311 59.1653 565.111 35.6752 598.981 19.9252C610.531 14.5552 622.181 10.4053 634.961 7.54527C657.171 2.58527 683.761 1.41525 700.991 15.8053C717.561 29.6453 716.461 50.6153 712.341 68.3153C709.821 79.1253 706.451 89.2553 702.461 99.8253C693.681 123.105 683.841 145.705 673.421 168.555L619.441 289.085L567.471 289.125C566.891 288.875 566.531 288.595 566.731 288.305C583.681 264.135 636.521 154.325 650.161 128.895C655.801 118.385 660.371 108.185 664.901 97.3853C670.441 84.1853 674.771 71.0452 676.791 57.2052C678.521 45.3452 676.961 28.9152 658.681 26.7352C642.061 24.7452 624.051 30.6852 609.491 37.0852C584.221 48.1852 548.331 71.5553 527.421 87.6653L498.141 110.215C483.311 152.695 463.371 193.595 437.791 232.645C426.641 249.665 413.971 265.815 399.701 281.155C377.611 304.905 346.661 329.555 312.921 341.955C303.681 345.355 294.391 347.525 284.251 348.105L284.241 348.135ZM49.1506 303.805C49.1206 307.395 52.8906 309.435 56.8606 308.835C71.3606 306.615 91.8506 292.645 102.721 284.315C155.181 244.125 198.381 189.895 223.841 135.125L208.841 147.005L145.911 198.085C130.521 210.575 116.021 223.245 101.641 236.445C86.9406 249.935 49.2806 286.155 49.1406 303.805H49.1506ZM312.541 302.895C332.581 291.795 354.071 270.255 368.391 254.165C400.271 217.415 424.631 177.525 443.631 134.995C421.721 152.175 401.531 169.695 381.381 187.755C361.151 205.895 342.061 224.455 324.421 244.205C312.931 257.405 300.041 273.575 293.001 288.535C290.951 292.895 286.281 304.665 291.231 307.815C296.391 311.105 307.531 305.665 312.541 302.885V302.895Z";

export default function Hero() {
  const canRender3D = useCanRender3D();

  return (
    <section className="relative min-h-screen bg-melioz-teal overflow-hidden">

      {/* Grille unique : 1 col mobile/tablette, 2 cols desktop */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8
        grid grid-cols-1 lg:grid-cols-2 lg:gap-12 lg:items-center
        pt-28 pb-10 md:pt-36 md:pb-4 lg:py-0 lg:min-h-screen">

        {/* ── Colonne texte ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="font-body font-medium text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-melioz-electric mb-5 md:mb-6">
            Agence Digitale · Paris
          </p>

          <h1
            className="font-display font-extrabold leading-[0.9] tracking-[-0.04em] text-melioz-offwhite mb-6 md:mb-8"
            style={{ fontSize: 'clamp(40px, 9vw, 96px)' }}
          >
            L'expertise digitale à taille humaine.
          </h1>

          <p className="font-body text-melioz-offwhite/70 max-w-md mb-8 md:mb-10 leading-relaxed text-[15px] md:text-[17px]">
            Design soigné, code moderne, résultats mesurables. Nous transformons vos ambitions en présence digitale remarquable.
          </p>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <a
              href="/book-a-call"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5
                bg-melioz-electric text-melioz-offwhite font-body font-medium text-sm md:text-[15px] rounded-xl
                hover:-translate-y-0.5 transition-transform duration-200 whitespace-nowrap"
            >
              Démarrer un projet
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </a>
            <a
              href="/realisations"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5
                text-melioz-offwhite/80 font-body font-medium text-sm md:text-[15px] rounded-xl
                border border-melioz-offwhite/25 hover:border-melioz-offwhite/50
                hover:text-melioz-offwhite transition-all duration-200 whitespace-nowrap"
            >
              Voir nos réalisations
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </a>
          </div>
        </motion.div>

        {/* ── M visuel ──
            Mobile (< 768px)  : SVG statique, compact, sous les CTAs
            Tablette (768px+) : 3D canvas, sous le texte
            Desktop (1024px+) : 3D canvas, colonne droite
        */}
        <motion.div
          className="flex items-center justify-center
            h-[180px] md:h-[300px] lg:h-[560px]
            mt-4 md:mt-4 lg:mt-0"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.3 }}
        >
          {/* Mobile : SVG statique uniquement */}
          <div className="flex md:hidden w-full h-full items-center justify-center">
            <svg
              viewBox="0 0 715 349"
              aria-hidden="true"
              className="w-44 select-none pointer-events-none"
              style={{ opacity: 0.15, filter: 'brightness(10)' }}
            >
              <path d={M_PATH} fill="white" />
            </svg>
          </div>

          {/* Tablette+ : 3D */}
          <div className="hidden md:block w-full h-full">
            {canRender3D ? (
              <MeliozGlass3DLazy />
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <svg
                  viewBox="0 0 715 349"
                  aria-hidden="true"
                  className="w-56 lg:w-72 select-none pointer-events-none"
                  style={{ opacity: 0.2, filter: 'brightness(10)' }}
                >
                  <path d={M_PATH} fill="white" />
                </svg>
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
