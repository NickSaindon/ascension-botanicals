import { Layout, Row, Col, Typography, Space, Flex } from "antd";
import {
  FacebookOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";

const { Footer: AntFooter } = Layout;
const { Text, Paragraph } = Typography;

const Footer = () => {
  return (
    <AntFooter className={styles.footer}>
      <div className={styles.footerContainer}>
        <Row gutter={[48, 32]}>
          {/* Logo and Disclaimer */}
          <Col xs={24} md={12} lg={8}>
            <div className={styles.logoSection}>
              <Image
                src="/images/Ascension-Logo.png"
                alt="Ascension Botanicals"
                width={150}
                height={50}
                priority
              />
              <Paragraph className={styles.disclaimer}>
                Must be of legal age of 21 to purchase these products. The
                manufacturer and distributors of these products assume no
                liability for the misuse or misrepresentation of these products.
                Any statements made have not been evaluated by the U.S. Food and
                Drug Administration. This product is not intended to diagnose,
                treat, cure or prevent any disease. The U.S. Food and Drug
                Administration has not yet approved this product for human
                consumption. Keep out of reach of children and pets. Avoid
                contact with eyes. We do not ship to the following US states,
                counties, and cities where kratom is banned: Alabama, Arkansas,
                Indiana, Rhode Island, Vermont, Wisconsin, Sarasota County (FL),
                Union County (NC), Denver (CO), and San Diego (CA).
              </Paragraph>
            </div>
          </Col>

          {/* Menu Links */}
          <Col xs={24} sm={12} md={6} lg={8}>
            <div className={styles.menuSection}>
              <Text className={styles.sectionTitle}>Menu</Text>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/news">News</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/refund-policy">Refund Policy</Link>
                </li>
                <li>
                  <Link href="/shipping-policy">Shipping Policy</Link>
                </li>
                <li>
                  <Link href="/terms-of-service">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/lab-test">Lab Test</Link>
                </li>
              </ul>
            </div>
          </Col>

          {/* Contact Info */}
          <Col xs={24} sm={12} md={6} lg={8}>
            <div className={styles.contactSection}>
              <Text className={styles.sectionTitle}>Contact Info</Text>
              <Flex vertical gap="middle" className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <Text>📞 555.555.5555</Text>
                </div>
                <div className={styles.contactItem}>
                  <Text>✉️ ascension.botanicals@gmail.com</Text>
                </div>
                <div className={styles.contactItem}>
                  <Text>📍 1234 Ascension Way</Text>
                  <Text>Durango, CO 10987</Text>
                </div>
                <Space size="large" className={styles.socialIcons}>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FacebookOutlined />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <YoutubeOutlined />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinOutlined />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className={styles.tiktokIcon}
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </Space>
              </Flex>
            </div>
          </Col>
        </Row>
      </div>

      {/* Copyright Bar */}
      <div className={styles.copyrightBar}>
        <Text className={styles.copyrightText}>
          © Ascension Botanicals | Kratom Products
        </Text>
      </div>
    </AntFooter>
  );
};

export default Footer;
