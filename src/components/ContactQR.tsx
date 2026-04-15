import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";
import { Download } from "lucide-react";

const VCARD = `BEGIN:VCARD
VERSION:3.0
FN:Aprecia s.r.o.
ORG:Aprecia s.r.o.
TEL;TYPE=WORK,VOICE:+421903991150
EMAIL;TYPE=WORK:aprecia@aprecia.sk
ADR;TYPE=WORK:;;Na Hrebienku 8079/2A;Bratislava;;811 02;Slovakia
URL:https://www.aprecia.sk
END:VCARD`;

interface ContactQRProps {
  downloadLabel: string;
}

export const ContactQR = ({ downloadLabel }: ContactQRProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const svg = canvasRef.current?.querySelector("svg");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const size = 512;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);
      const link = document.createElement("a");
      link.download = "aprecia-kontakt-qr.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div ref={canvasRef} className="bg-background p-4 border border-border inline-block">
        <QRCodeSVG
          value={VCARD}
          size={160}
          level="M"
          fgColor="hsl(0, 0%, 12%)"
          bgColor="hsl(0, 0%, 100%)"
        />
      </div>
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-2 text-sm text-primary hover:underline transition-colors"
      >
        <Download className="w-4 h-4" />
        {downloadLabel}
      </button>
    </div>
  );
};
