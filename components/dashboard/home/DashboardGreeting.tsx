import { Sun, Moon, Sunset } from "lucide-react";


const DashboardGreeting = () => {
    const now = new Date();

    // GREETING BASED ON HOUR
    const getGreeting = () => {
        const hour = now.getHours();
        if (hour >= 5 && hour < 12)
            return {
                text: "Good Morning",
                icon: Sun,
                scheme: {
                    primary: "from-yellow-500 to-orange-600",
                    accent: "from-yellow-400 via-orange-400 to-red-400",
                },
            };
        if (hour >= 12 && hour < 17)
            return {
                text: "Good Afternoon",
                icon: Sun,
                scheme: {
                    primary: "from-orange-500 to-red-600",
                    accent: "from-orange-400 via-red-400 to-pink-400",
                },
            };
        if (hour >= 17 && hour < 20)
            return {
                text: "Good Evening",
                icon: Sunset,
                scheme: {
                    primary: "from-orange-600 to-purple-600",
                    accent: "from-orange-400 via-purple-400 to-pink-400",
                },
            };
        return {
            text: "Good Night",
            icon: Moon,
            scheme: {
                primary: "from-blue-500 to-purple-600",
                accent: "from-blue-400 via-cyan-400 to-purple-400"
            },
        };
    };

    const greeting = getGreeting();
    const GreetingIcon = greeting.icon;

    return (
        <div className="relative bg-white/5 rounded-xl backdrop-blur-xl p-6 overflow-hidden group transition-all duration-300 hover:bg-white/10">
            <div className="absolute inset-0 -z-10">
                <div
                    className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${greeting.scheme.primary} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`}
                />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-15 group-hover:opacity-25 transition-opacity" />
            </div>

            <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-500/40 rounded-full shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                    <GreetingIcon className="w-8 h-8 text-white/50" />
                </div>
                <div>
                    <h1
                        className={`text-4xl font-bold bg-gradient-to-r ${greeting.scheme.accent} bg-clip-text text-transparent`}
                    >
                        {greeting.text}, Sujon Sheikh!
                    </h1>
                    <p className="text-slate-400 text-sm font-mono mt-1">
                        Welcome back to your dashboard
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DashboardGreeting;