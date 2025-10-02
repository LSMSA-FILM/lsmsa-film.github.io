import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import DocCardList from "@site/src/theme/DocCardList";
import Image from "@theme/IdealImage";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--dark", styles.heroBanner)}>
      <div className={clsx("container", styles.heroContainer)}>
        <div>
          <Heading as="h1" className={clsx("hero__title", styles.heroTitle)}>
            {siteConfig.title}
          </Heading>
          <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx("button button--lg", styles.buttonYoutube)}
              to="https://www.youtube.com/@lsmsastudentfilm"
            >
              YouTube
            </Link>
            <Link
              className={clsx("button button--lg", styles.buttonInstagram)}
              to="https://instagram.com/lsmsa_student_productions"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/img/navbar_logo.png"></img>
        </div>
      </div>
    </header>
  );
}

function DocumentationButtonsSection() {
  return (
    <div className={clsx(styles.section)}>
      <div className="container">
        <Heading as="h2" className={clsx(styles.sectionHeading)}>
          Documentation
        </Heading>
        <div className={styles.documentationLinks}>
          <DocCardList
            items={[
              {
                type: "link",
                href: "/docs",
                label: "Livestreaming",
                description: "Guide on how to livestream at LSMSA",
                icon: "📻",
              },
              {
                type: "link",
                href: "/docs/assets",
                label: "Assets",
                description: "Files and media for LSMSA FILM",
                icon: "🗃",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="LSMSA Film Club - Commissions, Projects, Livestreaming, and more!"
    >
      <HomepageHeader />
      <main>
        <DocumentationButtonsSection />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
