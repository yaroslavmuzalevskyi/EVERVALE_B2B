export default function PrivacyPolicyPage() {
  const documentText = `PRIVACY POLICY
Version: March 2026

Evervale
ELEVAN plus s.r.o.
Na Čečeličce 425/4, 150 00 Praha, Czechia
Privacy Contact: privacy@evervale.org

1. Introduction
This Privacy Policy ('Policy') describes how Evervale (operated by ELEVAN plus s.r.o.) collects, uses, protects, and processes your personal data when you visit our Website at https://evervale.org or place an order. We are committed to safeguarding your privacy and ensuring transparency in our data practices.

2. Data Controller
ELEVAN plus s.r.o. is the data controller responsible for the processing of your personal data. Contact: privacy@evervale.org

3. Personal Data We Collect
We collect only personal data that you voluntarily provide to us when placing an order or creating an account. This may include:
• Full name;
• Email address;
• Phone number;
• Delivery address (country, city, postal code, street);
• Payment information (processed by Stripe; we do not store card details).
We do NOT collect any sensitive personal data such as health information, financial records, or other special categories of data.

4. Purpose of Data Collection and Use
We use your personal data exclusively for the following purposes:
• Processing and fulfilling your order;
• Delivering products to your address;
• Communicating with you about your order (order confirmation, shipping updates);
• Internal record keeping and business operations;
• Responding to customer inquiries and providing customer service.
We do NOT use your data for marketing purposes, and we do NOT send unsolicited marketing emails or newsletters.

5. Data Sharing and Third Parties
Your personal data is not sold, rented, or transferred to third parties for their marketing purposes. We may share your data with the following service providers necessary for Website operation:
• Stripe: Payment processor. Your payment information is processed directly by Stripe and is subject to their privacy policy.
• Google Analytics: Web analytics tool used to analyze Website traffic and usage patterns. Google does not identify you personally.
• Postal and shipping services: Your delivery address is shared with postal carriers to facilitate order delivery.
All service providers are contractually bound to protect your data and use it only for the purposes specified.

6. Data Storage and Retention
Your personal data is stored in our internal Customer Relationship Management (CRM) system. Data is retained only for as long as necessary to fulfill the purposes outlined in this Policy, typically for the duration of the business relationship and as required by applicable law. We implement technical and organizational security measures to protect your data from unauthorized access, alteration, or disclosure.

7. Cookies and Analytics
The Website uses analytical cookies provided by Google Analytics to track user behavior, traffic patterns, and Website performance. These cookies:
• Are used exclusively for analytics purposes;
• Do not track personal identifying information;
• Do not include marketing or advertising cookies;
• Are subject to Google Analytics' privacy practices.
You can control cookie settings in your browser. Disabling cookies may affect Website functionality.

8. Your Data Rights
If you are located in the European Union or a jurisdiction with similar data protection laws, you may have the following rights regarding your personal data:
• Right of Access: Request a copy of your personal data;
• Right of Rectification: Request correction of inaccurate data;
• Right of Erasure: Request deletion of your data under certain circumstances;
• Right of Portability: Request your data in a portable format;
• Right to Object: Object to certain processing of your data.
To exercise any of these rights, please contact us at privacy@evervale.org.

9. International Data Transfers
Your data may be transferred to and stored in countries outside your country of residence, including the Czech Republic. By using the Website and providing your personal data, you consent to such transfers, provided they comply with applicable data protection laws.

10. Children's Privacy
The Website is not intended for children under 21 years of age. We do not knowingly collect personal data from anyone under 21. If we learn that we have collected data from someone under 21, we will delete such data immediately.

11. Changes to Privacy Policy
We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. Changes will be effective upon posting to the Website. Your continued use of the Website following such changes constitutes your acceptance of the updated Policy.

12. Contact Us
If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact:
Email: privacy@evervale.org`;

  return (
    <div className=" text-pr_w">
      <section className="w-full px-4 pt-[120px] pb-24 sm:px-6 md:px-8 lg:px-12 xl:px-[130px]">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-semibold sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-pr_w/70">Last updated: March 2026</p>
          <article className="mt-8 whitespace-pre-line rounded-3xl border border-pr_w/20 bg-pr_w/5 px-6 py-8 text-left text-sm leading-7 text-pr_w/85 shadow-xl backdrop-blur-sm sm:px-8 sm:py-10">
            {documentText}
          </article>
        </div>
      </section>
    </div>
  );
}
