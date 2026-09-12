import { useCallback, useEffect, useState } from "react";

interface UsageWindow {
  label: string;
  window_minutes: number;
  used_percent: number;
  remaining_percent: number;
  resets_at: number;
  status: string;
}

interface UsagePayload {
  collector: {
    health: string;
  };
  source: {
    recorded_at: string;
    status: string;
  } | null;
  windows: UsageWindow[];
  status: string;
}

interface CodexUsageWidgetProps {
  url: string;
  icon: string;
}

const formatPercent = (value: number) =>
  `${Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1)}%`;

const formatReset = (epochSeconds: number) =>
  new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(epochSeconds * 1000));

const WindowMeter = ({ usage, current }: { usage: UsageWindow; current: boolean }) => {
  const used = Math.min(100, Math.max(0, usage.used_percent));

  return (
    <div className="rounded-lg bg-gray-100 p-3 text-gray-800">
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <span className="text-sm font-bold">{usage.label}</span>
        <div className="text-right">
          <span className="block text-lg font-bold tabular-nums">
            {formatPercent(usage.used_percent)}
          </span>
          {!current && (
            <span className="block text-[10px] font-bold uppercase tracking-wide text-amber-700">
              Last known
            </span>
          )}
        </div>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-gray-300"
        role="progressbar"
        aria-label={`${usage.label} Codex usage`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={usage.used_percent}
        aria-valuetext={`${current ? "" : "Last known: "}${formatPercent(usage.used_percent)} used, ${formatPercent(usage.remaining_percent)} remaining`}
      >
        <div
          className={`h-full rounded-full transition-[width] duration-300 ${current ? "bg-emerald-600" : "bg-amber-600"}`}
          style={{ width: `${used}%` }}
        />
      </div>
      <div className="mt-2 flex flex-wrap justify-between gap-x-3 text-xs text-gray-600">
        <span>{formatPercent(usage.remaining_percent)} {current ? "remaining" : "last known remaining"}</span>
        <span>Resets {formatReset(usage.resets_at)}</span>
      </div>
    </div>
  );
};

const CodexUsageWidget = ({ url, icon }: CodexUsageWidgetProps) => {
  const [payload, setPayload] = useState<UsagePayload | null>(null);
  const [error, setError] = useState(false);
  const endpoint = `${url.replace(/\/$/, "")}/api/usage`;

  const refresh = useCallback(async () => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch(endpoint, {
        cache: "no-store",
        signal: controller.signal,
      });
      if (!response.ok) {
        throw new Error(`Codex usage request failed: ${response.status}`);
      }
      const nextPayload = (await response.json()) as UsagePayload;
      setPayload(nextPayload);
      setError(false);
    } catch {
      setError(true);
    } finally {
      window.clearTimeout(timeout);
    }
  }, [endpoint]);

  useEffect(() => {
    void refresh();
    const interval = window.setInterval(() => void refresh(), 30_000);
    return () => window.clearInterval(interval);
  }, [refresh]);

  const windows = payload?.windows ?? [];
  const healthy = payload?.collector.health === "healthy";
  const fresh = payload?.status === "fresh";
  const current = healthy && fresh && !error;
  const statusLabel = error
    ? "Unavailable"
    : !payload
      ? "Checking"
      : current
        ? "Working"
        : "Out of date";
  const statusColor = error
    ? "bg-red-100 text-red-800"
    : current
      ? "bg-emerald-100 text-emerald-800"
      : "bg-amber-100 text-amber-800";

  return (
    <div className="w-full px-4 pt-4">
      <a
        href={url}
        className="block rounded-lg bg-white p-4 text-gray-800 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-400"
        aria-label="Open the full Codex usage dashboard"
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src={icon} alt="" className="h-8 w-8" />
            <div>
              <h2 className="text-xl font-bold">Codex usage</h2>
              <p className="text-xs text-gray-500">5-hour and weekly allowance</p>
            </div>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${statusColor}`}
          >
            {statusLabel}
          </span>
        </div>

        {windows.length === 2 && !error ? (
          <>
            {!current && (
              <div className="mb-3 rounded-lg bg-amber-100 p-3 text-sm font-semibold text-amber-900">
                These percentages are last known values and may be out of date.
              </div>
            )}
            <div className="grid gap-3 md:grid-cols-2">
              {windows.map((usage) => (
                <WindowMeter key={usage.window_minutes} usage={usage} current={current} />
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-lg bg-gray-100 p-4 text-sm text-gray-600">
            {error
              ? "Connect this device to Tailscale to load live Codex usage."
              : "Loading live Codex usage…"}
          </div>
        )}

        <div className="mt-3 text-right text-xs font-bold text-emerald-700">
          Open full dashboard →
        </div>
      </a>
    </div>
  );
};

export default CodexUsageWidget;
