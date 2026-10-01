/** Blue "Total Revenue" floating card for the creator promo row with lime progress bar. */
export default function TotalRevenueCard() {
  return (
    <div className="w-[185px] rounded-card bg-brand p-4 shadow-panel text-on-brand">
      <p className="text-[11px] font-medium text-on-brand/80">Total Revenue</p>
      <p className="text-[9px] text-on-brand/50">July 1-28</p>
      <p className="mt-0.5 text-[22px] font-bold tracking-tight">$120.29</p>
      <div className="mt-2 h-1.5 w-full rounded-pill bg-white/20 overflow-hidden">
        <div className="h-full w-3/5 rounded-pill bg-accent" />
      </div>
    </div>
  );
}
