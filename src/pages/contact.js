import React from 'react';

import Layout from '../components/layout'
import SEO from "../components/seo"
import ContactSection from "../components/ContactSection"

const ContactPage = () =>
  (
    <Layout shouldRenderTitle shouldRenderFooter>
      <SEO title="Contact" />
      <ContactSection
        email="alihaghani96@gmail.com"
      />
    </Layout>
  )

export default ContactPage;
