import { Users, Trophy, Target, Lightbulb, Award, Zap } from 'lucide-react';

export default function AboutCCC() {
  const achievements = [
    {
      icon: Trophy,
      title: 'National Recognition',
      description: 'Multiple awards at State level for consumer awareness initatives and programs',
    },
    {
      icon: Target,
      title: 'Community Impact',
      description: 'Over 50+ events organized promoting consumer awareness and rights',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Pioneering initiatives in student entrepreneurship and social responsibility',
    },
    {
      icon: Zap,
      title: 'Active Membership',
      description: '800+ dedicated members driving positive change in the community',
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <Users size={60} className="text-purple-400 animate-pulse drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            Citizens Consumer Club
          </h1>
          <p className="text-xl text-gray-400">DG Vaishnav College</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* About Section */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              The <span className="text-purple-400 font-semibold">Citizens Consumer Club (CCC)</span> is a vibrant student organization at DG Vaishnav College dedicated to empowering students with knowledge about consumer rights, social responsibility, and ethical business practices.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Founded with the vision of creating informed and conscientious citizens, CCC has evolved into a dynamic community that bridges the gap between academia and real-world applications. We organize workshops, campaigns, competitions, and events that not only educate but also inspire students to become change-makers in society.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Our club serves as a platform for students to develop leadership skills, foster creativity, and engage in meaningful projects that address contemporary issues. Through collaborative efforts and innovative thinking, we strive to make a positive impact both within the college and in the broader community.
            </p>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-semibold text-center mb-10 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-500/10 to-teal-500/5 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Notable Projects */}
        <div className="bg-gradient-to-r from-teal-500/5 via-purple-500/5 to-teal-500/5 border border-teal-500/20 rounded-3xl p-8 md:p-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Award className="text-teal-400" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-semibold text-white mb-4">Notable Projects</h3>
            </div>
          </div>
          <div className="space-y-4 ml-16">
            <div className="border-l-2 border-teal-500/30 pl-4">
              <h4 className="text-lg font-semibold text-teal-400 mb-1">Consumer Awareness Campaigns</h4>
              <p className="text-gray-400 text-sm">
                Conducted extensive campaigns educating students and the public about their consumer rights and protection laws.
              </p>
            </div>
            <div className="border-l-2 border-purple-500/30 pl-4">
              <h4 className="text-lg font-semibold text-purple-400 mb-1">Annual Symposiums</h4>
              <p className="text-gray-400 text-sm">
                Organized large-scale events featuring industry experts, interactive sessions, and competitions that attract participants from across the region.
              </p>
            </div>
            <div className="border-l-2 border-teal-500/30 pl-4">
              <h4 className="text-lg font-semibold text-teal-400 mb-1">Social Responsibility Initiatives</h4>
              <p className="text-gray-400 text-sm">
                Partnered with NGOs and local organizations to drive community development and sustainability projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
