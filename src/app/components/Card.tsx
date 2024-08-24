export default function Card({
  children,
  className
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <div className={
    `bg-white transition-all duration-300 rounded-lg shadow-md p-6 dark:bg-dark-base dark:border dark:border-neutral-700 ${className}`
  }>{children}</div>;
}
