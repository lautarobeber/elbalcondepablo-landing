const columns = [
  {
    title: 'Verken',
    links: ['Journaal', 'Interviews', 'Architectuur', 'Agenda'],
  },
  {
    title: 'District',
    links: ['Over ons', 'Contact', 'Pers', 'Vacatures'],
  },
  {
    title: 'Volg',
    links: ['Instagram', 'LinkedIn', 'Nieuwsbrief'],
  },
]

export default function Footer() {
  return (
    <footer className="w-full bg-newsprint-gray px-[20px] pb-[40px] pt-[80px] lg:px-[40px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 gap-[30px] sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-caption leading-[1.15] text-charcoal-ink">
              Eindhoven
              <br />
              Design District
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-caption text-pewter">{col.title}</p>
              <ul className="mt-[15px] flex flex-col gap-[10px]">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-body-sm tracking-body-sm text-charcoal-ink">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-[50px] flex flex-col gap-[10px] border-t border-pewter pt-[20px] text-caption text-pewter sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Eindhoven Design District</span>
          <span>Een municipaal designmanifest op papier.</span>
        </div>
      </div>
    </footer>
  )
}
