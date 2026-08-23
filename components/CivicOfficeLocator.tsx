'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  MapPin,
  Search,
  Navigation,
  Phone,
  Clock,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Filter,
  Sparkles,
  Compass,
} from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { CIVIC_OFFICES, CivicOffice, OfficeCategory } from '@/lib/data/offices';

// Haversine distance calculator in Kilometers
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Number((R * c).toFixed(1));
}

export const CivicOfficeLocator: React.FC = () => {
  const { t } = useLanguage();
  const [searchCity, setSearchCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<OfficeCategory | 'all'>('all');
  const [selectedOffice, setSelectedOffice] = useState<CivicOffice | null>(CIVIC_OFFICES[0]);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationStatus, setLocationStatus] = useState('');

  // Handle Geolocation
  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus(t('Geolocation is not supported by your browser.', 'براؤزر لوکیشن سپورٹ نہیں کرتا۔'));
      return;
    }

    setIsLocating(true);
    setLocationStatus(t('Detecting your location...', 'لوکیشن تلاش کی جا رہی ہے...'));

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setUserLocation(coords);
        setIsLocating(false);
        setLocationStatus(t('Location detected! Sorting by nearest centers.', 'لوکیشن مل گئی! قریبی دفاتر اوپر آ گئے۔'));
        setTimeout(() => setLocationStatus(''), 4000);
      },
      (err) => {
        setIsLocating(false);
        setLocationStatus(
          t(
            'Location permission denied. Please select your city manually.',
            'لوکیشن پرمشن نہیں ملی۔ براہ کرم لسٹ سے اپنا شہر منتخب کریں۔'
          )
        );
        setTimeout(() => setLocationStatus(''), 5000);
      },
      { timeout: 10000, enableHighAccuracy: false }
    );
  };

  // Filtered & Sorted Offices
  const filteredOffices = useMemo(() => {
    let result = CIVIC_OFFICES.filter((office) => {
      const matchCat = selectedCategory === 'all' || office.category === selectedCategory;
      const matchSearch =
        !searchCity.trim() ||
        office.city.toLowerCase().includes(searchCity.toLowerCase()) ||
        office.nameEn.toLowerCase().includes(searchCity.toLowerCase()) ||
        office.addressEn.toLowerCase().includes(searchCity.toLowerCase());
      return matchCat && matchSearch;
    });

    if (userLocation) {
      result = result
        .map((office) => ({
          ...office,
          distanceKm: calculateDistance(userLocation.lat, userLocation.lng, office.lat, office.lng),
        }))
        .sort((a, b) => (a.distanceKm || 0) - (b.distanceKm || 0));
    }

    return result;
  }, [searchCity, selectedCategory, userLocation]);

  useEffect(() => {
    if (filteredOffices.length > 0 && !filteredOffices.find((o) => o.id === selectedOffice?.id)) {
      setSelectedOffice(filteredOffices[0]);
    }
  }, [filteredOffices, selectedOffice]);

  return (
    <div className="space-y-6">
      {/* Controls Bar: Search + Use Location + Category Filter */}
      <div className="p-5 sm:p-7 rounded-3xl border-2 border-doc-brass/30 bg-[#FAF9F6] dark:bg-[#1E2A3F] space-y-4 shadow-sm">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-doc-brass" />
              <span>{t('Find Nearest Civic Facilitation Center', 'قریبی سرکاری و نادرا سنٹر تلاش کریں')}</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-0.5">
              {t(
                'Locate verified 24/7 NADRA Mega Centers, Executive Passport Offices, and GPO branches.',
                'اسلام آباد، لاہور، کراچی اور ملک بھر کے مصدقہ نادرا و پاسپورٹ دفاتر۔'
              )}
            </p>
          </div>

          {/* Use My Location Button */}
          <button
            type="button"
            onClick={handleUseMyLocation}
            disabled={isLocating}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-doc-brass text-white text-xs font-bold font-sans hover:bg-doc-brass transition shadow-sm shrink-0 self-start sm:self-auto"
          >
            <Navigation className={`w-4 h-4 text-emerald-400 dark:text-white ${isLocating ? 'animate-spin' : ''}`} />
            <span>{isLocating ? t('Locating...', 'تلاش جاری...') : t('Use My Location', 'میری لوکیشن استعمال کریں')}</span>
          </button>
        </div>

        {locationStatus && (
          <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-sans flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>{locationStatus}</span>
          </div>
        )}

        {/* Search Input & Service Category Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
          
          {/* City / Area Search Input */}
          <div className="sm:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              placeholder={t('Search by city or area (e.g. Lahore, DHA, Blue Area)...', 'شہر یا علاقہ لکھیں (لاہور، اسلام آباد، کراچی)...')}
              className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm font-sans text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-doc-brass"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="sm:col-span-6 flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-2 rounded-xl text-xs font-sans font-bold whitespace-nowrap transition ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 dark:bg-slate-800 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {t('All Offices', 'تمام دفاتر')} ({CIVIC_OFFICES.length})
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory('nadra')}
              className={`px-3 py-2 rounded-xl text-xs font-sans font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
                selectedCategory === 'nadra'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 border border-slate-200 dark:border-slate-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>NADRA</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory('passport')}
              className={`px-3 py-2 rounded-xl text-xs font-sans font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
                selectedCategory === 'passport'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 border border-slate-200 dark:border-slate-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Passport</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory('post')}
              className={`px-3 py-2 rounded-xl text-xs font-sans font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
                selectedCategory === 'post'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 border border-slate-200 dark:border-slate-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Post GPO</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Responsive Split: Interactive Map Viewer + Office Directory List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left/Top: Interactive Map Visualization Frame */}
        <div className="lg:col-span-7 space-y-4">
          <div className="h-[360px] sm:h-[460px] w-full rounded-3xl border-2 border-slate-200 dark:border-slate-800 overflow-hidden relative bg-slate-100 dark:bg-slate-900 shadow-md">
            
            {/* Embedded Interactive Map Tile using OpenStreetMap Leaflet iframe / tile provider */}
            <iframe
              title="Pakistan Civic Offices Interactive Map"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${(selectedOffice?.lng || 73.0) - 0.08}%2C${(selectedOffice?.lat || 33.7) - 0.06}%2C${(selectedOffice?.lng || 73.0) + 0.08}%2C${(selectedOffice?.lat || 33.7) + 0.06}&layer=mapnik&marker=${selectedOffice?.lat || 33.7128}%2C${selectedOffice?.lng || 73.0652}`}
              className="w-full h-full border-0"
              loading="lazy"
            />

            {/* Map Overlay Badge */}
            <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-xl text-[11px] font-mono font-bold flex items-center gap-2 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{selectedOffice?.city || 'Pakistan'} • {selectedOffice?.facilityType}</span>
            </div>

            {/* Direct Navigation Button Overlay */}
            {selectedOffice && (
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${selectedOffice.lat},${selectedOffice.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-doc-brass hover:bg-amber-600 text-white px-4 py-2 rounded-xl text-xs font-bold font-sans flex items-center gap-1.5 shadow-lg transition"
              >
                <span>{t('Open in Google Maps →', 'گوگل میپس پر نیویگیشن ←')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Selected Office Info Card */}
          {selectedOffice && (
            <div className="p-5 rounded-2xl border-2 border-doc-brass/40 bg-white dark:bg-slate-900 space-y-3 shadow-sm animate-fadeIn">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase ${
                        selectedOffice.category === 'nadra'
                          ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400'
                          : selectedOffice.category === 'passport'
                          ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400'
                          : 'bg-blue-500/15 text-blue-700 dark:text-blue-400'
                      }`}
                    >
                      {selectedOffice.facilityType}
                    </span>
                    {selectedOffice.is24x7 && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-500/15 text-purple-700 dark:text-purple-300">
                        ⚡ 24/7 Open
                      </span>
                    )}
                  </div>
                  <h4 className="text-base sm:text-lg font-serif font-extrabold text-slate-900 dark:text-white">
                    {t(selectedOffice.nameEn, selectedOffice.nameUr)}
                  </h4>
                </div>

                <a
                  href={`tel:${selectedOffice.phone.replace(/[^0-9+]/g, '')}`}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-doc-brass transition shrink-0"
                  aria-label="Call Office"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 font-sans">
                <MapPin className="w-4 h-4 text-doc-seal shrink-0 mt-0.5" />
                <span>{t(selectedOffice.addressEn, selectedOffice.addressUr)}</span>
              </div>

              {/* Timings & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-doc-brass shrink-0" />
                  <span className="font-medium">{t(selectedOffice.workingHoursEn, selectedOffice.workingHoursUr)}</span>
                </div>

                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-mono font-bold">{selectedOffice.phone}</span>
                </div>
              </div>

              {/* Services Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedOffice.services.map((svc, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-sans bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-md"
                  >
                    • {svc}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right/Bottom: Scrollable Office Directory Cards List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {filteredOffices.length} {t('Centers Found', 'دفاتر دستیاب')}
            </span>
          </div>

          <div className="space-y-2.5 max-h-[580px] overflow-y-auto pr-1 scrollbar-thin">
            {filteredOffices.length === 0 ? (
              <div className="p-8 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                  {t('No offices matched your search query. Try searching another city.', 'کوئی دفتر نہیں ملا۔ براہ کرم دوسرا شہر سرچ کریں۔')}
                </p>
              </div>
            ) : (
              filteredOffices.map((office: any) => {
                const isSelected = office.id === selectedOffice?.id;
                return (
                  <div
                    key={office.id}
                    onClick={() => setSelectedOffice(office)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-150 space-y-2 ${
                      isSelected
                        ? 'border-doc-brass bg-amber-500/10 dark:bg-amber-500/15 shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              office.category === 'nadra'
                                ? 'bg-emerald-500'
                                : office.category === 'passport'
                                ? 'bg-amber-500'
                                : 'bg-blue-500'
                            }`}
                          />
                          <span className="text-[10px] font-mono font-bold uppercase text-slate-500 dark:text-slate-400">
                            {office.city} • {office.category.toUpperCase()}
                          </span>
                        </div>
                        <h5 className="text-xs sm:text-sm font-serif font-bold text-slate-900 dark:text-white mt-0.5">
                          {t(office.nameEn, office.nameUr)}
                        </h5>
                      </div>

                      {office.distanceKm !== undefined && (
                        <span className="text-[11px] font-mono font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full shrink-0">
                          {office.distanceKm} km
                        </span>
                      )}
                    </div>

                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans line-clamp-1">
                      {t(office.addressEn, office.addressUr)}
                    </p>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800">
                      <span>{office.workingHoursEn}</span>
                      <span className="font-mono text-doc-brass font-bold">{t('Select View →', 'نقشہ دیکھیں ←')}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
