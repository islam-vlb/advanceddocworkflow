export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: string;
  sizes: string[] | null;
  image: string;
  altText: string;
};

export const FALLBACK_CATEGORIES: string[] = ["Document Templates", "SOP Systems", "Process Maps", "Business Kits"];

export const FALLBACK_PRODUCTS: Product[] = [
  { id: 1, slug: "single-page-sop-template-starter-1", name: "Single-Page SOP Template — Starter", price: 9.99, category: "SOP Systems", sizes: null, image: "/images/products/1-single-page-sop-starter.jpg", altText: "Preview of the Single-Page SOP Template Starter, showing a clean one-page standard operating procedure layout with sections for process steps, approvals, and notes" },
  { id: 2, slug: "meeting-agenda-pack-10-templates-2", name: "Meeting Agenda Pack (10 Templates)", price: 13.95, category: "Document Templates", sizes: null, image: "/images/products/2-meeting-agenda-pack.jpg", altText: "Meeting Agenda Pack preview showing ten structured meeting agenda templates for standups, planning sessions, and leadership reviews" },
  { id: 3, slug: "project-brief-document-template-3", name: "Project Brief Document Template", price: 14.75, category: "Document Templates", sizes: null, image: "/images/products/3-project-brief-template.jpg", altText: "Project Brief Document Template preview displaying a structured project scope, timeline, and ownership section layout" },
  { id: 4, slug: "client-onboarding-document-kit-4", name: "Client Onboarding Document Kit", price: 17.95, category: "Document Templates", sizes: null, image: "/images/products/4-client-onboarding-kit.jpg", altText: "Client Onboarding Document Kit preview showcasing professional intake forms, welcome documents, and service expectation templates" },
  { id: 5, slug: "employee-handbook-starter-template-5", name: "Employee Handbook Starter Template", price: 18.75, category: "Document Templates", sizes: null, image: "/images/products/5-employee-handbook-starter.jpg", altText: "Employee Handbook Starter Template preview showing a structured policy, conduct, and onboarding framework for growing teams" },
  { id: 6, slug: "business-process-map-template-set-6", name: "Business Process Map Template Set", price: 28.76, category: "Process Maps", sizes: null, image: "/images/products/6-business-process-map.png", altText: "Business Process Map Template Set preview displaying editable flowchart templates for mapping organizational handoffs and decisions" },
  { id: 7, slug: "standard-operating-procedure-library-20-sops-7", name: "Standard Operating Procedure Library (20 SOPs)", price: 38.64, category: "SOP Systems", sizes: null, image: "/images/products/7-sop-library-20sops.jpg", altText: "Standard Operating Procedure Library preview showing twenty ready-to-customize SOP document templates spanning common business operations" },
  { id: 8, slug: "department-operations-manual-template-8", name: "Department Operations Manual Template", price: 47.89, category: "SOP Systems", sizes: null, image: "/images/products/8-department-operations-manual.jpg", altText: "Department Operations Manual Template preview showing an organized manual framework for documenting day-to-day team operations" },
  { id: 9, slug: "vendor-supplier-agreement-framework-9", name: "Vendor & Supplier Agreement Framework", price: 49.76, category: "Document Templates", sizes: null, image: "/images/products/9-vendor-supplier-agreement.png", altText: "Vendor and Supplier Agreement Framework preview with structured agreement templates, evaluation checklists, and relationship management forms" },
  { id: 10, slug: "complete-hr-document-pack-10", name: "Complete HR Document Pack", price: 53.45, category: "Business Kits", sizes: null, image: "/images/products/10-complete-hr-document-pack.jpg", altText: "Complete HR Document Pack preview bundling core hiring, onboarding, personnel, and policy documentation templates for growing teams" },
  { id: 11, slug: "business-playbook-template-system-11", name: "Business Playbook Template System", price: 54.95, category: "Business Kits", sizes: null, image: "/images/products/11-business-playbook-template.jpg", altText: "Business Playbook Template System preview displaying a structured department-by-department framework for capturing institutional operating knowledge" },
  { id: 12, slug: "full-operations-document-suite-12", name: "Full Operations Document Suite", price: 86.88, category: "Business Kits", sizes: null, image: "/images/products/12-full-operations-document-suite.png", altText: "Full Operations Document Suite preview combining SOPs, process maps, and operations manuals into one comprehensive business system" },
  { id: 13, slug: "franchise-operations-manual-template-13", name: "Franchise Operations Manual Template", price: 87.64, category: "SOP Systems", sizes: null, image: "/images/products/13-franchise-operations-manual.jpg", altText: "Franchise Operations Manual Template preview showing a consistent, multi-location operations manual framework for training and standardization" },
  { id: 14, slug: "enterprise-sop-process-map-bundle-14", name: "Enterprise SOP + Process Map Bundle", price: 87.76, category: "Process Maps", sizes: null, image: "/images/products/14-enterprise-sop-process-map-bundle.png", altText: "Enterprise SOP and Process Map Bundle preview pairing a full SOP library with matching process map templates for large-scale operations" },
  { id: 15, slug: "complete-business-document-library-15", name: "Complete Business Document Library", price: 94.82, category: "Business Kits", sizes: null, image: "/images/products/15-complete-business-document-library.png", altText: "Complete Business Document Library preview showing an organized collection covering every document category from templates to process maps" },
  { id: 16, slug: "ultimate-workflow-operations-system-16", name: "Ultimate Workflow & Operations System", price: 96.95, category: "Business Kits", sizes: null, image: "/images/products/16-ultimate-workflow-operations-system.png", altText: "Ultimate Workflow and Operations System preview displaying the most complete end-to-end operations system combining every template and SOP" }
];

export const hasSizeGuide = false;
