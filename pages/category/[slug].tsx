import React from "react";
import Head from "next/head";
import { Typography, Row, Col } from "antd";
import ProductItem from "../../components/ProductItem";
import Hero from "../../components/Hero";
import data from "../../utils/data";
import styles from "../../styles/Categories.module.scss";
import { GetStaticPaths, GetStaticProps } from "next";

const { Title, Paragraph } = Typography;

type Product = {
  name: string;
  slug: string;
  category: string;
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  imageFour: string;
  color?: string;
  region: string;
  leafType?: string;
  leafName?: string;
  size: string;
  price: number;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
  featured?: boolean;
};

type Category = {
  name: string;
  slug: string;
  categoryImage: string;
  categoryText: string;
};

type CategoryPageProps = {
  category: Category;
  products: Product[];
};

export default function CategoryPage({
  category,
  products,
}: CategoryPageProps) {
  return (
    <>
      <Head>
        <title>{category.name} - Ascension Botanicals</title>
        <meta name="description" content={category.categoryText} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Hero
        title={category.name.toUpperCase()}
        subtitle="Premium Quality Products"
        backgroundImage={category.categoryImage}
      />

      <div className={styles.categoriesPage}>
        {/* Intro Section */}
        <section className={styles.introSection}>
          <div className={styles.container}>
            <Title level={2} className={styles.introTitle}>
              {category.name}
            </Title>
            <Paragraph className={styles.introParagraph}>
              {category.categoryText}
            </Paragraph>
          </div>
        </section>

        {/* Products Grid */}
        <section className={styles.categoriesSection}>
          <div className={styles.container}>
            {products.length > 0 ? (
              <Row gutter={[32, 32]}>
                {products.map((product) => (
                  <Col xs={24} sm={12} md={8} lg={8} key={product.slug}>
                    <ProductItem product={product} />
                  </Col>
                ))}
              </Row>
            ) : (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <Title level={3}>No products available in this category</Title>
                <Paragraph>Check back soon for new products!</Paragraph>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = data.categories;

  const paths = categories.map((category) => ({
    params: { slug: category.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  const category = data.categories.find((cat) => cat.slug === slug);

  if (!category) {
    return {
      notFound: true,
    };
  }

  // Filter products by category and sort by size
  const products = data.products
    .filter((product) => product.category === slug)
    .sort((a, b) => {
      // Extract numeric value from size for proper sorting (100g, 150g, etc.)
      const sizeA = parseInt(a.size.replace(/\D/g, "")) || 0;
      const sizeB = parseInt(b.size.replace(/\D/g, "")) || 0;
      return sizeA - sizeB;
    });

  return {
    props: {
      category,
      products,
    },
  };
};
