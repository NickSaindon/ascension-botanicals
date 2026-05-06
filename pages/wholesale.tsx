import Head from "next/head";
import Image from "next/image";
import {
  Typography,
  Row,
  Col,
  Card,
  Flex,
  Button,
  Input,
  Form,
  Collapse,
} from "antd";
import {
  CheckCircleOutlined,
  FileTextOutlined,
  RocketOutlined,
  SafetyOutlined,
  TrophyOutlined,
  StarOutlined,
  ThunderboltOutlined,
  HeartOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

interface WholesaleFormValues {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message?: string;
}

export default function Wholesale() {
  const [form] = Form.useForm();

  const onFinish = (values: WholesaleFormValues) => {
    console.log("Form values:", values);
  };

  const faqItems = [
    {
      key: "1",
      label: "WHO CAN BECOME A MITRA9 WHOLESALER?",
      children: (
        <Text>
          Any business owner with a valid business license and retail location
          can apply to become a Mitra9 wholesaler. We work with smoke shops,
          wellness stores, convenience stores, and more.
        </Text>
      ),
    },
    {
      key: "2",
      label: "WHAT ARE THE MINIMUM ORDER REQUIREMENTS?",
      children: (
        <Text>
          Our minimum order requirement is designed to be accessible for
          businesses of all sizes. Contact our wholesale team for specific
          details based on your business needs.
        </Text>
      ),
    },
    {
      key: "3",
      label:
        "IT LOOKS LIKE MITRA9 BEVERAGES EXCLUSIVELY AMONGST MITRA9 LEAF EXTRACTS?",
      children: (
        <Text>
          Yes, our beverages are exclusively crafted with premium Mitra9
          botanical extracts, ensuring consistent quality and effectiveness in
          every bottle.
        </Text>
      ),
    },
    {
      key: "4",
      label: "HOW LONG DOES IT TAKE TO RECEIVE MY WHOLESALE APPROVAL?",
      children: (
        <Text>
          Most wholesale applications are reviewed within 24-48 hours. Once
          approved, you&apos;ll receive immediate access to our wholesale portal
          and pricing.
        </Text>
      ),
    },
    {
      key: "5",
      label: "WHAT COMES AFTER YOU FILL OUT MITRA9 FORM?",
      children: (
        <Text>
          After submitting your application, our team will review your
          information and contact you with next steps. You&apos;ll receive
          wholesale pricing, marketing materials, and access to our support
          team.
        </Text>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Wholesale - The Future of Botanical Beverages</title>
        <meta
          name="description"
          content="Partner with us for wholesale botanical beverages"
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
            padding: "80px 24px 100px",
            overflow: "hidden",
          }}
        >
          {/* Decorative circles */}
          <div
            style={{
              position: "absolute",
              top: "30px",
              right: "30px",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border: "3px solid #00ff88",
              background: "transparent",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "80px",
              right: "100px",
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#ffaa00",
            }}
          />

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
                fontSize: "clamp(36px, 7vw, 64px)",
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
            <div style={{ maxWidth: "700px", margin: "0 auto" }}>
              <Image
                src="/cozy-family-moments.jpg"
                alt="Team collaboration"
                width={700}
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
        </div>

        {/* Intro Section */}
        <div style={{ padding: "80px 24px", background: "#ffffff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <Paragraph
              style={{
                fontSize: "18px",
                lineHeight: 1.8,
                color: "#333",
                margin: "0 0 24px 0",
              }}
            >
              Join us in revolutionizing the botanical beverage industry with
              MITRA9, a brand for real leaders, industry shifters and those
              looking to diversify and growing their business product lines.
            </Paragraph>
            <Paragraph
              style={{
                fontSize: "18px",
                lineHeight: 1.8,
                color: "#333",
                margin: "0 0 32px 0",
              }}
            >
              Inspired by millennia-old botanical traditions and informed by
              modern functional beverage trends, our products are changing the
              game—one sip at a time.
            </Paragraph>
            <Button
              type="primary"
              size="large"
              style={{
                background: "#0066ff",
                borderColor: "#0066ff",
                height: "48px",
                padding: "0 40px",
                fontSize: "16px",
                fontWeight: 600,
                borderRadius: "8px",
              }}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <div
          style={{
            padding: "80px 24px",
            background: "#f8f9fa",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Title
              level={2}
              style={{
                color: "#0066ff",
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 900,
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "60px",
                letterSpacing: "-1px",
              }}
            >
              Benefit of Being a Wholesale Partner
            </Title>
            <Row gutter={[48, 32]}>
              <Col xs={24} md={12}>
                <Image
                  src="/cozy-family-moments.jpg"
                  alt="Wholesale benefits"
                  width={500}
                  height={350}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  }}
                />
                {/* Decorative circles */}
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-40px",
                      left: "-20px",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "#ff6b35",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "40px",
                      left: "-30px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "#ff0066",
                    }}
                  />
                </div>
              </Col>
              <Col xs={24} md={12}>
                <Flex vertical gap="large">
                  <Flex gap="middle" align="start">
                    <CheckCircleOutlined
                      style={{
                        fontSize: "24px",
                        color: "#0066ff",
                        marginTop: "4px",
                      }}
                    />
                    <div>
                      <Title
                        level={5}
                        style={{
                          margin: "0 0 8px 0",
                          fontSize: "16px",
                          fontWeight: 700,
                        }}
                      >
                        HIGH PROFIT MARGINS
                      </Title>
                      <Text
                        style={{
                          color: "#666",
                          fontSize: "15px",
                          lineHeight: 1.6,
                        }}
                      >
                        Competitive wholesale pricing ensures healthy margins
                        for your business
                      </Text>
                    </div>
                  </Flex>
                  <Flex gap="middle" align="start">
                    <CheckCircleOutlined
                      style={{
                        fontSize: "24px",
                        color: "#0066ff",
                        marginTop: "4px",
                      }}
                    />
                    <div>
                      <Title
                        level={5}
                        style={{
                          margin: "0 0 8px 0",
                          fontSize: "16px",
                          fontWeight: 700,
                        }}
                      >
                        EXCLUSIVE PRODUCT ACCESS
                      </Title>
                      <Text
                        style={{
                          color: "#666",
                          fontSize: "15px",
                          lineHeight: 1.6,
                        }}
                      >
                        Be among the first to offer innovative botanical
                        beverages
                      </Text>
                    </div>
                  </Flex>
                  <Flex gap="middle" align="start">
                    <CheckCircleOutlined
                      style={{
                        fontSize: "24px",
                        color: "#0066ff",
                        marginTop: "4px",
                      }}
                    />
                    <div>
                      <Title
                        level={5}
                        style={{
                          margin: "0 0 8px 0",
                          fontSize: "16px",
                          fontWeight: 700,
                        }}
                      >
                        MARKETING SUPPORT
                      </Title>
                      <Text
                        style={{
                          color: "#666",
                          fontSize: "15px",
                          lineHeight: 1.6,
                        }}
                      >
                        Professional marketing materials and promotional support
                        included
                      </Text>
                    </div>
                  </Flex>
                </Flex>
              </Col>
            </Row>

            {/* Additional Info Box */}
            <div style={{ marginTop: "60px" }}>
              <Card
                style={{
                  background:
                    "linear-gradient(135deg, #0066ff 0%, #0052cc 100%)",
                  border: "none",
                  borderRadius: "16px",
                }}
                styles={{ body: { padding: "32px" } }}
              >
                <Title
                  level={4}
                  style={{
                    color: "#ffffff",
                    fontSize: "20px",
                    fontWeight: 700,
                    margin: "0 0 16px 0",
                  }}
                >
                  Available Exclusively in Mitra9
                </Title>
                <Paragraph
                  style={{
                    color: "rgba(255,255,255,0.95)",
                    fontSize: "16px",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Stand out in your market with exclusive access to Mitra9
                  botanical beverages. Our unique formulations are available
                  only through authorized wholesale partners.
                </Paragraph>
              </Card>
            </div>
          </div>
        </div>

        {/* Application Form Section */}
        <div
          style={{
            padding: "80px 24px",
            background: "#ffffff",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <Title
              level={2}
              style={{
                color: "#171717",
                fontSize: "clamp(28px, 5vw, 42px)",
                fontWeight: 900,
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "60px",
                letterSpacing: "-1px",
              }}
            >
              Wholesale Application Form
            </Title>

            <Row gutter={32}>
              <Col xs={24} md={4}>
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, #0066ff 0%, #0052cc 100%)",
                    height: "100%",
                    minHeight: "500px",
                    borderRadius: "12px 0 0 12px",
                  }}
                />
              </Col>
              <Col xs={24} md={16}>
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  size="large"
                >
                  <Form.Item
                    label={<Text strong>FULL NAME OF WHOLESALE</Text>}
                    name="fullName"
                    rules={[
                      { required: true, message: "Please enter full name" },
                    ]}
                  >
                    <Input placeholder="Enter your full name" />
                  </Form.Item>

                  <Form.Item
                    label={
                      <Text strong>Email Address (Wholesale Contact)</Text>
                    }
                    name="email"
                    rules={[
                      { required: true, message: "Please enter email" },
                      { type: "email", message: "Please enter valid email" },
                    ]}
                  >
                    <Input placeholder="Enter your email" />
                  </Form.Item>

                  <Form.Item
                    label={<Text strong>Phone</Text>}
                    name="phone"
                    rules={[
                      { required: true, message: "Please enter phone number" },
                    ]}
                  >
                    <Input placeholder="Enter your phone number" />
                  </Form.Item>

                  <Form.Item
                    label={<Text strong>Company</Text>}
                    name="company"
                    rules={[
                      { required: true, message: "Please enter company name" },
                    ]}
                  >
                    <Input placeholder="Enter your company name" />
                  </Form.Item>

                  <Form.Item
                    label={<Text strong>Let me know more information</Text>}
                    name="message"
                  >
                    <TextArea
                      rows={4}
                      placeholder="Tell us about your business and why you want to become a wholesale partner"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{
                        background: "#0066ff",
                        height: "48px",
                        fontSize: "16px",
                        fontWeight: 600,
                        borderRadius: "8px",
                      }}
                    >
                      SEND
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
              <Col xs={24} md={4}>
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, #0066ff 0%, #0052cc 100%)",
                    height: "100%",
                    minHeight: "500px",
                    borderRadius: "0 12px 12px 0",
                  }}
                />
              </Col>
            </Row>
          </div>
        </div>

        {/* Products Section with Wave */}
        <div
          style={{
            position: "relative",
            background:
              "linear-gradient(135deg, #ff6b35 0%, #ff9500 50%, #ff0099 100%)",
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
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 900,
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "24px",
                letterSpacing: "-1px",
              }}
            >
              Kratom Leaf Extract and Kava Products,
              <br />
              Designed for Retail Settings
            </Title>

            <Row gutter={[32, 32]} style={{ marginTop: "60px" }}>
              <Col xs={24} sm={12} md={8}>
                <Card
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    border: "none",
                    height: "100%",
                  }}
                  styles={{ body: { padding: "32px" } }}
                >
                  <Flex vertical gap="middle" align="center">
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "12px",
                        background: "#0066ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <StarOutlined
                        style={{ fontSize: "32px", color: "#ffffff" }}
                      />
                    </div>
                    <Title
                      level={4}
                      style={{
                        color: "#0066ff",
                        fontSize: "20px",
                        fontWeight: 700,
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      Energy Packs
                    </Title>
                    <Paragraph
                      style={{
                        color: "#666",
                        fontSize: "15px",
                        lineHeight: 1.7,
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      Boost your energy naturally with our specially formulated
                      kratom extract beverages. Perfect for active lifestyles
                      and busy days.
                    </Paragraph>
                  </Flex>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    border: "none",
                    height: "100%",
                  }}
                  styles={{ body: { padding: "32px" } }}
                >
                  <Flex vertical gap="middle" align="center">
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "12px",
                        background: "#8b3dff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <HeartOutlined
                        style={{ fontSize: "32px", color: "#ffffff" }}
                      />
                    </div>
                    <Title
                      level={4}
                      style={{
                        color: "#8b3dff",
                        fontSize: "20px",
                        fontWeight: 700,
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      Calm Blends
                    </Title>
                    <Paragraph
                      style={{
                        color: "#666",
                        fontSize: "15px",
                        lineHeight: 1.7,
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      Find your zen with our kava-infused beverages. Designed to
                      help you unwind and relax after a long day.
                    </Paragraph>
                  </Flex>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    border: "none",
                    height: "100%",
                  }}
                  styles={{ body: { padding: "32px" } }}
                >
                  <Flex vertical gap="middle" align="center">
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "12px",
                        background: "#ff6b35",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ThunderboltOutlined
                        style={{ fontSize: "32px", color: "#ffffff" }}
                      />
                    </div>
                    <Title
                      level={4}
                      style={{
                        color: "#ff6b35",
                        fontSize: "20px",
                        fontWeight: 700,
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      Focus Formulas
                    </Title>
                    <Paragraph
                      style={{
                        color: "#666",
                        fontSize: "15px",
                        lineHeight: 1.7,
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      Enhance mental clarity and concentration with our balanced
                      botanical blends. Stay sharp throughout your day.
                    </Paragraph>
                  </Flex>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        {/* Product Catalog */}
        <div
          style={{
            padding: "80px 24px",
            background: "#ffffff",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Title
              level={2}
              style={{
                color: "#0066ff",
                fontSize: "clamp(28px, 5vw, 42px)",
                fontWeight: 900,
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "60px",
                letterSpacing: "-1px",
              }}
            >
              Wholesale Product Catalog
            </Title>

            <Row gutter={[32, 48]}>
              {[
                { name: "KAVA VARIETY DRINK MIX", color: "#ff6b35" },
                { name: "VARIETY VARIETY MULTICOLOR", color: "#0066ff" },
                { name: "KAVA VARIETY PACK", color: "#ff0066" },
                { name: "PREMIUM SHOT", color: "#8b3dff" },
              ].map((product, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <Flex vertical gap="middle" align="center">
                    <div
                      style={{
                        width: "100%",
                        height: "250px",
                        background: "#f5f5f5",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `3px solid ${product.color}`,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <StarOutlined
                        style={{
                          fontSize: "60px",
                          color: product.color,
                          opacity: 0.3,
                        }}
                      />
                    </div>
                    <Text
                      style={{
                        color: "#171717",
                        fontSize: "14px",
                        fontWeight: 700,
                        textAlign: "center",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {product.name}
                    </Text>
                  </Flex>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Functional Beverages Section */}
        <div
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #0066ff 0%, #0052cc 100%)",
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
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 900,
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "60px",
                letterSpacing: "-1px",
              }}
            >
              What&apos;s Different About Our
              <br />
              Functional Beverages
            </Title>

            <Row gutter={[48, 32]} align="middle">
              <Col xs={24} md={10}>
                <Flex vertical gap="large">
                  <Flex gap="middle" align="start">
                    <CheckCircleOutlined
                      style={{
                        fontSize: "24px",
                        color: "#00ff88",
                        marginTop: "4px",
                      }}
                    />
                    <div>
                      <Title
                        level={5}
                        style={{
                          color: "#ffffff",
                          margin: "0 0 8px 0",
                          fontSize: "16px",
                          fontWeight: 700,
                        }}
                      >
                        ALL-NATURAL INGREDIENTS
                      </Title>
                      <Text
                        style={{
                          color: "rgba(255,255,255,0.9)",
                          fontSize: "15px",
                          lineHeight: 1.6,
                        }}
                      >
                        Only premium botanical extracts, no artificial additives
                      </Text>
                    </div>
                  </Flex>
                  <Flex gap="middle" align="start">
                    <CheckCircleOutlined
                      style={{
                        fontSize: "24px",
                        color: "#00ff88",
                        marginTop: "4px",
                      }}
                    />
                    <div>
                      <Title
                        level={5}
                        style={{
                          color: "#ffffff",
                          margin: "0 0 8px 0",
                          fontSize: "16px",
                          fontWeight: 700,
                        }}
                      >
                        SCIENTIFICALLY FORMULATED
                      </Title>
                      <Text
                        style={{
                          color: "rgba(255,255,255,0.9)",
                          fontSize: "15px",
                          lineHeight: 1.6,
                        }}
                      >
                        Carefully balanced for optimal effectiveness
                      </Text>
                    </div>
                  </Flex>
                  <Flex gap="middle" align="start">
                    <CheckCircleOutlined
                      style={{
                        fontSize: "24px",
                        color: "#00ff88",
                        marginTop: "4px",
                      }}
                    />
                    <div>
                      <Title
                        level={5}
                        style={{
                          color: "#ffffff",
                          margin: "0 0 8px 0",
                          fontSize: "16px",
                          fontWeight: 700,
                        }}
                      >
                        THIRD-PARTY TESTED
                      </Title>
                      <Text
                        style={{
                          color: "rgba(255,255,255,0.9)",
                          fontSize: "15px",
                          lineHeight: 1.6,
                        }}
                      >
                        Every batch is tested for purity and potency
                      </Text>
                    </div>
                  </Flex>
                </Flex>
              </Col>
              <Col xs={24} md={4}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: "20px",
                    padding: "60px 20px",
                    textAlign: "center",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <StarOutlined
                    style={{ fontSize: "80px", color: "rgba(255,255,255,0.5)" }}
                  />
                </div>
              </Col>
              <Col xs={24} md={10}>
                <Flex vertical gap="large">
                  <Flex gap="middle" align="start">
                    <CheckCircleOutlined
                      style={{
                        fontSize: "24px",
                        color: "#00ff88",
                        marginTop: "4px",
                      }}
                    />
                    <div>
                      <Title
                        level={5}
                        style={{
                          color: "#ffffff",
                          margin: "0 0 8px 0",
                          fontSize: "16px",
                          fontWeight: 700,
                        }}
                      >
                        GREAT TASTE
                      </Title>
                      <Text
                        style={{
                          color: "rgba(255,255,255,0.9)",
                          fontSize: "15px",
                          lineHeight: 1.6,
                        }}
                      >
                        Delicious flavors that customers actually enjoy
                      </Text>
                    </div>
                  </Flex>
                  <Flex gap="middle" align="start">
                    <CheckCircleOutlined
                      style={{
                        fontSize: "24px",
                        color: "#00ff88",
                        marginTop: "4px",
                      }}
                    />
                    <div>
                      <Title
                        level={5}
                        style={{
                          color: "#ffffff",
                          margin: "0 0 8px 0",
                          fontSize: "16px",
                          fontWeight: 700,
                        }}
                      >
                        FAST-ACTING
                      </Title>
                      <Text
                        style={{
                          color: "rgba(255,255,255,0.9)",
                          fontSize: "15px",
                          lineHeight: 1.6,
                        }}
                      >
                        Feel the effects within minutes, not hours
                      </Text>
                    </div>
                  </Flex>
                  <Flex gap="middle" align="start">
                    <CheckCircleOutlined
                      style={{
                        fontSize: "24px",
                        color: "#00ff88",
                        marginTop: "4px",
                      }}
                    />
                    <div>
                      <Title
                        level={5}
                        style={{
                          color: "#ffffff",
                          margin: "0 0 8px 0",
                          fontSize: "16px",
                          fontWeight: 700,
                        }}
                      >
                        CONVENIENT PACKAGING
                      </Title>
                      <Text
                        style={{
                          color: "rgba(255,255,255,0.9)",
                          fontSize: "15px",
                          lineHeight: 1.6,
                        }}
                      >
                        Ready-to-drink bottles perfect for on-the-go
                      </Text>
                    </div>
                  </Flex>
                </Flex>
              </Col>
            </Row>
          </div>
        </div>

        {/* Roadmap Section */}
        <div
          style={{
            padding: "80px 24px",
            background: "#ffffff",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Title
              level={2}
              style={{
                color: "#0066ff",
                fontSize: "clamp(28px, 5vw, 42px)",
                fontWeight: 900,
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "60px",
                letterSpacing: "-1px",
              }}
            >
              Roadmap for Kratom Wholesaler Success
            </Title>

            <Flex vertical gap="large">
              <Card
                style={{
                  background: "#f8f9fa",
                  border: "none",
                  borderRadius: "16px",
                }}
                styles={{ body: { padding: "32px" } }}
              >
                <Row gutter={[32, 16]} align="middle">
                  <Col xs={24} sm={4}>
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "12px",
                        background: "#0066ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                      }}
                    >
                      <FileTextOutlined
                        style={{ fontSize: "32px", color: "#ffffff" }}
                      />
                    </div>
                  </Col>
                  <Col xs={24} sm={20}>
                    <Title
                      level={4}
                      style={{
                        color: "#0066ff",
                        fontSize: "20px",
                        fontWeight: 700,
                        margin: "0 0 12px 0",
                      }}
                    >
                      Complete Account Setup
                    </Title>
                    <Paragraph
                      style={{
                        color: "#666",
                        fontSize: "15px",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      Submit your wholesale application and provide necessary
                      business documentation. Our team will review and approve
                      your account within 24-48 hours, giving you immediate
                      access to wholesale pricing and our full product catalog.
                    </Paragraph>
                  </Col>
                </Row>
              </Card>

              <Card
                style={{
                  background: "#f8f9fa",
                  border: "none",
                  borderRadius: "16px",
                }}
                styles={{ body: { padding: "32px" } }}
              >
                <Row gutter={[32, 16]} align="middle">
                  <Col xs={24} sm={4}>
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "12px",
                        background: "#8b3dff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                      }}
                    >
                      <RocketOutlined
                        style={{ fontSize: "32px", color: "#ffffff" }}
                      />
                    </div>
                  </Col>
                  <Col xs={24} sm={20}>
                    <Title
                      level={4}
                      style={{
                        color: "#8b3dff",
                        fontSize: "20px",
                        fontWeight: 700,
                        margin: "0 0 12px 0",
                      }}
                    >
                      Order Your Inventory
                    </Title>
                    <Paragraph
                      style={{
                        color: "#666",
                        fontSize: "15px",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      Place your first order through our easy-to-use wholesale
                      portal. Choose from our full range of products or select
                      variety packs. Fast shipping ensures your inventory
                      arrives quickly so you can start selling right away.
                    </Paragraph>
                  </Col>
                </Row>
              </Card>

              <Card
                style={{
                  background: "#f8f9fa",
                  border: "none",
                  borderRadius: "16px",
                }}
                styles={{ body: { padding: "32px" } }}
              >
                <Row gutter={[32, 16]} align="middle">
                  <Col xs={24} sm={4}>
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "12px",
                        background: "#ff6b35",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                      }}
                    >
                      <TrophyOutlined
                        style={{ fontSize: "32px", color: "#ffffff" }}
                      />
                    </div>
                  </Col>
                  <Col xs={24} sm={20}>
                    <Title
                      level={4}
                      style={{
                        color: "#ff6b35",
                        fontSize: "20px",
                        fontWeight: 700,
                        margin: "0 0 12px 0",
                      }}
                    >
                      Grow Your Sales
                    </Title>
                    <Paragraph
                      style={{
                        color: "#666",
                        fontSize: "15px",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      Leverage our marketing materials, point-of-sale displays,
                      and ongoing support to maximize your sales. Join our
                      partner community to share best practices and stay updated
                      on new products and promotions.
                    </Paragraph>
                  </Col>
                </Row>
              </Card>
            </Flex>
          </div>
        </div>

        {/* Story Section */}
        <div
          style={{
            padding: "80px 24px",
            background: "#f8f9fa",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <Title
              level={2}
              style={{
                color: "#0066ff",
                fontSize: "clamp(28px, 5vw, 42px)",
                fontWeight: 900,
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "40px",
                letterSpacing: "-1px",
              }}
            >
              The Mitra9 Story
            </Title>

            <Flex vertical gap="large">
              <Paragraph
                style={{
                  fontSize: "16px",
                  lineHeight: 1.8,
                  color: "#666",
                  textAlign: "center",
                }}
              >
                Founded with a vision to revolutionize the botanical beverage
                industry, Mitra9 combines ancient wisdom with modern science to
                create functional drinks that truly make a difference in
                people&apos;s lives.
              </Paragraph>
              <Paragraph
                style={{
                  fontSize: "16px",
                  lineHeight: 1.8,
                  color: "#666",
                  textAlign: "center",
                }}
              >
                Our journey began with a simple question: What if we could
                create beverages that not only taste great but also support
                wellness and vitality? Today, we&apos;re proud to partner with
                retailers across the country who share our commitment to quality
                and customer satisfaction.
              </Paragraph>
              <Paragraph
                style={{
                  fontSize: "16px",
                  lineHeight: 1.8,
                  color: "#666",
                  textAlign: "center",
                }}
              >
                Every bottle is crafted with care, tested rigorously, and
                designed to deliver consistent results. When you partner with
                Mitra9, you&apos;re not just selling beverages—you&apos;re
                offering your customers a premium experience backed by science
                and trusted by thousands.
              </Paragraph>
            </Flex>
          </div>
        </div>

        {/* Trust Signals Section */}
        <div
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #ff6b35 0%, #ff9500 100%)",
            padding: "100px 24px",
          }}
        >
          {/* Decorative leaf elements */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              right: "5%",
              fontSize: "60px",
              opacity: 0.2,
            }}
          >
            🍃
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              right: "8%",
              fontSize: "80px",
              opacity: 0.2,
            }}
          >
            🍃
          </div>

          <div
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Title
              level={2}
              style={{
                color: "#ffffff",
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 900,
                textTransform: "uppercase",
                marginBottom: "60px",
                letterSpacing: "-1px",
              }}
            >
              Trust Signals
            </Title>

            <Flex vertical gap="large">
              <Card
                style={{
                  background: "#ffffff",
                  border: "none",
                  borderRadius: "16px",
                }}
                styles={{ body: { padding: "32px" } }}
              >
                <Flex gap="middle" align="start">
                  <SafetyOutlined
                    style={{
                      fontSize: "32px",
                      color: "#0066ff",
                      marginTop: "4px",
                    }}
                  />
                  <div>
                    <Title
                      level={4}
                      style={{
                        color: "#0066ff",
                        fontSize: "20px",
                        fontWeight: 700,
                        margin: "0 0 12px 0",
                      }}
                    >
                      Awards and Certifications
                    </Title>
                    <Paragraph
                      style={{
                        color: "#666",
                        fontSize: "15px",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      Recognized industry leader with multiple awards for
                      product excellence and innovation. Our facilities are
                      certified and regularly inspected to ensure the highest
                      quality standards. We maintain cGMP compliance and work
                      with certified third-party labs for all testing.
                    </Paragraph>
                  </div>
                </Flex>
              </Card>

              <Card
                style={{
                  background: "#ffffff",
                  border: "none",
                  borderRadius: "16px",
                }}
                styles={{ body: { padding: "32px" } }}
              >
                <Flex gap="middle" align="start">
                  <CustomerServiceOutlined
                    style={{
                      fontSize: "32px",
                      color: "#8b3dff",
                      marginTop: "4px",
                    }}
                  />
                  <div>
                    <Title
                      level={4}
                      style={{
                        color: "#8b3dff",
                        fontSize: "20px",
                        fontWeight: 700,
                        margin: "0 0 12px 0",
                      }}
                    >
                      Market Research and Track Record
                    </Title>
                    <Paragraph
                      style={{
                        color: "#666",
                        fontSize: "15px",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      With years of proven success in the botanical beverage
                      market, we&apos;ve built a reputation for reliability and
                      quality. Our products consistently rank among the top
                      sellers in retail locations, with excellent customer
                      reviews and high repeat purchase rates. Join hundreds of
                      satisfied wholesale partners who trust Mitra9 for their
                      inventory needs.
                    </Paragraph>
                  </div>
                </Flex>
              </Card>
            </Flex>
          </div>
        </div>

        {/* FAQ Section */}
        <div
          style={{
            padding: "80px 24px",
            background: "#ffffff",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <Title
              level={2}
              style={{
                color: "#0066ff",
                fontSize: "clamp(28px, 5vw, 42px)",
                fontWeight: 900,
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "60px",
                letterSpacing: "-1px",
              }}
            >
              Mitra9 Wholesale FAQ&apos;s
            </Title>

            <Collapse
              items={faqItems}
              defaultActiveKey={["1"]}
              size="large"
              style={{
                background: "#f8f9fa",
                border: "none",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
