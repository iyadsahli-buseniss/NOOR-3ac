import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SubjectPage from "./pages/SubjectPage";
import LessonPage from "./pages/LessonPage";
import LibraryPage from "./pages/LibraryPage";
import { backend, type User } from "./lib/backend";
import { allChapters, findChapter, subjectById, totalChapters } from "./data";
import { Icon, Logo, LogoMark, Toaster, toast } from "./components/ui";

/* ---------------- hash router ---------------- */
type Route =
  | { name: "landing" }
  | { name: "login" }
  | { name: "dashboard" }
  | { name: "library" }
  | { name: "subject"; subjectId: string }
  | { name: "lesson"; subjectId: string; chapterId: string };

function parseHash(): Route {
  const h = window.location.hash.replace(/^#\/?/, "");
  const parts = h.split("/").filter(Boolean);
  if (parts[0] === "login") return { name: "login" };
  if (parts[0] === "app") {
    if (parts[1] === "library") return { name: "library" };
    if (parts[1] === "subject" && parts[2] && parts[3])
      return { name: "lesson", subjectId: parts[2], chapterId: parts[3] };
    if (parts[1] === "subject" && parts[2]) return { name: "subject", subjectId: parts[2] };
    return { name: "dashboard" };
  }
  return { name: "landing" };
}

const navTo = (hash: string) => {
  window.location.hash = hash;
};

export default function App() {
  const [route, setRoute] = useState<Route>(parseHash);
  const [user, setUser] = useState<User | null>(() => backend.getSession());
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [progressLoaded, setProgressLoaded] = useState(false);

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [route]);

  // auth guard
  useEffect(() => {
    const authed = ["dashboard", "library", "subject", "lesson"].includes(route.name);
    if (authed && !user) navTo("login");
    if (route.name === "login" && user) navTo("app");
  }, [route, user]);

  // load progress
  useEffect(() => {
    if (!user) return;
    backend.getProgress().then((p) => {
      setProgress(p);
      setProgressLoaded(true);
    });
  }, [user]);

  const handleLogin = useCallback((u: User) => {
    setUser(u);
    toast(`Bon retour, ${u.name.split(" ")[0]} !`, "ok");
    navTo("app");
  }, []);

  const handleLogout = useCallback(async () => {
    await backend.logout();
    setUser(null);
    setProgress({});
    setProgressLoaded(false);
    toast("À bientôt pour réviser !", "info");
    navTo("");
  }, []);

  const toggleChapter = useCallback(async (id: string, done: boolean) => {
    const p = await backend.setChapterDone(id, done);
    setProgress(p);
  }, []);

  const authed = ["dashboard", "library", "subject", "lesson"].includes(route.name);
  const pageKey =
    route.name === "lesson" ? `lesson-${route.chapterId}`
    : route.name === "subject" ? `subject-${route.subjectId}`
    : route.name;

  const doneCount = Object.keys(progress).length;

  return (
    <div className="min-h-screen">
      {authed && user && (
        <header className="sticky top-0 z-40 border-b border-ink-700/60 bg-ink-900/90 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
            <button onClick={() => navTo("app")} className="transition hover:opacity-85">
              <Logo size={34} />
            </button>
            <nav className="hidden items-center gap-1.5 sm:flex">
              <ShellLink active={route.name === "dashboard" || route.name === "subject" || route.name === "lesson"}
                onClick={() => navTo("app")} icon="home" label="Tableau de bord" />
              <ShellLink active={route.name === "library"} onClick={() => navTo("app/library")} icon="library" label="Bibliothèque" />
            </nav>
            <div className="flex items-center gap-3">
              <span className="hidden items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/10 py-1.5 pl-2 pr-3.5 text-xs font-bold text-gold-300 md:flex">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 text-[10px] text-ink-950">
                  <Icon name="star" className="h-3 w-3" />
                </span>
                {progressLoaded ? `${doneCount}/${totalChapters}` : "…"} chapitres
              </span>
              <button
                onClick={() => navTo("app/library")}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-600 text-ink-200 transition hover:border-gold-500/40 hover:text-gold-300 sm:hidden"
                aria-label="Bibliothèque"
              >
                <Icon name="library" className="h-5 w-5" />
              </button>
              <button
                onClick={handleLogout}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-600 text-ink-200 transition hover:border-coral-500/40 hover:text-coral-300"
                aria-label="Déconnexion"
                title="Déconnexion"
              >
                <Icon name="logout" className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>
        </header>
      )}

      <AnimatePresence mode="wait">
        <motion.main
          key={pageKey}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {route.name === "landing" && (
            <Landing
              onLogin={() => navTo(user ? "app" : "login")}
              onExplore={() => navTo(user ? "app" : "login")}
            />
          )}

          {route.name === "login" && !user && <Login onSuccess={handleLogin} />}

          {route.name === "dashboard" && user && (
            <Dashboard
              user={user}
              progress={progress}
              onSubject={(id) => navTo(`app/subject/${id}`)}
              onLibrary={() => navTo("app/library")}
              onLogout={handleLogout}
            />
          )}

          {route.name === "library" && user && <LibraryPage onBack={() => navTo("app")} />}

          {route.name === "subject" && user && (() => {
            const s = subjectById(route.subjectId);
            if (!s) return <NotFound onHome={() => navTo("app")} />;
            return (
              <SubjectPage
                subject={s}
                progress={progress}
                onBack={() => navTo("app")}
                onChapter={(cid) => navTo(`app/subject/${s.id}/${cid}`)}
              />
            );
          })()}

          {route.name === "lesson" && user && (() => {
            const s = subjectById(route.subjectId);
            const c = s && findChapter(s, route.chapterId);
            if (!s || !c) return <NotFound onHome={() => navTo("app")} />;
            return (
              <LessonPage
                subject={s}
                chapter={c}
                allChaptersOfSubject={allChapters(s)}
                progress={progress}
                onBack={() => navTo(`app/subject/${s.id}`)}
                onNavigate={(cid) => navTo(`app/subject/${s.id}/${cid}`)}
                onToggleDone={toggleChapter}
              />
            );
          })()}
        </motion.main>
      </AnimatePresence>

      {/* mobile bottom nav */}
      {authed && user && (
        <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-700 bg-ink-900/95 backdrop-blur-md sm:hidden">
          <div className="mx-auto flex max-w-md items-center justify-around py-2">
            <MobileTab active={route.name === "dashboard" || route.name === "subject" || route.name === "lesson"}
              onClick={() => navTo("app")} icon="home" label="Accueil" />
            <MobileTab active={route.name === "library"} onClick={() => navTo("app/library")} icon="library" label="Bibliothèque" />
            <MobileTab active={false} onClick={handleLogout} icon="logout" label="Quitter" />
          </div>
        </nav>
      )}

      <Toaster />
    </div>
  );
}

