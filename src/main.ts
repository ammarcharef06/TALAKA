/* طَلَاقَة | TALAQA — أكاديمية العرب السيادية للغة الإنجليزية
   نقطة الإقلاع: أكاديمية بلا خادم تعمل كلياً على جهازك. */
import './fonts.css';
import './style.css';

import './screens/gate.ts';
import './screens/acceptance.ts';
import './screens/exam.ts';
import './screens/result.ts';
import './screens/card.ts';
import './screens/building.ts';
import './screens/classroom.ts';
import './screens/lesson.ts';

import { go } from './router';

// العمل بلا إنترنت: Service Worker يعمل في الإنتاج فقط حتى لا يتداخل مع التطوير
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    void navigator.serviceWorker.register('./sw.js').catch(() => {
      // لا تعطل الأكاديمية لو فشل التسجيل — هي تعمل أصلاً بدون
    });
  });
}

go('gate');
