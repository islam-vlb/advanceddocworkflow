const path = require("path");
const fs = require("fs");
const {
  newDoc,
  coverPage,
  tocPage,
  sectionTitle,
  subTitle,
  bodyText,
  bulletList,
  numberedList,
  fieldBlock,
  table,
  checklist,
  divider,
  contactPage,
  addPageNumbers,
  ensureSpace,
  COLORS,
} = require("./pdf-helpers");

const BRAND = "advanceddocumentworkflow";
const DOMAIN = "advanceddocumentworkflow.com";
const PHONE = "(877) 671-3137";
const EMAIL = "support@advanceddocumentworkflow.com";
const ADDRESS = "3590 N Zaragoza Road Ste B103 Unit #107, El Paso, TX, 79938";
const OUT_DIR = path.join(__dirname, "..", "public", "downloads");

// Draws a single row of N labeled boxes so they fit exactly within the
// 492pt printable width (612 page width - 60 left margin - 60 right margin),
// then advances doc.y past the row plus clearance so following text never overlaps.
function drawFlowRow(doc, labels, opts = {}) {
  const boxHeight = opts.boxHeight || 50;
  const clearance = opts.clearance ?? 24;
  const gap = 8.5;
  const printableWidth = 492;
  const n = labels.length;
  const boxW = (printableWidth - (n - 1) * gap) / n;

  ensureSpace(doc, boxHeight + clearance + 10);
  const fy = doc.y;
  let fx = 60;
  labels.forEach((label) => {
    doc.roundedRect(fx, fy, boxW, boxHeight, 5).lineWidth(1).strokeColor(COLORS.accent).stroke();
    if (label) {
      doc
        .fillColor(COLORS.primary)
        .font("Helvetica-Bold")
        .fontSize(7)
        .text(label, fx + 4, fy + boxHeight / 2 - 10, { width: boxW - 8, align: "center" });
    }
    fx += boxW + gap;
  });
  doc.y = fy + boxHeight + clearance;
}

// ================================================================
// PDF 1: Standard Operating Procedure Library — 20 SOPs
// ================================================================

function fullSop(doc, { num, title, purpose, scope, responsible, steps, references, revisions }) {
  sectionTitle(doc, `SOP ${num}: ${title}`);
  subTitle(doc, "Purpose");
  bodyText(doc, purpose);
  subTitle(doc, "Scope");
  bodyText(doc, scope);
  subTitle(doc, "Responsible Parties");
  bulletList(doc, responsible);
  subTitle(doc, "Procedure Steps");
  numberedList(doc, steps, 1);
  subTitle(doc, "References");
  bulletList(doc, references);
  subTitle(doc, "Revision History");
  bulletList(doc, revisions);
}

function stubSop(doc, { num, title }) {
  subTitle(doc, `SOP ${num}: ${title} (Template)`);
  fieldBlock(doc, "Title");
  fieldBlock(doc, "Purpose");
  fieldBlock(doc, "Scope");
  fieldBlock(doc, "Responsible Parties");
  fieldBlock(doc, "Procedure Steps");
  fieldBlock(doc, "References");
  doc.moveDown(0.4);
}

