interface IconProps {
  size?: number;
  className?: string;
}

const LinkedInIcon = ({ size = 20, className = "" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.23v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9V9h3v1.56h.04c.42-.8 1.45-1.64 3-1.64 3.21 0 3.8 2.12 3.8 4.87v6.66zM5.34 7.43a1.88 1.88 0 1 1 0-3.76 1.88 1.88 0 0 1 0 3.76zM6.96 20.45H3.72V9h3.24v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
};

export default LinkedInIcon;
