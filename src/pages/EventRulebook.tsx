import { FileText, Download, BookOpen, CheckCircle } from 'lucide-react';

export default function EventRulebook() {
  const highlights = [
    'Event schedules and timelines',
    'Competition rules and judging criteria',
    'Registration guidelines and eligibility',
    'Code of conduct and safety protocols',
    'Prize details and award categories',
    'Contact information for queries',
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <BookOpen size={60} className="text-teal-400 animate-pulse drop-shadow-[0_0_20px_rgba(20,184,166,0.5)]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-teal-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
            Event Rulebook
          </h1>
          <p className="text-xl text-gray-400">Everything you need to know about Novarael'25</p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 via-purple-400 to-red-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8 md:p-12 shadow-2xl mb-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-2xl mb-6">
              <FileText className="text-teal-400" size={40} />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4">Complete Guidelines & Rules</h2>
            <p className="text-gray-400 leading-relaxed">
              Access the comprehensive rulebook containing all event details, competition guidelines, terms and conditions, and important information for participants.
            </p>
          </div>

          {/* Download Button */}
          <div className="flex justify-center mb-10">
            <a
              href="https://drive.google.com/file/d/1qF2ljo_3ameETQw2bHtTg5b2_xcQMEi4/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-500 via-purple-500 to-red-500 rounded-2xl font-semibold text-white text-lg hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105"
            >
              <Download size={24} className="group-hover:animate-bounce" />
              <span>Download Rulebook PDF</span>
            </a>
          </div>

        </div>

        {/* Highlights Section */}
        <div className="bg-gradient-to-br from-purple-500/10 to-teal-500/5 border border-purple-500/20 rounded-3xl p-8 md:p-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckCircle className="text-purple-400" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-semibold text-white mb-2">What's Inside</h3>
              <p className="text-gray-400">Key information covered in the rulebook:</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-xl p-4 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full"></div>
                <span className="text-gray-300">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 text-center bg-gradient-to-r from-teal-500/5 to-purple-500/5 border border-teal-500/20 rounded-2xl p-6">
          <p className="text-gray-400">
            Have questions about the rules?{' '}
            <a href="mailto:citizenconsumerclubdgvc@gmail.com" className="text-teal-400 hover:text-teal-300 underline transition-colors">
              Contact us
            </a>
            {' '}for clarifications.
          </p>
        </div>
      </div>
    </div>
  );
}
