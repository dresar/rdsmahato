import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { notifications as initialNotifications } from '@/data/mockData';

const typeIcon = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
};

const typeColor = {
  info: 'text-blue-400',
  success: 'text-primary',
  warning: 'text-yellow-500',
};

const NotifikasiPage = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllRead = () => setNotifications(n => n.map(x => ({ ...x, read: true })));
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Notifikasi</h1>
            {unreadCount > 0 && (
              <p className="text-sm text-muted-foreground mt-1">{unreadCount} belum dibaca</p>
            )}
          </div>
          {unreadCount > 0 && (
            <button onClick={markAllRead} className="text-sm text-primary font-medium hover:underline">
              Tandai semua dibaca
            </button>
          )}
        </div>

        <div className="space-y-2">
          {notifications.map((notif, i) => {
            const Icon = typeIcon[notif.type];
            return (
              <motion.div
                key={notif.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setNotifications(n => n.map(x => x.id === notif.id ? { ...x, read: true } : x))}
                className={`glass-card p-4 cursor-pointer transition-colors ${!notif.read ? 'border-l-2 border-l-primary bg-primary/5' : ''}`}
              >
                <div className="flex gap-3">
                  <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${typeColor[notif.type]}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className={`text-sm font-medium truncate ${!notif.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {notif.title}
                      </p>
                      {!notif.read && <span className="w-2 h-2 rounded-full bg-primary shrink-0" />}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{notif.message}</p>
                    <p className="text-[11px] text-muted-foreground/60 mt-1.5">{notif.date}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default NotifikasiPage;
