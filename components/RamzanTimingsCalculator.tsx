'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  MapPin,
  Clock,
  Calendar,
  Search,
  Printer,
  Moon,
  Sun,
  AlertTriangle,
  CheckCircle2,
  Info,
  ChevronRight,
  Coins,
  Sparkles,
  BookOpen,
  Share2,
  RefreshCw,
} from 'lucide-react';
import Link from 'next/link';

interface RamadanDay {
  rozaNumber: number;
  gregorianDate: string;
  formattedDate: string;
  dayName: string;
  fajrSehri: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghribIftar: string;
  isha: string;
  hijriDate: string;
}

interface CityOption {
  name: string;
  urduName: string;
  province: string;
}

const POPULAR_CITIES = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Peshawar', 'Quetta', 'Faisalabad', 'Multan'];

const ALL_CITIES: CityOption[] = [
  { name: 'Lahore', urduName: 'لاہور', province: 'Punjab' },
  { name: 'Karachi', urduName: 'کراچی', province: 'Sindh' },
  { name: 'Islamabad', urduName: 'اسلام آباد', province: 'ICT' },
  { name: 'Rawalpindi', urduName: 'راولپنڈی', province: 'Punjab' },
  { name: 'Faisalabad', urduName: 'فیصل آباد', province: 'Punjab' },
  { name: 'Multan', urduName: 'ملتان', province: 'Punjab' },
  { name: 'Peshawar', urduName: 'پشاور', province: 'KPK' },
  { name: 'Quetta', urduName: 'کوئٹہ', province: 'Balochistan' },
  { name: 'Hyderabad', urduName: 'حیدرآباد', province: 'Sindh' },
  { name: 'Gujranwala', urduName: 'گجرانوالہ', province: 'Punjab' },
  { name: 'Sialkot', urduName: 'سیالکوٹ', province: 'Punjab' },
  { name: 'Sargodha', urduName: 'سرگودھا', province: 'Punjab' },
  { name: 'Bahawalpur', urduName: 'بہاولپور', province: 'Punjab' },
  { name: 'Sukkur', urduName: 'سکھر', province: 'Sindh' },
  { name: 'Larkana', urduName: 'لاڑکانہ', province: 'Sindh' },
  { name: 'Sheikhupura', urduName: 'شیخوپورہ', province: 'Punjab' },
  { name: 'Jhang', urduName: 'جھنگ', province: 'Punjab' },
  { name: 'Rahim Yar Khan', urduName: 'رحیم یار خان', province: 'Punjab' },
  { name: 'Mardan', urduName: 'مردان', province: 'KPK' },
  { name: 'Gujrat', urduName: 'گجرات', province: 'Punjab' },
  { name: 'Sahiwal', urduName: 'ساہیوال', province: 'Punjab' },
  { name: 'Wah Cantt', urduName: 'واہ کینٹ', province: 'Punjab' },
  { name: 'Kasur', urduName: 'قصور', province: 'Punjab' },
  { name: 'Okara', urduName: 'اوکاڑہ', province: 'Punjab' },
  { name: 'Mingora', urduName: 'مینگورہ', province: 'KPK' },
  { name: 'Nawabshah', urduName: 'نواب شاہ', province: 'Sindh' },
  { name: 'Chiniot', urduName: 'چنیوٹ', province: 'Punjab' },
  { name: 'Dera Ghazi Khan', urduName: 'ڈیرہ غازی خان', province: 'Punjab' },
  { name: 'Mirpur Khas', urduName: 'میرپور خاص', province: 'Sindh' },
  { name: 'Abbottabad', urduName: 'ایبٹ آباد', province: 'KPK' },
  { name: 'Muzaffarabad', urduName: 'مظفرآباد', province: 'AJK' },
  { name: 'Gilgit', urduName: 'گلگت', province: 'Gilgit-Baltistan' },
  { name: 'Skardu', urduName: 'سکردو', province: 'Gilgit-Baltistan' },
];

