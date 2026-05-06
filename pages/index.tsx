import Head from "next/head";
import Image from "next/image";
import {
  Button,
  Card,
  Space,
  Typography,
  Row,
  Col,
  Input,
  Form,
  Tag,
  Divider,
  theme,
  Flex,
} from "antd";
import {
  HomeOutlined,
  UserOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  InfoCircleOutlined,
  RocketOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import styles from "@/styles/Home.module.scss";

const { Title, Paragraph, Text } = Typography;
const { useToken } = theme;

export default function Home() {
  const { token } = useToken();

  const scrollToContent = () => {
    const element = document.getElementById("main-content");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Ant Design with Custom Theme - Next.js</title>
        <meta
          name="description"
          content="Next.js app with Ant Design and custom theme"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Image
          src="/images/image2.png"
          alt="Hero Background"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Welcome to the Future</h1>
          <p className={styles.heroSubtitle}>
            Experience the perfect blend of React, Next.js, and Ant Design with
            custom theming and SCSS
          </p>
          <div className={styles.heroButtons}>
            <Button
              type="primary"
              size="large"
              icon={<RocketOutlined />}
              onClick={scrollToContent}
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className={styles.waveDecoration}>
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* Three Features Section */}
      <section className={styles.threeFeatures}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <div className={styles.featureBox}>
              <div className={styles.featureImage}>
                <Image
                  src="/images/image5.png"
                  alt="Guaranteed Fresh"
                  width={300}
                  height={300}
                />
              </div>
              <h3>Guaranteed Fresh</h3>
              <p>
                Lorem dolor sit amet, consectetuer adipiscing elit. Praesent
                hendrerit suscipit ante at pretium.
              </p>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className={styles.featureBox}>
              <div className={styles.featureImage}>
                <Image
                  src="/images/lab-tested.png"
                  alt="Lab Tested"
                  width={300}
                  height={300}
                />
              </div>
              <h3>Lab Tested</h3>
              <p>
                Lorem dolor sit amet, consectetuer adipiscing elit. Praesent
                hendrerit suscipit ante at pretium.
              </p>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className={styles.featureBox}>
              <div className={styles.featureImage}>
                <Image
                  src="/images/free-shipment.png"
                  alt="Free Shipping"
                  width={300}
                  height={300}
                />
              </div>
              <h3>Free Shipping Over $50</h3>
              <p>
                Lorem dolor sit amet, consectetuer adipiscing elit. Praesent
                hendrerit suscipit ante at pretium.
              </p>
            </div>
          </Col>
        </Row>
      </section>

      {/* Our Ascension Red Section */}
      <section className={styles.ascensionSection}>
        <div className={styles.waveDecorationTop}>
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              fill="#ffffff"
            />
          </svg>
        </div>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} md={12}>
            <div className={styles.ascensionImage}>
              <Image
                src="/images/image4.png"
                alt="Our Ascension"
                width={475}
                height={500}
              />
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className={styles.ascensionContent}>
              <h2>Our Ascension</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Praesent hendrerit erat euis accumsan felis eget tincidunt.
                Donec vitae orci. In felis. Morbius mauris arcu, tincidunt
                commodo, dictum vitae, lobortis vel, neque. Praesent in metus
                aliquot. Nunc placerat lacus et consequat. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Fusce id purus, Ut odio.
              </p>
              <Button
                type="primary"
                size="large"
                className={styles.whiteButton}
              >
                About Us
              </Button>
            </div>
          </Col>
        </Row>
        <div className={styles.waveDecorationBottom}>
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* Feature Products Section */}
      <section className={styles.featureProducts}>
        <div className={styles.sectionHeader}>
          <h2>Feature Products</h2>
        </div>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <Card
              cover={
                <div className={styles.productImagePlaceholder}>
                  <Text>Image cap</Text>
                </div>
              }
              actions={[
                <Button type="primary" danger key="buy">
                  Go somewhere
                </Button>,
              ]}
            >
              <Card.Meta
                title="Card title"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              cover={
                <div className={styles.productImagePlaceholder}>
                  <Text>Image cap</Text>
                </div>
              }
              actions={[
                <Button type="primary" danger key="buy">
                  Go somewhere
                </Button>,
              ]}
            >
              <Card.Meta
                title="Card title"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              cover={
                <div className={styles.productImagePlaceholder}>
                  <Text>Image cap</Text>
                </div>
              }
              actions={[
                <Button type="primary" danger key="buy">
                  Go somewhere
                </Button>,
              ]}
            >
              <Card.Meta
                title="Card title"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
            </Card>
          </Col>
        </Row>
      </section>

      {/* Lets Ascend Together - Two CTAs */}
      <section className={styles.ascendTogether}>
        <h2>Lets Ascend Together</h2>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <div
              className={styles.ctaCard}
              style={{ backgroundColor: "#8B0000" }}
            >
              <div className={styles.ctaContent}>
                <h3>Wholesale Partners</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Praesent hendrerit erat euis accumsan.
                </p>
                <Button
                  type="default"
                  size="large"
                  className={styles.whiteButton}
                >
                  About Us
                </Button>
              </div>
              <div className={styles.ctaImage}>
                <Image
                  src="/images/wholeseller.png"
                  className="wholesellerImage"
                  alt="Ambassador"
                  width={200}
                  height={250}
                />
              </div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div
              className={styles.ctaCard}
              style={{
                backgroundColor: "#8B0000",
                border: "2px solid #8B0000",
              }}
            >
              <div className={styles.ctaContent}>
                <h3>Join Ascension Ambassador Family</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Praesent hendrerit erat euis accumsan.
                </p>
                <Button
                  type="default"
                  size="large"
                  className={styles.whiteButton}
                >
                  Join Us
                </Button>
              </div>
              <div className={styles.ctaImage}>
                <Image
                  src="/images/influencer.png"
                  alt="Ambassador"
                  width={200}
                  height={250}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </section>

      <div
        style={{
          minHeight: "calc(100vh - 64px)",
          backgroundColor: token.colorBgLayout,
          padding: "40px 20px",
        }}
      >
        <div className={styles.contentWrapper} id="main-content">
          <Flex vertical gap="large" style={{ width: "100%" }}>
            {/* Grid Layout */}
            <Card title="Responsive Grid">
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8}>
                  <Card
                    size="small"
                    style={{
                      backgroundColor: token.colorPrimary,
                      color: "white",
                    }}
                  >
                    <Title level={4} style={{ color: "white", margin: 0 }}>
                      Card 1
                    </Title>
                    <Paragraph style={{ color: "white", margin: 0 }}>
                      Custom primary color
                    </Paragraph>
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Card
                    size="small"
                    style={{
                      backgroundColor: token.colorSuccess,
                      color: "white",
                    }}
                  >
                    <Title level={4} style={{ color: "white", margin: 0 }}>
                      Card 2
                    </Title>
                    <Paragraph style={{ color: "white", margin: 0 }}>
                      Custom success color
                    </Paragraph>
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Card
                    size="small"
                    style={{
                      backgroundColor: token.colorWarning,
                      color: "white",
                    }}
                  >
                    <Title level={4} style={{ color: "white", margin: 0 }}>
                      Card 3
                    </Title>
                    <Paragraph style={{ color: "white", margin: 0 }}>
                      Custom warning color
                    </Paragraph>
                  </Card>
                </Col>
              </Row>
            </Card>

            {/* Header */}
            <Card>
              <Title level={1}>
                <HomeOutlined /> Ant Design Integration
              </Title>
              <Paragraph>
                Welcome! This is a demo of Ant Design integrated with Next.js
                using a custom theme. The custom theme is configured in{" "}
                <Text code>theme/themeConfig.ts</Text>.
              </Paragraph>
            </Card>

            {/* Buttons Demo */}
            <Card title="Button Components">
              <Space wrap>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <Button type="primary" danger>
                  Danger Button
                </Button>
                <Button type="primary" disabled>
                  Disabled Button
                </Button>
              </Space>
            </Card>

            {/* Status Tags */}
            <Card title="Status Tags">
              <Space wrap>
                <Tag icon={<CheckCircleOutlined />} color="success">
                  Success
                </Tag>
                <Tag icon={<InfoCircleOutlined />} color="processing">
                  Processing
                </Tag>
                <Tag icon={<WarningOutlined />} color="warning">
                  Warning
                </Tag>
                <Tag icon={<CheckCircleOutlined />} color="error">
                  Error
                </Tag>
                <Tag color="default">Default</Tag>
                <Tag color="magenta">Magenta</Tag>
                <Tag color="purple">Purple</Tag>
                <Tag color="cyan">Cyan</Tag>
              </Space>
            </Card>

            {/* Form Example */}
            <Card title="Form Components">
              <Form layout="vertical" style={{ maxWidth: 600 }}>
                <Form.Item label="Username" name="username">
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Enter your username"
                  />
                </Form.Item>
                <Form.Item label="Email" name="email">
                  <Input type="email" placeholder="Enter your email" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary">Submit</Button>
                </Form.Item>
              </Form>
            </Card>

            {/* Theme Info */}
            <Card title="Theme Configuration">
              <Divider>Design Tokens</Divider>
              <Flex vertical gap="small">
                <Text>
                  Primary Color: <Text code>{token.colorPrimary}</Text>
                </Text>
                <Text>
                  Success Color: <Text code>{token.colorSuccess}</Text>
                </Text>
                <Text>
                  Warning Color: <Text code>{token.colorWarning}</Text>
                </Text>
                <Text>
                  Error Color: <Text code>{token.colorError}</Text>
                </Text>
                <Text>
                  Border Radius: <Text code>{token.borderRadius}px</Text>
                </Text>
                <Text>
                  Font Size: <Text code>{token.fontSize}px</Text>
                </Text>
              </Flex>
              <Divider />
              <Paragraph type="secondary">
                You can customize these values and more in{" "}
                <Text code>theme/themeConfig.ts</Text>
              </Paragraph>
            </Card>
          </Flex>
        </div>
      </div>
    </>
  );
}
