import Image from "next/image";
import { Typography, Row, Col, Card, Button, Flex, Tag } from "antd";

const ProductItem = (product) => {
  return (
    <div>
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
    </div>
  );
};

export default ProductItem;
