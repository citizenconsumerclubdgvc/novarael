import { Eclipse, Sparkles, Star as Stars, Rocket } from 'lucide-react';

export default function AboutNovarael() {
  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <Eclipse size={60} className="text-teal-400 animate-pulse drop-shadow-[0_0_20px_rgba(20,184,166,0.5)]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
            About Novarael'25
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              <span className="text-teal-400 font-semibold text-2xl">Novarael'25</span> is a cosmic journey into the realm where darkness meets wonder—a celebration that transcends the ordinary and embraces the extraordinary.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              This year's edition weaves together the mystique of a solar eclipse, the vast expanse of space, and the enchanting spirit of Halloween to create an unforgettable experience. As shadows dance and celestial bodies align, participants will explore themes of transformation, mystery, and the infinite possibilities that lie within the cosmos.
            </p>

            <p className="text-gray-300 leading-relaxed">
              More than just an event, Novarael'25 is a platform for students to showcase their creativity, engage in thrilling competitions, and connect with like-minded individuals who dare to dream beyond the stars. Join us as we venture into the unknown, where every moment promises discovery and every interaction sparks innovation.
            </p>
          </div>
        </div>

        {/* Theme Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 group">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Eclipse className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Eclipse Theme</h3>
            <p className="text-gray-400 text-sm">
              Experience the rare alignment of cosmic forces in a celebration of light and shadow.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-500/10 to-teal-600/5 border border-teal-500/20 rounded-2xl p-6 hover:border-teal-400/40 transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Stars className="text-teal-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Cosmic Adventure</h3>
            <p className="text-gray-400 text-sm">
              Journey through the stars with space-inspired challenges and celestial experiences.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 via-teal-500/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-6 hover:border-teal-400/40 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="text-teal-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Halloween Spirit</h3>
            <p className="text-gray-400 text-sm">
              Embrace the mysterious and enchanting elements of the spookiest season.
            </p>
          </div>
        </div>

        {/* Purpose Section */}
        <div className="mt-12 bg-gradient-to-r from-teal-500/5 via-purple-500/5 to-teal-500/5 border border-teal-500/20 rounded-3xl p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <Rocket className="text-teal-400" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-semibold text-white mb-4">Our Purpose</h3>
              <p className="text-gray-300 leading-relaxed">
                Novarael'25 aims to foster a community of innovation, creativity, and exploration. Through carefully curated competitions, workshops, and interactive sessions, we empower students to push boundaries, think critically, and collaborate on projects that leave a lasting impact. This event serves as a launchpad for ideas that will shape tomorrow's world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
