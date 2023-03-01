import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container" style={{width: '52rem'}}>
                <h1 className="hero__title">Welcome</h1>
                <p>
                    This is the home of the Pulsar Weekly News, brining you news about the development of <Link href="https://pulsar.apache.org">Apache Pulsar</Link>, a distributed messaging and streaming platform, and its open and inclusive community.
                </p>
                <p>
                    Click the "Browsing Issues" button below to see the most recent weekly issues.
                </p>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/issue">
                        Browsing Issues
                    </Link>
                </div>
                <p>
                    You can also subscribe to feeds of this weekly in <Link to="/issue/rss.xml">RSS format</Link> or <Link to="/issue/atom.xml">Atom format</Link>.
                </p>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout title={siteConfig.title} description={siteConfig.tagline}>
            <HomepageHeader />
        </Layout>
    );
}