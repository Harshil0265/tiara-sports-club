import { execSync } from 'node:child_process';

const ports = [Number(process.env.PORT) || 3000, 24678];
for (const port of ports) {
  try {
    const out = execSync(`netstat -ano -p tcp`, { encoding: 'utf8' });
    const pids = new Set();
    for (const line of out.split(/\r?\n/)) {
      const cols = line.trim().split(/\s+/);
      if (cols[0] === 'TCP' && cols[3] === 'LISTENING' && cols[1].endsWith(`:${port}`)) pids.add(cols[4]);
    }
    for (const pid of pids) {
      if (Number(pid) === process.pid || pid === '0') continue;
      try {
        execSync(`taskkill /PID ${pid} /F`, { stdio: 'ignore' });
        console.log(`[free-port] killed stale process ${pid} on port ${port}`);
      } catch {}
    }
  } catch {}
}
