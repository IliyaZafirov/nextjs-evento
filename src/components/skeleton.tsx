import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className }: SkeletonProps) {
  //   return <div className={`${className} h-4 w-[550px] rounded-md bg-white/5`} />;
  return (
    <div
      className={cn(
        "${className} h-4 w-[550px] rounded-md bg-white/5",
        className
      )}
    />
  );
}