function format12Hour(time24: string): string {
  if (!time24) return '--:--';
  const clean = time24.replace(/\s*\([^)]*\)/, '').trim();
  const parts = clean.split(':');
  if (parts.length < 2) return time24;
  let hours = parseInt(parts[0], 10);
  const minutes = parts[1];
  if (isNaN(hours)) return time24;
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${hours}:${minutes} ${ampm}`;
}

function calculateFastingDuration(sehri24: string, iftar24: string): string {
  if (!sehri24 || !iftar24) return '--';
  const sParts = sehri24.split(':');
  const iParts = iftar24.split(':');
  if (sParts.length < 2 || iParts.length < 2) return '--';
  
  const sMin = parseInt(sParts[0], 10) * 60 + parseInt(sParts[1], 10);
  const iMin = parseInt(iParts[0], 10) * 60 + parseInt(iParts[1], 10);

  let diff = iMin - sMin;
  if (diff < 0) diff += 24 * 60;

  const hrs = Math.floor(diff / 60);
  const mins = diff % 60;
  return `${hrs} hrs ${mins} mins`;
}

export function RamzanTimingsCalculator() {
  const [selectedCity, setSelectedCity] = useState<string>('Lahore');
  const [citySearch, setCitySearch] = useState<string>('');
  const [calendarData, setCalendarData] = useState<RamadanDay[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [calculationNotice, setCalculationNotice] = useState<string | null>(null);
  
  // Selected day state for detail modal/view
  const [selectedRozaIndex, setSelectedRozaIndex] = useState<number>(0);

  // Live countdown state
  const [countdownText, setCountdownText] = useState<string>('');
  const [nextEventType, setNextEventType] = useState<'Sehri' | 'Iftar'>('Iftar');

  // Fetch timings when city changes
  useEffect(() => {
    let isMounted = true;
    async function fetchTimings() {
      setLoading(true);
      setError(null);
      setCalculationNotice(null);
      try {
        const res = await fetch(`/api/ramzan-timings?city=${encodeURIComponent(selectedCity)}`);
        if (!res.ok) {
          throw new Error('Failed to load prayer times.');
        }
        const data = await res.json();
        if (isMounted) {
          if (data.calendar && data.calendar.length > 0) {
            setCalendarData(data.calendar);
            if (data.notice) {
              setCalculationNotice(data.notice);
            }
          } else {
            setError('No Ramadan schedule data returned for this city.');
          }
        }
      } catch (err) {
        if (isMounted) {
          console.error(err);
          setError('Unable to load Sehri & Iftar times right now. Please check your internet connection or try again.');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchTimings();
    return () => {
      isMounted = false;
    };
  }, [selectedCity]);

  // Today's roza index calculation or default to Roza 1
  const todayRoza = useMemo(() => {
    if (!calendarData || calendarData.length === 0) return null;
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    
    // Find matching date in calendarData
    const found = calendarData.find((d) => d.gregorianDate === todayStr);
    return found || calendarData[selectedRozaIndex] || calendarData[0];
  }, [calendarData, selectedRozaIndex]);

  // Update countdown timer every second
  useEffect(() => {
    if (!todayRoza) return;

    const timer = setInterval(() => {
      const now = new Date();
      const [fHrs, fMins] = todayRoza.fajrSehri.split(':').map((x) => parseInt(x, 10));
      const [iHrs, iMins] = todayRoza.maghribIftar.split(':').map((x) => parseInt(x, 10));

      const sehriTime = new Date();
      sehriTime.setHours(fHrs || 5, fMins || 0, 0, 0);

      const iftarTime = new Date();
      iftarTime.setHours(iHrs || 18, iMins || 0, 0, 0);

      let targetTime: Date;
      let type: 'Sehri' | 'Iftar' = 'Iftar';

      if (now < sehriTime) {
        targetTime = sehriTime;
        type = 'Sehri';
      } else if (now < iftarTime) {
        targetTime = iftarTime;
        type = 'Iftar';
      } else {
        // Next day Sehri
        targetTime = new Date(sehriTime.getTime() + 24 * 60 * 60 * 1000);
        type = 'Sehri';
      }

      setNextEventType(type);

      const diffMs = targetTime.getTime() - now.getTime();
      if (diffMs <= 0) {
        setCountdownText('00h 00m 00s');
      } else {
        const hrs = Math.floor(diffMs / (1000 * 60 * 60));
        const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diffMs % (1000 * 60)) / 1000);
        setCountdownText(
          `${String(hrs).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`
        );
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [todayRoza]);

  const filteredCities = useMemo(() => {
    if (!citySearch.trim()) return ALL_CITIES;
    const q = citySearch.toLowerCase();
    return ALL_CITIES.filter(
      (c) => c.name.toLowerCase().includes(q) || c.urduName.includes(q) || c.province.toLowerCase().includes(q)
    );
  }, [citySearch]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-emerald-500/20 my-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-2">
            <Moon className="w-4 h-4 text-emerald-400" />
            <span>Ramadan 1447 AH / 2026 Timings Pakistan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Sehri &amp; Iftar Timings 2026
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Real-time Fajr (Sehri End) &amp; Maghrib (Iftar) schedule calculated via Karachi Islamic University method.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium rounded-xl border border-slate-700 transition"
          >
            <Printer className="w-4 h-4 text-emerald-400" />
            <span>Print Schedule</span>
          </button>
        </div>
      </div>

      {/* City Selector Bar */}
      <div className="mt-6">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
          Select Your City in Pakistan:
        </label>
        
        {/* Quick Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {POPULAR_CITIES.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition flex items-center gap-1.5 ${
                selectedCity === city
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 border border-emerald-400'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{city}</span>
            </button>
          ))}
        </div>

        {/* Searchable Dropdown */}
        <div className="relative max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search 30+ Pakistani cities (e.g., Sukkur, Gujrat, Abbottabad)..."
              value={citySearch}
              onChange={(e) => setCitySearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-800/90 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {citySearch && (
            <div className="absolute left-0 right-0 top-full mt-2 max-h-56 overflow-y-auto bg-slate-800 border border-slate-700 rounded-xl shadow-2xl z-20 p-2">
              {filteredCities.length > 0 ? (
                filteredCities.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => {
                      setSelectedCity(c.name);
                      setCitySearch('');
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm text-slate-200 hover:bg-emerald-600/30 hover:text-white flex items-center justify-between transition"
                  >
                    <span className="font-medium">
                      {c.name} ({c.province})
                    </span>
                    <span className="text-emerald-400 font-urdu text-sm">{c.urduName}</span>
                  </button>
                ))
              ) : (
                <div className="p-3 text-xs text-slate-400 text-center">No matching city found</div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Loading & Error States */}
      {loading && (
        <div className="mt-8 p-12 text-center bg-slate-800/50 rounded-2xl border border-slate-700/50 animate-pulse">
          <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin mx-auto mb-3" />
          <p className="text-slate-300 text-sm font-medium">Calculating Sehri &amp; Iftar times for {selectedCity}...</p>
          <p className="text-slate-500 text-xs mt-1">Applying Karachi Juristic Convention (18° Fajr / 18° Isha)</p>
        </div>
      )}

      {error && !loading && (
        <div className="mt-8 p-6 bg-rose-950/40 border border-rose-600/30 rounded-2xl text-rose-200 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm">Unable to fetch times</h4>
            <p className="text-xs mt-1">{error}</p>
            <button
              onClick={() => setSelectedCity((prev) => prev)}
              className="mt-3 px-3 py-1 bg-rose-800/50 hover:bg-rose-800 text-white rounded-lg text-xs font-semibold transition"
            >
              Retry Loading
            </button>
          </div>
        </div>
      )}

      {!loading && !error && todayRoza && (
        <>
          {/* Active City & Today Highlight Banner */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Today's Sehri & Iftar Card */}
            <div className="lg:col-span-2 bg-gradient-to-br from-emerald-950/60 via-slate-800/80 to-slate-900 border border-emerald-500/30 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700/60">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span className="text-lg font-bold text-white">{selectedCity}</span>
                  <span className="text-xs text-emerald-300 bg-emerald-950/80 border border-emerald-700/40 px-2 py-0.5 rounded-full">
                    Roza #{todayRoza.rozaNumber}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-300 font-medium">{todayRoza.formattedDate}</div>
                  <div className="text-xs text-emerald-400 font-semibold">{todayRoza.hijriDate}</div>
                </div>
              </div>

              {/* Main Sehri vs Iftar Timing Boxes */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 my-4">
                {/* Sehri Box */}
                <div className="bg-slate-900/90 border border-emerald-500/30 rounded-xl p-4 text-center shadow-inner relative group hover:border-emerald-400 transition">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>Sehri Ends (Fajr)</span>
                  </div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight my-1">
                    {format12Hour(todayRoza.fajrSehri)}
                  </div>
                  <p className="text-[11px] text-slate-400">Stop eating 2 min before</p>
                </div>

                {/* Iftar Box */}
                <div className="bg-slate-900/90 border border-emerald-500/30 rounded-xl p-4 text-center shadow-inner relative group hover:border-emerald-400 transition">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                    <Moon className="w-4 h-4 text-emerald-400" />
                    <span>Iftar Time (Maghrib)</span>
                  </div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight my-1">
                    {format12Hour(todayRoza.maghribIftar)}
                  </div>
                  <p className="text-[11px] text-slate-400">Break fast at Azaan</p>
                </div>
              </div>

              {/* Fasting Duration & Sunrise */}
              <div className="flex flex-wrap items-center justify-between text-xs text-slate-300 bg-slate-900/50 p-3 rounded-xl border border-slate-800 gap-2 mt-2">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>
                    Fasting Duration Today:{' '}
                    <strong className="text-white">
                      {calculateFastingDuration(todayRoza.fajrSehri, todayRoza.maghribIftar)}
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>
                    Sunrise:{' '}
                    <strong className="text-slate-200">{format12Hour(todayRoza.sunrise)}</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Live Countdown & Moon Sighting Notice Card */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  <Clock className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span>Countdown to Next Event</span>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 text-center my-2">
                  <p className="text-xs text-slate-400 mb-1">Time Remaining until <span className="text-emerald-400 font-bold">{nextEventType}</span> in {selectedCity}:</p>
                  <div className="text-3xl font-black text-emerald-400 font-mono tracking-wider">
                    {countdownText || '--h --m --s'}
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-amber-950/40 border border-amber-500/30 rounded-xl text-amber-200/90 text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-amber-300 mb-1">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>Ruet-e-Hilal Committee Notice</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Ramadan 2026 is expected to begin on <strong>18-19 Feb 2026</strong>. Final start date is confirmed only after official moon-sighting announcement by Central Ruet-e-Hilal Committee Pakistan.
                </p>
              </div>
            </div>
          </div>

          {/* Important Disclaimers & Convention Box */}
          <div className="mt-6 p-4 rounded-2xl bg-slate-800/60 border border-slate-700 text-xs text-slate-300 space-y-2">
            <div className="flex items-center gap-2 font-bold text-white text-sm">
              <Info className="w-4 h-4 text-emerald-400" />
              <span>Calculation Methodology &amp; Mosque Buffer Guidelines</span>
            </div>
            <p className="leading-relaxed">
              <strong>Karachi Juristic Convention:</strong> Calculated using standard astronomical formulas (University of Islamic Sciences, Karachi: 18.0° Fajr angle, 18.0° Isha angle, Hanafi Asr method). This is the standardized reference used by major Pakistani prayer schedule authorities.
            </p>
            <p className="leading-relaxed text-slate-400">
              <strong>Precautionary Mosque Buffer:</strong> Final Sehri and Iftar times may be adjusted by 1–2 minutes by local mosques as a precaution. Always confirm with your local mosque&apos;s loudspeaker announcement, especially for the exact moment to stop eating for Sehri.
            </p>
            {calculationNotice && (
              <p className="text-emerald-400 font-medium">{calculationNotice}</p>
            )}
          </div>

          {/* 30-Day Ramadan 2026 Calendar Table */}
          <div className="mt-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                  <span>Ramadan 2026 (1447 AH) Complete Calendar — {selectedCity}</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Full 30-day Sehri end and Iftar schedule for {selectedCity}, Pakistan.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60 shadow-xl">
              <table className="w-full text-left text-xs text-slate-300 border-collapse">
                <thead className="bg-slate-800/90 text-slate-200 uppercase font-bold tracking-wider border-b border-slate-700">
                  <tr>
                    <th className="py-3.5 px-3 sm:px-4 text-center">Roza</th>
                    <th className="py-3.5 px-3 sm:px-4">Date</th>
                    <th className="py-3.5 px-3 sm:px-4">Day</th>
                    <th className="py-3.5 px-3 sm:px-4 text-emerald-400 bg-emerald-950/40">Sehri End (Fajr)</th>
                    <th className="py-3.5 px-3 sm:px-4">Sunrise</th>
                    <th className="py-3.5 px-3 sm:px-4">Dhuhr</th>
                    <th className="py-3.5 px-3 sm:px-4">Asr</th>
                    <th className="py-3.5 px-3 sm:px-4 text-amber-400 bg-amber-950/40">Iftar (Maghrib)</th>
                    <th className="py-3.5 px-3 sm:px-4">Isha</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {calendarData.map((day, idx) => {
                    const isToday = todayRoza?.rozaNumber === day.rozaNumber;
                    return (
                      <tr
                        key={day.rozaNumber}
                        onClick={() => setSelectedRozaIndex(idx)}
                        className={`cursor-pointer transition hover:bg-slate-800/80 ${
                          isToday
                            ? 'bg-emerald-950/50 border-l-4 border-l-emerald-500 font-semibold text-white'
                            : idx % 2 === 0
                            ? 'bg-slate-900/40'
                            : 'bg-slate-900/80'
                        }`}
                      >
                        <td className="py-3 px-3 sm:px-4 text-center">
                          <span
                            className={`inline-block w-6 h-6 rounded-full text-center leading-6 text-[11px] font-bold ${
                              isToday
                                ? 'bg-emerald-500 text-slate-950'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            {day.rozaNumber}
                          </span>
                        </td>
                        <td className="py-3 px-3 sm:px-4 whitespace-nowrap">
                          <div className="font-medium text-slate-200">{day.formattedDate}</div>
                          <div className="text-[10px] text-emerald-400">{day.hijriDate}</div>
                        </td>
                        <td className="py-3 px-3 sm:px-4 font-medium text-slate-300">{day.dayName}</td>
                        <td className="py-3 px-3 sm:px-4 font-bold text-emerald-300 bg-emerald-950/20 whitespace-nowrap">
                          {format12Hour(day.fajrSehri)}
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-slate-400 whitespace-nowrap">
                          {format12Hour(day.sunrise)}
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-slate-400 whitespace-nowrap">
                          {format12Hour(day.dhuhr)}
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-slate-400 whitespace-nowrap">
                          {format12Hour(day.asr)}
                        </td>
                        <td className="py-3 px-3 sm:px-4 font-bold text-amber-300 bg-amber-950/20 whitespace-nowrap">
                          {format12Hour(day.maghribIftar)}
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-slate-400 whitespace-nowrap">
                          {format12Hour(day.isha)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Ramadan Essential Duas Section */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sehri Dua */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-3">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Sehri Dua (Niyyat for Fasting)</span>
              </div>
              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700 text-right mb-3">
                <p className="text-xl font-arabic leading-loose text-emerald-200 font-semibold dir-rtl">
                  وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ
                </p>
              </div>
              <p className="text-xs text-slate-300 font-medium italic mb-1">
                <strong>Transliteration:</strong> Wa bisawmi ghadin nawaiytu min shahri ramadan.
              </p>
              <p className="text-xs text-slate-400">
                <strong>English:</strong> &quot;I intend to keep the fast tomorrow for the month of Ramadan.&quot;
              </p>
            </div>

            {/* Iftar Dua */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-3">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Iftar Dua (Breaking the Fast)</span>
              </div>
              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700 text-right mb-3">
                <p className="text-xl font-arabic leading-loose text-amber-200 font-semibold dir-rtl">
                  اللَّهُمَّ إِنِّي لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ
                </p>
              </div>
              <p className="text-xs text-slate-300 font-medium italic mb-1">
                <strong>Transliteration:</strong> Allahumma inni laka sumtu wa bika aamantu wa &apos;alayka tawakkaltu wa &apos;ala rizqika aftartu.
              </p>
              <p className="text-xs text-slate-400">
                <strong>English:</strong> &quot;O Allah, I fasted for You, I believe in You, I put my trust in You, and I break my fast with Your provision.&quot;
              </p>
            </div>
          </div>

          {/* Cross-Link Banner for Zakat Calculator */}
          <div className="mt-10 bg-gradient-to-r from-emerald-900/80 via-emerald-950 to-slate-900 border border-emerald-500/40 rounded-2xl p-6 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/20 rounded-2xl border border-emerald-500/30 text-emerald-400 shrink-0">
                <Coins className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Calculating Your Zakat for Ramzan 2026?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  Use our official online Zakat Calculator 2026 with dual Gold &amp; Silver Nisab rates, live cash values, and asset breakdown for Pakistani Muslims.
                </p>
              </div>
            </div>
            <Link
              href="/hajj-umrah/zakat-calculator-2026"
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition shrink-0 flex items-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <span>Open Zakat Calculator</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
