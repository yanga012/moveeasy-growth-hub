
import { useEffect, useState } from 'react';
import { runDiagnostics } from '@/utils/diagnostics';

export const useDiagnostics = () => {
  const [diagnostics, setDiagnostics] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const runDiagnosticsCheck = async () => {
    setIsRunning(true);
    try {
      // Run diagnostics after a small delay to ensure DOM is ready
      setTimeout(() => {
        const results = runDiagnostics();
        setDiagnostics(results);
        setIsRunning(false);
      }, 100);
    } catch (error) {
      console.error('Error running diagnostics:', error);
      setIsRunning(false);
    }
  };

  useEffect(() => {
    // Run diagnostics on component mount
    runDiagnosticsCheck();
  }, []);

  return {
    diagnostics,
    isRunning,
    runDiagnosticsCheck
  };
};
