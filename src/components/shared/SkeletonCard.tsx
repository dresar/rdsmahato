import { Skeleton } from '@/components/ui/skeleton';

const SkeletonCard = () => (
  <div className="glass-card overflow-hidden">
    <Skeleton className="aspect-[4/3] w-full" />
    <div className="p-4 space-y-2">
      <Skeleton className="h-3 w-1/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-3 w-2/3" />
    </div>
  </div>
);

export default SkeletonCard;
