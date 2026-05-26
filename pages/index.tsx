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
  Collapse,
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
import type { CollapseProps } from "antd";
import styles from "@/styles/Home.module.scss";

const { Title, Paragraph, Text } = Typography;
const { useToken } = theme;

export default function Home() {
  const { token } = useToken();

  const scrollToContent = () => {
    const element = document.getElementById("main-content");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p>{text}</p>,
    },
  ];

  const onChange = (key: string | string[]) => {
    console.log(key);
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
                  Wholesale
                </Button>
              </div>
              <div className={styles.ctaImage}>
                <Image
                  src="/images/wholeseller.png"
                  className="wholesellerImage"
                  alt="Ambassador"
                  width={200}
                  height={275}
                />
              </div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div
              className={styles.ctaCard}
              style={{
                backgroundColor: "#8B0000",
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
                  height={260}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <div
              className={styles.ctaBottomCard}
              style={{
                backgroundColor: "#8B0000",
                border: "2px solid #8B0000",
              }}
            >
              <div className={styles.ctaContent}>
                <h3>Join Our Affiliate Program</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Praesent hendrerit erat euis accumsan.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section className={styles.ascendTogether}>
        <h2>FAQ</h2>
        <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
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
                src="/images/contact-image.jpg"
                alt="man on cell phone"
                className={styles.contactImage}
                width={600}
                height={475}
              />
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className={styles.ascensionContent}>
              <h2>Let Us Know Your Thoughts</h2>
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
    </>
  );
}
