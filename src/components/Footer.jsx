export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-5">
      <div className="section-container flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Prashant Verma. Built with React & Tailwind CSS.
        </p>
        
      </div>
    </footer>
  )
}
