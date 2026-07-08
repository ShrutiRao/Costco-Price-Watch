import { useGetReceipt, useGetReceiptComparison, useListPolicies, useDeleteReceipt, getGetReceiptQueryKey, getGetReceiptComparisonQueryKey } from "@workspace/api-client-react"
import { AppLayout } from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, Trash2, ShieldAlert, AlertTriangle, CheckCircle, Info } from "lucide-react"
import { Link, useParams, useLocation } from "wouter"
import { cn, formatCurrency, formatDate, formatPercent } from "@/lib/utils"

export default function ReceiptDetail() {
  const { id } = useParams()
  const [, setLocation] = useLocation()
  
  const { data: receipt, isLoading: isReceiptLoading } = useGetReceipt(id!, {
    query: { enabled: !!id, queryKey: getGetReceiptQueryKey(id!) }
  })
  
  const { data: comparison, isLoading: isComparisonLoading } = useGetReceiptComparison(id!, {
    query: { enabled: !!id, queryKey: getGetReceiptComparisonQueryKey(id!) }
  })

  const { data: policies, isLoading: isPoliciesLoading } = useListPolicies()
  const deleteMutation = useDeleteReceipt()

  const handleDelete = () => {
    if (!id) return
    if (confirm("Are you sure you want to delete this receipt? This action cannot be undone.")) {
      deleteMutation.mutate({ receiptId: id }, {
        onSuccess: () => {
          setLocation("/receipts")
        }
      })
    }
  }

  const isLoading = isReceiptLoading || isComparisonLoading

  if (isLoading && !receipt) {
    return (
      <AppLayout>
        <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-6">
          <Skeleton className="h-8 w-32 mb-8" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-[400px] w-full" />
        </div>
      </AppLayout>
    )
  }

  if (!receipt) {
    return (
      <AppLayout>
        <div className="p-10 text-center">Receipt not found.</div>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-8 pb-24 md:pb-10">
        
        {/* Header Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <Link href="/receipts" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Receipts
            </Link>
            <h1 className="text-3xl font-bold tracking-tight">{receipt.warehouse}</h1>
            <div className="flex items-center gap-3 mt-2 text-muted-foreground font-mono text-sm">
              <span>{formatDate(receipt.purchaseDate)}</span>
              <span>•</span>
              <span className="truncate max-w-[200px]">{receipt.filename}</span>
              {receipt.memberNumber && (
                <>
                  <span>•</span>
                  <span>Member: {receipt.memberNumber}</span>
                </>
              )}
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={handleDelete} className="text-destructive hover:bg-destructive/10 hover:text-destructive self-start" data-testid="button-delete-receipt">
            <Trash2 className="h-4 w-4 mr-2" /> Delete
          </Button>
        </div>

        {/* Summary Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-emerald-500/10 border-emerald-500/20">
            <CardContent className="p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-emerald-500/80 mb-1">Est. Refund</p>
              <p className="text-2xl font-bold text-emerald-500 font-mono">{formatCurrency(comparison?.estimatedRefund ?? 0)}</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardContent className="p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">Alerts</p>
              <p className="text-2xl font-bold font-mono">{comparison?.alertCount ?? 0}</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardContent className="p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">Reviews</p>
              <p className="text-2xl font-bold font-mono">{comparison?.reviewCount ?? 0}</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardContent className="p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">Total Spent</p>
              <p className="text-2xl font-bold font-mono">{formatCurrency(receipt.totalAmount)}</p>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Price Comparison</h2>
          <Card className="overflow-hidden border-border/50 shadow-lg">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead className="w-[300px]">Item</TableHead>
                  <TableHead className="text-right">Purchased</TableHead>
                  <TableHead className="text-right">Current</TableHead>
                  <TableHead className="text-right">Drop</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparison?.items.map((item) => (
                  <TableRow key={item.id} className="group" data-testid={`row-item-${item.id}`}>
                    <TableCell>
                      <div className="font-medium text-foreground">{item.name}</div>
                      <div className="text-xs text-muted-foreground font-mono mt-1">Item #{item.itemNumber} • {item.category}</div>
                      {item.verdict !== 'no_action' && item.evidenceSnippet && (
                        <div className="mt-2 text-xs bg-muted/50 p-2 rounded border border-border/50 text-muted-foreground italic flex gap-2">
                          <Info className="h-3 w-3 mt-0.5 shrink-0" />
                          <span>{item.evidenceSnippet}</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="text-right font-mono">{formatCurrency(item.purchasePrice)}</TableCell>
                    <TableCell className="text-right font-mono">{formatCurrency(item.currentPrice)}</TableCell>
                    <TableCell className="text-right font-mono">
                      {item.priceDrop > 0 ? (
                        <div className="text-emerald-500 font-medium">
                          -{formatCurrency(item.priceDrop)}
                          <span className="text-xs opacity-70 ml-1">({formatPercent(item.percentDrop)})</span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {item.verdict === 'alert' && (
                        <Badge variant="alert" className="font-mono text-xs uppercase px-2 py-1 shadow-sm"><ShieldAlert className="w-3 h-3 mr-1" /> Alert</Badge>
                      )}
                      {item.verdict === 'review' && (
                        <Badge variant="review" className="font-mono text-xs uppercase px-2 py-1"><AlertTriangle className="w-3 h-3 mr-1" /> Review</Badge>
                      )}
                      {item.verdict === 'no_action' && (
                        <Badge variant="no_action" className="font-mono text-xs uppercase px-2 py-1"><CheckCircle className="w-3 h-3 mr-1" /> Okay</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Policies Accordion */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Relevant Policies</h2>
          <Card className="border-border/50">
            <CardContent className="p-0">
              {isPoliciesLoading ? (
                <div className="p-6 space-y-4">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ) : (
                <Accordion type="single" collapsible className="w-full">
                  {policies?.map((policy) => {
                    const isRelevant = comparison?.items.some(i => i.policyRuleId === policy.id && i.verdict !== 'no_action')
                    
                    return (
                      <AccordionItem key={policy.id} value={policy.id} className="px-6 data-[state=open]:bg-muted/10">
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-3 text-left">
                            <span className={cn("font-medium", isRelevant ? "text-emerald-500" : "")}>{policy.title}</span>
                            {isRelevant && <Badge variant="outline" className="text-[10px] uppercase border-emerald-500/30 text-emerald-500">Active Rule</Badge>}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-2 text-muted-foreground leading-relaxed">
                            <p>{policy.description}</p>
                            
                            {policy.conditions.length > 0 && (
                              <div>
                                <h4 className="text-sm font-semibold text-foreground mb-2">Conditions</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                  {policy.conditions.map((cond, i) => <li key={i}>{cond}</li>)}
                                </ul>
                              </div>
                            )}
                            
                            {policy.exclusions.length > 0 && (
                              <div>
                                <h4 className="text-sm font-semibold text-foreground mb-2">Exclusions</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm">
                                  {policy.exclusions.map((excl, i) => <li key={i}>{excl}</li>)}
                                </ul>
                              </div>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    )
                  })}
                </Accordion>
              )}
            </CardContent>
          </Card>
        </div>

      </div>
    </AppLayout>
  )
}
