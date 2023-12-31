"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";

      return document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed bottom-0 left-0 right-0 top-0 z-10 mx-auto  bg-black/60"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute left-1/2 top-1/2 flex w-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border-2 border-heliotrope bg-mine-shaft-darken p-16"
      >
        {children}
      </div>
    </div>
  );
}
