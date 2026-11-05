/* طَلَاقَة — الختم والأدوات الرسومية (SVG هندسي خالص، بلا صور خارجية) */

let sealSerial = 0;

/** ختم الأكاديمية الدائري — onDark للخلفيات الزمردية، onPaper للخلفيات الورقية */
export function sealSVG(size: number, variant: 'onDark' | 'onPaper' = 'onDark'): string {
  sealSerial += 1;
  const u = `seal${sealSerial}`;
  const gold = variant === 'onDark' ? '#E7C868' : '#A87F1B';
  const ring = variant === 'onDark' ? '#C9A227' : '#0E3B2C';
  const core = variant === 'onDark' ? 'rgba(201,162,39,0.16)' : 'rgba(14,59,44,0.07)';
  const minaret = variant === 'onDark' ? 'url(#gold' + u + ')' : '#0E3B2C';

  return `
<svg class="seal" width="${size}" height="${size}" viewBox="0 0 200 200" role="img" aria-label="ختم أكاديمية طلاقة">
  <defs>
    <linearGradient id="gold${u}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#E7C868"/>
      <stop offset="0.55" stop-color="#C9A227"/>
      <stop offset="1" stop-color="#8C6A14"/>
    </linearGradient>
    <path id="ringPath${u}" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"/>
  </defs>
  <circle cx="100" cy="100" r="97" fill="none" stroke="${ring}" stroke-width="4.5"/>
  <circle cx="100" cy="100" r="57" fill="${core}" stroke="${ring}" stroke-width="1.6" opacity="0.97"/>
  <text font-family="Amiri,'Traditional Arabic',serif" font-size="12.5" fill="${gold}" letter-spacing="1.1" font-weight="700">
    <textPath href="#ringPath${u}">طَلَاقَة • TALAQA • من الصفر إلى C2 • FROM ZERO TO C2 •&#8201;</textPath>
  </text>
  <g fill="${minaret}" stroke="${variant === 'onDark' ? '#072A20' : '#F7F3E9'}" stroke-width="1.4" stroke-linejoin="round">
    <path d="M100 36a7.5 7.5 0 1 1-4.6 13.4A5.9 5.9 0 1 0 100 36Z" opacity="0.95"/>
    <path d="M100 51c-13 0-20 8.5-20 17h40c0-8.5-7-17-20-17Z"/>
    <rect x="77" y="68" width="46" height="3.4" rx="1"/>
    <path d="M86 71.4h28l-3.3 12.5H89.3Z"/>
    <rect x="83" y="83.9" width="34" height="3" rx="1"/>
    <path d="M88.5 86.9h23l-3 11.5h-17Z"/>
    <rect x="86.5" y="98.4" width="27" height="2.6" rx="1"/>
    <path d="M90 101h20v10H90Z" opacity="0.92"/>
    <path d="M100 116.5c-8-4.4-17.5-4.4-25.5.8v12.5c8-5.2 17.5-5.2 25.5-.8c8-4.4 17.5-4.4 25.5.8v-12.5c-8-5.2-17.5-5.2-25.5-.8Z" opacity="0.97"/>
    <path d="M100 116.5v12.5" fill="none" stroke-width="1.2"/>
  </g>
</svg>`;
}

/** باركود هندسي مشتق من رقم الطالب (للبطاقة فقط — ليس معياراً عالمياً) */
export function barcodeSVG(seed: string): string {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  const bars: string[] = [];
  let x = 0;
  let state = h || 1;
  for (let i = 0; i < 46; i++) {
    state = (Math.imul(state, 1103515245) + 12345) >>> 0;
    const w = (state % 4) + 1;
    const gap = ((state >>> 3) % 3) + 1;
    if (i % 2 === 0) {
      bars.push(`<rect x="${x}" y="0" width="${w}" height="46" fill="#1A1A18"/>`);
    }
    x += w + gap;
  }
  return `<svg class="barcode" viewBox="0 0 ${x} 46" preserveAspectRatio="none" role="img" aria-label="باركود رقم الطالب">${bars.join('')}</svg>`;
}

export function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? 'ط';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}
