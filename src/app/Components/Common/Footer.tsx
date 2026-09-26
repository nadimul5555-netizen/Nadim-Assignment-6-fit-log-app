import Image from "next/image";
import Logo from "@/assets/logo.png"

const Footer = () => {
  return (
    <footer className="border-t border-[#24262d] bg-[#0c0d10]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex min-h-16 flex-col items-center justify-between gap-3 py-4 sm:flex-row">

       
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="Logo"></Image>

            <span className="text-sm font-bold tracking-wide text-white">
              FITLOG
            </span>
          </div>

          <p className="text-center text-[10px] text-gray-500 sm:text-right">
            © 2026 Fitlog — Workout Library. Train hard, log honest.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;