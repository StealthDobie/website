export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://stealthdobie.xyz"
).replace(/\/+$/, "");

export const siteName = "StealthDobie";
export const tokenName = "DOBERMANN";
export const tokenTicker = "$DOBERMANN";
export const tokenMint = "J3mfHoQb27xHL1xUYsoPfU1vZHbzCeK7fZYvsWeYdoge";
export const tokenNetwork = "Solana";
export const tokenProgram = "Token-2022";

export const siteDescription =
  "The official site for $DOBERMANN, the StealthDobie meme token on Solana. Verify the mint and find official community and market links.";

export const projectSummary =
  "Stealth Project: Dobermann is the dark and edgy side of Dogecoin. The military equipped Dobermann is ready for action although her objectives remain a secret.";

export const officialLinks = {
  x: "https://x.com/StealthDobie",
  anoncoin: "https://anoncoin.it/dobermann",
  telegram: "https://t.me/DobermannOnAnon",
  github: "https://github.com/StealthDobie",
  dexscreener:
    "https://dexscreener.com/solana/j3mfhoqb27xhl1xuysopfu1vzhbzcek7fzyvsweydoge",
  coingecko: "https://www.coingecko.com/en/coins/dobermann-2",
} as const;
