"use client"

export default function WhatsAppButton() {
  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "pF2LCOiP2c8bEI-F_IlC",
        event_callback: () => {
          console.log("WhatsApp conversion tracked")
        },
      })
    }
  }

  return (
    <a
      href="https://wa.me/6283822640883?text=Halo%20Yaumul%2C%20saya%20pelaku%20UMKM%20mau%20konsultasi%20pembuatan%20website%20untuk%20usaha%20saya.%20Bisa%20bantu%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-all duration-300"
      style={{
        background: "#2A8E9E",
        boxShadow: "0 8px 20px rgba(42, 142, 158, 0.35)",
        animation: "waGlow 3s ease-in-out infinite",
      }}
      onClick={handleClick}
      aria-label="Chat WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.73 0 .58 5.15.58 11.47c0 2.02.52 4 .1 5.88L0 24l6.86-1.82a12.18 12.18 0 0 0 5.14 1.18h.01c6.32 0 11.47-5.15 11.47-11.47 0-3.07-1.2-5.95-3.46-8.21ZM12.04 22a10.1 10.1 0 0 1-5.18-1.42l-.37-.22-4.07 1.08 1.09-3.97-.24-.41A10 10 0 1 1 12.04 22Zm5.55-7.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37 0-.52-.05-.15-.67-1.62-.92-2.22-.24-.57-.48-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47 0 1.45 1.06 2.85 1.21 3.05.15.2 2.09 3.19 5.1 4.38.71.3 1.27.47 1.7.6.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  )
}