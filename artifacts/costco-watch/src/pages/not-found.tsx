import { useLocation } from "wouter";
import { AlertCircle } from "lucide-react";
import { AppLayout } from "@/components/layout";

export default function NotFound() {
  const [location] = useLocation();

  return (
    <AppLayout>
      <div className="flex w-full items-center justify-center p-12 mt-20">
        <div className="w-full max-w-md text-center space-y-6">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 bg-muted/50 rounded-full flex items-center justify-center border border-border">
              <AlertCircle className="h-10 w-10 text-muted-foreground" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Page not found
          </h1>
          
          <p className="text-muted-foreground">
            The page you are looking for at <span className="font-mono text-foreground bg-muted/50 px-1 py-0.5 rounded">{location}</span> doesn't exist.
          </p>

          <div className="mt-8">
            <a 
              href="/" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8"
            >
              Return Home
            </a>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
