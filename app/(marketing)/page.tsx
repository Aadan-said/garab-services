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
    CheckCircle 
} from "lucide-react";

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-background text-foreground">
            {/* HERO SECTION */}
            <section className="relative pt-10 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20 overflow-hidden">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        {/* Left Column: Headlines & CTAs */}
                        <div className="lg:col-span-7 flex flex-col items-start text-left">
                            {/* Pill Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 text-xs font-semibold text-amber-800 dark:text-amber-300 mb-6">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                                <span>Waxaa na aaminey in ka badan 5,000 qoys oo Soomaali ah</span>
                            </div>

                            {/* Main Title */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                                Adeegyo xirfad leh<br />
                                oo albaabkaaga<br />
                                laguugu keenayo.
                            </h1>

                            {/* Subtitle */}
                            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                                Farsamo Yaqaan waa madasha bulshadeena ee kuu fududeynaysa inaad xirfadle ama macmiil kugu habboon hesho, adigoo dalbanaya isla markiiba si ammaan ah.
                            </p>

                            {/* CTAs */}
                            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
                                <Link href="/register">
                                    <Button className="h-12 px-7 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm flex items-center gap-2 transition-all">
                                        Dalbo adeeg
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href="/providers">
                                    <Button 
                                        variant="outline" 
                                        className="h-12 px-7 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-card text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                                    >
                                        Raadi xirfadlayaal
                                    </Button>
                                </Link>
                            </div>

                            {/* Micro Trust Indicators */}
                            <div className="mt-10 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                                <div className="flex items-center gap-1.5">
                                    <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                                    <span className="font-medium">100% la xaqiijiyey</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                                    <span className="font-medium">Jawaab celin: 5 daqiiqo</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                                    <span className="font-medium">Waa furan yahay 24/7</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Clean Visual Showcase Card */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-end">
                            <div className="w-full max-w-md relative rounded-[2.5rem] bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-6 sm:p-8 shadow-2xl shadow-amber-500/20">
                                {/* Top Rating Pill */}
                                <div className="flex justify-start mb-4">
                                    <div className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-md text-xs font-bold text-slate-900">
                                        <div className="flex text-amber-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-3 w-3 fill-current" />
                                            ))}
                                        </div>
                                        <span>4.9</span>
                                    </div>
                                </div>

                                {/* Floating White Card */}
                                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl text-slate-900 border border-slate-100">
                                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                                        <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">CODSIGA GUUD</span>
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-600">
                                            La aqbalay
                                        </span>
                                    </div>

                                    <h3 className="mt-3.5 text-base sm:text-lg font-bold text-slate-900">
                                        Tuubo dillaacay, jikada
                                    </h3>

                                    {/* Provider Box */}
                                    <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-black text-xs flex items-center justify-center shrink-0">
                                            XL
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-bold text-slate-900 flex items-center gap-1">
                                                Xirfadle la hubiyey
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            </p>
                                            <p className="text-[11px] text-slate-500">Tuubayste · ID la xaqiijiyey</p>
                                        </div>
                                    </div>

                                    {/* Progress Timeline */}
                                    <div className="mt-5 pt-2">
                                        <div className="relative flex items-center justify-between">
                                            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200" />
                                            <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-white" />
                                            <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-white" />
                                            <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white" />
                                        </div>
                                        <div className="flex justify-between text-[10px] font-semibold text-slate-500 mt-2">
                                            <span className="text-blue-600 font-bold">Geddi</span>
                                            <span className="text-blue-600 font-bold">Imaanshaha</span>
                                            <span>Dhamaad</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Escrow Lock Pill */}
                                <div className="mt-4 flex justify-end">
                                    <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                                        <Lock className="h-3.5 w-3.5 text-amber-400" />
                                        <span>Lacagtaada waa la hayaa</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ESCROW & PAYMENT GUARANTEE BANNER */}
            <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                        <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                            <ShieldCheck className="h-4 w-4" />
                        </div>
                        <div>
                            <span className="font-bold text-slate-900 dark:text-white mr-1.5">Lacag bixin ammaan ah (Escrow):</span>
                            <span className="text-slate-600 dark:text-slate-400">Lacagtaadu waa la hayaa ilaa aad ka qanacdo shaqada.</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                        <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-[11px] text-slate-700 dark:text-slate-200 shadow-xs">EVC Plus</span>
                        <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-[11px] text-slate-700 dark:text-slate-200 shadow-xs">Sahal</span>
                        <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-[11px] text-slate-700 dark:text-slate-200 shadow-xs">Premier</span>
                    </div>
                </div>
            </section>

            {/* POPULAR SERVICES SECTION */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-4">
                    <div>
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                            HADDA LA HELI KARO
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
                            Adeegyada ugu caansan
                        </h2>
                        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2">
                            Wax kasta oo aad u baahan tahay si gurigaaga ama xafiiskaaga loo dayactiro.
                        </p>
                    </div>
                    <Link 
                        href="/services" 
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0"
                    >
                        <span>Eeg dhammaan adeegyada</span>
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                                className="bg-white dark:bg-card border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 group flex flex-col"
                            >
                                <div className={`w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                                    <IconComponent className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                                    {service.description}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* HOW IT WORKS SECTION */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        FUDUD OO DEGDEG AH
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
                        Sidee ayaan u shaqaynaa
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2 max-w-2xl leading-relaxed">
                        Hore uma fududeyn in macmiil iyo xirfadle is helaan. Barnaamijkan wuxuu kuu sahlayaa, adigoo raacaya saddex tallaabo oo kooban.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
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
                            className="bg-white dark:bg-card border border-slate-200/90 dark:border-slate-800 rounded-2xl p-7 shadow-xs flex flex-col"
                        >
                            <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center">
                                {item.step}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-5">
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
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 mb-8">
                <div className="rounded-3xl bg-slate-900 dark:bg-slate-950 text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                        {/* Left Side */}
                        <div className="lg:col-span-7 space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                                Amnigaagu waa mudnaanta koowaad.
                            </h3>
                            <p className="text-slate-300 text-xs sm:text-sm max-w-lg leading-relaxed">
                                Adeeg-bixiye kasta oo ku jira madasha wuxuu maraa baaritaan iyo hubin dhammeystiran.
                            </p>
                        </div>

                        {/* Right Side (3 Stacked Badges) */}
                        <div className="lg:col-span-5 space-y-3">
                            <div className="rounded-xl bg-slate-800/80 border border-slate-700/60 p-4 flex items-center gap-3.5">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                    <BadgeCheck className="h-4 w-4" />
                                </div>
                                <span className="font-semibold text-xs sm:text-sm">Aqoonsiyo la hubiyey</span>
                            </div>

                            <div className="rounded-xl bg-slate-800/80 border border-slate-700/60 p-4 flex items-center gap-3.5">
                                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                                    <Star className="h-4 w-4 fill-current" />
                                </div>
                                <span className="font-semibold text-xs sm:text-sm">Kuwa ugu qiimeysan oo kaliya</span>
                            </div>

                            <div className="rounded-xl bg-slate-800/80 border border-slate-700/60 p-4 flex items-center gap-3.5">
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