function buildSopLibrary() {
  const outPath = path.join(OUT_DIR, "sop-library.pdf");
  const doc = newDoc(outPath);

  coverPage(doc, {
    brand: BRAND,
    domain: DOMAIN,
    title: "Standard Operating Procedure Library",
    subtitle: "20 SOPs for Documenting How Your Business Actually Runs",
    tag: "Digital Product",
  });

  tocPage(doc, BRAND, [
    { title: "1. How To Use This SOP Library", page: 3 },
    { title: "2. SOP 1 — Employee Onboarding Process", page: 4 },
    { title: "3. SOP 2 — Customer Complaint Handling", page: 5 },
    { title: "4. SOP 3 — Invoice Processing & Approval", page: 6 },
    { title: "5. SOP 4 — IT Equipment Request", page: 7 },
    { title: "6. SOP 5 — Social Media Posting Protocol", page: 8 },
    { title: "7. SOPs 6-20 — Blank Templates", page: 9 },
    { title: "8. Contact & Support", page: 14 },
  ]);

  // ---- Section 1: How To Use This Library ----
  sectionTitle(doc, "1. How To Use This SOP Library");
  bodyText(
    doc,
    "This library contains 20 Standard Operating Procedures covering the recurring tasks that keep a small or growing business running consistently. The first five are fully written, ready-to-deploy SOPs you can hand to a new hire today. The remaining fifteen are blank templates that follow the exact same structure, so your team can document your own processes in a format that stays consistent across every department."
  );
  bodyText(
    doc,
    "An SOP is only useful if someone who has never done the task before can follow it and get the same result as your most experienced employee. Write every step as a specific, observable action, not a general instruction: 'Verify the invoice total matches the purchase order' is usable; 'process the invoice correctly' is not."
  );
  subTitle(doc, "The SOP Template Structure");
  bodyText(
    doc,
    "Every SOP in this library — written or blank — follows the same seven-part structure, so anyone on your team can find what they need without hunting through inconsistent formats:"
  );
  bulletList(doc, [
    "Title — a short, specific name that describes exactly what the procedure covers.",
    "Purpose — one to two sentences explaining why this procedure exists.",
    "Scope — what this SOP applies to, and what it does not cover.",
    "Responsible Parties — the roles accountable for each part of the process.",
    "Procedure Steps — a numbered, sequential list a new hire could follow unassisted.",
    "References — related policies, forms, systems, or other SOPs this one depends on.",
    "Revision History — a log of when the SOP was created and updated, and what changed.",
  ]);
  subTitle(doc, "Rolling Out a New SOP");
  bulletList(doc, [
    "Assign one owner per SOP who is accountable for keeping it current.",
    "Review every SOP at least once per year, or immediately after a process changes.",
    "Store the finished library somewhere every employee can access.",
  ]);

  // ---- SOP 1 ----
  doc.addPage();
  fullSop(doc, {
    num: 1,
    title: "Employee Onboarding Process",
    purpose:
      "To ensure every new hire completes a consistent, documented onboarding experience from offer acceptance through their 90-day review, reducing ramp-up time and early turnover.",
    scope:
      "Applies to all full-time, part-time, and contract employees onboarded directly by the company. Excludes temporary staffing agency placements.",
    responsible: [
      "HR Coordinator — owns the onboarding checklist and timeline",
      "Hiring Manager — owns role-specific training and check-ins",
      "IT Administrator — owns equipment and account provisioning",
      "Payroll Specialist — owns payroll and benefits setup",
    ],
    steps: [
      "Send the pre-boarding packet (offer letter, benefits summary, I-9/W-4 forms) within 24 hours of verbal offer acceptance.",
      "Hiring Manager submits an IT provisioning ticket at least 5 business days before the start date.",
      "HR conducts a 90-minute Day 1 orientation covering policies, benefits enrollment, and safety procedures.",
      "Hiring Manager assigns the department training checklist and pairs the new hire with an onboarding buddy.",
      "HR schedules a documented 30-day check-in to review progress and confirm benefits enrollment is complete.",
      "Hiring Manager holds a 60-day performance touchpoint, documenting early concerns or training needs.",
      "Hiring Manager and HR jointly complete the 90-day review; employee moves to standard employment status.",
    ],
    references: ["Employee Handbook", "IT Provisioning Policy", "Benefits Enrollment Guide"],
    revisions: ["v1.0 — Jan 2025 — Initial release", "v1.1 — Jun 2025 — Added 60-day performance touchpoint step"],
  });

  // ---- SOP 2 ----
  doc.addPage();
  fullSop(doc, {
    num: 2,
    title: "Customer Complaint Handling",
    purpose:
      "To standardize how customer complaints are logged, triaged, resolved, and escalated, preserving customer trust while producing consistent data for continuous improvement.",
    scope:
      "Applies to all inbound complaints received by the Customer Support team through phone, email, live chat, or social media. Does not cover formal legal disputes, which route directly to Legal.",
    responsible: [
      "Support Agent — first responder and owner of routine complaints",
      "Support Team Lead — approves exceptions and handles escalations",
      "Customer Success Manager — reviews recurring complaint trends",
    ],
    steps: [
      "Log the complaint verbatim in the CRM within 1 business hour of receipt, capturing channel, order/product reference, and stated severity.",
      "Send an acknowledgment to the customer within 4 business hours confirming the complaint was received and the expected timeline.",
      "Classify the complaint as Low, Medium, or High severity using the Severity Matrix; High severity automatically escalates to the Team Lead.",
      "Investigate the root cause by reviewing order history, account notes, and relevant product or shipping logs before responding.",
      "Propose a resolution aligned with the Refund & Replacement Policy; obtain Team Lead approval for any exception to standard policy.",
      "Follow up with the customer within 48 hours of resolution to confirm satisfaction with the outcome.",
      "Close the ticket with a root-cause tag; Team Lead reviews the weekly trend report to flag recurring issues for process improvement.",
    ],
    references: ["Refund & Replacement Policy", "Complaint Severity Matrix", "CRM Field Guide"],
    revisions: ["v1.0 — Feb 2025 — Initial release", "v1.1 — May 2025 — Added automatic High-severity escalation"],
  });

  // ---- SOP 3 ----
  doc.addPage();
  fullSop(doc, {
    num: 3,
    title: "Invoice Processing & Approval",
    purpose:
      "To ensure vendor invoices are verified, coded, approved, and paid accurately and on schedule, protecting vendor relationships and avoiding late fees or duplicate payments.",
    scope:
      "Applies to all vendor invoices received by Accounts Payable. Does not apply to recurring payroll disbursements, which follow the Payroll Processing SOP.",
    responsible: [
      "AP Clerk — logs, matches, and codes each invoice",
      "Department Budget Owner — approves invoices charged to their budget",
      "Controller — approves invoices above the dual-approval threshold",
    ],
    steps: [
      "Log the invoice into the accounting system within 1 business day of receipt, recording vendor, amount, and due date.",
      "Perform a 3-way match against the purchase order and the delivery or receiving confirmation before proceeding.",
      "Code the invoice to the correct general ledger account and cost center per the Chart of Accounts.",
      "Route invoices under $2,500 to the Budget Owner for approval; route invoices of $2,500 or more to both the Budget Owner and the Controller.",
      "Contact the vendor directly to resolve any pricing or quantity discrepancies before scheduling payment.",
      "Schedule payment according to the vendor's stated terms, prioritizing any available early-payment discount.",
      "Archive the approved invoice packet with proof of payment for the audit retention period defined in company policy.",
    ],
    references: ["Chart of Accounts", "Purchasing Policy", "Vendor Payment Terms Log"],
    revisions: ["v1.0 — Mar 2025 — Initial release", "v1.1 — Jul 2025 — Added dual-approval threshold for invoices $2,500+"],
  });

  // ---- SOP 4 ----
  doc.addPage();
  fullSop(doc, {
    num: 4,
    title: "IT Equipment Request",
    purpose:
      "To define a consistent process for requesting, approving, and issuing IT equipment, controlling costs while keeping the company's asset inventory accurate.",
    scope:
      "Applies to all requests for computers, monitors, peripherals, and mobile devices submitted by employees or department managers.",
    responsible: [
      "Requesting Employee or Manager — initiates the request",
      "Department Manager — approves budget and business justification",
      "IT Asset Coordinator — sources, configures, and issues equipment",
    ],
    steps: [
      "Submit an equipment request through the IT ticketing system, specifying the equipment type and business justification.",
      "Department Manager approves or denies the request within 2 business days based on budget and need.",
      "IT Asset Coordinator checks refurbished inventory before approving the purchase of new equipment.",
      "IT Asset Coordinator either allocates existing inventory or places a purchase order for new equipment.",
      "IT Asset Coordinator images the device with standard software, registers the asset tag, and issues it to the employee.",
      "Employee signs an equipment acknowledgment form; IT updates the asset management system with the new assignment.",
    ],
    references: ["IT Asset Management Policy", "Approved Hardware Catalog"],
    revisions: ["v1.0 — Apr 2025 — Initial release"],
  });

  // ---- SOP 5 ----
  doc.addPage();
  fullSop(doc, {
    num: 5,
    title: "Social Media Posting Protocol",
    purpose:
      "To ensure all social media content is on-brand, factually accurate, and properly approved before publishing, minimizing reputational and legal risk.",
    scope:
      "Applies to all posts published on official company social media accounts across every platform. Does not cover personal employee social media use.",
    responsible: [
      "Social Media Coordinator — drafts and schedules content",
      "Marketing Manager — reviews for brand voice and accuracy",
      "Legal Reviewer — reviews sensitive claims or promotions as needed",
    ],
    steps: [
      "Draft the caption, visuals, and hashtags from the monthly editorial calendar.",
      "Marketing Manager reviews the draft for brand voice, factual accuracy, and image rights compliance.",
      "Route any post referencing pricing, product claims, or promotions to Legal for review before scheduling.",
      "Schedule the approved post using the company's social media management tool.",
      "Monitor comments and direct messages within 2 hours of publishing to catch and route any urgent responses.",
      "Log reach, engagement rate, and click-through data in the monthly content performance report.",
    ],
    references: ["Brand Style Guide", "Social Media Crisis Response Plan"],
    revisions: ["v1.0 — May 2025 — Initial release"],
  });

  // ---- SOPs 6-20: blank templates ----
  doc.addPage();
  sectionTitle(doc, "7. SOPs 6-20 — Blank Templates");
  bodyText(
    doc,
    "The remaining fifteen SOPs follow the same structure as SOPs 1-5. Use each template below to document your own version of these common business processes."
  );

  const stubTitles = [
    "Inventory Count",
    "Vendor Evaluation",
    "Meeting Scheduling",
    "Document Archiving",
    "Travel Request",
    "Expense Reporting",
    "Performance Review",
    "Data Backup",
    "Security Incident Response",
    "Office Supply Ordering",
    "Client Onboarding",
    "Newsletter Publishing",
    "Website Update",
    "Event Planning",
    "Annual Report Preparation",
  ];

  stubTitles.forEach((title, idx) => {
    ensureSpace(doc, 300);
    stubSop(doc, { num: idx + 6, title });
  });

  contactPage(doc, { brand: BRAND, phone: PHONE, email: EMAIL, address: ADDRESS, domain: DOMAIN });

  addPageNumbers(doc, BRAND);
  doc.end();
  return outPath;
}

