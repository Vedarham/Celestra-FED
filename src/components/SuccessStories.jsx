import React from 'react';

const clients = [
  {
    name: "Government of Goa",
    logo: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=200",
    description: "Implementing STEM education across state schools"
  },
  {
    name: "GUJCOST",
    logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=200",
    description: "Robotics training program for educators"
  },
  {
    name: "Surat Municipal Corporation",
    logo: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=200",
    description: "Smart city initiatives and student workshops"
  },
  {
    name: "UCOST Uttarakhand",
    logo: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?auto=format&fit=crop&w=200",
    description: "Mountain region STEM outreach"
  },
  {
    name: "Sarva Shiksha Abhiyan",
    logo: "https://images.unsplash.com/photo-1636819488524-1f019c4e1c44?auto=format&fit=crop&w=200",
    description: "National education program partnership"
  }
];

export default function SuccessStories() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-orange-500 font-semibold mb-2">Success Stories</h4>
          <h2 className="section-title">Honoring Our Valued Clientele</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="group">
              <div className="card h-[300px] relative overflow-hidden transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full flex flex-col items-center justify-center p-6">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="w-32 h-32 object-contain mb-6 transition-transform duration-500 group-hover:scale-110"
                  />
                  <h3 className="text-xl font-semibold text-white mb-4">{client.name}</h3>
                  <p className="text-gray-300 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {client.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}