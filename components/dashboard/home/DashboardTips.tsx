import React from 'react'
import DashboardTipCard from './DashboardTipCard'
import { Cloud, Coffee, Lightbulb, Zap } from 'lucide-react'



const DashboardTips = () => {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {/* Tip 1 */}
            <DashboardTipCard
                title="Pro Tips"
                description="Drink water regularly throughout the day to stay focused and healthy."
                icon={Lightbulb}
                badges={["Productivity", "Health"]}
                colorScheme={{
                    primary: "from-green-500 to-teal-600",
                    secondary: "from-emerald-500 to-green-600",
                    accent: "from-green-400 via-teal-400 to-emerald-400"
                }}
            />

            {/* Tip 2 */}
            <DashboardTipCard
                title="Stay Hydrated"
                description="Take regular breaks every hour to maintain productivity and eye health."
                icon={Cloud}
                badges={["Wellness", "Focus"]}
                colorScheme={{
                    primary: "from-cyan-500 to-blue-600",
                    secondary: "from-blue-500 to-cyan-600",
                    accent: "from-cyan-400 via-blue-400 to-indigo-400"
                }}
            />

            {/* Tip 3 */}
            <DashboardTipCard
                title="Morning Routine"
                description="Start your day with a clear plan and prioritize important tasks first."
                icon={Coffee}
                badges={["Planning", "Routine"]}
                colorScheme={{
                    primary: "from-amber-500 to-orange-600",
                    secondary: "from-yellow-500 to-amber-600",
                    accent: "from-cyan-400 via-blue-400 to-indigo-400"
                }}
            />

            {/* Tip 4 */}
            <DashboardTipCard
                title="Stay Energized"
                description="Keep your energy levels high with proper nutrition and regular exercise."
                icon={Zap}
                badges={["Energy", "Fitness"]}
                colorScheme={{
                    primary: "from-violet-500 to-purple-600",
                    secondary: "from-fuchsia-500 to-violet-600",
                    accent: "from-violet-400 via-purple-400 to-fuchsia-400"
                }}
            />
        </div>
    )
}

export default DashboardTips