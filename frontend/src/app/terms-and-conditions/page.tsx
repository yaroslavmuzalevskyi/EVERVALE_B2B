export default function TermsAndConditionsPage() {
  const documentText = `TERMS AND CONDITIONS
Version: March 2026

Evervale
ELEVAN plus s.r.o.
Na Čečeličce 425/4, 150 00 Praha, Czechia
Company ID: 02928205 | VAT ID: CZ02928205
Email: privacy@evervale.org

1. Introduction and Acceptance
These Terms and Conditions ('Terms') govern your use of the website https://evervale.org (the 'Website') and the purchase of products offered thereon. By accessing and using the Website, or by placing an order, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use the Website or place any orders.

2. Eligibility and Age Restriction
You must be at least 21 years of age to access and use the Website and to purchase products. By using the Website, you represent and warrant that you are at least 21 years of age and possess the legal authority to enter into these Terms. We reserve the right to verify your age at any time.

3. Product Description and Use
Evervale offers cannabis seeds as souvenir and collectible products. The seeds are offered exclusively as genetic material for collection purposes only and are not intended for cultivation, propagation, or growth. All information provided on the Website regarding product characteristics, strains, and genetic properties is for informational purposes only.
IMPORTANT: Results such as germination or viability are not guaranteed. We make no representations or warranties regarding the performance, characteristics, or results of the products. You assume all risks associated with the use or possession of the products.

4. Legal Compliance
It is your responsibility to ensure that your purchase and possession of the products complies with the laws and regulations of your country, region, or locality. The legal status of cannabis seeds varies significantly across jurisdictions. By placing an order, you represent and warrant that:
• The purchase and possession of cannabis seeds is legal in your jurisdiction;
• You will comply with all applicable local, state, and national laws regarding the products;
• You will not use the products in violation of any law.
Evervale is not responsible for any legal consequences arising from your purchase, possession, or use of the products.

5. Shipping and Delivery
Orders are shipped from the Czech Republic using postal services. We aim to deliver orders to customers worldwide, provided that shipping to the destination country is legally permissible for cannabis seed products. We reserve the right to refuse or cancel shipments to countries where such products are prohibited.
Risk of Loss: Risk of loss and title to products transfer to you upon delivery to your address as provided during checkout. We are not responsible for loss, damage, or theft of packages after delivery.
Delivery Delays: Evervale is not liable for delivery delays caused by postal services, customs, or other third-party carriers.

6. Returns and Refunds
Given the nature of our products, returns are generally not accepted. However, we offer limited return and replacement options as a service to our customers, subject to the following conditions:
• The product packaging must remain unopened and unused;
• A return request must be submitted within 14 days of receiving the order;
• Return shipping costs are the responsibility of the customer;
• Products that are deemed to have been opened, used, or damaged by the customer will not be accepted for return.
Replacement or Compensation: In cases where a return is approved, we may offer a product replacement or store credit at our discretion. Refunds to the original payment method may be offered in exceptional circumstances.

7. Payment
Currently, payments are processed exclusively through Stripe. We do not store or have access to your payment card details. Stripe handles all payment processing and fraud prevention. Payment methods may be expanded in the future to include cryptocurrency and PayPal.
All prices are displayed in the currency selected on the Website.
Payment must be completed and authorized before your order is confirmed. If payment fails, your order will not be processed.

8. User Accounts
You may create an account on the Website to simplify future purchases, or you may place orders as a guest. If you create an account, you agree to provide accurate and complete information and to keep your login credentials confidential. You are responsible for all activity that occurs under your account.

9. Limitation of Liability
To the fullest extent permitted by law, Evervale and ELEVAN plus s.r.o. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising from or related to your use of the Website or purchase of products, even if we have been advised of the possibility of such damages.

10. Indemnification
You agree to indemnify and hold harmless Evervale, ELEVAN plus s.r.o., and their officers, directors, employees, and agents from any claims, damages, losses, or expenses (including attorney's fees) arising from your violation of these Terms, your use of the Website, or your purchase or possession of the products.

11. Governing Law and Jurisdiction
These Terms are governed by and construed in accordance with the laws of the Czech Republic, without regard to its conflict of law principles. You agree that any disputes arising from these Terms or your use of the Website shall be resolved exclusively in the courts of the Czech Republic.

12. Modifications to Terms
Evervale reserves the right to modify these Terms at any time. Changes will be effective upon posting to the Website. Your continued use of the Website following the posting of modified Terms constitutes your acceptance of the changes. We recommend reviewing these Terms periodically.

13. Entire Agreement
These Terms, together with the Privacy Policy and any other agreements referenced herein, constitute the entire agreement between you and Evervale regarding the subject matter hereof and supersede all prior and contemporaneous agreements, understandings, and communications, whether written or oral.

14. Contact Information
For questions or concerns regarding these Terms, please contact:
• Email: privacy@evervale.org`;

  return (
    <div className="text-pr_w">
      <section className="w-full px-4 pt-[120px] pb-24 sm:px-6 md:px-8 lg:px-12 xl:px-[130px]">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-sm text-pr_w/70">Last updated: March 2026</p>
          <article className="mt-8 whitespace-pre-line rounded-3xl border border-pr_w/20 bg-pr_w/5 px-6 py-8 text-left text-sm leading-7 text-pr_w/85 shadow-xl backdrop-blur-sm sm:px-8 sm:py-10">
            {documentText}
          </article>
        </div>
      </section>
    </div>
  );
}
