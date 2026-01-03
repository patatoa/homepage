import { useEffect, useState } from "react";

type ServiceStatus = "checking" | "up" | "down" | "missing";

interface Service {
  name: string;
  url: string;
  icon: string;
}

interface StatusRowProps {
  services: Service[];
}

const checkService = async (url: string): Promise<ServiceStatus> => {
  if (!url) {
    return "missing";
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4000);

  try {
    await fetch(url, {
      method: "HEAD",
      mode: "no-cors",
      signal: controller.signal,
    });
    return "up";
  } catch {
    return "down";
  } finally {
    clearTimeout(timeout);
  }
};

const statusColor: Record<ServiceStatus, string> = {
  checking: "bg-gray-400",
  up: "bg-green-500",
  down: "bg-red-500",
  missing: "bg-yellow-500",
};

const statusLabel: Record<ServiceStatus, string> = {
  checking: "checking",
  up: "up",
  down: "down",
  missing: "missing",
};

const StatusRow = ({ services }: StatusRowProps) => {
  const [statuses, setStatuses] = useState<Record<string, ServiceStatus>>(
    Object.fromEntries(services.map((service) => [service.name, "checking"]))
  );

  useEffect(() => {
    let active = true;
    const runChecks = async () => {
      const results = await Promise.all(
        services.map(async (service) => ({
          name: service.name,
          status: await checkService(service.url),
        }))
      );

      if (!active) {
        return;
      }

      const nextStatuses: Record<string, ServiceStatus> = {};
      results.forEach((result) => {
        nextStatuses[result.name] = result.status;
      });
      setStatuses(nextStatuses);
    };

    runChecks();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="w-full px-4">
      <div className="flex flex-wrap gap-3 items-center bg-white/10 rounded-lg p-3">
        {services.map((service) => {
          const status = statuses[service.name] ?? "checking";
          return (
            <a
              key={service.name}
              href={service.url}
              className="flex items-center gap-2 bg-white/90 text-gray-800 px-3 py-2 rounded-full shadow-sm hover:shadow transition"
            >
              <img src={service.icon} alt="" className="w-4 h-4" />
              <span className="text-sm font-semibold">{service.name}</span>
              <span
                className={`w-2 h-2 rounded-full ${statusColor[status]}`}
                aria-label={statusLabel[status]}
                title={statusLabel[status]}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default StatusRow;
