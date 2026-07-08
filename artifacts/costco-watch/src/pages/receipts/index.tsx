import { useListReceipts } from "@workspace/api-client-react"
import { AppLayout } from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { FileText, Plus, ChevronRight } from "lucide-react"
import { Link } from "wouter"
import { formatCurrency, formatDate } from "@/lib/utils"

export default function ReceiptsList() {
  const { data: receipts, isLoading } = useListReceipts()

  return (
    <AppLayout>
      <div className="p-6 md:p-10 max-w-6xl mx-auto pb-24 md:pb-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Receipts</h1>
            <p className="text-muted-foreground mt-2">
              Tracked purchases and price drop history.
            </p>
          </div>
          <Link href="/upload">
            <Button data-testid="button-new-receipt">
              <Plus className="mr-2 h-4 w-4" />
              Add Receipt
            </Button>
          </Link>
        </div>

        <Card className="overflow-hidden border-border/50 shadow-md">
          {isLoading ? (
            <div className="p-6 space-y-4">
              {[1, 2, 3, 4, 5].map(i => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          ) : receipts && receipts.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>Warehouse</TableHead>
                  <TableHead>Purchase Date</TableHead>
                  <TableHead className="text-right">Total Amount</TableHead>
                  <TableHead className="text-right">Est. Refund</TableHead>
                  <TableHead>Verdicts</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {receipts.map(receipt => (
                  <TableRow 
                    key={receipt.id} 
                    className="group cursor-pointer"
                    data-testid={`row-receipt-${receipt.id}`}
                  >
                    <TableCell className="font-medium">
                      {receipt.warehouse}
                      <div className="text-xs text-muted-foreground md:hidden mt-1">{formatDate(receipt.purchaseDate)}</div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell font-mono text-muted-foreground">
                      {formatDate(receipt.purchaseDate)}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatCurrency(receipt.totalAmount)}
                    </TableCell>
                    <TableCell className="text-right font-mono font-medium text-emerald-500">
                      {receipt.estimatedRefund > 0 ? formatCurrency(receipt.estimatedRefund) : '-'}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1.5">
                        {receipt.alertCount > 0 && (
                          <Badge variant="alert" className="font-mono text-[10px] uppercase">
                            {receipt.alertCount} Alert
                          </Badge>
                        )}
                        {receipt.reviewCount > 0 && (
                          <Badge variant="review" className="font-mono text-[10px] uppercase">
                            {receipt.reviewCount} Review
                          </Badge>
                        )}
                        {receipt.alertCount === 0 && receipt.reviewCount === 0 && (
                          <Badge variant="no_action" className="font-mono text-[10px] uppercase">
                            No Action
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Link href={`/receipts/${receipt.id}`} className="absolute inset-0">
                        <span className="sr-only">View Receipt</span>
                      </Link>
                      <ChevronRight className="h-4 w-4 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="p-12 text-center flex flex-col items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-medium text-lg">No receipts found</h3>
              <p className="text-sm text-muted-foreground mt-1 max-w-sm">
                You haven't uploaded any receipts yet. Add your first one to start tracking.
              </p>
            </div>
          )}
        </Card>
      </div>
    </AppLayout>
  )
}
