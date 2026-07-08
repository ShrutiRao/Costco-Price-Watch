import { useState, useCallback } from "react"
import { useUploadReceipt } from "@workspace/api-client-react"
import { useLocation } from "wouter"
import { AppLayout } from "@/components/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UploadCloud, File, AlertCircle, Loader2, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function UploadReceipt() {
  const [, setLocation] = useLocation()
  const uploadMutation = useUploadReceipt()
  
  const [dragActive, setDragActive] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    setError(null)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const selectedFile = e.dataTransfer.files[0]
      if (isValidFile(selectedFile)) {
        setFile(selectedFile)
      } else {
        setError("Please upload a valid image (JPG, PNG) or PDF.")
      }
    }
  }, [])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setError(null)
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      if (isValidFile(selectedFile)) {
        setFile(selectedFile)
      } else {
        setError("Please upload a valid image (JPG, PNG) or PDF.")
      }
    }
  }, [])

  const isValidFile = (file: File) => {
    return file.type.startsWith('image/') || file.type === 'application/pdf'
  }

  const handleUpload = () => {
    if (!file) return

    uploadMutation.mutate({ data: { file } }, {
      onSuccess: (receipt) => {
        setLocation(`/receipts/${receipt.id}`)
      },
      onError: () => {
        setError("Failed to upload receipt. Please try again.")
      }
    })
  }

  const isUploading = uploadMutation.isPending

  return (
    <AppLayout>
      <div className="p-6 md:p-10 max-w-4xl mx-auto pb-24 md:pb-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Upload Receipt</h1>
          <p className="text-muted-foreground mt-2">
            Submit your Costco receipt for automated price drop analysis.
          </p>
        </div>

        <Card className="border-border/50 bg-card/50 overflow-hidden shadow-2xl">
          <CardContent className="p-0">
            {!file ? (
              <div 
                className={cn(
                  "p-12 md:p-24 flex flex-col items-center justify-center text-center transition-all duration-200 border-2 border-dashed mx-6 my-6 rounded-xl",
                  dragActive ? "border-primary bg-primary/5" : "border-border/60 hover:border-primary/50 hover:bg-muted/20"
                )}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 shadow-inner">
                  <UploadCloud className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Drag and drop your receipt</h3>
                <p className="text-muted-foreground text-sm max-w-xs mb-8">
                  Accepts JPG, PNG, and PDF files. Ensure the warehouse, date, and items are clearly visible.
                </p>
                <div className="relative">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleChange}
                    accept="image/*,application/pdf"
                    data-testid="input-file-upload"
                  />
                  <Button variant="outline" className="pointer-events-none">
                    Browse Files
                  </Button>
                </div>
              </div>
            ) : (
              <div className="p-8 md:p-12 flex flex-col items-center">
                <div className="w-full max-w-md bg-muted/30 rounded-xl border border-border/50 p-6 flex items-start gap-4 relative overflow-hidden group">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <File className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate" title={file.name}>{file.name}</p>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">
                      {(file.size / 1024 / 1024).toFixed(2)} MB • {file.type.split('/')[1]?.toUpperCase()}
                    </p>
                  </div>
                  {!isUploading && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setFile(null)}
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Remove
                    </Button>
                  )}
                </div>

                <div className="mt-8 flex gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setFile(null)} 
                    disabled={isUploading}
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleUpload} 
                    disabled={isUploading}
                    className="w-32"
                    data-testid="button-submit-upload"
                  >
                    {isUploading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing
                      </>
                    ) : (
                      "Process Receipt"
                    )}
                  </Button>
                </div>
              </div>
            )}

            {error && (
              <div className="mx-6 mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-destructive shrink-0" />
                <p className="text-sm text-destructive font-medium">{error}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
