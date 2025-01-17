export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto max-w-[1264px]">
      {children}
    </div>
  );
}