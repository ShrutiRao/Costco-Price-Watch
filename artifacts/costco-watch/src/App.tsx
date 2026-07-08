import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { ThemeProvider } from '@/components/theme-provider';

// Pages
import Dashboard from '@/pages/dashboard';
import UploadReceipt from '@/pages/upload';
import ReceiptsList from '@/pages/receipts/index';
import ReceiptDetail from '@/pages/receipts/detail';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/upload" component={UploadReceipt} />
      <Route path="/receipts" component={ReceiptsList} />
      <Route path="/receipts/:id" component={ReceiptDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
