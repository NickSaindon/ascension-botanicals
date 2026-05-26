import Head from "next/head";
import Image from "next/image";
import { Typography, Row, Col, Card, Button, Flex, Tag } from "antd";
import {
  ThunderboltOutlined,
  HeartOutlined,
  BulbOutlined,
  CoffeeOutlined,
  RocketOutlined,
  SmileOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Hero from "../components/Hero";
import styles from "../styles/Categories.module.scss";

const { Title, Paragraph, Text } = Typography;

interface Category {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  color: string;
  productCount: number;
  features: string[];
  popular?: boolean;
}

export default function Categories() {
  const categories: Category[] = [
    {
      id: 1,
      name: "Energy Boost",
      description:
        "Power through your day with our natural energy formulas. No crashes, just clean, sustained energy from premium botanical extracts.",
      icon: <ThunderboltOutlined />,
      image: "/images/image1.png",
      color: "#ff6b35",
      productCount: 8,
      features: ["Natural Energy", "No Crash", "Fast Acting"],
      popular: true,
    },
    {
      id: 2,
      name: "Calm & Relaxation",
      description:
        "Unwind and find your zen with our calming kava blends. Perfect for stress relief and promoting a sense of peace and tranquility.",
      icon: <HeartOutlined />,
      image: "/images/image2.png",
      color: "#8b3dff",
      productCount: 6,
      features: ["Stress Relief", "Natural Calm", "Mood Support"],
    },
    {
      id: 3,
      name: "Focus & Clarity",
      description:
        "Enhance mental clarity and concentration with our balanced botanical formulas. Stay sharp and productive throughout your day.",
      icon: <BulbOutlined />,
      image: "/images/image3.png",
      color: "#0066ff",
      productCount: 5,
      features: ["Mental Clarity", "Enhanced Focus", "Cognitive Support"],
    },
    {
      id: 4,
      name: "Morning Wellness",
      description:
        "Start your day right with our morning wellness collection. Gentle yet effective formulas to kickstart your morning routine.",
      icon: <CoffeeOutlined />,
      image: "/images/Image4.png",
      color: "#00c9a7",
      productCount: 7,
      features: ["Morning Boost", "Gentle Energy", "Daily Wellness"],
    },
    {
      id: 5,
      name: "Performance & Recovery",
      description:
        "Optimize your performance and support recovery with our athletic wellness blends. Designed for active lifestyles and physical pursuits.",
      icon: <RocketOutlined />,
      image: "/images/Image5.png",
      color: "#ff0099",
      productCount: 4,
      features: ["Athletic Support", "Muscle Recovery", "Endurance"],
    },
    {
      id: 6,
      name: "Social & Mood",
      description:
        "Elevate your social experiences and enhance your mood naturally. Perfect for gatherings, events, or simply feeling your best.",
      icon: <SmileOutlined />,
      image: "/images/image1.png",
      color: "#ffc107",
      productCount: 6,
      features: ["Mood Enhancement", "Social Support", "Feel Good"],
    },
  ];

  return (
    <>
      <Head>
        <title>Product Categories - Ascension Botanicals</title>
        <meta
          name="description"
          content="Explore our range of premium botanical beverage categories designed for your wellness journey"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Hero
        title="EXPLORE OUR COLLECTION"
        subtitle="Product Categories"
        backgroundImage="/images/image1.png"
      />

      <div className={styles.categoriesPage}>
        {/* Intro Section */}
        <section className={styles.introSection}>
          <div className={styles.container}>
            <Title level={2} className={styles.introTitle}>
              Find Your Perfect Botanical
            </Title>
            <Paragraph className={styles.introParagraph}>
              Each category is carefully crafted to meet specific wellness
              needs. Whether you're looking for energy, relaxation, focus, or
              recovery, we have the perfect botanical beverage for you.
            </Paragraph>
          </div>
        </section>

        {/* Categories Grid */}
        <section className={styles.categoriesSection}>
          <div className={styles.container}>
            <Row gutter={[32, 32]}>
              {categories.map((category) => (
                <Col xs={24} md={12} lg={8} key={category.id}>
                  <Card
                    hoverable
                    className={styles.categoryCard}
                    cover={
                      <div className={styles.categoryImageWrapper}>
                        <Image
                          alt={category.name}
                          src={category.image}
                          width={400}
                          height={280}
                          className={styles.categoryImage}
                          style={{ objectFit: "cover" }}
                        />
                        <div
                          className={styles.categoryOverlay}
                          style={{ background: `${category.color}15` }}
                        >
                          <div
                            className={styles.categoryIcon}
                            style={{ color: category.color }}
                          >
                            {category.icon}
                          </div>
                        </div>
                        {category.popular && (
                          <Tag className={styles.popularTag} color="red">
                            Popular
                          </Tag>
                        )}
                      </div>
                    }
                  >
                    <Flex vertical gap="middle">
                      <Flex justify="space-between" align="center">
                        <Title level={3} className={styles.categoryName}>
                          {category.name}
                        </Title>
                        <Text className={styles.productCount}>
                          {category.productCount} Products
                        </Text>
                      </Flex>

                      <Paragraph className={styles.categoryDescription}>
                        {category.description}
                      </Paragraph>

                      <Flex gap="small" wrap="wrap">
                        {category.features.map((feature, index) => (
                          <Tag
                            key={index}
                            style={{
                              borderColor: category.color,
                              color: category.color,
                            }}
                          >
                            {feature}
                          </Tag>
                        ))}
                      </Flex>

                      <Button
                        type="primary"
                        icon={<ArrowRightOutlined />}
                        className={styles.exploreBtn}
                        style={{
                          background: category.color,
                          borderColor: category.color,
                        }}
                      >
                        Explore {category.name}
                      </Button>
                    </Flex>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <Title level={2} className={styles.benefitsTitle}>
              Why Choose Our Botanicals
            </Title>
            <Row gutter={[48, 32]}>
              <Col xs={24} sm={12} md={6}>
                <Flex vertical align="center" gap="middle">
                  <div className={styles.benefitIcon}>🌿</div>
                  <Title level={4} className={styles.benefitTitle}>
                    All Natural
                  </Title>
                  <Text className={styles.benefitText}>
                    100% natural botanical extracts with no artificial additives
                  </Text>
                </Flex>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Flex vertical align="center" gap="middle">
                  <div className={styles.benefitIcon}>🔬</div>
                  <Title level={4} className={styles.benefitTitle}>
                    Lab Tested
                  </Title>
                  <Text className={styles.benefitText}>
                    Third-party tested for purity, potency, and safety
                  </Text>
                </Flex>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Flex vertical align="center" gap="middle">
                  <div className={styles.benefitIcon}>⚡</div>
                  <Title level={4} className={styles.benefitTitle}>
                    Fast Acting
                  </Title>
                  <Text className={styles.benefitText}>
                    Feel the effects within minutes, not hours
                  </Text>
                </Flex>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Flex vertical align="center" gap="middle">
                  <div className={styles.benefitIcon}>✨</div>
                  <Title level={4} className={styles.benefitTitle}>
                    Great Taste
                  </Title>
                  <Text className={styles.benefitText}>
                    Delicious flavors you'll actually enjoy drinking
                  </Text>
                </Flex>
              </Col>
            </Row>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <Card className={styles.ctaCard}>
              <Flex vertical align="center" gap="large">
                <Title level={2} className={styles.ctaTitle}>
                  Not Sure Where to Start?
                </Title>
                <Paragraph className={styles.ctaText}>
                  Try our variety pack sampler to discover your favorite
                  botanical blends. Perfect for first-time customers who want to
                  explore multiple categories.
                </Paragraph>
                <Flex gap="middle" wrap="wrap" justify="center">
                  <Button type="primary" size="large" className={styles.ctaBtn}>
                    Shop Variety Pack
                  </Button>
                  <Button size="large" className={styles.ctaBtnSecondary}>
                    Take Our Quiz
                  </Button>
                </Flex>
              </Flex>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
