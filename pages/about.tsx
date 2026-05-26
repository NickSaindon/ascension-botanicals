import Head from "next/head";
import { Typography, Row, Col, Card, Flex } from "antd";
import { StarOutlined } from "@ant-design/icons";
import styles from "../styles/About.module.scss";
import Hero from "../components/Hero";

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - The Future of Botanical Beverages</title>
        <meta
          name="description"
          content="Learn more about our company and mission"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page}>
        {/* Hero Section */}
        <Hero
          title="About Us"
          subtitle="ASCENDING TO NEW HEIGHTS"
          backgroundImage="/images/image1.png"
        />

        {/* Journey Section */}
        <div className={styles.journeySection}>
          <div className={styles.journeyContainer}>
            <Row gutter={[48, 32]} align="top">
              <Col xs={24} md={6}>
                <Title level={3} className={styles.journeySectionTitle}>
                  Our Journey
                </Title>
              </Col>
              <Col xs={24} md={18}>
                <Flex vertical gap="large" style={{ width: "100%" }}>
                  <Title level={4} className={styles.journeyMainTitle}>
                    Crafting beverages that offer more than just refreshment -
                    they offer functional efficacy and a sense of well-being.
                  </Title>
                  <Paragraph className={styles.journeyParagraph}>
                    Inspired by the ancient traditions of leave and blossom leaf
                    extract, we set out to craft delicious, ready-to-drink
                    beverages that bring functional efficacy and a sense of
                    well-being.
                  </Paragraph>
                  <Paragraph className={styles.journeyParagraph}>
                    Every sip is a celebration of nature&apos;s bounty,
                    carefully formulated to deliver both taste and wellness
                    benefits that modern life demands.
                  </Paragraph>
                </Flex>
              </Col>
            </Row>
          </div>
        </div>

        {/* Formula Section */}
        <div className={styles.formulaSection}>
          <div className={styles.formulaContainer}>
            <Card variant="borderless" className={styles.formulaCard}>
              <Row gutter={[48, 32]} align="middle">
                <Col xs={24} md={8}>
                  <div className={styles.formulaIconWrapper}>
                    <StarOutlined className={styles.formulaIcon} />
                  </div>
                </Col>
                <Col xs={24} md={16}>
                  <Flex vertical gap="middle" style={{ width: "100%" }}>
                    <Title level={2} className={styles.formulaTitle}>
                      Our Formula
                    </Title>
                    <Paragraph className={styles.formulaParagraph}>
                      Our success comes from a unique blend: world-class
                      botanicals, innovative brewing techniques, and a
                      commitment to functional wellness. We believe great
                      beverages should not only taste amazing but also support
                      your well-being. Our proprietary cold-brew process locks
                      in all the good stuff while creating a smooth, refreshing
                      drink you&apos;ll love.
                    </Paragraph>
                  </Flex>
                </Col>
              </Row>
            </Card>
          </div>
        </div>

        {/* Mission Section with Wave */}
        <div className={styles.missionSection}>
          {/* Top Wave */}
          <svg
            className={styles.missionWaveTop}
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 Q300,0 600,50 T1200,50 L1200,0 L0,0 Z"
              fill="#ffffff"
            />
          </svg>

          {/* Bottom Wave */}
          <svg
            className={styles.missionWaveBottom}
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 Q300,100 600,50 T1200,50 L1200,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
          <div className={styles.missionContainer}>
            <Title level={2} className={styles.missionTitle}>
              Our Mission
            </Title>
            <Row gutter={[32, 32]}>
              <Col xs={24} sm={12}>
                <Card
                  variant="borderless"
                  className={styles.missionCard}
                  styles={{ body: { padding: "32px" } }}
                >
                  <Flex vertical gap="middle">
                    <Title level={4} className={styles.missionCardTitle}>
                      Revolutionizing Botanicals
                    </Title>
                    <Paragraph className={styles.missionCardParagraph}>
                      We&apos;re bringing ancient botanical wisdom into the
                      modern age. Our beverages combine time-tested natural
                      ingredients with cutting-edge brewing techniques to offer
                      a truly unique experience. What&apos;s there to lose?
                    </Paragraph>
                  </Flex>
                </Card>
              </Col>
              <Col xs={24} sm={12}>
                <Card
                  variant="borderless"
                  className={styles.missionCard}
                  styles={{ body: { padding: "32px" } }}
                >
                  <Flex vertical gap="middle">
                    <Title level={4} className={styles.missionCardTitle}>
                      Expanding Your Options
                    </Title>
                    <Paragraph className={styles.missionCardParagraph}>
                      More flavors. More benefits. More moments to enjoy.
                      We&apos;re constantly innovating to bring you new and
                      exciting botanical beverages that support your active
                      lifestyle and wellness goals.
                    </Paragraph>
                  </Flex>
                </Card>
              </Col>
              <Col xs={24} sm={12}>
                <Card
                  variant="borderless"
                  className={styles.missionCard}
                  styles={{ body: { padding: "32px" } }}
                >
                  <Flex vertical gap="middle">
                    <Title level={4} className={styles.missionCardTitle}>
                      Seamlessly Fitting Into Your Lifestyle
                    </Title>
                    <Paragraph className={styles.missionCardParagraph}>
                      Whether you need an energy boost, a moment of calm, or
                      just a delicious drink - our beverages fit perfectly into
                      your day. Convenient, refreshing, and always ready when
                      you are.
                    </Paragraph>
                  </Flex>
                </Card>
              </Col>
              <Col xs={24} sm={12}>
                <Card
                  variant="borderless"
                  className={styles.missionCard}
                  styles={{ body: { padding: "32px" } }}
                >
                  <Flex vertical gap="middle">
                    <Title level={4} className={styles.missionCardTitle}>
                      Elevating Your Well-Being
                    </Title>
                    <Paragraph className={styles.missionCardParagraph}>
                      Nature is more than just a source - it&apos;s a guide to
                      optimal living. Our functional botanicals work with your
                      body to help you feel energized, focused, and your very
                      best, without the crash. Does nature feel good today?
                    </Paragraph>
                  </Flex>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
