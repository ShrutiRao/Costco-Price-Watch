import { useGetDashboardSummary, useListReceipts } from "@workspace/api-client-react"
import { AppLayout } from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { FileText, ArrowRight, TrendingDown, Search, AlertTriangle, Package } from "lucide-react"
import { Link } from "wouter"
import { cn, formatCurrency, formatDate } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import type { Receipt } from "@workspace/api-client-react"

export default function Dashboard() {
  const { data: summary, isLoading: isSummaryLoading } = useGetDashboardSummary()
  const { data: receipts, isLoading: isReceiptsLoading } = useListReceipts()

  const recentReceipts = receipts?.slice(0, 3) || []

  return (
    <AppLayout>
      <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-10 pb-24 md:pb-10">

        {/* Hero Section — weight rhythm: light lead-in + bold climax */}
        <section className="space-y-4 pt-2">
          <h1 className="text-4xl md:text-5xl tracking-tight text-foreground leading-tight">
            <span className="font-light text-foreground/80">Never miss a </span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
              Costco price drop.
            </span>
          </h1>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            Upload your receipt, track your purchase, and get evidence-backed alerts when a better price appears.
          </p>
          <div className="pt-2 flex gap-4">
            <Link href="/upload">
              <Button
                size="lg"
                className="h-11 px-6 text-sm font-semibold shadow-[0_0_24px_rgba(16,185,129,0.25)] hover:shadow-[0_0_32px_rgba(16,185,129,0.35)] transition-shadow"
                data-testid="button-upload-hero"
              >
                <FileText className="mr-2 h-4 w-4" />
                Upload Receipt
              </Button>
            </Link>
          </div>
        </section>

        {/* Stats Row — large numbers, tiny-caps labels */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <StatCard
            title="Total Receipts"
            value={summary?.totalReceipts}
            icon={FileText}
            isLoading={isSummaryLoading}
          />
          <StatCard
            title="Items Scanned"
            value={summary?.totalItemsScanned}
            icon={Package}
            isLoading={isSummaryLoading}
          />
          <StatCard
            title="Total Alerts"
            value={summary?.totalAlerts}
            icon={AlertTriangle}
            isLoading={isSummaryLoading}
            valueClass="text-emerald-400"
          />
          <StatCard
            title="Est. Savings"
            value={
              summary?.estimatedTotalSavings !== undefined
                ? formatCurrency(summary.estimatedTotalSavings)
                : undefined
            }
            icon={TrendingDown}
            isLoading={isSummaryLoading}
            valueClass="text-emerald-400"
          />
        </section>

        {/* Recent Activity */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Recent Receipts</h2>
            <Link href="/receipts">
              <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground hover:text-foreground" data-testid="link-view-all-receipts">
                View all <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          {isReceiptsLoading ? (
            <div className="grid gap-4 md:grid-cols-3">
              {[1, 2, 3].map(i => (
                <Skeleton key={i} className="h-[160px] rounded-xl" />
              ))}
            </div>
          ) : recentReceipts.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-3">
              {recentReceipts.map(receipt => (
                <ReceiptCard key={receipt.id} receipt={receipt} />
              ))}
            </div>
          ) : (
            <Card className="border-dashed border-2 bg-transparent text-center p-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-muted/50 flex items-center justify-center">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="space-y-2 max-w-sm">
                  <h3 className="font-semibold text-lg">No receipts yet</h3>
                  <p className="text-sm text-muted-foreground">
                    Upload your first Costco receipt to start tracking price drops.
                  </p>
                </div>
                <Link href="/upload">
                  <Button variant="outline" className="mt-4" data-testid="button-empty-upload">
                    Upload Receipt
                  </Button>
                </Link>
              </div>
            </Card>
          )}
        </section>
      </div>
    </AppLayout>
  )
}

/* ── Stat Card — large number with tiny-caps label ── */
function StatCard({
  title,
  value,
  icon: Icon,
  isLoading,
  valueClass,
}: {
  title: string
  value?: string | number
  icon: LucideIcon
  isLoading: boolean
  valueClass?: string
}) {
  return (
    <Card className="bg-card/40 border-border/40 overflow-hidden relative">
      {/* subtle icon watermark */}
      <Icon className="absolute right-3 top-3 h-4 w-4 text-muted-foreground/20" />
      <CardContent className="pt-5 pb-5 px-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/60 mb-2">
          {title}
        </p>
        {isLoading ? (
          <Skeleton className="h-9 w-20 mt-1" />
        ) : (
          <p className={cn("text-3xl md:text-4xl font-bold font-mono tabular-nums tracking-tight", valueClass)}>
            {value ?? 0}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

/* ── Receipt Card — left accent border signals action priority ── */
function ReceiptCard({ receipt }: { receipt: Receipt }) {
  const accentClass =
    receipt.alertCount > 0
      ? "border-l-[3px] border-l-emerald-500"
      : receipt.reviewCount > 0
        ? "border-l-[3px] border-l-amber-500"
        : "border-l-[3px] border-l-border/30"

  return (
    <Link href={`/receipts/${receipt.id}`}>
      <Card
        className={cn(
          "cursor-pointer transition-all duration-200 hover:bg-card/80 hover:border-border/70 group h-full flex flex-col rounded-xl",
          accentClass
        )}
        data-testid={`card-receipt-${receipt.id}`}
      >
        <CardContent className="pt-5 pb-5 px-5 flex flex-col h-full">
          <div className="flex justify-between items-start gap-2 mb-3">
            <div className="min-w-0">
              <p className="font-semibold text-sm leading-snug truncate">{receipt.warehouse}</p>
              <p className="text-xs text-muted-foreground font-mono mt-0.5">{formatDate(receipt.purchaseDate)}</p>
            </div>
            <p className="font-mono font-medium text-sm shrink-0 tabular-nums">{formatCurrency(receipt.totalAmount)}</p>
          </div>

          <div className="mt-auto pt-3 border-t border-border/40 flex flex-wrap gap-1.5">
            {receipt.alertCount > 0 && (
              <Badge variant="alert" className="font-mono text-[10px] shadow-none">
                {receipt.alertCount} Alert{receipt.alertCount !== 1 ? "s" : ""}
              </Badge>
            )}
            {receipt.reviewCount > 0 && (
              <Badge variant="review" className="font-mono text-[10px] shadow-none">
                {receipt.reviewCount} Review{receipt.reviewCount !== 1 ? "s" : ""}
              </Badge>
            )}
            {receipt.alertCount === 0 && receipt.reviewCount === 0 && (
              <Badge variant="no_action" className="font-mono text-[10px] shadow-none">
                No Action
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
