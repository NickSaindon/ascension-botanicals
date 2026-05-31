import React from "react";
import Image from "next/image";
import { Typography, Card, Button, Flex, Tag } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import styles from "../styles/Categories.module.scss";

const { Title, Paragraph, Text } = Typography;

type Product = {
  name: string;
  slug: string;
  imageOne: string;
  category: string;
  color?: string;
  region: string;
  leafType?: string;
  leafName?: string;
  size: string;
  price: number;
  countInStock: number;
  description: string;
  featured?: boolean;
};

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const isOutOfStock = product.countInStock <= 0;

  return (
    <Card
      hoverable
      className={styles.categoryCard}
      cover={
        <div className={styles.categoryImageWrapper}>
          <Image
            alt={product.name}
            src={product.imageOne}
            width={400}
            height={280}
            className={styles.categoryImage}
            style={{ objectFit: "cover" }}
          />
          {product.featured && (
            <Tag className={styles.popularTag} color="gold">
              Featured
            </Tag>
          )}
        </div>
      }
    >
      <Flex vertical gap="middle">
        <Flex justify="space-between" align="center">
          <Title level={4} className={styles.categoryName}>
            {product.name}
          </Title>
          <Text className={styles.productCount}>{product.size}</Text>
        </Flex>

        <Paragraph
          className={styles.categoryDescription}
          ellipsis={{ rows: 2 }}
        >
          {product.description}
        </Paragraph>

        <Flex gap="small" wrap="wrap">
          <Tag color={product.color?.toLowerCase()}>
            {product.color || "Blend"}
          </Tag>
          <Tag>{product.leafType || "Botanical"}</Tag>
          <Tag>{product.leafName || product.region}</Tag>
        </Flex>

        <Flex justify="space-between" align="center">
          <Title level={4} style={{ margin: 0 }}>
            ${product.price.toFixed(2)}
          </Title>
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            className={styles.exploreBtn}
            disabled={isOutOfStock}
          >
            {isOutOfStock ? "Out of Stock" : "Add to Cart"}
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProductItem;
