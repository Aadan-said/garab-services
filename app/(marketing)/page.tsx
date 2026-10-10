import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, 
    Zap, 
    Droplet, 
    Sparkles, 
    Snowflake, 
    ShieldCheck, 
    BadgeCheck, 
    Star, 
    Lock, 
    CheckCircle,
    Clock,
    PhoneCall
} from "lucide-react";

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-background text-foreground overflow-x-hidden">
            {/* HERO SECTION - TIGHTER TOP GAP & RESPONSIVE */}
            <section className="relative pt-3 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                        
                        {/* Left Column: Headlines & CTAs */}
                        <div className="lg:col-span-7 flex flex-col items-start text-left">
                            
                            {/* Premium Sleek Trust Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/[0.04] dark:bg-white/[0.06] border border-slate-900/10 dark:border-white/10 px-3.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 backdrop-blur-sm shadow-xs mb-5 transition-all hover:border-slate-300 dark:hover:border-slate-700">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="font-semibold text-slate-900 dark:text-white">5,000+ Qoysas</span>
                                <span className="text-slate-400 dark:text-slate-600">•</span>
                                <span>Waxaa na aaminay guud ahaan dalka</span>
                            </div>

                            {/* Main Title - Responsive & High Contrast */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                                Adeegyo xirfad leh<br />
                                oo albaabkaaga<br />
                                laguugu keenayo.
                            </h1>

                            {/* Subtitle */}
                            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                                Farsamo Yaqaan waa madasha bulshadeena ee kuu fududeynaysa inaad xirfadle ama macmiil kugu habboon hesho, adigoo dalbanaya isla markiiba si ammaan ah.
                            </p>

                            {/* CTAs - Responsive buttons */}
                            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                                <Link href="/register" className="w-full sm:w-auto">
                                    <Button className="w-full sm:w-auto h-12 px-7 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-all active:scale-98">
                                        Dalbo adeeg
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href="/providers" className="w-full sm:w-auto">
                                    <Button 
                                        variant="outline" 
                                        className="w-full sm:w-auto h-12 px-7 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-card text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all justify-center active:scale-98"
                                    >
                                        Raadi xirfadlayaal
                                    </Button>
                                </Link>
                            </div>

                            {/* Micro Trust Indicators */}
                            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 dark:text-slate-400">
                                <div className="flex items-center gap-1.5">
                                    <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                                    <span className="font-medium">100% la xaqiijiyey</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                                    <span className="font-medium">Jawaab celin: 5 daqiiqo</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                                    <span className="font-medium">Waa furan yahay 24/7</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Premium High-End Showcase Card (Replacing the Yellow Card) */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
                            <div className="w-full max-w-md relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-5 sm:p-7 shadow-2xl border border-slate-800 ring-1 ring-white/10 text-white overflow-hidden">
                                
                                {/* Ambient Background Glow */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                                {/* Top Bar: Live Status & Rating */}
                                <div className="relative z-10 flex items-center justify-between gap-2 mb-4">
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span>Dalab Toos Ah</span>
                                    </div>

                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-white text-[11px] font-semibold backdrop-blur-sm">
                                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                                        <span>4.95</span>
                                        <span className="text-white/60">· 8.6k+</span>
                                    </div>
                                </div>

                                {/* Floating Clean White Order Card */}
                                <div className="relative z-10 bg-white text-slate-900 rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-100">
                                    
                                    {/* Card Header */}
                                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                                        <div className="flex items-center gap-2">
                                            <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-rose-50 text-rose-600 border border-rose-100">
                                                DEGDEG AH
                                            </span>
                                            <span className="text-[11px] text-slate-400 font-medium">15 Daqiiqo</span>
                                        </div>
                                        <span className="text-xs font-black text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg">
                                            $25 - $35
                                        </span>
                                    </div>

                                    {/* Request Title */}
                                    <div className="mt-3.5 flex items-start justify-between gap-2">
                                        <div>
                                            <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                                                Tuubo dillaacay, jikada
                                            </h3>
                                            <p className="text-xs text-slate-500 mt-0.5">Magaalada: Muqdisho · Hodan</p>
                                        </div>
                                        <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                            <Droplet className="h-4 w-4" />
                                        </div>
                                    </div>

                                    {/* Assigned Verified Technician Box */}
                                    <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-2.5 min-w-0">
                                            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                                                XL
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-xs font-bold text-slate-900 truncate flex items-center gap-1">
                                                    Axmed Cali (Tuubayste)
                                                    <BadgeCheck className="h-3.5 w-3.5 text-blue-600 shrink-0 inline" />
                                                </p>
                                                <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                    ID & Aqoonta La Hubiyey
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-center shrink-0 shadow-2xs">
                                            <PhoneCall className="h-3.5 w-3.5 text-slate-600" />
                                        </div>
                                    </div>

                                    {/* Realtime Progress Steps */}
                                    <div className="mt-4 pt-2">
                                        <div className="relative flex items-center justify-between">
                                            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200" />
                                            <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-white" />
                                            <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-white" />
                                            <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white" />
                                        </div>
                                        <div className="flex justify-between text-[10px] font-semibold text-slate-500 mt-2">
                                            <span className="text-blue-600 font-bold">Dalabka</span>
                                            <span className="text-blue-600 font-bold">Xirfadlaha</span>
                                            <span>Dhamaad</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Escrow Protection Strip */}
                                <div className="relative z-10 mt-3.5 flex items-center justify-between gap-2 p-3 rounded-xl bg-white/[0.07] border border-white/10 text-xs text-slate-300">
                                    <div className="flex items-center gap-2">
                                        <Lock className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                                        <span className="font-medium text-[11px] text-white">Lacagtaada waa la hayaa (Escrow)</span>
                                    </div>
                                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                                        Ammaan 100%
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ESCROW & PAYMENT GUARANTEE BANNER */}
            <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                        <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                            <ShieldCheck className="h-4 w-4" />
                        </div>
                        <div>
                            <span className="font-bold text-slate-900 dark:text-white mr-1.5">Lacag bixin ammaan ah (Escrow):</span>
                            <span className="text-slate-600 dark:text-slate-400">Lacagtaadu waa la hayaa ilaa aad ka qanacdo shaqada.</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap shrink-0">
                        <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-[11px] text-slate-700 dark:text-slate-200 shadow-xs">EVC Plus</span>
                        <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-[11px] text-slate-700 dark:text-slate-200 shadow-xs">Sahal</span>
                        <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-[11px] text-slate-700 dark:text-slate-200 shadow-xs">Premier</span>
                    </div>
                </div>
            </section>

            {/* POPULAR SERVICES SECTION */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
                    <div>
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                            HADDA LA HELI KARO
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
                            Adeegyada ugu caansan
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5">
                            Wax kasta oo aad u baahan tahay si gurigaaga ama xafiiskaaga loo dayactiro.
                        </p>
                    </div>
                    <Link 
                        href="/services" 
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0"
                    >
                        <span>Eeg dhammaan adeegyada</span>
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    {[
                        {
                            title: "Korontaystaha",
                            description: "Khabiir ku ah fiilooyinka iyo dayactirka korontada.",
                            icon: Zap,
                            iconBg: "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400",
                        },
                        {
                            title: "Tuubaystaha",
                            description: "Hagaajinta dillaacyada iyo tuubooyinka.",
                            icon: Droplet,
                            iconBg: "bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400",
                        },
                        {
                            title: "Nadiifiyaha",
                            description: "Nadaafad dhamaystiran oo guryaha ah.",
                            icon: Sparkles,
                            iconBg: "bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400",
                        },
                        {
                            title: "Qaboojiyaha (AC)",
                            description: "Dayactir iyo adeeg qaboojiyayaasha.",
                            icon: Snowflake,
                            iconBg: "bg-teal-50 text-teal-600 dark:bg-teal-950/50 dark:text-teal-400",
                        },
                    ].map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Link 
                                key={index} 
                                href="/services" 
                                className="bg-white dark:bg-card border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 sm:p-6 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 group flex flex-col active:scale-98"
                            >
                                <div className={`w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 transition-transform`}>
                                    <IconComponent className="h-5 w-5" />
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                                    {service.description}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* HOW IT WORKS SECTION */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
                <div>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        FUDUD OO DEGDEG AH
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
                        Sidee ayaan u shaqaynaa
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400 mt-1.5 max-w-2xl leading-relaxed">
                        Hore uma fududeyn in macmiil iyo xirfadle is helaan. Barnaamijkan wuxuu kuu sahlayaa, adigoo raacaya saddex tallaabo oo kooban.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-10">
                    {[
                        {
                            step: "01",
                            title: "Soo dir codsi shaqo",
                            description: "Sharax waxa aad rabto in lagu qabto, ku dar sawirro iyo goobta aad joogto. Waxay qaadataa wax ka yar 2 daqiiqo.",
                        },
                        {
                            step: "02",
                            title: "Hel xirfadle kugu habboon",
                            description: "Adeeg-bixiyeyaasha deegaankaaga ayaa arka codsigaaga, waxaana lagu ogeysiinayaa marka uu mid aqbalo.",
                        },
                        {
                            step: "03",
                            title: "Shaqadu way dhamaataa",
                            description: "Xirfadlaha ayaa kuu imanaya oo shaqada qabanaya. Waxaad bixisaa lacagta si ammaan ah madasha dhexdeeda.",
                        },
                    ].map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white dark:bg-card border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col"
                        >
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center">
                                {item.step}
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-4 sm:mt-5">
                                {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* TRUST & SECURITY SECTION */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 mb-8 sm:mb-12">
                <div className="rounded-3xl bg-slate-900 dark:bg-slate-950 text-white p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                        {/* Left Side */}
                        <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
                                Amnigaagu waa mudnaanta koowaad.
                            </h3>
                            <p className="text-slate-300 text-xs sm:text-sm max-w-lg leading-relaxed">
                                Adeeg-bixiye kasta oo ku jira madasha wuxuu maraa baaritaan iyo hubin dhammeystiran.
                            </p>
                        </div>

                        {/* Right Side (3 Stacked Badges) */}
                        <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
                            <div className="rounded-xl bg-slate-800/80 border border-slate-700/60 p-3.5 sm:p-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                    <BadgeCheck className="h-4 w-4" />
                                </div>
                                <span className="font-semibold text-xs sm:text-sm">Aqoonsiyo la hubiyey</span>
                            </div>

                            <div className="rounded-xl bg-slate-800/80 border border-slate-700/60 p-3.5 sm:p-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                                    <Star className="h-4 w-4 fill-current" />
                                </div>
                                <span className="font-semibold text-xs sm:text-sm">Kuwa ugu qiimeysan oo kaliya</span>
                            </div>

                            <div className="rounded-xl bg-slate-800/80 border border-slate-700/60 p-3.5 sm:p-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                                    <Lock className="h-4 w-4" />
                                </div>
                                <span className="font-semibold text-xs sm:text-sm">Lacag bixin Escrow</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
