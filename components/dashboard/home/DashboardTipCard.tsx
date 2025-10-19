// DASHBOARD PROPS TYPE
interface DashboardTipCardProps {
    title: string;
    description: string;
    icon?: any;
    badges: string[];
    colorScheme?: {
        primary: string;
        secondary: string;
        accent: string;
    }
};

const DashboardTipCard = ({
    title,
    description,
    icon: Icon,
    badges,
    colorScheme = {
        primary: "from-blue-500 to-purple-600",
        secondary: "from-cyan-500 to-blue-600",
        accent: "from-blue-400 via-cyan-400 to-purple-400"
    }
}: DashboardTipCardProps) => {
    return (
        <div className="relative bg-white/5 rounded-xl backdrop-blur-xl p-5 overflow-hidden group transition-all duration-300 hover:bg-white/10">
            <div className="absolute inset-0 -z-10">
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${colorScheme.primary} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr ${colorScheme.secondary} rounded-full blur-3xl opacity-15 group-hover:opacity-25 transition-opacity`}></div>
            </div>

            <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-slate-500/40 rounded-full shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40 transition-shadow flex-shrink-0">
                    <Icon className="w-6 h-6 text-white/50" />
                </div>
                <div className="flex-1">
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${colorScheme.accent} bg-clip-text text-transparent mb-2`}>
                        {title}
                    </h3>
                    <p className="text-slate-300 text-sm">{description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {badges.map((badge) => (
                            <span key={badge} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">{badge}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
};

export default DashboardTipCard;