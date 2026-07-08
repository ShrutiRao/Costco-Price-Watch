import { Link, useLocation } from "wouter"
import { ScanBarcode, Upload, FileText, Search } from "lucide-react"
import { cn } from "@/lib/utils"

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation()

  const navItems = [
    { href: "/", label: "Dashboard", icon: Search },
    { href: "/upload", label: "Upload Receipt", icon: Upload },
    { href: "/receipts", label: "My Receipts", icon: FileText },
  ]

  return (
    <div className="flex min-h-screen w-full bg-background selection:bg-primary/30">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border/50 bg-card/30 flex flex-col hidden md:flex">
        <div className="p-6 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <ScanBarcode className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg tracking-tight">CostcoWatch</span>
        </div>
        
        <nav className="flex-1 px-4 space-y-1 mt-4">
          {navItems.map((item) => {
            const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                <item.icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-muted-foreground")} />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Status</h4>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-sm font-medium">Monitoring Active</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-0 relative">
        <div className="fixed inset-0 pointer-events-none opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background"></div>
        <div className="flex-1 overflow-y-auto z-10 relative">
          {children}
        </div>
      </main>

      {/* Mobile Nav (Bottom) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t border-border/50 bg-card/80 backdrop-blur-md flex items-center justify-around p-3 z-50">
        {navItems.map((item) => {
          const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 text-xs font-medium p-2 rounded-lg transition-colors",
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
