/**
 * NOOR 3AC — backend simulé (couche "serverless").
 * Toutes les données vivent dans localStorage derrière une API asynchrone
 * avec latence artificielle — remplaçable par un vrai serveur sans toucher au front.
 */

export interface User {
  name: string;
  phone: string;
  token: string;
  createdAt: number;
}

const KEYS = {
  user: "noor3ac_user_v1",
  progress: "noor3ac_progress_v1",
  pending: "noor3ac_pending_code_v1",
};

const delay = (ms = 320) => new Promise((r) => setTimeout(r, ms));

const read = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

const write = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* stockage indisponible : on continue en mémoire */
  }
};

const randomCode = () =>
  String(Math.floor(1000 + Math.random() * 9000));

const randomToken = () =>
  `noor_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;

export const backend = {
  /** Envoie un code de vérification (retourné pour la notification simulée). */
  async requestCode(phone: string): Promise<{ ok: true; code: string }> {
    await delay(700);
    const code = randomCode();
    write(KEYS.pending, { phone, code, at: Date.now() });
    return { ok: true, code };
  },

  /** Vérifie le code et crée (ou retrouve) la session de l'élève. */
  async verifyCode(
    phone: string,
    code: string,
    name: string
  ): Promise<{ ok: boolean; user?: User }> {
    await delay(650);
    const pending = read<{ phone: string; code: string } | null>(KEYS.pending, null);
    if (!pending || pending.phone !== phone || pending.code !== code) {
      return { ok: false };
    }
    const existing = read<User | null>(KEYS.user, null);
    const user: User = existing
      ? { ...existing, name: name || existing.name, phone }
      : { name: name || "Élève NOOR", phone, token: randomToken(), createdAt: Date.now() };
    write(KEYS.user, user);
    return { ok: true, user };
  },

  getSession(): User | null {
    return read<User | null>(KEYS.user, null);
  },

  async logout(): Promise<void> {
    await delay(250);
    localStorage.removeItem(KEYS.user);
  },

  /* ---------------- Progression ---------------- */
  async getProgress(): Promise<Record<string, boolean>> {
    await delay(220);
    return read<Record<string, boolean>>(KEYS.progress, {});
  },

  async setChapterDone(chapterId: string, done: boolean): Promise<Record<string, boolean>> {
    await delay(180);
    const p = read<Record<string, boolean>>(KEYS.progress, {});
    if (done) p[chapterId] = true;
    else delete p[chapterId];
    write(KEYS.progress, p);
    return { ...p };
  },

  async resetProgress(): Promise<Record<string, boolean>> {
    await delay(200);
    write(KEYS.progress, {});
    return {};
  },
};
