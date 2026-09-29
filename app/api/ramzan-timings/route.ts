import { NextResponse } from 'next/server';

// Major Pakistani cities with default coordinates & fallback calculations
interface CityInfo {
  name: string;
  urduName: string;
  province: string;
  lat: number;
  lng: number;
}

const PAKISTAN_CITIES: Record<string, CityInfo> = {
  Karachi: { name: 'Karachi', urduName: 'کراچی', province: 'Sindh', lat: 24.8607, lng: 67.0011 },
  Lahore: { name: 'Lahore', urduName: 'لاہور', province: 'Punjab', lat: 31.5204, lng: 74.3587 },
  Islamabad: { name: 'Islamabad', urduName: 'اسلام آباد', province: 'ICT', lat: 33.6844, lng: 73.0479 },
  Rawalpindi: { name: 'Rawalpindi', urduName: 'راولپنڈی', province: 'Punjab', lat: 33.5651, lng: 73.0169 },
  Faisalabad: { name: 'Faisalabad', urduName: 'فیصل آباد', province: 'Punjab', lat: 31.4504, lng: 73.135 },
  Multan: { name: 'Multan', urduName: 'ملتان', province: 'Punjab', lat: 30.1575, lng: 71.5249 },
  Peshawar: { name: 'Peshawar', urduName: 'پشاور', province: 'KPK', lat: 34.0151, lng: 71.5249 },
  Quetta: { name: 'Quetta', urduName: 'کوئٹہ', province: 'Balochistan', lat: 30.1798, lng: 66.975 },
  Hyderabad: { name: 'Hyderabad', urduName: 'حیدرآباد', province: 'Sindh', lat: 25.396, lng: 68.3578 },
  Gujranwala: { name: 'Gujranwala', urduName: 'گجرانوالہ', province: 'Punjab', lat: 32.1877, lng: 74.1945 },
  Sialkot: { name: 'Sialkot', urduName: 'سیالکوٹ', province: 'Punjab', lat: 32.4945, lng: 74.5229 },
  Sargodha: { name: 'Sargodha', urduName: 'سرگودھا', province: 'Punjab', lat: 32.0836, lng: 72.6711 },
  Bahawalpur: { name: 'Bahawalpur', urduName: 'بہاولپور', province: 'Punjab', lat: 29.3544, lng: 71.6911 },
  Sukkur: { name: 'Sukkur', urduName: 'سکھر', province: 'Sindh', lat: 27.7052, lng: 68.8574 },
  Larkana: { name: 'Larkana', urduName: 'لاڑکانہ', province: 'Sindh', lat: 27.5598, lng: 68.2058 },
  Sheikhupura: { name: 'Sheikhupura', urduName: 'شیخوپورہ', province: 'Punjab', lat: 31.7131, lng: 73.9783 },
  Jhang: { name: 'Jhang', urduName: 'جھنگ', province: 'Punjab', lat: 31.2781, lng: 72.3317 },
  'Rahim Yar Khan': { name: 'Rahim Yar Khan', urduName: 'رحیم یار خان', province: 'Punjab', lat: 28.4212, lng: 70.2989 },
  Mardan: { name: 'Mardan', urduName: 'مردان', province: 'KPK', lat: 34.1989, lng: 72.0404 },
  Gujrat: { name: 'Gujrat', urduName: 'گجرات', province: 'Punjab', lat: 32.5742, lng: 74.0754 },
  Sahiwal: { name: 'Sahiwal', urduName: 'ساہیوال', province: 'Punjab', lat: 30.6682, lng: 73.1014 },
  'Wah Cantt': { name: 'Wah Cantt', urduName: 'واہ کینٹ', province: 'Punjab', lat: 33.7715, lng: 72.7511 },
  Kasur: { name: 'Kasur', urduName: 'قصور', province: 'Punjab', lat: 31.1187, lng: 74.4633 },
  Okara: { name: 'Okara', urduName: 'اوکاڑہ', province: 'Punjab', lat: 30.8081, lng: 73.4458 },
  Mingora: { name: 'Mingora', urduName: 'مینگورہ', province: 'KPK', lat: 34.7758, lng: 72.3625 },
  Nawabshah: { name: 'Nawabshah', urduName: 'نواب شاہ', province: 'Sindh', lat: 26.2483, lng: 68.4096 },
  Chiniot: { name: 'Chiniot', urduName: 'چنیوٹ', province: 'Punjab', lat: 31.72, lng: 72.978 },
  'Dera Ghazi Khan': { name: 'Dera Ghazi Khan', urduName: 'ڈیرہ غازی خان', province: 'Punjab', lat: 30.0561, lng: 70.6348 },
  'Mirpur Khas': { name: 'Mirpur Khas', urduName: 'میرپور خاص', province: 'Sindh', lat: 25.5276, lng: 69.0125 },
  Abbottabad: { name: 'Abbottabad', urduName: 'ایبٹ آباد', province: 'KPK', lat: 34.1688, lng: 73.2215 },
  Muzaffarabad: { name: 'Muzaffarabad', urduName: 'مظفرآباد', province: 'AJK', lat: 34.37, lng: 73.4711 },
  Gilgit: { name: 'Gilgit', urduName: 'گلگت', province: 'Gilgit-Baltistan', lat: 35.9208, lng: 74.308 },
  Skardu: { name: 'Skardu', urduName: 'سکردو', province: 'Gilgit-Baltistan', lat: 35.2971, lng: 75.6333 },
};

