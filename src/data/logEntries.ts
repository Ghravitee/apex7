export type LogAction = "BUY" | "SELL" | "SKIP" | "HOLD";

export interface LogEntry {
  time: string;
  action: LogAction;
  pair: string;
  reason: string;
}

export const logEntries: LogEntry[] = [
  { time: "14:02:11", action: "BUY", pair: "ARC / ETH", reason: "New pool, rising volume in first 3h, liquidity above floor" },
  { time: "14:04:47", action: "SKIP", pair: "ZORB / ETH", reason: "Liquidity below safety threshold — filtered before strategy ran" },
  { time: "14:11:23", action: "HOLD", pair: "ARC / ETH", reason: "Position open, take-profit at +15% not yet reached" },
  { time: "14:15:02", action: "SKIP", pair: "FUME / ETH", reason: "Would exceed wallet share cap of 20% — trade blocked" },
  { time: "14:22:56", action: "SELL", pair: "PXL / ETH", reason: "Stop-loss triggered at -8%, exited per strategy rules" },
  { time: "14:29:10", action: "BUY", pair: "GLDN / ETH", reason: "Matches new-listing watcher criteria, slippage within tolerance" },
  { time: "14:33:41", action: "SKIP", pair: "—", reason: "Cooldown active, next run in 6 minutes" },
  { time: "14:40:19", action: "SELL", pair: "ARC / ETH", reason: "Take-profit target of +15% reached, position closed" },
];
