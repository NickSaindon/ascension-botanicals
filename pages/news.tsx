import Head from "next/head";
import Image from "next/image";
import { Typography, Row, Col, Card, Tag, Button, Flex } from "antd";
import {
  ClockCircleOutlined,
  UserOutlined,
  ReadOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Hero from "../components/Hero";
import styles from "../styles/News.module.scss";

const { Title, Paragraph, Text } = Typography;

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

export default function News() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Science Behind Botanical Beverages",
      excerpt:
        "Discover how ancient botanical wisdom meets modern science to create functional beverages that support your wellness journey. Learn about the research and testing that goes into every bottle.",
      author: "Dr. Sarah Mitchell",
      date: "May 1, 2026",
      readTime: "5 min read",
      category: "Science",
      image: "/images/image1.png",
      featured: true,
    },
    {
      id: 2,
      title: "Understanding Kratom: A Complete Guide",
      excerpt:
        "Everything you need to know about kratom, from its origins in Southeast Asia to its modern applications. Explore the different strains and their unique properties.",
      author: "Michael Chen",
      date: "April 28, 2026",
      readTime: "8 min read",
      category: "Education",
      image: "/images/image2.png",
    },
    {
      id: 3,
      title: "Wellness Trends: Natural Energy Solutions",
      excerpt:
        "Say goodbye to coffee crashes and hello to sustained energy. Explore natural alternatives that provide clean energy without the jitters or afternoon slump.",
      author: "Emma Rodriguez",
      date: "April 25, 2026",
      readTime: "6 min read",
      category: "Wellness",
      image: "/images/image3.png",
    },
    {
      id: 4,
      title: "Behind the Scenes: Our Quality Testing Process",
      excerpt:
        "Transparency is key to trust. Take a look inside our third-party testing facilities and learn how we ensure every batch meets our strict quality standards.",
      author: "James Patterson",
      date: "April 22, 2026",
      readTime: "4 min read",
      category: "Quality",
      image: "/images/Image4.png",
    },
    {
      id: 5,
      title: "The Future of Functional Beverages",
      excerpt:
        "What's next in the world of functional drinks? We explore emerging trends, new ingredients, and how the industry is evolving to meet consumer demands.",
      author: "Dr. Sarah Mitchell",
      date: "April 18, 2026",
      readTime: "7 min read",
      category: "Industry",
      image: "/images/Image5.png",
    },
    {
      id: 6,
      title: "Customer Stories: Real Results from Real People",
      excerpt:
        "Hear from customers who have incorporated our botanical beverages into their daily routines. Discover their experiences and why they continue to choose our products.",
      author: "Lisa Thompson",
      date: "April 15, 2026",
      readTime: "5 min read",
      category: "Stories",
      image: "/images/image1.png",
    },
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Science: "blue",
      Education: "green",
      Wellness: "purple",
      Quality: "orange",
      Industry: "red",
      Stories: "cyan",
    };
    return colors[category] || "default";
  };

  return (
    <>
      <Head>
        <title>News & Blog - Ascension Botanicals</title>
        <meta
          name="description"
          content="Stay updated with the latest news, insights, and stories from Ascension Botanicals"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Hero
        title="Our Blog"
        subtitle="NEWS & INSIGHTS"
        backgroundImage="/images/image1.png"
      />

      <div className={styles.newsPage}>
        {/* Featured Post */}
        {featuredPost && (
          <section className={styles.featuredSection}>
            <div className={styles.container}>
              <Text className={styles.sectionLabel}>Featured Article</Text>
              <Card
                className={styles.featuredCard}
                cover={
                  <div className={styles.featuredImageWrapper}>
                    <Image
                      alt={featuredPost.title}
                      src={featuredPost.image}
                      width={1200}
                      height={500}
                      className={styles.featuredImage}
                      style={{ objectFit: "cover" }}
                    />
                    <Tag
                      color={getCategoryColor(featuredPost.category)}
                      className={styles.categoryTag}
                    >
                      {featuredPost.category}
                    </Tag>
                  </div>
                }
              >
                <Flex vertical gap="middle">
                  <Title level={2} className={styles.featuredTitle}>
                    {featuredPost.title}
                  </Title>
                  <Paragraph className={styles.featuredExcerpt}>
                    {featuredPost.excerpt}
                  </Paragraph>
                  <Flex gap="large" className={styles.postMeta}>
                    <Flex align="center" gap="small">
                      <UserOutlined />
                      <Text>{featuredPost.author}</Text>
                    </Flex>
                    <Flex align="center" gap="small">
                      <ClockCircleOutlined />
                      <Text>{featuredPost.date}</Text>
                    </Flex>
                    <Flex align="center" gap="small">
                      <ReadOutlined />
                      <Text>{featuredPost.readTime}</Text>
                    </Flex>
                  </Flex>
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    className={styles.readMoreBtn}
                  >
                    Read Full Article
                  </Button>
                </Flex>
              </Card>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className={styles.postsSection}>
          <div className={styles.container}>
            <Title level={2} className={styles.sectionTitle}>
              Latest Articles
            </Title>
            <Row gutter={[32, 32]}>
              {regularPosts.map((post) => (
                <Col xs={24} sm={12} lg={8} key={post.id}>
                  <Card
                    hoverable
                    className={styles.postCard}
                    cover={
                      <div className={styles.postImageWrapper}>
                        <Image
                          alt={post.title}
                          src={post.image}
                          width={400}
                          height={240}
                          className={styles.postImage}
                          style={{ objectFit: "cover" }}
                        />
                        <Tag
                          color={getCategoryColor(post.category)}
                          className={styles.categoryTag}
                        >
                          {post.category}
                        </Tag>
                      </div>
                    }
                  >
                    <Flex vertical gap="middle">
                      <Title level={4} className={styles.postTitle}>
                        {post.title}
                      </Title>
                      <Paragraph className={styles.postExcerpt}>
                        {post.excerpt}
                      </Paragraph>
                      <Flex vertical gap="small">
                        <Flex gap="middle" className={styles.postMetaSmall}>
                          <Flex align="center" gap="small">
                            <UserOutlined />
                            <Text className={styles.metaText}>
                              {post.author}
                            </Text>
                          </Flex>
                          <Flex align="center" gap="small">
                            <ClockCircleOutlined />
                            <Text className={styles.metaText}>
                              {post.readTime}
                            </Text>
                          </Flex>
                        </Flex>
                        <Text className={styles.postDate}>{post.date}</Text>
                        <Button
                          type="link"
                          icon={<ArrowRightOutlined />}
                          className={styles.readLink}
                        >
                          Read More
                        </Button>
                      </Flex>
                    </Flex>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className={styles.newsletterSection}>
          <div className={styles.container}>
            <Card className={styles.newsletterCard}>
              <Flex vertical gap="middle" align="center">
                <Title level={2} className={styles.newsletterTitle}>
                  Stay Updated
                </Title>
                <Paragraph className={styles.newsletterText}>
                  Subscribe to our newsletter and never miss an update on new
                  products, wellness tips, and exclusive offers.
                </Paragraph>
                <Flex gap="middle" className={styles.newsletterForm}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={styles.newsletterInput}
                  />
                  <Button type="primary" size="large">
                    Subscribe
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