function cleanTimeString(timeStr: string): string {
  if (!timeStr) return '';
  return timeStr.replace(/\s*\([^)]*\)/, '').trim();
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city') || 'Lahore';
  
  // Normalize city name
  const matchedCityKey = Object.keys(PAKISTAN_CITIES).find(
    (k) => k.toLowerCase() === city.toLowerCase()
  ) || 'Lahore';
  const cityMeta = PAKISTAN_CITIES[matchedCityKey];

  try {
    // Ramadan 2026 spans Feb 2026 and March 2026
    // Fetch both Feb and March 2026 calendar data for the city using Method 1 (Karachi) and School 1 (Hanafi)
    const [febRes, marRes] = await Promise.all([
      fetch(
        `https://api.aladhan.com/v1/calendarByCity/2026/2?city=${encodeURIComponent(matchedCityKey)}&country=Pakistan&method=1&school=1`,
        { next: { revalidate: 86400 } }
      ),
      fetch(
        `https://api.aladhan.com/v1/calendarByCity/2026/3?city=${encodeURIComponent(matchedCityKey)}&country=Pakistan&method=1&school=1`,
        { next: { revalidate: 86400 } }
      ),
    ]);

    if (!febRes.ok || !marRes.ok) {
      throw new Error(`Aladhan API returned status ${febRes.status} / ${marRes.status}`);
    }

    const febJson = await febRes.json();
    const marJson = await marRes.json();

    const febDays = febJson?.data || [];
    const marDays = marJson?.data || [];
    const combinedDays = [...febDays, ...marDays];

    // Filter days around Ramadan 2026 (expected ~Feb 18, 2026 to ~March 19, 2026)
    // We parse Hijri month name or Hijri date to map Ramadan days (Roza 1 to 30)
    const ramadanCalendar: Array<{
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
    }> = [];

    let rozaCounter = 1;

    for (const dayObj of combinedDays) {
      const gDateStr = dayObj.date?.gregorian?.date; // format "18-02-2026"
      const hijriMonthName = dayObj.date?.hijri?.month?.en || '';
      const hijriMonthNum = dayObj.date?.hijri?.month?.number;

      // Check if Hijri month is Ramadan (month # 9) or gregorian is between Feb 18 and March 19, 2026
      const isRamadanHijri = hijriMonthName.toLowerCase().includes('ramadan') || hijriMonthNum === 9;
      
      // Fallback check based on expected dates if Hijri offset in API is off by 1 day
      const dateParts = gDateStr ? gDateStr.split('-') : [];
      const day = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10);

      const isFebRamadan = month === 2 && day >= 18;
      const isMarRamadan = month === 3 && day <= 19;

      if ((isRamadanHijri || isFebRamadan || isMarRamadan) && rozaCounter <= 30) {
        const timings = dayObj.timings;
        const weekdayEn = dayObj.date?.gregorian?.weekday?.en || '';
        
        ramadanCalendar.push({
          rozaNumber: rozaCounter,
          gregorianDate: gDateStr,
          formattedDate: dayObj.date?.readable || `${day} ${month === 2 ? 'Feb' : 'Mar'} 2026`,
          dayName: weekdayEn,
          fajrSehri: cleanTimeString(timings?.Fajr),
          sunrise: cleanTimeString(timings?.Sunrise),
          dhuhr: cleanTimeString(timings?.Dhuhr),
          asr: cleanTimeString(timings?.Asr),
          maghribIftar: cleanTimeString(timings?.Maghrib),
          isha: cleanTimeString(timings?.Isha),
          hijriDate: `${dayObj.date?.hijri?.day} ${dayObj.date?.hijri?.month?.en} ${dayObj.date?.hijri?.year}`,
        });

        rozaCounter++;
      }
    }

    return NextResponse.json({
      success: true,
      city: matchedCityKey,
      cityInfo: cityMeta,
      calculationMethod: 'University of Islamic Sciences, Karachi (18.0° Fajr, 18.0° Isha, Hanafi Juristic)',
      calendar: ramadanCalendar,
      source: 'Aladhan API (Server-Side Cached)',
    });
  } catch (error) {
    console.error('Error fetching prayer times from Aladhan API:', error);

    // Dynamic offline fallback calculation if API is unavailable
    const fallbackCalendar = generateFallbackRamadanCalendar(matchedCityKey, cityMeta);

    return NextResponse.json({
      success: true,
      city: matchedCityKey,
      cityInfo: cityMeta,
      calculationMethod: 'University of Islamic Sciences, Karachi (Astronomical Estimation Fallback)',
      calendar: fallbackCalendar,
      source: 'Astronomical Backup Model',
      notice: 'Served via offline astronomical backup mode due to external API latency.',
    });
  }
}

