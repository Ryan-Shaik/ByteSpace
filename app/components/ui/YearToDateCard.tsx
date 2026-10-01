/** Blue "Year to Date" floating card for the creator promo row. */
export default function YearToDateCard() {
  return (
    <div className="w-[170px] rounded-card bg-brand p-4 shadow-panel text-on-brand">
      <p className="text-[11px] font-medium text-on-brand/80">Year to Date</p>
      <p className="text-[9px] text-on-brand/50">2023</p>
      <p className="mt-0.5 text-[22px] font-bold tracking-tight">$1,200.38</p>
      <span className="mt-2 inline-block rounded-pill bg-accent px-2.5 py-0.5 text-[10px] font-bold text-on-accent">
        +12$
      </span>
    </div>
  );
}
