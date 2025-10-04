import { Users, Crown, Shield, Star } from 'lucide-react';

export default function OrganizingTeam() {
  const leadership = [
    { name: 'Meenakshi P', role: 'President', icon: Crown, color: 'from-teal-400 to-purple-400' },
    { name: 'B Sanjeev', role: 'Vice President', icon: Shield, color: 'from-purple-400 to-teal-400' },
    { name: 'DN Naveen', role: 'Secretary', icon: Star, color: 'from-teal-400 to-red-400' },
    { name: 'D Lidia Jenniffer', role: 'Joint Secretary', icon: Star, color: 'from-red-400 to-purple-400' },
    { name: 'B Kotteeswari', role: 'Organizing Secretary', icon: Star, color: 'from-purple-400 to-teal-400' },
    { name: 'R P Thanushree', role: 'Treasurer', icon: Star, color: 'from-teal-400 to-purple-400' },
    { name: 'Kiran', role: 'Deputy Treasurer', icon: Star, color: 'from-purple-400 to-red-400' },
  ];

  const coordinators = [
    'Advaitha', 'Arshad', 'Fyshel', 'Jishnu', 'Kiruthick', 'Shankaran',
    'Shakti', 'Renishwar', 'Sagar', 'Tamil Selvi', 'Tamilarasu', 'Pavitra',
    'Mukund', 'Mantira'
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <Users size={60} className="text-purple-400 animate-pulse drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-purple-400 via-teal-400 to-red-400 bg-clip-text text-transparent">
            Meet the Organizers
          </h1>
          <p className="text-xl text-gray-400">The team behind Novarael'25</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-teal-400 to-red-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-semibold text-center mb-10 text-white">
            Core Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((member, index) => {
              const Icon = member.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-teal-500/0 to-red-500/0 group-hover:from-purple-500/10 group-hover:via-teal-500/5 group-hover:to-red-500/10 rounded-2xl transition-all duration-300"></div>

                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${member.color} rounded-xl flex items-center justify-center mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="text-white" size={24} />
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                      {member.name}
                    </h3>

                    {/* Role */}
                    <p className={`text-sm font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coordinators Section */}
        <div>
          <h2 className="text-3xl font-serif font-semibold text-center mb-10 text-white">
            Coordinators
          </h2>
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8 md:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {coordinators.map((coordinator, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-teal-500/5 to-purple-500/5 border border-teal-500/20 rounded-xl p-4 text-center hover:border-teal-400/60 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400/20 to-purple-400/20 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star size={18} className="text-teal-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-300 group-hover:text-teal-400 transition-colors">
                    {coordinator}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thank You Note */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-500/5 via-teal-500/5 to-red-500/5 border border-purple-500/20 rounded-2xl p-6">
          <p className="text-gray-300 text-lg">
            Together, we make <span className="text-transparent bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text font-semibold">Novarael'25</span> possible
          </p>
        </div>
      </div>
    </div>
  );
}