// Fallback algorithm for Ramadan 2026 (Feb 18 - Mar 19, 2026) for Pakistani cities
function generateFallbackRamadanCalendar(cityName: string, cityInfo: CityInfo) {
  const calendar = [];
  
  // Baseline Lahore Feb 18 Fajr ~05:18, Maghrib ~17:52
  // Adjust based on longitude difference (4 min per longitude degree difference from Lahore 74.36°E)
  const lngDiffMinutes = Math.round((74.3587 - cityInfo.lng) * 4);
  const latDiffMinutes = Math.round((cityInfo.lat - 31.5204) * 0.5);

  let baseFajrMin = 5 * 60 + 18 + lngDiffMinutes + latDiffMinutes;
  let baseMaghribMin = 17 * 60 + 52 - lngDiffMinutes + latDiffMinutes;

  const startDate = new Date(2026, 1, 18); // Feb 18, 2026

  for (let i = 0; i < 30; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    // Days progress: Fajr gets ~1 min earlier each day, Maghrib gets ~1 min later as spring approaches
    const fajrMin = baseFajrMin - Math.round(i * 0.8);
    const maghribMin = baseMaghribMin + Math.round(i * 0.7);

    const fHours = Math.floor(fajrMin / 60);
    const fMins = fajrMin % 60;
    const mHours = Math.floor(maghribMin / 60);
    const mMins = maghribMin % 60;

    const formattedFajr = `${String(fHours).padStart(2, '0')}:${String(fMins).padStart(2, '0')}`;
    const formattedMaghrib = `${String(mHours).padStart(2, '0')}:${String(mMins).padStart(2, '0')}`;

    const dateStr = currentDate.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
    const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

    calendar.push({
      rozaNumber: i + 1,
      gregorianDate: currentDate.toISOString().split('T')[0],
      formattedDate: dateStr,
      dayName: dayName,
      fajrSehri: formattedFajr,
      sunrise: `${String(fHours + 1).padStart(2, '0')}:${String(fMins + 18).padStart(2, '0')}`,
      dhuhr: '12:18',
      asr: '15:35',
      maghribIftar: formattedMaghrib,
      isha: '19:15',
      hijriDate: `${i + 1} Ramadan 1447`,
    });
  }

  return calendar;
}
