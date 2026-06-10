import { useEffect } from "react";

export function Cursor() {
  useEffect(() => {
    const dot  = document.getElementById("c-dot");
    const ring = document.getElementById("c-ring");
    if (!dot || !ring) return;

    let mx = -200, my = -200;
    let rx = -200, ry = -200;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
    };

    const raf = () => {
      rx += (mx - 15 - rx) * 0.1;
      ry += (my - 15 - ry) * 0.1;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      rafId = requestAnimationFrame(raf);
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, .img-w, .svc-card, .menu-card, .cred-badge, .info-card")) {
        ring.style.width  = "52px";
        ring.style.height = "52px";
        ring.style.borderColor = "rgba(201,168,76,0.8)";
        dot.style.opacity = "0";
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, .img-w, .svc-card, .menu-card, .cred-badge, .info-card")) {
        ring.style.width  = "30px";
        ring.style.height = "30px";
        ring.style.borderColor = "rgba(201,168,76,0.5)";
        dot.style.opacity = "1";
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout",  onOut);
    rafId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout",  onOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
