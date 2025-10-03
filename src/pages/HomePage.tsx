import { ArrowRight, Sparkles, Users, Calendar, BookOpen, Shield } from 'lucide-react';

type Page = 'home' | 'about-novarael' | 'about-ccc' | 'events' | 'team' | 'rulebook' | 'general-rules';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const navCards = [
    {
      page: 'about-novarael' as Page,
      icon: Sparkles,
      title: 'About Novarael\'25',
      description: 'Discover the cosmic event',
      gradient: 'from-teal-500/10 to-teal-600/10',
      borderColor: 'border-teal-500/30',
      hoverBorder: 'hover:border-teal-400',
      hoverShadow: 'hover:shadow-teal-500/30',
      iconColor: 'text-teal-400',
      glowFrom: 'from-teal-500/0',
      glowTo: 'to-teal-500/20',
    },
    {
      page: 'about-ccc' as Page,
      icon: Users,
      title: 'About CCC',
      description: 'Meet the club',
      gradient: 'from-purple-500/10 to-purple-600/10',
      borderColor: 'border-purple-500/30',
      hoverBorder: 'hover:border-purple-400',
      hoverShadow: 'hover:shadow-purple-500/30',
      iconColor: 'text-purple-400',
      glowFrom: 'from-purple-500/0',
      glowTo: 'to-purple-500/20',
    },
    {
      page: 'events' as Page,
      icon: Calendar,
      title: 'Events',
      description: 'View all competitions',
      gradient: 'from-red-500/10 to-red-600/10',
      borderColor: 'border-red-500/30',
      hoverBorder: 'hover:border-red-400',
      hoverShadow: 'hover:shadow-red-500/30',
      iconColor: 'text-red-400',
      glowFrom: 'from-red-500/0',
      glowTo: 'to-red-500/20',
    },
    {
      page: 'team' as Page,
      icon: Users,
      title: 'Organizing Team',
      description: 'Meet the organizers',
      gradient: 'from-teal-500/10 via-purple-500/10 to-red-500/10',
      borderColor: 'border-purple-500/30',
      hoverBorder: 'hover:border-purple-400',
      hoverShadow: 'hover:shadow-purple-500/30',
      iconColor: 'text-purple-400',
      glowFrom: 'from-purple-500/0',
      glowTo: 'to-teal-500/20',
    },
    {
      page: 'rulebook' as Page,
      icon: BookOpen,
      title: 'Rulebook',
      description: 'Official guidelines',
      gradient: 'from-teal-500/10 to-purple-500/10',
      borderColor: 'border-teal-500/30',
      hoverBorder: 'hover:border-teal-400',
      hoverShadow: 'hover:shadow-teal-500/30',
      iconColor: 'text-teal-400',
      glowFrom: 'from-teal-500/0',
      glowTo: 'to-purple-500/20',
    },
    {
      page: 'general-rules' as Page,
      icon: Shield,
      title: 'General Rules',
      description: 'Read before participating',
      gradient: 'from-red-500/10 via-purple-500/10 to-teal-500/10',
      borderColor: 'border-red-500/30',
      hoverBorder: 'hover:border-red-400',
      hoverShadow: 'hover:shadow-red-500/30',
      iconColor: 'text-red-400',
      glowFrom: 'from-red-500/0',
      glowTo: 'to-purple-500/20',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Nova Arc Background - Minimalistic */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Arc Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-30">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/20 via-purple-500/20 to-red-500/20 blur-3xl animate-pulse"></div>
        </div>

        {/* Secondary Glow Points */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Subtle Stars */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Nova Arc Icon */}
          <div className="inline-flex items-center justify-center mb-8 relative group">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 via-purple-400 to-red-400 opacity-30 blur-xl absolute animate-pulse"></div>
            <div className="w-16 h-16 rounded-full border-4 border-teal-400 relative z-10">
              <div className="absolute inset-0 rounded-full border-4 border-purple-400 animate-ping opacity-20"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-teal-500/30 via-purple-500/30 to-red-500/30"></div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 bg-gradient-to-r from-teal-400 via-purple-400 to-red-400 bg-clip-text text-transparent animate-gradient drop-shadow-2xl">
            Novarael'25
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-serif italic">
            Where Darkness Dances and the Cosmos Tremble
          </p>

          {/* Subtext */}
          <p className="text-lg text-gray-400 mb-12 flex items-center justify-center gap-2 flex-wrap">
            <span>Presented by</span>
            <span className="text-teal-400 font-semibold">Citizens Consumer Club</span>
            <span>•</span>
            <span className="text-purple-400">DG Vaishnav College</span>
          </p>

          {/* Navigation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mt-16">
            {navCards.map((card) => {
              const Icon = card.icon;
              return (
                <button
                  key={card.page}
                  onClick={() => onNavigate(card.page)}
                  className={`group relative px-6 py-6 bg-gradient-to-br ${card.gradient} border ${card.borderColor} rounded-xl ${card.hoverBorder} hover:shadow-lg ${card.hoverShadow} transition-all duration-300 overflow-hidden hover:-translate-y-1`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.glowFrom} ${card.glowTo} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative flex items-center justify-between">
                    <div className="text-left flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon size={20} className={card.iconColor} />
                        <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                      </div>
                      <p className="text-sm text-gray-400">{card.description}</p>
                    </div>
                    <ArrowRight className={`${card.iconColor} group-hover:translate-x-1 transition-transform ml-2 flex-shrink-0`} size={20} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Decorative Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 via-purple-500/50 to-transparent"></div>
    </div>
  );
}
