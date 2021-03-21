import * as React from 'react';
import { Helmet } from 'react-helmet';

function SEO({
  description,
  keywords,
  title,
}: {
  description: string;
  keywords: string[];
  title: string;
}) {
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      titleTemplate={`Space Movies | ${title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `Mykhailo Penherscky`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `keywords`,
          content: keywords.join(', '),
        },
      ]}
    />
  );
}

export default SEO;
