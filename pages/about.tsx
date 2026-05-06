import Head from "next/head";
import Image from "next/image";
import { Typography, Row, Col, Card, Flex } from "antd";
import {
  StarOutlined,
  ShoppingOutlined,
  CustomerServiceOutlined,
  BulbOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

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

      <div style={{ background: "#ffffff", overflow: "hidden" }}>
        {/* Hero Section */}
        <div
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #0066ff 0%, #0052cc 100%)",
            padding: "80px 24px 120px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Text
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "14px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "2px",
                display: "block",
                marginBottom: "16px",
              }}
            >
              The Future of
            </Text>
            <Title
              level={1}
              style={{
                fontSize: "clamp(40px, 8vw, 72px)",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.1,
                margin: "0 0 40px 0",
                textTransform: "uppercase",
                letterSpacing: "-2px",
              }}
            >
              BOTANICAL
              <br />
              BEVERAGES
            </Title>
            <div
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                top: 200,
                zIndex: 1000,
              }}
            >
              <Image
                src="/images/image1.png"
                alt="Team collaboration"
                width={600}
                height={400}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                }}
                priority
              />
            </div>
          </div>
          {/* Bottom Wave */}
          <svg
            style={{
              position: "absolute",
              bottom: "-1px",
              left: 0,
              width: "100%",
              height: "100px",
            }}
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 Q300,100 600,50 T1200,50 L1200,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* Journey Section */}
        <div style={{ padding: "80px 24px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Row gutter={[48, 32]} align="top">
              <Col xs={24} md={6}>
                <Title
                  level={3}
                  style={{
                    color: "#0066ff",
                    fontWeight: 700,
                    fontSize: "20px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Our Journey
                </Title>
              </Col>
              <Col xs={24} md={18}>
                <Flex vertical gap="large" style={{ width: "100%" }}>
                  <Title
                    level={4}
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#171717",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    Crafting beverages that offer more than just refreshment -
                    they offer functional efficacy and a sense of well-being.
                  </Title>
                  <Paragraph
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.8,
                      color: "#666",
                      margin: 0,
                    }}
                  >
                    Inspired by the ancient traditions of leave and blossom leaf
                    extract, we set out to craft delicious, ready-to-drink
                    beverages that bring functional efficacy and a sense of
                    well-being.
                  </Paragraph>
                  <Paragraph
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.8,
                      color: "#666",
                      margin: 0,
                    }}
                  >
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
        <div
          style={{
            padding: "60px 24px",

            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            <Card
              variant="borderless"
              style={{
                background: "linear-gradient(90deg, #0066ff 0%, #8b3dff 100%)",
              }}
            >
              <Row gutter={[48, 32]} align="middle">
                <Col xs={24} md={8}>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      borderRadius: "20px",
                      padding: "40px",
                      textAlign: "center",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <StarOutlined
                      style={{
                        fontSize: "100px",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    />
                  </div>
                </Col>
                <Col xs={24} md={16}>
                  <Flex vertical gap="middle" style={{ width: "100%" }}>
                    <Title
                      level={2}
                      style={{
                        color: "#ffffff",
                        fontSize: "clamp(32px, 5vw, 48px)",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        margin: 0,
                        letterSpacing: "-1px",
                      }}
                    >
                      Our Formula
                    </Title>
                    <Paragraph
                      style={{
                        fontSize: "16px",
                        lineHeight: 1.8,
                        color: "rgba(255,255,255,0.95)",
                        margin: 0,
                      }}
                    >
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
        <div
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #ff6b35 0%, #ff9500 100%)",
            padding: "120px 24px 100px",
          }}
        >
          {/* Top Wave */}
          <svg
            style={{
              position: "absolute",
              top: "-1px",
              left: 0,
              width: "100%",
              height: "100px",
            }}
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
            style={{
              position: "absolute",
              bottom: "-1px",
              left: 0,
              width: "100%",
              height: "100px",
            }}
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 Q300,100 600,50 T1200,50 L1200,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Title
              level={2}
              style={{
                color: "#ffffff",
                fontSize: "clamp(36px, 6vw, 56px)",
                fontWeight: 900,
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "60px",
                letterSpacing: "-1px",
              }}
            >
              Our Mission
            </Title>
            <Row gutter={[32, 32]}>
              <Col xs={24} sm={12}>
                <Card
                  bordered={false}
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    border: "2px solid rgba(255,255,255,0.2)",
                    height: "100%",
                  }}
                  styles={{ body: { padding: "32px" } }}
                >
                  <Flex vertical gap="middle">
                    <Title
                      level={4}
                      style={{
                        color: "#ffffff",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "18px",
                        margin: 0,
                        letterSpacing: "0.5px",
                      }}
                    >
                      Revolutionizing Botanicals
                    </Title>
                    <Paragraph
                      style={{
                        color: "rgba(255,255,255,0.95)",
                        fontSize: "15px",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
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
                  bordered={false}
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    border: "2px solid rgba(255,255,255,0.2)",
                    height: "100%",
                  }}
                  styles={{ body: { padding: "32px" } }}
                >
                  <Flex vertical gap="middle">
                    <Title
                      level={4}
                      style={{
                        color: "#ffffff",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "18px",
                        margin: 0,
                        letterSpacing: "0.5px",
                      }}
                    >
                      Expanding Your Options
                    </Title>
                    <Paragraph
                      style={{
                        color: "rgba(255,255,255,0.95)",
                        fontSize: "15px",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
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
                  bordered={false}
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    border: "2px solid rgba(255,255,255,0.2)",
                    height: "100%",
                  }}
                  styles={{ body: { padding: "32px" } }}
                >
                  <Flex vertical gap="middle">
                    <Title
                      level={4}
                      style={{
                        color: "#ffffff",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "18px",
                        margin: 0,
                        letterSpacing: "0.5px",
                      }}
                    >
                      Seamlessly Fitting Into Your Lifestyle
                    </Title>
                    <Paragraph
                      style={{
                        color: "rgba(255,255,255,0.95)",
                        fontSize: "15px",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
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
                  bordered={false}
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    border: "2px solid rgba(255,255,255,0.2)",
                    height: "100%",
                  }}
                  styles={{ body: { padding: "32px" } }}
                >
                  <Flex vertical gap="middle">
                    <Title
                      level={4}
                      style={{
                        color: "#ffffff",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "18px",
                        margin: 0,
                        letterSpacing: "0.5px",
                      }}
                    >
                      Elevating Your Well-Being
                    </Title>
                    <Paragraph
                      style={{
                        color: "rgba(255,255,255,0.95)",
                        fontSize: "15px",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
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

        {/* Footer Section */}
        <div
          style={{
            padding: "60px 24px 40px",
            background: "#f8f9fa",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Row gutter={[48, 32]}>
              <Col xs={24} sm={8}>
                <Flex vertical gap="small">
                  <Text
                    style={{
                      color: "#ff6b35",
                      fontSize: "14px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                    }}
                  >
                    mwco
                  </Text>
                  <Title
                    level={3}
                    style={{
                      fontSize: "28px",
                      fontWeight: 900,
                      color: "#ff6b35",
                      textTransform: "uppercase",
                      margin: "8px 0",
                      lineHeight: 1.2,
                    }}
                  >
                    Feel the Good
                    <br />
                    Vibes
                  </Title>
                  <Flex gap="middle" style={{ marginTop: "16px" }}>
                    <ShoppingOutlined
                      style={{ fontSize: "20px", color: "#666" }}
                    />
                    <CustomerServiceOutlined
                      style={{ fontSize: "20px", color: "#666" }}
                    />
                    <BulbOutlined style={{ fontSize: "20px", color: "#666" }} />
                    <ThunderboltOutlined
                      style={{ fontSize: "20px", color: "#666" }}
                    />
                  </Flex>
                </Flex>
              </Col>
              <Col xs={24} sm={5}>
                <Flex vertical gap="small">
                  <Title
                    level={5}
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      margin: "0 0 16px 0",
                      color: "#171717",
                    }}
                  >
                    Main Menu
                  </Title>
                  {[
                    "Our Mission",
                    "Blog",
                    "Shop",
                    "FAQs",
                    "Contact",
                    "Wholesale & Distribution",
                  ].map((item) => (
                    <Text
                      key={item}
                      style={{
                        display: "block",
                        color: "#666",
                        fontSize: "14px",
                        lineHeight: 2,
                      }}
                    >
                      {item}
                    </Text>
                  ))}
                </Flex>
              </Col>
              <Col xs={24} sm={5}>
                <Flex vertical gap="small">
                  <Title
                    level={5}
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      margin: "0 0 16px 0",
                      color: "#171717",
                    }}
                  >
                    Shop Now
                  </Title>
                  {[
                    "Variety Pack",
                    "Starter Packs",
                    "Merchandise",
                    "Rewards",
                  ].map((item) => (
                    <Text
                      key={item}
                      style={{
                        display: "block",
                        color: "#666",
                        fontSize: "14px",
                        lineHeight: 2,
                      }}
                    >
                      {item}
                    </Text>
                  ))}
                </Flex>
              </Col>
              <Col xs={24} sm={6}>
                <Flex vertical gap="small">
                  <Title
                    level={5}
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      margin: "0 0 16px 0",
                      color: "#171717",
                    }}
                  >
                    Contact Info
                  </Title>
                  <Flex vertical gap="small">
                    <Text
                      style={{
                        display: "block",
                        color: "#666",
                        fontSize: "14px",
                        lineHeight: 1.8,
                      }}
                    >
                      📞 1-800-555-0123
                    </Text>
                    <Text
                      style={{
                        display: "block",
                        color: "#666",
                        fontSize: "14px",
                        lineHeight: 1.8,
                      }}
                    >
                      ✉️ hello@botanicalbev.com
                    </Text>
                  </Flex>
                </Flex>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
