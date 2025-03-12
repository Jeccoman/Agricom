import { Users, Trophy, Map, Sprout, Handshake, Building } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: <Users className="w-16 h-16 text-green-700" />,
      value: "8,000+",
      description: "Active Customers"
    },
    {
      icon: <Trophy className="w-16 h-16 text-green-700" />,
      value: "1st",
      description: "Largest Network of Dealers & Stockists"
    },
    {
      icon: <Map className="w-16 h-16 text-green-700" />,
      value: "100%",
      description: "Local Content"
    },
    {
      icon: <Sprout className="w-16 h-16 text-green-700" />,
      value: "11+",
      description: "Financial Partners for Asset Financing"
    },
    {
      icon: <Handshake className="w-16 h-16 text-green-700" />,
      value: "6",
      description: "Global Manufacture Partners"
    },
    {
      icon: <Building className="w-16 h-16 text-green-700" />,
      value: "12",
      description: "Agri-Centres Across the Country"
    }
  ];

  return (
    <section className="bg-[#f0f7e6] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-green-800 uppercase tracking-wide text-sm font-semibold mb-4">ACHIEVEMENTS</h1>
        
        <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 max-w-3xl mx-auto">
          Leading the Way in Agricultural Excellence
        </h2>
        
        <p className="text-xl text-[#8a7e6e] mb-16 max-w-3xl mx-auto">
          Setting the Standard for Success in Tanzania&apos;s Agricultural Sector
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white rounded-full p-6 w-32 h-32 flex items-center justify-center mb-6 shadow-md">
                {achievement.icon}
              </div>
              
              <h3 className="text-xl font-bold text-green-900 mb-2">
                {achievement.value}
              </h3>
              
              <p className="text-[#8a7e6e] text-center max-w-[200px]">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}