export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="VK logo"
    >
      {/* Dark rounded square background */}
      <rect width="44" height="44" rx="10" fill="#111827" />

      {/* V — orange accent */}
      <path
        d="M6 11L13 33L20 11"
        stroke="#f97316"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* K — white */}
      <path
        d="M25 11V33M25 22L38 11M25 22L38 33"
        stroke="#ffffff"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
