import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    author?: string;
    robots?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogSiteName?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    omitSiteTitle?: boolean;
    jsonLd?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords = "UPSC, KPSC, IAS, KAS, Competitive Exams, Bangalore, Coaching",
    image = "/images/hero/upsc.png",
    url = "https://encourageindia.com",
    author = "Encourage India IAS",
    robots = "index, follow",
    ogTitle,
    ogDescription,
    ogSiteName = "Encourage India IAS",
    twitterTitle,
    twitterDescription,
    omitSiteTitle = false,
    jsonLd
}) => {
    const siteTitle = "Encourage India IAS Academy";
    const fullTitle = omitSiteTitle ? title : `${title} | ${siteTitle}`;

    // Use specific OG/Twitter titles/descriptions if provided, otherwise fallback to standard
    const finalOgTitle = ogTitle || fullTitle;
    const finalOgDescription = ogDescription || description;
    const finalTwitterTitle = twitterTitle || fullTitle;
    const finalTwitterDescription = twitterDescription || description;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content={robots} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={ogSiteName} />
            <meta property="og:title" content={finalOgTitle} />
            <meta property="og:description" content={finalOgDescription} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={finalTwitterTitle} />
            <meta property="twitter:description" content={finalTwitterDescription} />
            <meta property="twitter:image" content={image} />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />

            {/* JSON-LD Schema */}
            {jsonLd && (
                <script type="application/ld+json">
                    {jsonLd}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
