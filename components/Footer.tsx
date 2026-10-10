import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold">ANARGYA</p>
          <p className="mt-2 text-sm">ITS Formula EV Team</p>
        </div>

        <div>
          <p className="font-semibold">Navigation</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/cars">Cars</Link></li>
            <li><Link href="/#achievement">Achievement</Link></li>
            <li><Link href="/#partner">Partner</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Contact Us</p>
          <p className="mt-2 text-sm">[email@contoh.com]</p>
          <p className="mt-4 font-semibold">Social Media</p>
          <p className="mt-2 text-sm">[Instagram] [YouTube]</p>
        </div>
      </div>
    </footer>
  );
}