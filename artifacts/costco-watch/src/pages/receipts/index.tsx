import { useListReceipts, useDeleteReceipt, getListReceiptsQueryKey } from "@workspace/api-client-react"
import { useQueryClient } from "@tanstack/react-query"
import { AppLayout } from "@/components/layout"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { FileText, Plus, ChevronRight, Trash2 } from "lucide-react"
import { Link } from "wouter"
import { cn, formatCurrency, formatDate } from "@/lib/utils"
import type { Receipt } from "@workspace/api-client-react"

export default function ReceiptsList() {
  const { data: receipts, isLoading } = useListReceipts()
  const queryClient = useQueryClient()
  const deleteMutation = useDeleteReceipt({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getListReceiptsQueryKey() })
      },
    },
  })

  const handleDelete = (receiptId: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    deleteMutation.mutate({ receiptId })
  }

  return (
    <AppLayout>
      <div className="p-6 md:p-10 max-w-6xl mx-auto pb-24 md:pb-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Receipts</h1>
            <p className="text-muted-foreground mt-1.5 text-sm">
              Tracked purchases and price drop history.
            </p>
          </div>
          <Link href="/upload">
            <Button data-testid="button-new-receipt" size="sm">
              <Plus className="mr-1.5 h-3.5 w-3.5" />
              Add Receipt
            </Button>
          </Link>
        </div>

        <Card className="overflow-hidden border-border/40 shadow-lg">
          {isLoading ? (
            <div className="p-6 space-y-3">
              {[1, 2, 3, 4, 5].map(i => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          ) : receipts && receipts.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-border/40">
                  <TableHead className="text-[11px] uppercase tracking-widest text-muted-foreground/60 font-semibold w-[5px] p-0" />
                  <TableHead className="text-[11px] uppercase tracking-widest text-muted-foreground/60 font-semibold">Warehouse</TableHead>
                  <TableHead className="text-[11px] uppercase tracking-widest text-muted-foreground/60 font-semibold">Purchase Date</TableHead>
                  <TableHead className="text-[11px] uppercase tracking-widest text-muted-foreground/60 font-semibold text-right">Total</TableHead>
                  <TableHead className="text-[11px] uppercase tracking-widest text-muted-foreground/60 font-semibold text-right">Est. Refund</TableHead>
                  <TableHead className="text-[11px] uppercase tracking-widest text-muted-foreground/60 font-semibold">Verdicts</TableHead>
                  <TableHead className="w-[80px]" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {receipts.map(receipt => (
                  <ReceiptRow
                    key={receipt.id}
                    receipt={receipt}
                    onDelete={handleDelete}
                    isDeleting={deleteMutation.isPending}
                  />
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

function ReceiptRow({
  receipt,
  onDelete,
  isDeleting,
}: {
  receipt: Receipt
  onDelete: (id: string, e: React.MouseEvent) => void
  isDeleting: boolean
}) {
  const accentColor =
    receipt.alertCount > 0
      ? "bg-emerald-500"
      : receipt.reviewCount > 0
        ? "bg-amber-500"
        : "bg-border/30"

  return (
    <TableRow
      className="group relative cursor-pointer border-border/30 hover:bg-white/[0.03]"
      data-testid={`row-receipt-${receipt.id}`}
    >
      {/* Left accent bar */}
      <TableCell className="p-0 w-[4px]">
        <div className={cn("w-[3px] h-full min-h-[48px] rounded-r-full", accentColor)} />
      </TableCell>

      <TableCell className="font-medium text-sm">
        {receipt.warehouse}
        <div className="text-xs text-muted-foreground md:hidden mt-0.5">{formatDate(receipt.purchaseDate)}</div>
      </TableCell>
      <TableCell className="hidden md:table-cell font-mono text-xs text-muted-foreground tabular-nums">
        {formatDate(receipt.purchaseDate)}
      </TableCell>
      <TableCell className="text-right font-mono text-sm tabular-nums">
        {formatCurrency(receipt.totalAmount)}
      </TableCell>
      <TableCell className="text-right font-mono text-sm font-semibold text-emerald-400 tabular-nums">
        {receipt.estimatedRefund > 0 ? formatCurrency(receipt.estimatedRefund) : <span className="text-muted-foreground/40 font-normal">—</span>}
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
      <TableCell className="text-right">
        <Link href={`/receipts/${receipt.id}`} className="absolute inset-0">
          <span className="sr-only">View Receipt</span>
        </Link>
        <div className="relative z-10 flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive hover:bg-destructive/10"
            onClick={(e) => onDelete(receipt.id, e)}
            disabled={isDeleting}
            data-testid={`btn-delete-receipt-${receipt.id}`}
            aria-label="Delete receipt"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
          <ChevronRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-muted-foreground transition-colors" />
        </div>
      </TableCell>
    </TableRow>
  )
}
