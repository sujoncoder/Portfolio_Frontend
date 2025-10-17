"use client"

import { useState, useEffect } from 'react';
import { Sun, Moon, Sunset, Clock, Calendar, } from 'lucide-react';


const DashboardGreeting = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTime(now);
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    // GREETING
    const getGreeting = () => {
        const hour = currentTime.getHours();
        if (hour >= 5 && hour < 12) return { text: 'Good Morning', icon: Sun, scheme: { primary: 'from-yellow-500 to-orange-600', accent: 'from-yellow-400 via-orange-400 to-red-400' } };
        if (hour >= 12 && hour < 17) return { text: 'Good Afternoon', icon: Sun, scheme: { primary: 'from-orange-500 to-red-600', accent: 'from-orange-400 via-red-400 to-pink-400' } };
        if (hour >= 17 && hour < 20) return { text: 'Good Evening', icon: Sunset, scheme: { primary: 'from-orange-600 to-purple-600', accent: 'from-orange-400 via-purple-400 to-pink-400' } };
        return { text: 'Good Night', icon: Moon, scheme: { primary: 'from-blue-500 to-purple-600', accent: 'from-blue-400 via-cyan-400 to-purple-400' } };
    };

    const greeting = getGreeting();
    const GreetingIcon = greeting.icon;

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    };

    const formatDate = (date: Date) => {
        return {
            day: date.getDate(),
            month: date.toLocaleString('default', { month: 'long' }),
            year: date.getFullYear(),
            weekday: date.toLocaleString('default', { weekday: 'long' })
        };
    };

    const dateInfo = formatDate(currentTime);

    return (
        <>
            {/* GREETING CARD */}
            <div className="relative bg-white/5 rounded-xl backdrop-blur-xl p-6 overflow-hidden group transition-all duration-300 hover:bg-white/10">
                <div className="absolute inset-0 -z-10">
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${greeting.scheme.primary} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-15 group-hover:opacity-25 transition-opacity`}></div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-500/40 rounded-full shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                        <GreetingIcon className="w-8 h-8 text-white/50" />
                    </div>
                    <div>
                        <h1 className={`text-4xl font-bold bg-gradient-to-r ${greeting.scheme.accent} bg-clip-text text-transparent`}>
                            {greeting.text}, Sujon Sheikh!
                        </h1>
                        <p className="text-slate-400 text-sm font-mono mt-1">Welcome back to your dashboard</p>
                    </div>
                </div>
            </div>

            {/* TIME AND DATE CARD */}
            <div className="relative bg-white/5 rounded-xl backdrop-blur-xl p-6 overflow-hidden group transition-all duration-300 hover:bg-white/10">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-3xl opacity-15 group-hover:opacity-25 transition-opacity"></div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="inline-flex items-center justify-center w-10 h-10 bg-slate-500/40 rounded-full shadow-lg shadow-purple-500/20">
                                <Clock className="w-6 h-6 text-white/50" />
                            </div>
                            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                                Current Time
                            </h2>
                        </div>

                        <div className="text-5xl md:text-6xl font-bold text-slate-200 mb-4 font-mono tracking-tight">
                            {formatTime(currentTime)}
                        </div>

                        <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-slate-400" />
                            <div className="text-lg text-slate-300 font-mono">
                                <span className="font-semibold">{dateInfo.weekday}</span>
                                <span className="mx-2 text-slate-500">•</span>
                                <span>{dateInfo.day} {dateInfo.month}, {dateInfo.year}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center min-w-[120px]">
                        <div className="text-4xl font-bold text-slate-200">{dateInfo.day}</div>
                        <div className="text-sm text-slate-400 mt-1 uppercase tracking-widest">{dateInfo.month}</div>
                        <div className="text-lg text-slate-300 mt-2">{dateInfo.year}</div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default DashboardGreeting;