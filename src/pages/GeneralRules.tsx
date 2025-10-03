import { CheckCircle, AlertCircle } from 'lucide-react';

export default function GeneralRules() {
  const rules = [
    'All participants must carry a valid college ID card at all times during the event.',
    'Registration is mandatory for all events. On-spot registrations may be subject to availability.',
    'Participants must report to their respective event venues 15 minutes before the scheduled time.',
    'The organizers\' decision will be final and binding in all matters.',
    'Any form of misbehavior, misconduct, or violation of rules will lead to immediate disqualification.',
    'Participants are responsible for their own belongings. The organizing committee is not responsible for any loss or damage.',
    'Mobile phones must be switched to silent mode during events and competitions.',
    'Smoking, alcohol consumption, and possession of any prohibited substances are strictly forbidden.',
    'Participants must follow the dress code as specified for individual events.',
    'Entry and exit from the venue are allowed only during designated break times.',
    'Photography and videography are permitted only in designated areas with prior permission.',
    'Participants must maintain decorum and respect all fellow participants, judges, and organizers.',
    'Any damage to college property will result in penalties and disqualification.',
    'Participants must adhere to the time limits specified for each event.',
    'Cross-college participation is allowed unless specified otherwise for specific events.',
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <AlertCircle size={60} className="text-red-400 animate-pulse drop-shadow-[0_0_20px_rgba(248,113,113,0.5)]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-red-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
            General Rules
          </h1>
          <p className="text-xl text-gray-400">Guidelines for all Novarael'25 participants</p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 via-purple-400 to-teal-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-red-500/10 via-purple-500/10 to-teal-500/10 border border-red-500/30 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <AlertCircle className="text-red-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Important Notice</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                All participants must read and agree to these general rules before participating in any Novarael'25 events.
                Violation of any rule may result in immediate disqualification without refund of registration fees.
              </p>
            </div>
          </div>
        </div>

        {/* Rules List */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8 md:p-12">
          <div className="space-y-4">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 bg-gradient-to-r from-teal-500/5 to-purple-500/5 border border-teal-500/10 rounded-xl p-5 hover:border-teal-400/30 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-400/20 to-purple-400/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle size={18} className="text-teal-400" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-teal-400 font-semibold mr-2">{index + 1}.</span>
                    {rule}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-500/10 to-teal-500/5 border border-purple-500/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <CheckCircle className="text-purple-400" size={20} />
              Need Help?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Contact our organizing team for any clarifications regarding the rules or event guidelines.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-500/10 to-purple-500/5 border border-teal-500/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <CheckCircle className="text-teal-400" size={20} />
              Event-Specific Rules
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Check the official rulebook for detailed guidelines specific to individual competitions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
