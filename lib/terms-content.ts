export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | {
      type: "definitions";
      items: { term: string; definition: string }[];
    }
  | {
      type: "subsection";
      number: string;
      title: string;
      content: ContentBlock[];
    }
  | { type: "emphasis"; text: string };

export type Section = {
  id: string;
  number: number;
  title: string;
  content: ContentBlock[];
};

export const termsMeta = {
  title: "Terms of Service and User Agreement",
  entity: "Davis Dag Electronics",
  jurisdiction: "Republic of Ghana",
  effectiveDate: "To be determined",
};

export const sections: Section[] = [
  {
    id: "definitions",
    number: 1,
    title: "Definitions",
    content: [
      {
        type: "paragraph",
        text: "For the purposes of this Agreement, the following terms shall have the meanings set out below:",
      },
      {
        type: "definitions",
        items: [
          {
            term: "Platform",
            definition: "means the RepairNear website, mobile application, and any associated digital services.",
          },
          {
            term: "Company, RepairNear, we, us, or our",
            definition: "means Davis Dag Electronics, trading as RepairNear, registered in the Republic of Ghana.",
          },
          {
            term: "User, you, or your",
            definition: "means any individual or entity that accesses or uses the Platform, including customers and technicians.",
          },
          {
            term: "Technician or Repair Shop",
            definition: "means an independent third-party service provider listed on the Platform who offers repair services directly to Users.",
          },
          {
            term: "Customer",
            definition: "means a User who seeks or obtains information about, or contracts for, repair services through the Platform.",
          },
          {
            term: "Content",
            definition: "means any text, images, ratings, reviews, listings, or other material submitted to or displayed on the Platform.",
          },
          {
            term: "Personal Data",
            definition: "has the meaning given to it under the Data Protection Act, 2012 (Act 843) of Ghana.",
          },
          {
            term: "Repair Agreement",
            definition: "means any contract for repair services entered into directly between a Customer and a Technician, to which RepairNear is not a party.",
          },
          {
            term: "Protection Plan",
            definition: "means the optional paid mediation-assistance feature described in Section 10, purchased by a Customer for a fee of GHS 20.00 (or such other amount as stated on the Platform).",
          },
          {
            term: "Subscription Fee",
            definition: "means the monthly fee payable by a Technician to maintain an active listing on the Platform, as described in Section 11.",
          },
        ],
      },
    ],
  },
  {
    id: "about-repairnear",
    number: 2,
    title: "About RepairNear",
    content: [
      { type: "paragraph", text: "RepairNear is a technology platform owned and operated by Davis Dag Electronics and registered under the laws of the Republic of Ghana." },
      { type: "paragraph", text: "RepairNear provides a digital marketplace that assists Users in locating and connecting with mobile phone, tablet, computer, and laptop repair technicians and repair shops throughout Ghana." },
      { type: "paragraph", text: "RepairNear does not perform repairs, employ repair technicians, own repair shops, sell spare parts, set or publish repair prices, or act as a repair contractor unless explicitly stated otherwise in writing." },
      { type: "paragraph", text: "RepairNear's role is limited to providing information, shop listings, technician profiles, ratings, and communication tools that assist Users in finding repair services. RepairNear does not display, quote, verify, or guarantee the price of any repair; all pricing is a matter solely between the Customer and the Technician, as set out in Section 9. RepairNear does not guarantee that any Technician listed is currently active, available, or in good standing at the time of a User's inquiry." },
      { type: "paragraph", text: "RepairNear generates revenue through two features described later in these Terms: (a) an optional Protection Plan available to Customers (Section 10), and (b) a monthly Subscription Fee payable by Technicians to maintain an active listing (Section 11)." },
    ],
  },
  {
    id: "acceptance-of-terms",
    number: 3,
    title: "Acceptance of Terms",
    content: [
      { type: "paragraph", text: "By creating an account, browsing the Platform, requesting repair information, contacting a Technician, or using RepairNear in any manner, you agree to be legally bound by these Terms of Service (\"Terms\") and our Privacy Policy, which is incorporated into these Terms by reference." },
      { type: "paragraph", text: "If you do not agree with these Terms, you must discontinue use of the Platform immediately." },
      { type: "paragraph", text: "Continued use of the Platform following any update to these Terms constitutes acceptance of the revised Terms." },
    ],
  },
  {
    id: "eligibility",
    number: 4,
    title: "Eligibility and Age Requirements",
    content: [
      { type: "paragraph", text: "The Platform is intended for use by individuals who are at least eighteen (18) years of age or the age of legal majority in their jurisdiction, whichever is higher." },
      { type: "paragraph", text: "By using the Platform, you represent and warrant that you meet this age requirement and that you have the legal capacity to enter into a binding agreement." },
      { type: "paragraph", text: "RepairNear reserves the right to request proof of age or identity and to suspend or terminate any account where it reasonably believes a User does not meet these requirements." },
    ],
  },
  {
    id: "account-registration",
    number: 5,
    title: "Account Registration and Security",
    content: [
      { type: "paragraph", text: "Users may be required to create an account to access certain features of the Platform. You agree to provide accurate, current, and complete information during registration and to keep such information up to date." },
      { type: "paragraph", text: "You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account." },
      { type: "paragraph", text: "You must notify RepairNear immediately of any unauthorized use of your account or any other breach of security." },
      { type: "paragraph", text: "RepairNear is not liable for any loss or damage arising from your failure to safeguard your account credentials." },
    ],
  },
  {
    id: "independent-technicians",
    number: 6,
    title: "Independent Technicians and Repair Shops",
    content: [
      { type: "paragraph", text: "All repair technicians, repair businesses, and service providers listed on RepairNear operate as independent businesses and are not employees, agents, partners, or representatives of RepairNear." },
      { type: "paragraph", text: "RepairNear does not:" },
      {
        type: "list",
        items: [
          "Employ listed Technicians.",
          "Supervise repair work.",
          "Control repair methods, tools, or techniques.",
          "Guarantee Technician qualifications, licensing, or certification.",
          "Guarantee repair outcomes.",
          "Guarantee the authenticity, quality, or origin of replacement parts used by any Technician.",
        ],
      },
      { type: "paragraph", text: "Any repair contract entered into is solely between the Customer and the Technician or repair shop. RepairNear is not a party to any Repair Agreement and assumes no obligations under it." },
      { type: "paragraph", text: "Nothing in these Terms shall be construed as creating an employment relationship, partnership, joint venture, or agency relationship between RepairNear and any Technician." },
    ],
  },
  {
    id: "customer-responsibility",
    number: 7,
    title: "Customer Responsibility for Choosing a Technician",
    content: [
      { type: "paragraph", text: "Customers are solely responsible for evaluating and selecting a repair technician or repair shop. RepairNear provides information for convenience only and does not endorse any particular Technician." },
      { type: "paragraph", text: "Before surrendering any device, Customers are strongly encouraged to:" },
      {
        type: "list",
        items: [
          "Verify the Technician's identity and contact details.",
          "Verify the repair shop's physical location.",
          "Review ratings and reviews where available.",
          "Request an itemized quotation directly from the Technician before work begins.",
          "Obtain a written or photographic record of the device's condition prior to handover.",
        ],
      },
      { type: "paragraph", text: "The decision to hand over a device remains entirely the Customer's responsibility." },
    ],
  },
  {
    id: "acceptable-use",
    number: 8,
    title: "Acceptable Use and Prohibited Conduct",
    content: [
      { type: "paragraph", text: "Users agree not to use the Platform to:" },
      {
        type: "list",
        items: [
          "Post false, misleading, defamatory, or fraudulent information.",
          "Impersonate any person or entity, or misrepresent an affiliation with any person or entity.",
          "Harass, threaten, or abuse other Users, Technicians, or RepairNear staff.",
          "Upload viruses, malware, or any code intended to disrupt the Platform.",
          "Attempt to gain unauthorized access to the Platform, other accounts, or related systems.",
          "Use automated means (bots, scrapers) to access or extract data from the Platform without written consent.",
          "Circumvent the Platform to avoid applicable fees, where fees apply.",
          "Engage in any activity that violates the laws of Ghana or any jurisdiction from which the Platform is accessed.",
        ],
      },
      { type: "paragraph", text: "RepairNear reserves the right to investigate suspected violations and to take appropriate action, including content removal, account suspension, or reporting to law enforcement." },
    ],
  },
  {
    id: "pricing-of-repairs",
    number: 9,
    title: "Pricing of Repairs",
    content: [
      { type: "paragraph", text: "RepairNear does not set, publish, display, estimate, or verify the price of any repair service. All pricing, quotations, and cost negotiations occur directly and exclusively between the Customer and the Technician." },
      { type: "paragraph", text: "Any price mentioned by a Technician, whether communicated verbally, in writing, through in-app messaging, or by any other means, is the sole responsibility of that Technician. RepairNear is not a party to any such quotation and does not guarantee its accuracy, fairness, or finality." },
      { type: "paragraph", text: "Actual repair costs may vary based on device condition, availability of parts, additional faults discovered during diagnosis, and market fluctuations. Customers are encouraged to obtain a clear, itemized quotation directly from the Technician, and to confirm final pricing before authorizing any repair work, in order to avoid billing disputes." },
      { type: "paragraph", text: "Final repair charges, and any negotiation or dispute concerning those charges, are matters solely between the Customer and the Technician." },
    ],
  },
  {
    id: "protection-plan",
    number: 10,
    title: "The Protection Plan",
    content: [
      {
        type: "subsection",
        number: "10.1",
        title: "What the Protection Plan Is",
        content: [
          { type: "paragraph", text: "RepairNear offers Customers an optional Protection Plan for a fee of GHS 20.00 per transaction (or such other amount as stated on the Platform at the time of purchase)." },
          { type: "paragraph", text: "The Protection Plan entitles a Customer to request RepairNear's assistance in mediating a dispute with a Technician, where the Customer and the Technician have been unable to resolve that dispute directly between themselves." },
        ],
      },
      {
        type: "subsection",
        number: "10.2",
        title: "Scope of Assistance",
        content: [
          { type: "paragraph", text: "Under the Protection Plan, RepairNear's role is limited to:" },
          {
            type: "list",
            items: [
              "Reviewing the information and evidence provided by both the Customer and the Technician.",
              "Facilitating communication between the parties in an effort to reach a resolution.",
              "Where appropriate, making a non-binding recommendation to the parties.",
            ],
          },
        ],
      },
      {
        type: "subsection",
        number: "10.3",
        title: "What the Protection Plan Is Not",
        content: [
          { type: "paragraph", text: "The Protection Plan is a mediation and facilitation service only. It is not:" },
          {
            type: "list",
            items: [
              "An insurance policy, warranty, or guarantee of any kind.",
              "A guarantee that a dispute will be resolved in the Customer's favor.",
              "A guarantee or promise of any refund, compensation, or payment from RepairNear.",
              "A substitute for legal action or a police report, where such steps may be appropriate.",
            ],
          },
          { type: "paragraph", text: "Purchase of the Protection Plan does not obligate RepairNear to compensate a Customer for any loss, damage, or unresolved dispute, and does not affect, reduce, or waive the disclaimers, limitations of liability, or indemnification obligations set out elsewhere in these Terms." },
        ],
      },
      {
        type: "subsection",
        number: "10.4",
        title: "Fees",
        content: [
          { type: "paragraph", text: "The GHS 20.00 Protection Plan fee is payable at the time of purchase and is non-refundable, regardless of whether a dispute subsequently arises, whether mediation is requested, or the outcome of any mediation, except where a refund is required by applicable Ghanaian consumer protection law." },
        ],
      },
      {
        type: "subsection",
        number: "10.5",
        title: "Eligibility and Limits",
        content: [
          { type: "paragraph", text: "RepairNear reserves the right to decline to mediate, or to discontinue mediation already in progress, in any case involving suspected fraud, illegal conduct, abusive behavior, or where a party is unresponsive, and may report such conduct to the appropriate authorities." },
        ],
      },
    ],
  },
  {
    id: "technician-subscription-fees",
    number: 11,
    title: "Technician Subscription Fees",
    content: [
      {
        type: "subsection",
        number: "11.1",
        title: "Free Period",
        content: [
          { type: "paragraph", text: "RepairNear may offer new Technicians an initial free period during which a listing may be created and maintained on the Platform at no charge. The duration of the free period will be communicated to the Technician at the time of registration and may be changed by RepairNear at its discretion for future registrants." },
        ],
      },
      {
        type: "subsection",
        number: "11.2",
        title: "Monthly Subscription",
        content: [
          { type: "paragraph", text: "After the free period ends, a Technician must pay a monthly Subscription Fee of GHS 150.00 (or such other amount as stated on the Platform) to maintain an active, visible listing on the Platform." },
        ],
      },
      {
        type: "subsection",
        number: "11.3",
        title: "Non-Payment and Suspension",
        content: [
          { type: "paragraph", text: "Where a Technician fails to pay the Subscription Fee when due, RepairNear may suspend and hide that Technician's listing from Customers until the outstanding fee is paid. A suspended listing will not appear in search results or otherwise be visible to Customers." },
          { type: "paragraph", text: "RepairNear may, at its discretion, allow a grace period before suspension, as communicated on the Platform, but is not obligated to do so." },
        ],
      },
      {
        type: "subsection",
        number: "11.4",
        title: "Fees Non-Refundable",
        content: [
          { type: "paragraph", text: "Subscription Fees already paid are non-refundable, including where a Technician's listing is subsequently suspended for breach of these Terms, except where a refund is required by applicable law." },
        ],
      },
      {
        type: "subsection",
        number: "11.5",
        title: "Reactivation",
        content: [
          { type: "paragraph", text: "A suspended listing may be reactivated once all outstanding Subscription Fees are paid in full, subject to RepairNear's standard verification procedures." },
        ],
      },
    ],
  },
  {
    id: "scams-fraud-theft",
    number: 12,
    title: "Scams, Fraud, Theft and Third-Party Misconduct",
    content: [
      { type: "paragraph", text: "RepairNear does not guarantee the honesty, integrity, legitimacy, or conduct of any Technician, repair shop, or Customer." },
      { type: "paragraph", text: "RepairNear shall not be liable for:" },
      {
        type: "list",
        items: [
          "Fraud.",
          "Theft.",
          "Scams.",
          "Misrepresentation.",
          "Identity fraud.",
          "Device substitution.",
          "Device loss.",
          "Financial losses.",
          "Unauthorized transactions.",
          "Criminal acts committed by third parties.",
        ],
      },
      { type: "paragraph", text: "Where a Customer voluntarily sends, delivers, ships, transfers, or hands over a device to a Technician or repair shop, such actions are undertaken entirely at the Customer's own risk." },
      { type: "paragraph", text: "Any disputes, claims, losses, damages, or criminal complaints arising from dealings between Customers and Technicians must be resolved directly between the affected parties and, where applicable, reported to the Ghana Police Service or other appropriate law enforcement authority." },
      { type: "paragraph", text: "RepairNear shall not be financially responsible for losses resulting from interactions between Users and independent service providers. Users are encouraged to report suspected fraudulent listings or accounts to RepairNear so that appropriate action may be taken against the offending account." },
      { type: "paragraph", text: "Where a Customer has purchased the Protection Plan, RepairNear's involvement in a resulting dispute remains limited to the mediation and facilitation role described in Section 10, and does not extend to guaranteeing any outcome, or to compensating any Customer for loss, theft, fraud, or other misconduct by a Technician or third party." },
    ],
  },
  {
    id: "payments-and-billing",
    number: 13,
    title: "Payments and Billing",
    content: [
      { type: "paragraph", text: "RepairNear processes two categories of fees through the Platform: (a) the Protection Plan fee payable by Customers, described in Section 10; and (b) the monthly Subscription Fee payable by Technicians, described in Section 11." },
      { type: "paragraph", text: "Other than the fees described above, RepairNear does not process, collect, or hold payment for repair services themselves. Payment for repairs is arranged directly between the Customer and the Technician." },
      { type: "paragraph", text: "Users are responsible for any taxes, levies, or mobile money or transaction charges associated with payments made through the Platform." },
      { type: "paragraph", text: "All fees referenced in these Terms are denominated in Ghana Cedis (GHS) unless otherwise stated on the Platform." },
    ],
  },
  {
    id: "device-collection",
    number: 14,
    title: "Device Collection Policy",
    content: [
      { type: "paragraph", text: "Customers must collect repaired devices within seven (7) days after receiving notice that repairs have been completed." },
      { type: "paragraph", text: "Failure to collect a repaired device within seven (7) days after you have been notified that it is ready for collection may result in a storage and handling fee of GHS 20.00 per day until the device is collected." },
      { type: "paragraph", text: "Additional charges may be imposed by the repair Technician or repair shop according to their individual policies. Devices left uncollected for an extended period, as defined by the individual Technician's policy, may be subject to disposal in accordance with applicable law, after reasonable notice to the Customer." },
    ],
  },
  {
    id: "water-damaged-devices",
    number: 15,
    title: "Water-Damaged or Dead Devices",
    content: [
      { type: "paragraph", text: "For devices that are water-damaged, liquid-damaged, short-circuited, or completely powered off, the Technician's responsibility is limited to attempting diagnosis and restoration of power." },
      { type: "paragraph", text: "The Customer acknowledges that liquid damage may affect multiple components simultaneously and that full diagnosis may not be possible until the device is powered on." },
      { type: "paragraph", text: "If a water-damaged or dead device powers on after repair attempts, any additional faults that become apparent are considered pre-existing damage and shall not be the responsibility of the Technician. Such faults may include:" },
      {
        type: "list",
        items: [
          "Touch issues.",
          "Display issues.",
          "Camera failures.",
          "Audio faults.",
          "Charging faults.",
          "Signal problems.",
          "Data corruption.",
          "Battery failures.",
        ],
      },
    ],
  },
  {
    id: "pre-existing-defects",
    number: 16,
    title: "Pre-Existing Device Defects",
    content: [
      { type: "paragraph", text: "Technicians are only responsible for repairing the fault specifically agreed upon with the Customer." },
      { type: "paragraph", text: "Repairing one defect does not make the Technician responsible for unrelated defects already present in the device." },
      { type: "paragraph", text: "RepairNear shall not be liable for disputes arising from pre-existing device conditions." },
    ],
  },
  {
    id: "data-loss",
    number: 17,
    title: "Data Loss Disclaimer",
    content: [
      { type: "paragraph", text: "Customers are solely responsible for backing up all data before submitting a device for repair." },
      { type: "paragraph", text: "RepairNear, Technicians, and repair shops shall not be liable for:" },
      {
        type: "list",
        items: [
          "Loss of data.",
          "Corrupted files.",
          "Deleted applications.",
          "Lost photographs.",
          "Lost contacts.",
          "Lost messages.",
          "Lost documents.",
        ],
      },
      { type: "paragraph", text: "Customers acknowledge that repair attempts inherently carry a risk of data corruption or loss, and agree that the submission of a device for repair constitutes explicit acceptance of this risk." },
    ],
  },
  {
    id: "reviews-user-content",
    number: 18,
    title: "Reviews and User-Generated Content",
    content: [
      { type: "paragraph", text: "Users may submit ratings, reviews, and other Content relating to Technicians or their experience on the Platform." },
      { type: "paragraph", text: "By submitting Content, you grant RepairNear a non-exclusive, worldwide, royalty-free license to use, display, reproduce, and distribute such Content in connection with operating and promoting the Platform." },
      { type: "paragraph", text: "You represent that any Content you submit is truthful, accurate, and does not infringe the rights of any third party or violate any applicable law, including laws relating to defamation." },
      { type: "paragraph", text: "RepairNear reserves the right, but is not obligated, to remove or moderate any Content that it considers, in its sole discretion, to be false, abusive, defamatory, or otherwise in violation of these Terms." },
    ],
  },
  {
    id: "intellectual-property",
    number: 19,
    title: "Intellectual Property",
    content: [
      { type: "paragraph", text: "The Platform, including its design, logos, trademarks, text, graphics, and underlying software, is the property of Davis Dag Electronics or its licensors and is protected by the copyright, trademark, and other intellectual property laws of Ghana and applicable international treaties." },
      { type: "paragraph", text: "Users are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Platform for its intended purpose. No other rights are granted." },
      { type: "paragraph", text: "You may not copy, modify, distribute, sell, or lease any part of the Platform, nor reverse-engineer or attempt to extract the source code of the Platform, except as permitted by law." },
    ],
  },
  {
    id: "data-protection",
    number: 20,
    title: "Data Protection and Privacy",
    content: [
      { type: "paragraph", text: "RepairNear collects and processes Personal Data in accordance with the Data Protection Act, 2012 (Act 843) of the Republic of Ghana and its accompanying regulations, and, where applicable, other relevant data protection or privacy legislation in the jurisdiction from which a User accesses the Platform." },
      { type: "paragraph", text: "RepairNear will:" },
      {
        type: "list",
        items: [
          "Collect Personal Data only for specified, lawful purposes connected with the operation of the Platform.",
          "Take reasonable technical and organizational measures to safeguard Personal Data against unauthorized access, loss, or disclosure.",
          "Not sell Personal Data to third parties for unrelated marketing purposes without the User's consent.",
          "Provide Users with a means to request access to, correction of, or deletion of their Personal Data, subject to applicable law.",
        ],
      },
      { type: "paragraph", text: "Full details of RepairNear's data collection, use, storage, and disclosure practices are set out in a separate Privacy Policy, which forms part of these Terms." },
      { type: "paragraph", text: "Users located outside Ghana acknowledge that their Personal Data may be transferred to, stored, and processed in Ghana, and consent to such transfer where required by applicable law." },
    ],
  },
  {
    id: "electronic-transactions",
    number: 21,
    title: "Electronic Transactions and Electronic Signatures",
    content: [
      { type: "paragraph", text: "These Terms are entered into electronically and constitute a valid and binding agreement in accordance with the Electronic Transactions Act, 2008 (Act 772) of Ghana." },
      { type: "paragraph", text: "Your acceptance of these Terms by clicking to accept, checking a box, or continuing to use the Platform constitutes a valid electronic signature and expression of consent, and shall have the same legal effect as a handwritten signature to the extent permitted by applicable law." },
      { type: "paragraph", text: "Communications, notices, and disclosures provided electronically satisfy any legal requirement that such communications be in writing." },
    ],
  },
  {
    id: "consumer-protection",
    number: 22,
    title: "Consumer Protection",
    content: [
      { type: "paragraph", text: "Nothing in these Terms is intended to exclude, restrict, or modify any right or remedy that a Customer may have under applicable consumer protection law in Ghana that cannot lawfully be excluded or limited." },
      { type: "paragraph", text: "Where any provision of these Terms is found to be inconsistent with a mandatory consumer protection right, that provision shall be read down to the minimum extent necessary to comply with the law, without affecting the remaining provisions." },
      { type: "paragraph", text: "Complaints regarding the conduct of a Technician or repair shop may be submitted to RepairNear through the official communication channels provided within the application, and, where appropriate, to the relevant consumer protection authority in Ghana." },
    ],
  },
  {
    id: "third-party-links",
    number: 23,
    title: "Third-Party Links and Services",
    content: [
      { type: "paragraph", text: "The Platform may contain links to third-party websites, payment processors, or services that are not owned or controlled by RepairNear." },
      { type: "paragraph", text: "RepairNear has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. Users access such third-party services at their own risk." },
    ],
  },
  {
    id: "no-warranties",
    number: 24,
    title: "No Warranties",
    content: [
      { type: "paragraph", text: "RepairNear provides its services on an \"as-is\" and \"as-available\" basis, without warranties of any kind, whether express, implied, or statutory, except to the extent such warranties cannot be excluded by applicable law." },
      { type: "paragraph", text: "RepairNear makes no warranties regarding:" },
      {
        type: "list",
        items: [
          "Repair quality.",
          "Repair completion.",
          "Technician competence.",
          "Availability of spare parts.",
          "Device safety.",
          "The accuracy of any pricing or quotation communicated by a Technician.",
          "The outcome of any mediation provided under the Protection Plan.",
          "Platform availability, uptime, or freedom from errors.",
        ],
      },
    ],
  },
  {
    id: "limitation-of-liability",
    number: 25,
    title: "Limitation of Liability",
    content: [
      { type: "paragraph", text: "To the fullest extent permitted by law, RepairNear, Davis Dag Electronics, its owners, directors, employees, affiliates, agents, and representatives shall not be liable for:" },
      {
        type: "list",
        items: [
          "Property damage.",
          "Device damage.",
          "Device loss.",
          "Financial losses.",
          "Business losses.",
          "Loss of profits.",
          "Data loss.",
          "Personal injury.",
          "Indirect damages.",
          "Consequential damages.",
          "Punitive damages.",
        ],
      },
      { type: "paragraph", text: "Any liability arising from repair services remains solely between the Customer and the repair provider." },
      { type: "paragraph", text: "The provision of mediation assistance under the Protection Plan (Section 10) is a facilitation service only. It shall not be construed as an assumption of liability by RepairNear for the underlying dispute, as an admission of fault, or as a waiver or reduction of any limitation of liability set out in these Terms, and does not obligate RepairNear to pay any compensation, refund, or damages to any party." },
      { type: "paragraph", text: "Where liability cannot be excluded under applicable Ghanaian law, RepairNear's total aggregate liability to any User for all claims arising out of or relating to the Platform shall not exceed the greater of (a) the total fees paid by that User to RepairNear (whether as Protection Plan fees or Subscription Fees) in the twelve (12) months preceding the claim, or (b) GHS 500.00." },
    ],
  },
  {
    id: "indemnification",
    number: 26,
    title: "Indemnification",
    content: [
      { type: "paragraph", text: "Users agree to defend, indemnify, and hold harmless RepairNear and Davis Dag Electronics, and their respective owners, directors, employees, and agents, from and against any claims, lawsuits, losses, damages, costs, legal fees, or liabilities arising from:" },
      {
        type: "list",
        items: [
          "Interactions with Technicians.",
          "Interactions with repair shops.",
          "Misuse of the Platform.",
          "Breach of these Terms.",
          "Disputes concerning repair services.",
          "Violation of any applicable law or the rights of a third party.",
        ],
      },
    ],
  },
  {
    id: "force-majeure",
    number: 27,
    title: "Force Majeure",
    content: [
      { type: "paragraph", text: "RepairNear shall not be liable for any delay or failure to perform its obligations under these Terms where such delay or failure results from causes beyond its reasonable control, including but not limited to power outages, internet or telecommunications failures, natural disasters, civil unrest, government action, pandemic, or other events of force majeure." },
    ],
  },
  {
    id: "suspension-termination",
    number: 28,
    title: "Suspension and Termination of Service",
    content: [
      { type: "paragraph", text: "RepairNear reserves the right to suspend or terminate any account, with or without notice, where fraud, abuse, illegal conduct, false information, or misuse of the Platform is suspected or where a User breaches these Terms." },
      { type: "paragraph", text: "Users may close their account at any time by following the account closure process within the application or by contacting RepairNear directly." },
      { type: "paragraph", text: "Provisions of these Terms which by their nature should survive termination, including but not limited to Sections on Limitation of Liability, Indemnification, Data Protection, Dispute Resolution, and Governing Law, shall survive any termination of these Terms." },
    ],
  },
  {
    id: "dispute-resolution",
    number: 29,
    title: "Dispute Resolution and Arbitration",
    content: [
      { type: "paragraph", text: "In the event of any dispute, controversy, or claim arising out of or relating to these Terms or the use of the Platform, the parties shall first attempt to resolve the matter through good-faith negotiation by contacting RepairNear through its official communication channels." },
      { type: "paragraph", text: "If a dispute cannot be resolved informally within thirty (30) days, either party may refer the matter to arbitration in Accra, Ghana, in accordance with the Alternative Dispute Resolution Act, 2010 (Act 798) of Ghana, before a single arbitrator appointed in accordance with that Act, unless the parties agree otherwise in writing." },
      { type: "paragraph", text: "Nothing in this Section shall prevent either party from seeking urgent injunctive or equitable relief from a court of competent jurisdiction in Ghana where necessary to prevent irreparable harm." },
      { type: "paragraph", text: "This Section does not apply to disputes between a Customer and a Technician arising from a Repair Agreement, which must be resolved directly between those parties, including, where applicable, before the courts or law enforcement authorities of Ghana." },
    ],
  },
  {
    id: "cross-border-use",
    number: 30,
    title: "Cross-Border Use and Other African Jurisdictions",
    content: [
      { type: "paragraph", text: "The Platform is designed primarily for use within the Republic of Ghana. Where RepairNear makes the Platform available, or expands its services, to Users in other African jurisdictions, the following shall apply in addition to the rest of these Terms:" },
      {
        type: "list",
        items: [
          "Users accessing the Platform from outside Ghana are responsible for ensuring that their use of the Platform complies with the laws of their local jurisdiction, including any applicable data protection, consumer protection, and electronic transaction laws (for example, and without limitation, the Nigeria Data Protection Act 2023, Kenya's Data Protection Act 2019, and South Africa's Protection of Personal Information Act 2013).",
          "Where a specific country's mandatory local law conflicts with a provision of these Terms and cannot lawfully be excluded, that local mandatory law shall apply solely to the extent of the conflict, and only within that jurisdiction, without affecting the application of these Terms elsewhere.",
          "RepairNear does not represent that the Platform, its listings, or its pricing estimates are appropriate or available for use outside Ghana unless expressly stated.",
          "Any expansion of RepairNear's services to a specific African country will be governed by country-specific supplementary terms, published at the time of such expansion, which will be reviewed by locally licensed legal counsel prior to publication.",
        ],
      },
    ],
  },
  {
    id: "governing-law",
    number: 31,
    title: "Governing Law and Jurisdiction",
    content: [
      { type: "paragraph", text: "These Terms shall be governed by and interpreted in accordance with the laws of the Republic of Ghana, without regard to its conflict of laws principles." },
      { type: "paragraph", text: "Subject to Section 29 (Dispute Resolution and Arbitration), any disputes concerning the Platform that are not resolved by arbitration shall be subject to the exclusive jurisdiction of the courts of Ghana." },
    ],
  },
  {
    id: "modification-of-terms",
    number: 32,
    title: "Modification of Terms",
    content: [
      { type: "paragraph", text: "RepairNear reserves the right to amend or update these Terms at any time. Material changes will be notified to Users through the Platform or by other reasonable means, and the \"Effective Date\" at the top of this document will be updated accordingly." },
      { type: "paragraph", text: "Continued use of the Platform after such changes take effect constitutes acceptance of the revised Terms." },
    ],
  },
  {
    id: "severability",
    number: 33,
    title: "Severability",
    content: [
      { type: "paragraph", text: "If any provision of these Terms is found by a court or arbitral tribunal of competent jurisdiction to be invalid, illegal, or unenforceable, that provision shall be severed, and the remaining provisions shall continue in full force and effect." },
    ],
  },
  {
    id: "waiver",
    number: 34,
    title: "Waiver",
    content: [
      { type: "paragraph", text: "No failure or delay by RepairNear in exercising any right under these Terms shall operate as a waiver of that right, nor shall any single or partial exercise of a right preclude any other or further exercise of that right." },
    ],
  },
  {
    id: "assignment",
    number: 35,
    title: "Assignment",
    content: [
      { type: "paragraph", text: "Users may not assign or transfer any rights or obligations under these Terms without the prior written consent of RepairNear. RepairNear may assign these Terms, in whole or in part, in connection with a merger, acquisition, restructuring, or sale of assets, without requiring User consent." },
    ],
  },
  {
    id: "entire-agreement",
    number: 36,
    title: "Entire Agreement",
    content: [
      { type: "paragraph", text: "These Terms, together with the Privacy Policy and any other policies expressly incorporated by reference, constitute the entire agreement between the User and RepairNear with respect to the use of the Platform, and supersede all prior or contemporaneous agreements, representations, or understandings, whether written or oral." },
    ],
  },
  {
    id: "language",
    number: 37,
    title: "Language",
    content: [
      { type: "paragraph", text: "These Terms are drafted in the English language. Any translation provided is for convenience only, and in the event of any conflict or ambiguity between the English version and a translated version, the English version shall prevail." },
    ],
  },
  {
    id: "notices",
    number: 38,
    title: "Notices and Communication",
    content: [
      { type: "paragraph", text: "RepairNear may provide notices to Users through the Platform, by email, by SMS, or through in-app notifications. Users must ensure that their contact information on file with RepairNear is current." },
      { type: "paragraph", text: "Notices to RepairNear must be sent through the official communication channels provided within the application." },
    ],
  },
  {
    id: "contact",
    number: 39,
    title: "Contact Information",
    content: [
      { type: "paragraph", text: "RepairNear: Owned and Operated by Davis Dag Electronics" },
      { type: "paragraph", text: "For inquiries regarding these Terms, users may contact RepairNear through the official communication channels provided within the application." },
      {
        type: "emphasis",
        text: "BY USING REPAIRNEAR, YOU ACKNOWLEDGE THAT REPAIRNEAR IS ONLY A PLATFORM THAT CONNECTS CUSTOMERS WITH INDEPENDENT REPAIR TECHNICIANS AND REPAIR SHOPS, AND THAT REPAIRNEAR IS NOT RESPONSIBLE FOR THE ACTS, OMISSIONS, SERVICES, OR CONDUCT OF THOSE INDEPENDENT PARTIES.",
      },
    ],
  },
];
