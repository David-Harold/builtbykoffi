"use client";

export default function CityScene() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: "url('/yaoundenight.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0F0F0F]/60" />
    </div>
  );
}