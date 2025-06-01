
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, PlayCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import { useDiagnostics } from '@/hooks/useDiagnostics';

const DiagnosticsPanel = () => {
  const { diagnostics, isRunning, runDiagnosticsCheck } = useDiagnostics();
  const [isOpen, setIsOpen] = useState(false);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'needs-attention':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'bg-green-100 text-green-800';
      case 'needs-attention':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="mb-2">
            <PlayCircle className="h-4 w-4 mr-2" />
            Diagnostics
            <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card className="w-80 max-h-96 overflow-y-auto">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center justify-between">
                Website Diagnostics
                <Button
                  size="sm"
                  onClick={runDiagnosticsCheck}
                  disabled={isRunning}
                  variant="outline"
                >
                  {isRunning ? 'Running...' : 'Refresh'}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {diagnostics ? (
                Object.entries(diagnostics).map(([category, data]: [string, any]) => (
                  <div key={category} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium capitalize">{category}</span>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(data.status)}
                        <Badge className={getStatusColor(data.status)}>
                          {data.status}
                        </Badge>
                      </div>
                    </div>
                    {data.issues && data.issues.length > 0 && (
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        {data.issues.map((issue: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">Loading diagnostics...</p>
              )}
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default DiagnosticsPanel;
