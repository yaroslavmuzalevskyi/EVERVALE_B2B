export default function ReturnRefundPolicyPage() {
  const documentText = `REFUND AND RETURN POLICY
Version: March 2026

Evervale
ELEVAN plus s.r.o.
Na Čečeličce 425/4, 150 00 Praha, Czechia
Email: privacy@evervale.org

1. General Return Policy
Due to the nature of our products, returns and refunds are generally NOT permitted. Cannabis seeds are collectible and souvenir items intended for collection purposes only. However, recognizing our commitment to customer satisfaction, we offer limited return options under specific conditions outlined in this policy.

2. No Guarantee of Results
We make no representations or warranties regarding the results, characteristics, or performance of our products, including but not limited to:
• Germination rates;
• Viability or longevity;
• Genetic traits or characteristics;
• Storage longevity or degradation.
All products are sold 'as-is' without warranty of any kind. You assume all risks associated with the purchase and possession of our products.

3. Return Eligibility Requirements
To be eligible for a return or replacement, your request must meet ALL of the following conditions:
• The request must be submitted within 14 days of the date you received the order;
• The product packaging must be completely unopened and in its original, sealed condition;
• The product must not have been removed from the original packaging;
• The product must not show any signs of use, damage, or tampering;
• You must have a valid order confirmation and proof of purchase;
• The product must not have been lost, stolen, or damaged after delivery to your address.

4. Return Process
To initiate a return, follow these steps:
• Contact our customer service team at privacy@evervale.org with your order number and reason for the return;
• Provide clear photographs of the unopened, original packaging (if requested);
• Wait for approval from our team. We will review your return request and notify you within 5 business days;
• If approved, we will provide shipping instructions and an address for you to return the product;
• Ship the product back in its original packaging at your own expense using a trackable shipping method.

5. Return Shipping Costs
Return shipping costs are the responsibility of the customer. We recommend using a trackable shipping method and obtaining proof of delivery. Evervale is not liable for lost or damaged returns during shipping.
International Returns: For customers outside the Czech Republic, we recommend verifying return shipping costs and customs implications before initiating a return.

6. Refund Options
If your return is approved, we offer the following options at our discretion:
• Product Replacement: We will send you a replacement product of equal or similar value;
• Store Credit: We will issue store credit to your account for future purchases;
• Refund: In exceptional circumstances, we may refund the original purchase price to your original payment method. Refunds are processed within 14 business days of return receipt.
Please note: Refunds do not include original shipping costs. Return shipping costs are not refunded.

7. Non-Returnable Items
The following items will NOT be accepted for return:
• Opened or unsealed product packaging;
• Products showing signs of use, damage, or tampering;
• Products returned without original packaging;
• Products damaged after delivery to your address;
• Products returned more than 14 days after order receipt;
• Products lost or damaged during return shipping.

8. Damaged Products Upon Receipt
If you receive a damaged or defective product, please contact us immediately at privacy@evervale.org with clear photographs of the damage. We will investigate and may offer a replacement or other remedy at our discretion. Damage claims must be reported within 7 days of order receipt.

9. Lost or Missing Orders
If your order does not arrive, please contact us immediately. We will work with the shipping carrier to trace the package. If the package is confirmed as lost, we will work with you to arrange a replacement or resolution. However, we cannot be held liable for losses incurred by the postal or shipping service.

10. Customer Service Exceptions
While our return policy has strict criteria, we recognize that exceptional circumstances may arise. We reserve the right to exercise discretion and approve returns or offer compensation outside the standard policy in cases where we believe it is appropriate. Such decisions are made on a case-by-case basis at our sole discretion.

11. Dispute Resolution
If you disagree with our return decision, you may contact us at privacy@evervale.org to discuss the matter further. Final decisions regarding returns and refunds rest with Evervale management.

12. Changes to Return Policy
We reserve the right to modify this Return and Refund Policy at any time. Changes will be effective upon posting to the Website. The policy in effect at the time of your purchase will apply to your order.

13. Contact Information
For return inquiries or questions, please contact:
Email: privacy@evervale.org`;

  return (
    <div className="text-pr_w">
      <section className="w-full px-4 pt-[120px] pb-24 sm:px-6 md:px-8 lg:px-12 xl:px-[130px]">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Return & Refund Policy
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
