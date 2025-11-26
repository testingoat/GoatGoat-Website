"use client";

import React, { useState } from 'react';
import {
    Activity,
    Database,
    Network,
    Terminal,
    Settings,
    Clock,
    DollarSign,
    ChevronRight,
    Zap,
    Download,
    Save,
    Lock,
    Archive,
    ShieldCheck
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { cn } from "@/lib/utils";

// --- Data & Content ---

const roiData = [
    { name: 'Backups', manual: 2.5, dashboard: 0.5, label: 'Hours/Mo' },
    { name: 'Debugging', manual: 5.0, dashboard: 2.0, label: 'Hours/Mo' },
    { name: 'Checks', manual: 3.0, dashboard: 0.5, label: 'Hours/Mo' },
];

const features = {
    overview: {
        title: "Server Health & Actions",
        icon: <Activity className="w-5 h-5" />,
        summary: "Real-time visibility into CPU, memory, and uptime with one-click critical actions.",
        details: [
            { label: "Metrics", value: "CPU, Heap, RSS, Uptime" },
            { label: "Environment", value: "PID, Node.js Version, Platform" },
            { label: "Control", value: "Restart Server (PM2-aware)" },
            { label: "Safety", value: "Confirmation dialogues for actions" },
        ],
        visual: (
            <div className="space-y-4">
                <div className="flex justify-between items-start pb-4 border-b border-slate-700">
                    <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Status</div>
                        <div className="text-emerald-400 font-bold flex items-center gap-2 text-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            ONLINE
                        </div>
                        <div className="text-[10px] text-slate-500 mt-1 font-mono">PID: 18240 • Node v18.16.0</div>
                    </div>
                    <div className="text-right">
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Uptime</div>
                        <div className="text-slate-200 font-mono text-sm">14d 03h 22m</div>
                        <div className="text-[10px] text-slate-500 mt-1 font-mono">linux x64</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-800 p-2 rounded border border-slate-700">
                        <div className="text-[10px] text-slate-400 mb-1">CPU Load</div>
                        <div className="text-xl font-bold text-blue-400">12%</div>
                        <div className="w-full bg-slate-900 h-1 mt-2 rounded-full overflow-hidden">
                            <div className="bg-blue-500 h-full w-[12%]"></div>
                        </div>
                    </div>
                    <div className="bg-slate-800 p-2 rounded border border-slate-700">
                        <div className="text-[10px] text-slate-400 mb-1">Heap Used</div>
                        <div className="text-xl font-bold text-purple-400">45%</div>
                        <div className="w-full bg-slate-900 h-1 mt-2 rounded-full overflow-hidden">
                            <div className="bg-purple-500 h-full w-[45%]"></div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 mt-2">
                    <button className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 text-[10px] py-2 px-2 rounded transition flex items-center justify-center gap-1.5">
                        <Activity size={12} /> Health Check
                    </button>
                    <button className="flex-1 bg-red-900/30 hover:bg-red-900/50 text-red-200 border border-red-800/50 text-[10px] py-2 px-2 rounded transition flex items-center justify-center gap-1.5">
                        <Zap size={12} /> Restart Server
                    </button>
                </div>
            </div>
        )
    },
    backups: {
        title: "Backups & Recovery",
        icon: <Archive className="w-5 h-5" />,
        summary: "Manage backups without touching the file system or using SCP/Rsync.",
        details: [
            { label: "Creation", value: "One-click instant backup" },
            { label: "History", value: "View filename, size, timestamp" },
            { label: "Downloads", value: "Handles complex filenames safely" },
            { label: "API", value: "GET /admin/monitoring/download/:file" },
        ],
        visual: (
            <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center bg-blue-900/20 border border-blue-800/50 p-2 rounded mb-4">
                    <div className="text-blue-200">
                        <div className="text-[10px] opacity-70">Last Backup</div>
                        <div>2 hours ago</div>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded text-[10px] flex items-center gap-1">
                        <Download size={10} /> Create New
                    </button>
                </div>
                <div className="space-y-1">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Recent Archives</div>
                    {[
                        { name: "backup-2024-05-12.gz", size: "45MB", date: "May 12, 10:00" },
                        { name: "backup-2024-05-11.gz", size: "44MB", date: "May 11, 10:00" },
                        { name: "backup-2024-05-10.gz", size: "42MB", date: "May 10, 10:00" },
                    ].map((file, i) => (
                        <div key={i} className="flex justify-between items-center p-2 bg-slate-900 border border-slate-800 rounded hover:bg-slate-800/50 transition">
                            <div className="flex flex-col">
                                <span className="text-slate-300">{file.name}</span>
                                <span className="text-[10px] text-slate-500">{file.date} • {file.size}</span>
                            </div>
                            <Download size={14} className="text-slate-500 hover:text-blue-400 cursor-pointer" />
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    logs: {
        title: "Real-Time Logs",
        icon: <Terminal className="w-5 h-5" />,
        summary: "WebSocket-integrated log viewer replacing manual SSH tailing.",
        details: [
            { label: "Live Streaming", value: "WebSocket with auto-reconnect" },
            { label: "Filtering", value: "Toggle INFO / WARN / ERROR" },
            { label: "Search", value: "Instant text filter" },
            { label: "Status", value: "Visual connection indicator" },
        ],
        visual: (
            <div className="bg-slate-950 rounded p-3 font-mono text-xs h-full flex flex-col border border-slate-800 relative">
                <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[9px] text-slate-400 tracking-wide">CONNECTED</span>
                </div>

                <div className="flex gap-2 mb-3 border-b border-slate-800 pb-2 mt-1">
                    <span className="px-1.5 py-0.5 bg-blue-900/50 text-blue-200 rounded text-[9px] border border-blue-800/30">ALL</span>
                    <span className="px-1.5 py-0.5 bg-slate-800 text-slate-400 rounded text-[9px]">ERR</span>
                    <span className="px-1.5 py-0.5 bg-slate-800 text-slate-400 rounded text-[9px]">WARN</span>
                </div>

                <div className="space-y-1.5 overflow-hidden opacity-90 text-[10px] leading-tight">
                    <div className="text-slate-500 border-l-2 border-slate-700 pl-2">
                        <span className="text-blue-500 font-bold">INFO</span> Server listening on 3000
                    </div>
                    <div className="text-slate-500 border-l-2 border-slate-700 pl-2">
                        <span className="text-blue-500 font-bold">INFO</span> DB Connected successfully
                    </div>
                    <div className="text-yellow-200 border-l-2 border-yellow-600 pl-2 bg-yellow-900/10 py-0.5">
                        <span className="text-yellow-500 font-bold">WARN</span> Slow query (204ms) in 'users'
                    </div>
                    <div className="text-slate-500 border-l-2 border-slate-700 pl-2">
                        <span className="text-blue-500 font-bold">INFO</span> Incoming GET /api/v1/data
                    </div>
                    <div className="text-red-200 border-l-2 border-red-600 pl-2 bg-red-900/10 py-0.5">
                        <span className="text-red-500 font-bold">ERR</span> Payment gateway timeout
                    </div>
                </div>
            </div>
        )
    },
    database: {
        title: "Database Insights",
        icon: <Database className="w-5 h-5" />,
        summary: "Metrics, storage distribution, and a built-in Query Tool.",
        details: [
            { label: "Storage", value: "Data vs Index size visualization" },
            { label: "Query Tool", value: "Run find/aggregate from UI" },
            { label: "Connections", value: "Active vs Available pool" },
            { label: "Collections", value: "Track document growth" },
        ],
        visual: (
            <div className="space-y-4">
                <div className="flex gap-4 items-center">
                    <div className="relative w-20 h-20 flex-shrink-0">
                        <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                            <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                            <path className="text-emerald-500" strokeDasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                            <path className="text-blue-500" strokeDasharray="20, 100" strokeDashoffset="-60" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-[9px] text-slate-400">Total Size</div>
                    </div>
                    <div className="flex-1 space-y-2">
                        <div className="bg-slate-800 p-2 rounded">
                            <div className="flex justify-between text-[9px] text-slate-400 mb-1">
                                <span>DB Connections</span>
                                <span>12 / 100</span>
                            </div>
                            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-emerald-500 h-full w-[12%]"></div>
                            </div>
                        </div>
                        <div className="flex justify-between text-xs border-b border-slate-700 pb-1">
                            <span className="text-slate-400">Users</span>
                            <span className="font-mono text-white">14.2k</span>
                        </div>
                        <div className="flex justify-between text-xs border-b border-slate-700 pb-1">
                            <span className="text-slate-400">Orders</span>
                            <span className="font-mono text-white">8.5k</span>
                        </div>
                    </div>
                </div>
                <div className="pt-2 border-t border-slate-700">
                    <div className="text-[9px] text-slate-500 uppercase tracking-wider mb-1">Quick Query</div>
                    <div className="bg-slate-950 p-2 rounded text-[10px] font-mono text-slate-300 border border-slate-800">
                        db.users.find(&#123; role: 'admin' &#125;)
                    </div>
                </div>
            </div>
        )
    },
    network: {
        title: "Network & Errors",
        icon: <Network className="w-5 h-5" />,
        summary: "Track RPS, latency, and manage application errors centrally.",
        details: [
            { label: "Traffic", value: "Requests Per Second (RPS) charts" },
            { label: "Latency", value: "Avg response time tracking" },
            { label: "Error Feed", value: "Structured logging with status" },
            { label: "Workflow", value: "Mark errors as Resolved/Ignored" },
        ],
        visual: (
            <div className="space-y-3">
                <div className="flex gap-2">
                    <div className="bg-slate-800 p-2 rounded flex-1 text-center border border-slate-700">
                        <div className="text-[10px] text-slate-400">RPS</div>
                        <div className="text-lg font-bold text-blue-400">450</div>
                    </div>
                    <div className="bg-slate-800 p-2 rounded flex-1 text-center border border-slate-700">
                        <div className="text-[10px] text-slate-400">Latency</div>
                        <div className="text-lg font-bold text-yellow-400">12ms</div>
                    </div>
                    <div className="bg-slate-800 p-2 rounded flex-1 text-center border border-slate-700">
                        <div className="text-[10px] text-slate-400">Bandwidth</div>
                        <div className="text-lg font-bold text-slate-200">1.2<span className="text-xs font-normal">MB/s</span></div>
                    </div>
                </div>
                <div className="bg-red-900/10 border border-red-900/30 p-2 rounded">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-[9px] font-bold text-red-300 bg-red-900/40 px-1.5 py-0.5 rounded">NEW ERROR</span>
                        <span className="text-[9px] text-slate-500">10s ago</span>
                    </div>
                    <div className="text-[10px] text-slate-300 truncate font-mono">TypeError: Cannot read 'id' of undefined</div>
                    <div className="mt-2 flex gap-2">
                        <button className="text-[9px] bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded text-slate-300 transition">View Stack</button>
                        <button className="text-[9px] bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded text-emerald-400 transition">Resolve</button>
                    </div>
                </div>
            </div>
        )
    },
    settings: {
        title: "Config & Environment",
        icon: <Settings className="w-5 h-5" />,
        summary: "Safely view and edit .env files without SSH.",
        details: [
            { label: "Security", value: "Masked values by default" },
            { label: "Validation", value: "Server-side syntax check" },
            { label: "Safety", value: "Auto-backup before save" },
            { label: "Tech", value: "EnvEditorService integration" },
        ],
        visual: (
            <div className="font-mono text-xs space-y-2">
                <div className="bg-yellow-900/10 border border-yellow-900/30 p-2 rounded mb-3">
                    <div className="flex gap-2 items-center text-yellow-500 text-[10px]">
                        <Lock size={10} />
                        <span>Editing .env.production</span>
                    </div>
                </div>
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-400">NODE_ENV</span>
                    <span className="text-emerald-400">production</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-400">DB_URI</span>
                    <span className="text-slate-500 text-[10px]">******************</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-400">API_KEY</span>
                    <span className="text-slate-500 text-[10px]">******************</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-1.5 rounded mt-2 text-[10px] flex items-center justify-center gap-2">
                    <Save size={10} /> Save Changes
                </button>
            </div>
        )
    }
};

export function MonitorShowcase() {
    const [activeTab, setActiveTab] = useState<keyof typeof features>('overview');

    return (
        <div className="space-y-12">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Navigation Sidebar */}
                <div className="w-full lg:w-1/3 flex flex-col gap-2">
                    {(Object.entries(features) as [keyof typeof features, typeof features[keyof typeof features]][]).map(([key, feature]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={cn(
                                "flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border",
                                activeTab === key
                                    ? "bg-slate-900 border-blue-500/50 shadow-lg shadow-blue-900/10"
                                    : "bg-slate-900/30 border-transparent hover:bg-slate-900 hover:border-slate-800"
                            )}
                        >
                            <div className={cn(
                                "p-2.5 rounded-lg transition-colors",
                                activeTab === key ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"
                            )}>
                                {feature.icon}
                            </div>
                            <div>
                                <h4 className={cn(
                                    "font-semibold text-sm",
                                    activeTab === key ? "text-white" : "text-slate-300"
                                )}>{feature.title}</h4>
                                <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{feature.summary}</p>
                            </div>
                            {activeTab === key && <ChevronRight className="ml-auto text-blue-500 w-4 h-4" />}
                        </button>
                    ))}
                </div>

                {/* Active Feature Detail Card */}
                <div className="w-full lg:w-2/3">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 h-full shadow-2xl relative overflow-hidden flex flex-col">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full -mt-20 -mr-20 pointer-events-none"></div>

                        <div className="flex flex-col md:flex-row gap-8 relative z-10 h-full">
                            <div className="flex-1 space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                        {features[activeTab].title}
                                    </h3>
                                    <p className="text-slate-400 mt-3 leading-relaxed text-sm">
                                        {features[activeTab].summary}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-3 pt-2">
                                    {features[activeTab].details.map((detail, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-slate-950/80 p-3 rounded-lg border border-slate-800/80 transition hover:border-slate-700">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                                            <span className="text-sm font-medium text-slate-200 min-w-[80px]">{detail.label}</span>
                                            <span className="text-sm text-slate-500 border-l border-slate-700 pl-3">{detail.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Simulated UI Component */}
                            <div className="w-full md:w-72 flex-shrink-0 bg-slate-950 rounded-xl border border-slate-800 p-1 shadow-2xl flex flex-col transform transition hover:scale-[1.02] duration-500">
                                <div className="bg-slate-900 px-3 py-2.5 rounded-t-lg border-b border-slate-800 flex gap-1.5 items-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
                                    <div className="ml-auto text-[9px] text-slate-600 font-mono">dashboard.local</div>
                                </div>
                                <div className="p-4 flex-1 flex flex-col justify-center bg-gradient-to-b from-slate-900/50 to-slate-950">
                                    {features[activeTab].visual}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
