type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Standard page-width wrapper. Uses the shared `container-custom` utility so
 * spacing stays consistent with the rest of the site.
 */
export default function Container({ children, className = "" }: ContainerProps) {
  return <div className={`container-custom ${className}`}>{children}</div>;
}
