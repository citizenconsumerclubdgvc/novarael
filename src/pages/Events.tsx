import { Sparkles, ExternalLink, Calendar } from 'lucide-react';

function Events() {
  const day1Events = [
    { name: 'Open Mic', formLink: 'https://forms.gle/76cxnHmrLmaaZDEg9' },
    { name: 'Mime', formLink: 'https://forms.gle/eSFZuJ7E3ma6CYgU9' },
    { name: 'Adzap', formLink: 'https://forms.gle/xQuSf1zfwh8Z5VNQA' },
    { name: 'Channel Surfing', formLink: 'https://forms.gle/vsxGUunjWjz9a8Z96' },
    { name: 'Green Screen', formLink: 'https://forms.gle/RcQzkoW126YSJjxK7' },
    { name: 'IPL Auction', formLink: 'https://forms.gle/9ytQmQQqhx4Qbvwy9' },
    { name: 'Face Painting', formLink: 'https://forms.gle/YD1rydpCr1fnbYP8A' },
    { name: 'Art from Waste', formLink: 'https://forms.gle/ZkZprU2KykUVX2Fc6' },
    { name: 'Stress Interview', formLink: 'https://forms.gle/7kWDLvAryRM6rtFX7' },
    { name: 'Anime Quiz', formLink: 'https://forms.gle/wDY7x9VnEzsS5XNWA' },
    { name: 'Cook without Fire', formLink: 'https://forms.gle/zMYUjWea9wmsQDBN8' },
  ];

  const day2Events = [
    { name: 'MR & MS Novarael', formLink: 'https://forms.gle/SBiNzHknxh1pF3Jk7' },
    { name: 'Battle Of Bands', formLink: 'https://forms.gle/H92Knq5ZRdsziH7Y9' },
    { name: 'Shipwreck', formLink: 'https://forms.gle/MHrJ1ie1qGeGPAq76' },
    { name: 'Adaptune', formLink: 'https://forms.gle/qCMs2Buqy1Df545S8' },
    { name: 'Potpourri', formLink: 'https://forms.gle/VYfyt1MxtyyAYZ1Z9' },
    { name: 'Business Plan', formLink: 'https://forms.gle/x7HhtjJcYjRKenTC7' },
    { name: 'Meme Creation', formLink: 'https://forms.gle/Zf2yrnDkVETTPGoY9' },
    { name: 'Photography', formLink: 'https://forms.gle/3LGNBs5oCNdu2d1B9' },
    { name: 'Logo Designing', formLink: 'https://forms.gle/XWynx53G7r1bo6a2A' },
    { name: 'Brainstorm', formLink: 'https://forms.gle/pBJGbfyKhSw4qYtX6' },
    { name: 'Creative Writing', formLink: 'https://forms.gle/JhmRmowhnxVBHdqN6' },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <Sparkles size={60} className="text-teal-400 animate-pulse drop-shadow-[0_0_20px_rgba(20,184,166,0.5)]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-teal-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
            Novarael'25 Events
          </h1>
          <p className="text-xl text-gray-400">Choose your competition and register now</p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 via-purple-400 to-red-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Day 1 Events */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Calendar className="text-teal-400" size={28} />
            <h2 className="text-3xl font-serif font-bold text-white">Day 1</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {day1Events.map((event, index) => (
              <a
                key={index}
                href={event.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-teal-500/20 rounded-xl p-6 hover:border-teal-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 hover:-translate-y-1"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-purple-500/0 to-red-500/0 group-hover:from-teal-500/10 group-hover:via-purple-500/10 group-hover:to-red-500/10 rounded-xl transition-all duration-300"></div>

                <div className="relative">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    {event.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-teal-300 transition-colors">
                    <span>Register Now</span>
                    <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-teal-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Day 2 Events */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Calendar className="text-purple-400" size={28} />
            <h2 className="text-3xl font-serif font-bold text-white">Day 2</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {day2Events.map((event, index) => (
              <a
                key={index}
                href={event.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-red-500/0 to-teal-500/0 group-hover:from-purple-500/10 group-hover:via-red-500/10 group-hover:to-teal-500/10 rounded-xl transition-all duration-300"></div>

                <div className="relative">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {event.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-purple-300 transition-colors">
                    <span>Register Now</span>
                    <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 text-center bg-gradient-to-r from-teal-500/5 via-purple-500/5 to-red-500/5 border border-teal-500/20 rounded-2xl p-6">
          <p className="text-gray-400">
            <span className="text-teal-400 font-semibold">Total Events:</span> {day1Events.length + day2Events.length} competitions across 2 days. Click any event to register.
          </p>
        </div>
      </div>
    </div>
  );
}


export default Events;