export default function DisclaimerPage() {
  const documentText = `DISCLAIMER
Version: March 2026

Evervale
ELEVAN plus s.r.o.
Na Čečeličce 425/4, 150 00 Praha, Czechia

1. General Disclaimer
PLEASE READ THIS DISCLAIMER CAREFULLY. This Disclaimer outlines important legal limitations on the liability of Evervale and ELEVAN plus s.r.o. and describes the 'as-is' nature of our products and services. By accessing and using the Website or purchasing products, you acknowledge that you have read and understood this Disclaimer and agree to be bound by it.

2. Website Disclaimer
The Website and all content provided on it (including product descriptions, images, genetic information, and strain characteristics) are provided on an 'AS-IS' basis without warranties of any kind, express or implied. Evervale makes no representations regarding:
• The accuracy, completeness, or reliability of Website content;
• The availability or uninterrupted operation of the Website;
• The absence of viruses, malware, or other harmful code;
• The fitness of the Website for any particular purpose.

3. Product Disclaimer
Our products are cannabis seeds offered as souvenir and collectible items. Evervale expressly disclaims any warranties regarding:
• Germination, viability, or longevity;
• Genetic traits, characteristics, or composition;
• Suitability for cultivation (products are offered for collection only);
• Compliance with any customer expectations or requirements;
• Storage longevity or physical condition after extended storage.
All products are sold 'as-is' without warranty of merchantability or fitness for a particular purpose.

4. Informational Content Disclaimer
The Website contains information about cannabis strains, genetic characteristics, and historical information. This information is provided for educational and informational purposes only and should not be construed as:
• Professional botanical or agricultural advice;
• Medical, health, or therapeutic recommendations;
• Legal advice regarding the purchase or possession of cannabis seeds;
• Cultivation instructions or guidance.
We recommend consulting with qualified professionals for advice on these topics.

5. Legal Compliance Disclaimer
It is the sole responsibility of the customer to ensure that the purchase and possession of cannabis seeds complies with applicable laws and regulations in their jurisdiction. Evervale is not responsible for:
• Assessing the legality of sales to any particular jurisdiction;
• Advising customers on local laws;
• Any legal consequences arising from your purchase, possession, or use of products;
• Customs seizures, legal action, or other government enforcement.
By purchasing, you represent that such purchase is legal in your jurisdiction.

6. No Medical or Health Claims
Evervale does not make any medical, health, or therapeutic claims regarding our products. Cannabis seeds are not intended to diagnose, treat, cure, prevent, or mitigate any disease or health condition. If you have health concerns, consult with a qualified healthcare provider.

7. Limitation of Liability
TO THE FULLEST EXTENT PERMITTED BY LAW, Evervale and ELEVAN plus s.r.o. shall not be liable for:
• Any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the Website or purchase of products, including loss of profits, data, goodwill, or business interruption;
• Any damages arising from errors, omissions, or inaccuracies in Website content or product descriptions;
• Unauthorized access to or alteration of your data by third parties;
• Loss, damage, or theft of products after delivery;
• Any personal injury, property damage, or financial loss arising from the products.
This limitation applies even if we have been advised of the possibility of such damages.

8. Indemnification
You agree to indemnify and hold harmless Evervale, ELEVAN plus s.r.o., and their officers, directors, employees, and agents from any and all claims, damages, losses, costs, and expenses (including attorney's fees) arising from:
• Your violation of this Disclaimer or any applicable law;
• Your use of the Website or purchase of products;
• Any legal consequences of your actions.

9. Third-Party Links and Content
The Website may contain links to third-party websites or services. Evervale is not responsible for the content, accuracy, legality, or practices of third-party websites. Your use of third-party sites is at your own risk and subject to their terms and policies.

10. No Warranty
EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, Evervale DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

11. Severability
If any provision of this Disclaimer is deemed invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.

12. Changes to Disclaimer
Evervale reserves the right to modify this Disclaimer at any time. Changes will be effective upon posting to the Website. Your continued use of the Website constitutes acceptance of the modified Disclaimer.

13. Contact Information
For questions regarding this Disclaimer, please contact:
Email: privacy@evervale.org`;

  return (
    <div className="text-pr_w">
      <section className="w-full px-4 pt-[120px] pb-24 sm:px-6 md:px-8 lg:px-12 xl:px-[130px]">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-semibold sm:text-4xl">Disclaimer</h1>
          <p className="mt-3 text-sm text-pr_w/70">Last updated: March 2026</p>
          <article className="mt-8 whitespace-pre-line rounded-3xl border border-pr_w/20 bg-pr_w/5 px-6 py-8 text-left text-sm leading-7 text-pr_w/85 shadow-xl backdrop-blur-sm sm:px-8 sm:py-10">
            {documentText}
          </article>
        </div>
      </section>
    </div>
  );
}
