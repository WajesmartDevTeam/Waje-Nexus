import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/constants/nav";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/utils/cn";
import logoImg from "@/assets/WajeNexus logo 1.png";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(10);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center",
          scrolled ? "pt-0" : "pt-4",
        )}
      >
        <div
          className={cn(
            "w-full max-w-7xl flex items-center justify-between gap-4 h-[72px] px-3 sm:px-10 rounded-[10px] transition-all duration-300",
            "backdrop-blur-md border-[0.2px] border-[#ADABAA] bg-white",
            "shadow-[0px_4px_10px_0px_#B0B0B01A,0px_18px_18px_0px_#B0B0B017,0px_40px_24px_0px_#B0B0B00D,0px_71px_28px_0px_#B0B0B003,0px_111px_31px_0px_#B0B0B000]",
            scrolled ? "backdrop-blur-xl" : "",
          )}
        >
          {/* Left: logo + separator */}
          <div className="flex items-center gap-4 ">
            <Link to="/home" className="shrink-0">
              <img src={logoImg} alt="WajeNexus" className="h-9 w-auto" />
            </Link>
            <span className="hidden md:block w-px h-7 bg-neutral-200" />
          </div>

          {/* Center: nav links */}
          <nav className="hidden md:flex items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap",
                  isActive(item.href)
                    ? "text-[#016734] font-semibold"
                    : "text-neutral-600 hover:text-neutral-900",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: CTAs */}
          <div className="hidden md:flex items-center gap-4 justify-end ">
            <Link
              to="/login"
              className="flex items-center justify-center px-2 py-2.5 h-10 text-sm font-medium text-neutral-700 border-[0.6px] border-neutral-300 rounded-[8px] hover:bg-neutral-50 transition-colors w-[70px]"
            >
              Login
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center px-2 py-2.5 h-10 text-sm font-semibold text-white bg-neutral-900 rounded-[8px] w-[100px] hover:bg-neutral-800 transition-colors"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden ml-auto p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="fixed top-[96px] inset-x-6 z-40 bg-white border border-neutral-200 rounded-2xl shadow-xl p-4"
          >
            <nav className="flex flex-col gap-0.5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-lg transition-colors",
                    isActive(item.href)
                      ? "text-[#016734] font-semibold bg-neutral-100"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-neutral-100">
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-center text-sm font-medium text-neutral-700 border border-neutral-300 rounded-[8px] hover:bg-neutral-50 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-center text-sm font-semibold text-white bg-neutral-900 rounded-[8px] hover:bg-neutral-800 transition-colors"
              >
                Book Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
