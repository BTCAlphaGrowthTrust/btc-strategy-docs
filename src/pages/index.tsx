import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Card from '@site/src/components/Card';
import CardGrid from '@site/src/components/CardGrid';
import styles from './index.module.css';

const I = {
  rocket: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
  book: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  flask: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M10 3v6.5L4.5 19a1.5 1.5 0 0 0 1.3 2.25h12.4A1.5 1.5 0 0 0 19.5 19L14 9.5V3"/><path d="M7 15h10"/></svg>,
  code: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  mail: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>,
};

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Strategy Data API" description={siteConfig.tagline}>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.eyebrow}>BTC ALPHA · STRATEGY DATA API</div>
            <h1 className={styles.title}>Backtested strategy performance data, built for institutions.</h1>
            <p className={styles.subtitle}>
              Backtested, low-correlation BTC return streams — stats, returns, equity curves and
              cross-strategy correlation over one clean REST/JSON API, to measure against your own book.
            </p>
            <div className={styles.tryit}>
              <div className={styles.tryitLabel}>Try it — no key</div>
              <pre className={styles.tryitCode}><code>curl https://btc-strategy-data-api.fly.dev/v1/strategies</code></pre>
              <div className={styles.tryitCaption}>Real backtested track records for 14 strategies, in one open call.</div>
            </div>
            <div className={styles.cta}>
              <Link className="button button--primary button--lg" to="/docs/get-started/start-here">Start here →</Link>
              <Link className="button button--secondary button--lg" to="/docs/recipes/evaluate-vs-your-book">The recipe</Link>
              <Link className="button button--secondary button--lg" to="/docs/api-reference">API Reference</Link>
            </div>
            <div className={styles.note}>
              Past performance is not indicative of future results. Factual historical data —
              not advice, not a recommendation, not a forecast.
            </div>
          </div>
        </section>

        <section className={styles.cards}>
          <CardGrid cols={2}>
            <Card title="Get Started" icon={I.rocket} href="/docs/get-started/quickstart">
              Your first correlation matrix in three calls. Copy-paste curl, real responses.
            </Card>
            <Card title="Core Concepts" icon={I.book} href="/docs/concepts/envelope">
              The response envelope, access &amp; rate limits, error codes, versioning.
            </Card>
            <Card title="Methodology" icon={I.flask} href="/docs/methodology/overview">
              How the data is produced: risk rescale, metrics, correlation, fees &amp; slippage.
            </Card>
            <Card title="API Reference" icon={I.code} href="/docs/api-reference">
              Every endpoint with schemas, examples and an interactive playground.
            </Card>
          </CardGrid>
          <div className={styles.helpRow}>
            <Card title="Help & Contact" icon={I.mail} href="/docs/help/contact">
              Questions about access, licensing or the data? Talk to the BTC Alpha team.
            </Card>
          </div>
        </section>
      </main>
    </Layout>
  );
}
