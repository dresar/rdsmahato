import { motion } from 'framer-motion';
import { Check, Clock, CircleDot } from 'lucide-react';
import { registrationStatus } from '@/data/mockData';

const StatusPendaftaranPage = () => {
  const { steps, summary } = registrationStatus;

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-1">Status Pendaftaran</h1>
        <p className="text-sm text-muted-foreground mb-8">Pantau progres pendaftaran Anda secara real-time.</p>

        {/* Progress tracker */}
        <div className="glass-card p-6 mb-6">
          <div className="relative">
            {steps.map((step, i) => {
              const Icon = step.status === 'done' ? Check : step.status === 'current' ? CircleDot : Clock;
              return (
                <div key={i} className="flex items-start gap-4 relative">
                  {i < steps.length - 1 && (
                    <div className={`absolute left-[15px] top-8 w-0.5 h-[calc(100%-8px)] ${step.status === 'done' ? 'bg-primary' : 'bg-border'}`} />
                  )}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ${
                    step.status === 'done' ? 'bg-primary text-primary-foreground' :
                    step.status === 'current' ? 'bg-primary/20 text-primary border-2 border-primary' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="pb-8">
                    <p className={`text-sm font-medium ${step.status === 'current' ? 'text-primary' : step.status === 'done' ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {step.label}
                    </p>
                    {step.date && <p className="text-xs text-muted-foreground mt-0.5">{step.date}</p>}
                    {step.status === 'current' && (
                      <span className="inline-flex items-center gap-1 mt-1.5 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Sedang Diproses
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4">Ringkasan Pendaftaran</h3>
          <div className="space-y-3">
            {summary.map((item, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StatusPendaftaranPage;
