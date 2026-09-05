import { useState } from 'react';
import { Upload, X, FileText, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UploadFieldProps {
  label: string;
  accept?: string;
  onFileSelect?: (name: string) => void;
}

const UploadField = ({ label, accept = '.pdf,.jpg,.png', onFileSelect }: UploadFieldProps) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  const handleSelect = () => {
    // Mock: simulate file selection
    const mockName = `${label.toLowerCase().replace(/\s+/g, '_')}.pdf`;
    setFileName(mockName);
    onFileSelect?.(mockName);
  };

  const handleRemove = () => {
    setFileName(null);
    onFileSelect?.('');
  };

  if (fileName) {
    return (
      <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
        <div className="w-8 h-8 rounded-md gradient-primary flex items-center justify-center shrink-0">
          <Check className="w-4 h-4 text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{label}</p>
          <p className="text-xs text-muted-foreground truncate">{fileName}</p>
        </div>
        <button onClick={handleRemove} className="p-1 text-muted-foreground hover:text-destructive transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleSelect}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => { e.preventDefault(); setDragging(false); handleSelect(); }}
      className={cn(
        'w-full flex flex-col items-center gap-2 p-6 rounded-lg border-2 border-dashed transition-colors text-center cursor-pointer',
        dragging
          ? 'border-primary bg-primary/5'
          : 'border-border hover:border-primary/50 hover:bg-secondary/50'
      )}
    >
      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
        <Upload className="w-5 h-5 text-muted-foreground" />
      </div>
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground mt-0.5">Klik atau seret file ({accept})</p>
      </div>
    </button>
  );
};

export default UploadField;