function ShellLink({ active, onClick, icon, label }: {
  active: boolean; onClick: () => void; icon: "home" | "library"; label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition ${
        active ? "text-gold-300" : "text-ink-400 hover:text-ink-100"
      }`}
    >
      {active && (
        <motion.span layoutId="shell-link" className="absolute inset-0 rounded-xl bg-ink-700/60"
          transition={{ type: "spring", stiffness: 400, damping: 34 }} />
      )}
      <Icon name={icon} className="relative h-4 w-4" />
      <span className="relative">{label}</span>
    </button>
  );
}

function MobileTab({ active, onClick, icon, label }: {
  active: boolean; onClick: () => void; icon: "home" | "library" | "logout"; label: string;
}) {
  return (
    <button onClick={onClick}
      className={`flex flex-col items-center gap-0.5 rounded-xl px-5 py-1.5 text-[10px] font-bold transition ${
        active ? "text-gold-400" : "text-ink-400"
      }`}>
      <Icon name={icon} className="h-5 w-5" />
      {label}
    </button>
  );
}

function NotFound({ onHome }: { onHome: () => void }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <LogoMark size={72} className="opacity-70" />
      <h1 className="font-display mt-6 text-3xl font-extrabold text-paper-50">Page introuvable</h1>
      <p className="mt-2 text-sm text-ink-400">Cette page n'existe pas (encore) dans le programme.</p>
      <button onClick={onHome}
        className="mt-6 rounded-xl bg-gold-500 px-6 py-3 font-display text-sm font-bold text-ink-950 transition hover:bg-gold-400">
        Retour au tableau de bord
      </button>
    </div>
  );
}
