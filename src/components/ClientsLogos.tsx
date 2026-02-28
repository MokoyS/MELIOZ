export default function ClientsLogos() {
  // Placeholders pour les logos clients
  const clients = [
    { name: 'Client 1' },
    { name: 'Client 2' },
    { name: 'Client 3' },
    { name: 'Client 4' },
    { name: 'Client 5' },
    { name: 'Client 6' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-semibold text-sm mb-4">
            Nos Clients
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Ils nous font confiance
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-background rounded-xl border border-secondary/20 shadow-soft aspect-[3/2]"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <span className="text-secondary font-bold text-lg">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xs text-text/50">{client.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
