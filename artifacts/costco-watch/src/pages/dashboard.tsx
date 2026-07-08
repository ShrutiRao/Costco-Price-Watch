import { useGetDashboardSummary, useListReceipts } from "@workspace/api-client-react"
import { AppLayout } from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { FileText, ArrowRight, TrendingDown, Search, AlertTriangle, Package } from "lucide-react"
import { Link } from "wouter"
import { cn, formatCurrency, formatDate } from "@/lib/utils"

export default function Dashboard() {
  const { data: summary, isLoading: isSummaryLoading } = useGetDashboardSummary()
  const { data: receipts, isLoading: isReceiptsLoading } = useListReceipts()

  const recentReceipts = receipts?.slice(0, 3) || []

  return (
    <AppLayout>
      <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-10 pb-24 md:pb-10">
        
        {/* Hero Section */}
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Never miss a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Costco price drop.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Upload your receipt, track your purchase, and get evidence-backed alerts when a better price appears.
          </p>
          <div className="pt-4 flex gap-4">
            <Link href="/upload">
              <Button size="lg" className="h-12 px-6 text-base font-semibold shadow-[0_0_20px_rgba(16,185,129,0.2)]" data-testid="button-upload-hero">
                <FileText className="mr-2 h-5 w-5" />
                Upload Receipt
              </Button>
            </Link>
          </div>
        </section>

        {/* Stats Row */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
            valueClass="text-emerald-500"
          />
          <StatCard 
            title="Est. Savings" 
            value={summary?.estimatedTotalSavings !== undefined ? formatCurrency(summary.estimatedTotalSavings) : undefined} 
            icon={TrendingDown} 
            isLoading={isSummaryLoading} 
          />
        </section>

        {/* Recent Activity */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Recent Receipts</h2>
            <Link href="/receipts">
              <Button variant="ghost" className="gap-2" data-testid="link-view-all-receipts">
                View all <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {isReceiptsLoading ? (
            <div className="grid gap-4 md:grid-cols-3">
              {[1, 2, 3].map(i => (
                <Skeleton key={i} className="h-[200px] rounded-xl" />
              ))}
            </div>
          ) : recentReceipts.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-3">
              {recentReceipts.map(receipt => (
                <Link key={receipt.id} href={`/receipts/${receipt.id}`}>
                  <Card className="hover-elevate cursor-pointer transition-all duration-300 hover:border-primary/50 group h-full flex flex-col" data-testid={`card-receipt-${receipt.id}`}>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{receipt.warehouse}</CardTitle>
                          <CardDescription className="font-mono mt-1 text-xs">
                            {formatDate(receipt.purchaseDate)}
                          </CardDescription>
                        </div>
                        <div className="font-mono font-medium">{formatCurrency(receipt.totalAmount)}</div>
                      </div>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="pt-4 border-t border-border/50 flex flex-wrap gap-2">
                        {receipt.alertCount > 0 && (
                          <Badge variant="alert" className="font-mono text-xs shadow-none">
                            {receipt.alertCount} Alert{receipt.alertCount !== 1 ? 's' : ''}
                          </Badge>
                        )}
                        {receipt.reviewCount > 0 && (
                          <Badge variant="review" className="font-mono text-xs shadow-none">
                            {receipt.reviewCount} Review{receipt.reviewCount !== 1 ? 's' : ''}
                          </Badge>
                        )}
                        {receipt.alertCount === 0 && receipt.reviewCount === 0 && (
                          <Badge variant="no_action" className="font-mono text-xs shadow-none">
                            No Action
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
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
                  <p className="text-sm text-muted-foreground">Upload your first Costco receipt to start tracking price drops and saving money.</p>
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

function StatCard({ title, value, icon: Icon, isLoading, valueClass }: { title: string, value?: string | number, icon: any, isLoading: boolean, valueClass?: string }) {
  return (
    <Card className="bg-card/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground/50" />
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Skeleton className="h-8 w-24" />
        ) : (
          <div className={cn("text-2xl font-bold font-mono tracking-tight", valueClass)}>
            {value ?? 0}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
