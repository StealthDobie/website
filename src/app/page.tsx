import Image from "next/image";
import {
  officialLinks,
  projectSummary,
  siteDescription,
  siteName,
  siteUrl,
  tokenMint,
  tokenName,
  tokenNetwork,
  tokenProgram,
  tokenTicker,
} from "@/lib/site";

type LinkIcon =
  | "x"
  | "anoncoin"
  | "telegram"
  | "github"
  | "dexscreener"
  | "coingecko";

const links: Array<{
  href: string;
  label: string;
  ariaLabel: string;
  icon: LinkIcon;
}> = [
  {
    href: officialLinks.x,
    label: "X",
    ariaLabel: "Open StealthDobie on X in a new tab",
    icon: "x",
  },
  {
    href: officialLinks.anoncoin,
    label: "Anoncoin",
    ariaLabel: "Open Dobermann on Anoncoin in a new tab",
    icon: "anoncoin",
  },
  {
    href: officialLinks.telegram,
    label: "Telegram",
    ariaLabel: "Open the Dobermann Telegram community in a new tab",
    icon: "telegram",
  },
  {
    href: officialLinks.github,
    label: "GitHub",
    ariaLabel: "Open the StealthDobie GitHub organization in a new tab",
    icon: "github",
  },
  {
    href: officialLinks.dexscreener,
    label: "Dex Screener",
    ariaLabel: "Open the Dobermann market on Dex Screener in a new tab",
    icon: "dexscreener",
  },
  {
    href: officialLinks.coingecko,
    label: "CoinGecko",
    ariaLabel: "Open Dobermann on CoinGecko in a new tab",
    icon: "coingecko",
  },
];

const facts = [
  ["Ticker", tokenTicker],
  ["Network", `${tokenNetwork} mainnet-beta`],
  ["Token program", tokenProgram],
] as const;

const faqs = [
  {
    question: "Which network is it on?",
    answer: `${tokenName} is issued on ${tokenNetwork} mainnet-beta using the ${tokenProgram} program.`,
  },
  {
    question: "What is the official mint?",
    answer: `The official ${tokenTicker} mint is ${tokenMint}.`,
  },
  {
    question: "Which links are official?",
    answer:
      "The icon links above connect to the official X, Anoncoin, Telegram, GitHub, Dex Screener, and CoinGecko pages.",
  },
  {
    question: "How can I verify the token?",
    answer: `Match the token's mint to ${tokenMint} before interacting with a market.`,
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      alternateName: tokenTicker,
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#project` },
      about: { "@id": `${siteUrl}/#token` },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#project`,
      name: siteName,
      url: siteUrl,
      description: projectSummary,
      logo: `${siteUrl}/stealthdobie-emblem.png`,
      sameAs: [
        officialLinks.x,
        officialLinks.telegram,
        officialLinks.github,
      ],
    },
    {
      "@type": "Thing",
      "@id": `${siteUrl}/#token`,
      name: tokenName,
      alternateName: tokenTicker,
      description: projectSummary,
      identifier: {
        "@type": "PropertyValue",
        propertyID: "Solana mint",
        value: tokenMint,
      },
      sameAs: [
        officialLinks.anoncoin,
        officialLinks.dexscreener,
        officialLinks.coingecko,
      ],
    },
  ],
};

const iconPaths: Record<LinkIcon, string> = {
  x: "M2 1h3v2h2v2h2V3h2V1h3v3h-2v2h-2v4h2v2h2v3h-3v-2H9v-2H7v2H5v2H2v-3h2v-2h2V8H4V6H2V1Z",
  anoncoin:
    "M6 1h4v1h2v2h1v2h1v7h-2v2H4v-2H2V6h1V4h1V2h2V1ZM5 7v2h2V7H5Zm4 0v2h2V7H9Zm-3 4v1h4v-1H6Z",
  telegram:
    "M1 6h2V5h3V4h3V3h6v3h-1v3h-1v3h-1v3H9v-3H7v-2H4V8H1V6Zm5 2v1h2v1h1V8H6Z",
  github:
    "M1 1h5v5H5v2h6V6H9V1h6v5h-2v4h2v5H9v-5H5V9H3V6H1V1Zm2 2v1h1V3H3Zm8 0v1h2V3h-2Zm0 9v1h2v-1h-2Z",
  dexscreener:
    "M1 2h14v12H1V2Zm2 2v8h10V4H3Zm1 5h2v2H4V9Zm3-4h2v6H7V5Zm3 2h2v4h-2V7Z",
  coingecko:
    "M5 1h6v1h2v2h2v8h-2v2h-2v1H5v-1H3v-2H1V4h2V2h2V1Zm0 3h7v2H7v4h3V9H9V7h4v5H5V4Z",
};

function PixelIcon({ name }: { name: LinkIcon }) {
  return (
    <svg
      className="link-icon"
      viewBox="0 0 16 16"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={iconPaths[name]}
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="site-title">
        <div className="brand-lockup">
          <div className="emblem-frame">
            <Image
              className="emblem"
              src="/stealthdobie-emblem.png"
              alt="Pixel-art tactical Dobermann wearing twin-lens night-vision goggles"
              width={1254}
              height={1254}
              sizes="(max-width: 768px) 94vw, (max-width: 1280px) 42vw, 520px"
              preload
            />
          </div>

          <h1 className="wordmark-frame" id="site-title">
            <span className="visually-hidden">$DOBERMANN</span>
            <Image
              className="wordmark-image"
              src="/dobermann-wordmark.png"
              alt=""
              width={1774}
              height={887}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 58vw, 700px"
              loading="eager"
            />
          </h1>
        </div>

        <nav
          className="social-links"
          id="official-links"
          aria-label="Official Dobermann links"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
            >
              <PixelIcon name={link.icon} />
              <span className="visually-hidden">{link.label}</span>
            </a>
          ))}
        </nav>
      </section>

      <section className="intel" aria-labelledby="intel-title">
        <p className="intel-kicker">PROJECT INTEL // VERIFIED</p>
        <h2 id="intel-title">DOBERMANN ON ANONCOIN</h2>
        <p className="intel-summary">{projectSummary}</p>

        <dl className="intel-facts">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
          <div className="mint-fact">
            <dt>Official mint</dt>
            <dd>
              <code>{tokenMint}</code>
            </dd>
          </div>
        </dl>

        <div className="intel-faq" aria-labelledby="faq-title">
          <h3 id="faq-title">FIELD NOTES</h3>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <article key={faq.question}>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>

      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
