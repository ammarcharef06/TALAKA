/* طَلَاقَة — نافذة إدخال رمز PIN محلي (4 أرقام) */
export interface PinPromptOptions {
  confirm?: boolean;
  submitLabel?: string;
}

export function promptPin(title: string, message: string, options: PinPromptOptions = {}): Promise<string | null> {
  return new Promise((resolve) => {
    const dialog = document.createElement('dialog');
    dialog.className = 'pin-dialog';
    dialog.setAttribute('aria-label', title);
    dialog.innerHTML = `
      <form class="pin-form" novalidate>
        <div class="pin-head">
          <span class="pin-lock" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="1.6"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>
          </span>
          <div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(message)}</p></div>
        </div>
        <label class="pin-label">رمز PIN
          <input class="pin-input" id="pinInput" type="password" inputmode="numeric" maxlength="4" pattern="\\d{4}" autocomplete="off" placeholder="••••" required />
        </label>
        ${options.confirm ? `<label class="pin-label">تأكيد الرمز
          <input class="pin-input" id="pinConfirmInput" type="password" inputmode="numeric" maxlength="4" pattern="\\d{4}" autocomplete="off" placeholder="••••" required />
        </label>` : ''}
        <p class="pin-error" id="pinError" hidden></p>
        <div class="pin-actions">
          <button type="submit" class="btn btn-primary">${escapeHtml(options.submitLabel ?? 'تأكيد')}</button>
          <button type="button" class="btn btn-ghost" id="pinCancelBtn">إلغاء</button>
        </div>
        <p class="pin-note">قفل محلي على هذا الجهاز — لا يُرسل الرمز إلى أي مكان، ولا يشفّر قاعدة البيانات.</p>
      </form>`;

    const form = dialog.querySelector<HTMLFormElement>('.pin-form')!;
    const first = dialog.querySelector<HTMLInputElement>('#pinInput')!;
    const second = dialog.querySelector<HTMLInputElement>('#pinConfirmInput');
    const error = dialog.querySelector<HTMLElement>('#pinError')!;

    const close = (value: string | null) => {
      dialog.close();
      dialog.remove();
      resolve(value);
    };

    const showError = (message: string) => {
      error.textContent = message;
      error.hidden = false;
      first.focus();
    };

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const pin = first.value.trim();
      if (!/^\d{4}$/.test(pin)) {
        showError('الرمز يجب أن يكون 4 أرقام بالضبط.');
        return;
      }
      if (second && second.value.trim() !== pin) {
        showError('الرمزان غير متطابقين.');
        return;
      }
      close(pin);
    });

    dialog.querySelector('#pinCancelBtn')!.addEventListener('click', () => close(null));
    dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      close(null);
    });
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) close(null);
    });

    document.body.appendChild(dialog);
    dialog.showModal();
    first.focus();
  });
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch] as string));
}
