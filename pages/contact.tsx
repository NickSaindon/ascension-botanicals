import Head from "next/head";
import {
  Card,
  Typography,
  Form,
  Input,
  Button,
  Row,
  Col,
  theme,
  message,
  Flex,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  UserOutlined,
  SendOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;
const { useToken } = theme;

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { token } = useToken();
  const [form] = Form.useForm();

  const onFinish = (values: ContactFormValues) => {
    console.log("Form submitted:", values);
    message.success("Message sent successfully! We'll get back to you soon.");
    form.resetFields();
  };

  return (
    <>
      <Head>
        <title>Contact Us - My App</title>
        <meta name="description" content="Get in touch with us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          minHeight: "calc(100vh - 64px)",
          backgroundColor: token.colorBgLayout,
          padding: "40px 20px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Flex vertical gap="large" style={{ width: "100%" }}>
            {/* Header */}
            <Card>
              <Title level={1}>Contact Us</Title>
              <Paragraph style={{ fontSize: "16px" }}>
                Have a question or want to work together? We&apos;d love to hear
                from you. Send us a message and we&apos;ll respond as soon as
                possible.
              </Paragraph>
            </Card>

            <Row gutter={[24, 24]}>
              {/* Contact Form */}
              <Col xs={24} lg={14}>
                <Card title="Send us a Message">
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    requiredMark="optional"
                  >
                    <Row gutter={16}>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          label="First Name"
                          name="firstName"
                          rules={[
                            {
                              required: true,
                              message: "Please enter your first name",
                            },
                          ]}
                        >
                          <Input
                            prefix={<UserOutlined />}
                            placeholder="John"
                            size="large"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          label="Last Name"
                          name="lastName"
                          rules={[
                            {
                              required: true,
                              message: "Please enter your last name",
                            },
                          ]}
                        >
                          <Input
                            prefix={<UserOutlined />}
                            placeholder="Doe"
                            size="large"
                          />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          type: "email",
                          message: "Please enter a valid email",
                        },
                      ]}
                    >
                      <Input
                        prefix={<MailOutlined />}
                        placeholder="john.doe@example.com"
                        size="large"
                      />
                    </Form.Item>

                    <Form.Item
                      label="Phone Number"
                      name="phone"
                      rules={[
                        {
                          required: false,
                        },
                      ]}
                    >
                      <Input
                        prefix={<PhoneOutlined />}
                        placeholder="+1 (555) 123-4567"
                        size="large"
                      />
                    </Form.Item>

                    <Form.Item
                      label="Subject"
                      name="subject"
                      rules={[
                        {
                          required: true,
                          message: "Please enter a subject",
                        },
                      ]}
                    >
                      <Input placeholder="How can we help?" size="large" />
                    </Form.Item>

                    <Form.Item
                      label="Message"
                      name="message"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your message",
                        },
                        {
                          min: 10,
                          message: "Message must be at least 10 characters",
                        },
                      ]}
                    >
                      <TextArea
                        rows={6}
                        placeholder="Tell us more about your inquiry..."
                        showCount
                        maxLength={1000}
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        icon={<SendOutlined />}
                        block
                      >
                        Send Message
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Col>

              {/* Contact Information */}
              <Col xs={24} lg={10}>
                <Flex vertical gap="middle">
                  <Card title="Contact Information">
                    <Flex vertical gap="large">
                      <div>
                        <Flex align="center" gap="middle">
                          <MailOutlined
                            style={{
                              fontSize: "24px",
                              color: token.colorPrimary,
                            }}
                          />
                          <div>
                            <Text strong style={{ display: "block" }}>
                              Email
                            </Text>
                            <Text type="secondary">info@myapp.com</Text>
                          </div>
                        </Flex>
                      </div>

                      <div>
                        <Flex align="center" gap="middle">
                          <PhoneOutlined
                            style={{
                              fontSize: "24px",
                              color: token.colorSuccess,
                            }}
                          />
                          <div>
                            <Text strong style={{ display: "block" }}>
                              Phone
                            </Text>
                            <Text type="secondary">+1 (555) 123-4567</Text>
                          </div>
                        </Flex>
                      </div>

                      <div>
                        <Flex align="center" gap="middle">
                          <EnvironmentOutlined
                            style={{
                              fontSize: "24px",
                              color: token.colorError,
                            }}
                          />
                          <div>
                            <Text strong style={{ display: "block" }}>
                              Address
                            </Text>
                            <Text type="secondary">
                              123 Business Street
                              <br />
                              Suite 100
                              <br />
                              San Francisco, CA 94102
                            </Text>
                          </div>
                        </Flex>
                      </div>
                    </Flex>
                  </Card>

                  <Card title="Business Hours">
                    <Flex vertical gap="small">
                      <Flex justify="space-between">
                        <Text>Monday - Friday</Text>
                        <Text strong>9:00 AM - 6:00 PM</Text>
                      </Flex>
                      <Flex justify="space-between">
                        <Text>Saturday</Text>
                        <Text strong>10:00 AM - 4:00 PM</Text>
                      </Flex>
                      <Flex justify="space-between">
                        <Text>Sunday</Text>
                        <Text strong>Closed</Text>
                      </Flex>
                    </Flex>
                  </Card>

                  <Card
                    style={{
                      background: `linear-gradient(135deg, ${token.colorPrimary} 0%, ${token.colorPrimaryHover} 100%)`,
                      color: "white",
                    }}
                  >
                    <Title level={4} style={{ color: "white", marginTop: 0 }}>
                      Quick Response
                    </Title>
                    <Paragraph style={{ color: "white", marginBottom: 0 }}>
                      We typically respond to all inquiries within 24 hours
                      during business days.
                    </Paragraph>
                  </Card>
                </Flex>
              </Col>
            </Row>
          </Flex>
        </div>
      </div>
    </>
  );
}
