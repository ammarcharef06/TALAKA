/* طَلَاقَة — نافذة تأكيد موحّدة بهوية المؤسسة (بديل عن confirm البدائي) */
export function showConfirm(message: string, confirmLabel = 'تأكيد'): Promise<boolean> {
  return new Promise((resolve) => {
    const backdrop = document.createElement('div');
    backdrop.className = 'confirm-backdrop';
    backdrop.innerHTML = `
      <div class="confirm-box" role="dialog" aria-modal="true" aria-label="تأكيد">
        <p class="confirm-msg">${escapeHtml(message)}</p>
        <div class="confirm-actions">
          <button class="btn btn-danger" data-act="yes">${escapeHtml(confirmLabel)}</button>
          <button class="btn btn-ghost" data-act="no">إلغاء</button>
        </div>
      </div>`;
    const close = (v: boolean) => {
      backdrop.remove();
      resolve(v);
    };
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) close(false);
      const act = (e.target as HTMLElement).closest('[data-act]')?.getAttribute('data-act');
      if (act === 'yes') close(true);
      if (act === 'no') close(false);
    });
    document.addEventListener('keydown', function onKey(ev) {
      if (ev.key === 'Escape') {
        document.removeEventListener('keydown', onKey);
        close(false);
      }
    });
    document.body.appendChild(backdrop);
    backdrop.querySelector<HTMLButtonElement>('[data-act="no"]')?.focus();
  });
}

export function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch] as string));
}

/** إشعار صغير أسفل الشاشة */
export function toast(message: string): void {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = message;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  window.setTimeout(() => {
    el.classList.remove('show');
    window.setTimeout(() => el.remove(), 350);
  }, 2800);
}
