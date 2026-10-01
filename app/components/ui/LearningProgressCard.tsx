/** Learning Progress 55 % floating card. */
export default function LearningProgressCard() {
  return (
    <div className="w-[155px] rounded-card bg-surface px-3.5 py-3 shadow-panel border border-border/40">
      <p className="text-[11px] font-medium text-text-muted">Learning Progress</p>
      <p className="mt-0.5 text-[32px] font-bold leading-none tracking-tight text-text-primary">
        55%
      </p>
      <div className="mt-2 h-1.5 w-full rounded-pill bg-border">
        <div
          className="h-full rounded-pill bg-accent"
          style={{ width: "55%" }}
          role="progressbar"
          aria-valuenow={55}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="55% completed"
        />
      </div>
    </div>
  );
}