// ================================================================
// PDF 2: Business Process Map Template Set
// ================================================================

function buildProcessMapTemplates() {
  const outPath = path.join(OUT_DIR, "business-process-map-templates.pdf");
  const doc = newDoc(outPath);

  coverPage(doc, {
    brand: BRAND,
    domain: DOMAIN,
    title: "Business Process Map Template Set",
    subtitle: "5 Editable Flowchart Templates for Documenting How Work Actually Moves",
    tag: "Digital Product",
  });

  tocPage(doc, BRAND, [
    { title: "1. What Is Process Mapping?", page: 3 },
    { title: "2. Process Map Symbols Guide", page: 4 },
    { title: "3. Template 1 — Order-to-Delivery Process Map", page: 5 },
    { title: "4. Template 2 — Hiring Process Map", page: 6 },
    { title: "5. Template 3 — Customer Support Ticket Flow", page: 7 },
    { title: "6. Template 4 — Content Publication Process", page: 8 },
    { title: "7. Template 5 — Blank Process Map Template", page: 9 },
    { title: "8. Process Improvement Checklist", page: 10 },
    { title: "9. Contact & Support", page: 11 },
  ]);

  // ---- Section 1 ----
  sectionTitle(doc, "1. What Is Process Mapping & How To Use These Templates");
  bodyText(
    doc,
    "A process map is a visual flowchart that shows how work, decisions, and handoffs move through a business process from start to finish. Where a written SOP documents a procedure step by step in words, a process map documents the same procedure visually — making it easy to spot bottlenecks, missing steps, and unclear ownership at a glance."
  );
  bodyText(
    doc,
    "This template set includes four fully mapped, real-world processes you can use as a reference or adapt directly, plus one blank template for mapping any process specific to your business. Each mapped template uses the same symbol set defined in the next section, so every diagram in your organization reads the same way regardless of who built it."
  );
  subTitle(doc, "How To Use These Templates");
  bulletList(doc, [
    "Start by walking the actual process end-to-end with the people who do the work — not how you assume it happens.",
    "Recreate the box-and-arrow layout in your diagramming tool of choice (Lucidchart, Miro, Visio, or even a whiteboard).",
    "Use the symbol guide on the next page to stay consistent — a Rectangle is always a task, a Diamond is always a decision.",
    "Label every box with an action verb ('Verify Payment') rather than a vague noun ('Payment') so the step is unambiguous.",
    "Add decision points explicitly wherever the process can branch, and label each branch with its condition (e.g., 'Approved' / 'Rejected').",
    "Review the finished map with everyone who touches the process before treating it as final.",
  ]);
  subTitle(doc, "Why Map a Process Before Writing an SOP");
  bodyText(
    doc,
    "Mapping a process visually first, before writing the detailed procedure steps, makes gaps and redundant handoffs obvious in a way a written list often hides. Many teams find that once a process is mapped, the correct sequence of SOP steps writes itself."
  );

  // ---- Section 2: Symbols Guide ----
  doc.addPage();
  sectionTitle(doc, "2. Process Map Symbols Guide");
  bodyText(
    doc,
    "Use these seven symbols consistently across every process map your team creates. Consistent symbol use is what makes a process map readable by someone outside the team that built it."
  );
  table(
    doc,
    ["Symbol Name", "Shape", "Meaning"],
    [
      ["Start/End", "Oval", "Marks the beginning or end point of a process"],
      ["Process Step", "Rectangle", "Represents a single action or task within the workflow"],
      ["Decision Point", "Diamond", "Indicates a yes/no or branching decision that changes the path"],
      ["Flow Direction", "Arrow", "Shows the sequence and direction that work moves between steps"],
      ["Document", "Document Icon", "Represents a form, report, or paper/digital document produced or used"],
      ["Data Store", "Cylinder / Database", "Represents stored data, a database, or a records repository"],
      ["Wait / Delay", "D-Shape", "Marks a pause, approval wait, or queue before the next step can begin"],
    ],
    [110, 130, 235]
  );

  // ---- Section 3: Template 1 ----
  doc.addPage();
  sectionTitle(doc, "3. Template 1 — Order-to-Delivery Process Map");
  bodyText(doc, "This template maps the full lifecycle of a customer order from the moment it is placed to the moment it is closed out internally.");
  drawFlowRow(doc, ["Order Received", "Verify Payment", "Pick Items", "Pack", "Ship", "Confirm Delivery", "Close Order"]);
  bodyText(
    doc,
    "The most important decision point in this flow sits between Order Received and Verify Payment — orders that fail payment verification branch out to a Hold for Review step rather than continuing to fulfillment. A second, smaller decision point can occur at Pick Items if an item is out of stock, branching to a backorder notification before the process rejoins the main flow at Pack."
  );

  // ---- Section 4: Template 2 ----
  doc.addPage();
  sectionTitle(doc, "4. Template 2 — Hiring Process Map");
  bodyText(doc, "This template maps a standard hiring process from job posting through the new hire's first day of onboarding.");
  drawFlowRow(doc, ["Job Posted", "Screen Resumes", "Phone Interview", "In-Person Interview", "Reference Check", "Offer", "Onboard"]);
  bodyText(
    doc,
    "Decision points appear after each interview stage — a candidate who does not advance branches to a rejection notification rather than continuing down the main flow. The Reference Check step also includes a decision point: any reference concern routes the candidate back to the Hiring Manager for a go/no-go decision before an offer is extended."
  );

  // ---- Section 5: Template 3 ----
  doc.addPage();
  sectionTitle(doc, "5. Template 3 — Customer Support Ticket Flow");
  bodyText(doc, "This template maps how a support ticket moves from creation through resolution and final customer feedback.");
  drawFlowRow(doc, ["Ticket Created", "Assign", "Diagnose", "Resolve", "Verify", "Close", "Satisfaction Survey"]);
  bodyText(
    doc,
    "The Diagnose step includes a decision point for complexity: tickets identified as complex branch to a Tier 2 Escalation path before rejoining at Resolve, while straightforward tickets continue directly. The Verify step is itself a decision point — if the customer confirms the issue is resolved the ticket proceeds to Close, and if not it loops back to Diagnose."
  );

  // ---- Section 6: Template 4 ----
  doc.addPage();
  sectionTitle(doc, "6. Template 4 — Content Publication Process");
  bodyText(doc, "This template maps a content piece from initial draft through publishing and post-publish performance analysis.");
  drawFlowRow(doc, ["Draft", "Edit", "Review", "Approve", "Schedule", "Publish", "Promote", "Analyze"], { boxHeight: 52 });
  bodyText(
    doc,
    "The Review step is a decision point: content that is approved moves to Schedule, while content sent back for revisions loops to Edit before returning to Review. Because this process has more stages than the others in this set, teams often add a Wait/Delay symbol between Approve and Schedule to represent queued content waiting for its assigned publish date."
  );

  // ---- Section 7: Blank Template ----
  doc.addPage();
  sectionTitle(doc, "7. Template 5 — Blank Process Map Template");
  bodyText(
    doc,
    "Use this blank template to map any process specific to your business. Recreate the six boxes below in your diagramming tool, connect them with arrows in sequence, and label each box with a single action verb describing that step."
  );
  drawFlowRow(doc, ["", "", "", "", "", ""], { boxHeight: 56, clearance: 30 });
  bodyText(
    doc,
    "Use the symbols above to fill in your own process steps. Add a Diamond wherever the process branches, a Document icon wherever a form or record is produced, and a Cylinder wherever the step writes to a database or shared system of record."
  );

  // ---- Section 8: Process Improvement Checklist ----
  doc.addPage();
  sectionTitle(doc, "8. Process Improvement Checklist");
  bodyText(doc, "Once a process is mapped, use this checklist before redesigning it, so improvements are based on the real current state rather than assumptions.");
  checklist(doc, [
    "Map the current state before redesigning — document what actually happens, not what should happen.",
    "Identify bottlenecks — mark every step where work consistently piles up or waits.",
    "Remove redundant steps — cut any step that does not change the outcome or add required approval.",
    "Assign clear ownership per step — every box on the map should have exactly one accountable role.",
    "Define SLAs for each stage — set a maximum time each step should take before it is considered overdue.",
    "Automate repetitive steps where possible — prioritize high-volume, low-judgment steps first.",
    "Document exceptions and edge cases — capture what happens when the standard path doesn't apply.",
    "Get stakeholder sign-off — confirm every team touched by the process agrees with the redesign.",
    "Pilot before full rollout — test the redesigned process on a small scope before deploying company-wide.",
    "Review quarterly — revisit every process map at least once a quarter to catch drift from the documented flow.",
  ]);
  divider(doc);
  bodyText(
    doc,
    "Keep a copy of every process map alongside its related SOPs in the same shared location, and note the review date directly on the map so it's always clear how current the diagram is."
  );

  contactPage(doc, { brand: BRAND, phone: PHONE, email: EMAIL, address: ADDRESS, domain: DOMAIN });

  addPageNumbers(doc, BRAND);
  doc.end();
  return outPath;
}

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const p1 = buildSopLibrary();
const p2 = buildProcessMapTemplates();
console.log("Generated:", p1);
console.log("Generated:", p2);
