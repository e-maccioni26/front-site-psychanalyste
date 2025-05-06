import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="font-bold text-2xl text-[#2E3A59]">Hervé</span>
        <span className="font-bold text-2xl text-[#A2B6C9]">Maccioni</span>
      </div>
      <ul className="hidden md:flex gap-8 text-[#2E3A59] font-semibold">
        <li><Link href={"/qui-suis-je"}>Qui-suis-je</Link></li>
        <li><Link href={"#pourquoi-consulter"}>Pourquoi Consulter</Link></li>
        <li><Link href={"/accompagnement"}>Psychothérapies</Link></li>
        <li><Link href="/blog">Blog</Link></li>
      </ul>
      <Link href="https://www.doctolib.fr/psychotherapeute/bordeaux/herve-maccioni" className="hidden md:inline-block bg-[#2E3A59] text-white px-5 py-2 rounded-lg font-semibold transition hover:bg-[#1d2536]">Prendre rendez-vous</Link>
      <button className="md:hidden p-2" aria-label="Ouvrir le menu">
        <svg width="28" height="28" fill="#2E3A59" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="#2E3A59" strokeWidth="2" strokeLinecap="round"/></svg>
      </button>
    </nav>
  );
};

export default Navbar;