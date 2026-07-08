import { useState, useEffect } from "react"
import { Link, useLocation } from "wouter"
import { Upload, FileText, LayoutDashboard } from "lucide-react"
import { cn } from "@/lib/utils"
import { CostcoWatchLogo } from "@/components/logo"
import { useGetDashboardSummary } from "@workspace/api-client-react"

/** Formats a ms timestamp as a human-friendly relative string, e.g. "just now", "2 min ago". */
function useRelativeTime(ms: number | undefined): string {
  const [label, setLabel] = useState<string>(() => formatRelative(ms))

  useEffect(() => {
    setLabel(formatRelative(ms))
    const id = setInterval(() => setLabel(formatRelative(ms)), 30_000)
    return () => clearInterval(id)
  }, [ms])

  return label
}

function formatRelative(ms: number | undefined): string {
  if (!ms) return "—"
  const diff = Math.floor((Date.now() - ms) / 1000)
  if (diff < 10) return "just now"
  if (diff < 60) return `${diff}s ago`
  const mins = Math.floor(diff / 60)
  if (mins < 60) return `${mins} min ago`
  const hrs = Math.floor(mins / 60)
  return `${hrs}h ago`
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation()
  const { dataUpdatedAt } = useGetDashboardSummary()
  const lastChecked = useRelativeTime(dataUpdatedAt || undefined)

  const navItems = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/upload", label: "Upload Receipt", icon: Upload },
    { href: "/receipts", label: "My Receipts", icon: FileText },
  ]

  return (
    <div className="flex min-h-screen w-full bg-background selection:bg-primary/30">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border/40 bg-card/20 flex flex-col hidden md:flex shrink-0">

        {/* Logo */}
        <Link href="/" className="block px-5 pt-5 pb-4 group">
          <CostcoWatchLogo className="w-[148px] h-auto transition-opacity duration-200 group-hover:opacity-80" />
        </Link>

        <div className="mx-5 mb-4 h-px bg-border/40" />

        <nav className="flex-1 px-3 space-y-0.5">
          {navItems.map((item) => {
            const isActive =
              location === item.href ||
              (item.href !== "/" && location.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150",
                  isActive
                    ? "bg-primary/10 text-primary shadow-[inset_0_0_0_1px_rgba(16,185,129,0.15)]"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                )}
              >
                <item.icon
                  className={cn(
                    "h-4 w-4 shrink-0",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 mt-auto">
          <div className="rounded-xl border border-border/40 bg-white/[0.03] px-4 py-3 space-y-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
              Status
            </p>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-foreground/80">Monitoring Active</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-muted-foreground/50 font-mono uppercase tracking-wider">
                Last check
              </span>
              <span className="text-[10px] text-muted-foreground/70 font-mono tabular-nums">
                {lastChecked}
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-0 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px]" />
        </div>
        <div className="flex-1 overflow-y-auto z-10 relative">
          {children}
        </div>
      </main>

      {/* Mobile Nav (Bottom) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t border-border/40 bg-background/80 backdrop-blur-xl flex items-center justify-around px-2 py-2 z-50">
        {navItems.map((item) => {
          const isActive =
            location === item.href ||
            (item.href !== "/" && location.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 text-[10px] font-medium px-4 py-2 rounded-lg transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
