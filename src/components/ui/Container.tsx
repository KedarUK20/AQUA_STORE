type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-10">
      {children}
    </div>
  );
}
