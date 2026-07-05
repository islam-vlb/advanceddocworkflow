export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: string;
  sizes: string[] | null;
  image: string;
};

export const FALLBACK_CATEGORIES: string[] = ["Document Templates", "SOP Systems", "Process Maps", "Business Kits"];

export const FALLBACK_PRODUCTS: Product[] = [
  { id: 1, slug: "single-page-sop-template-starter-1", name: "Single-Page SOP Template — Starter", price: 9.99, category: "SOP Systems", sizes: null, image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80&auto=format&fit=crop" },
  { id: 2, slug: "meeting-agenda-pack-10-templates-2", name: "Meeting Agenda Pack (10 Templates)", price: 13.95, category: "Document Templates", sizes: null, image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&auto=format&fit=crop" },
  { id: 3, slug: "project-brief-document-template-3", name: "Project Brief Document Template", price: 14.75, category: "Document Templates", sizes: null, image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop" },
  { id: 4, slug: "client-onboarding-document-kit-4", name: "Client Onboarding Document Kit", price: 17.95, category: "Document Templates", sizes: null, image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop" },
  { id: 5, slug: "employee-handbook-starter-template-5", name: "Employee Handbook Starter Template", price: 18.75, category: "Document Templates", sizes: null, image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80&auto=format&fit=crop" },
  { id: 6, slug: "business-process-map-template-set-6", name: "Business Process Map Template Set", price: 28.76, category: "Process Maps", sizes: null, image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80&auto=format&fit=crop" },
  { id: 7, slug: "standard-operating-procedure-library-20-sops-7", name: "Standard Operating Procedure Library (20 SOPs)", price: 38.64, category: "SOP Systems", sizes: null, image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format&fit=crop" },
  { id: 8, slug: "department-operations-manual-template-8", name: "Department Operations Manual Template", price: 47.89, category: "SOP Systems", sizes: null, image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80&auto=format&fit=crop" },
  { id: 9, slug: "vendor-supplier-agreement-framework-9", name: "Vendor & Supplier Agreement Framework", price: 49.76, category: "Document Templates", sizes: null, image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&auto=format&fit=crop" },
  { id: 10, slug: "complete-hr-document-pack-10", name: "Complete HR Document Pack", price: 53.45, category: "Business Kits", sizes: null, image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop" },
  { id: 11, slug: "business-playbook-template-system-11", name: "Business Playbook Template System", price: 54.95, category: "Business Kits", sizes: null, image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop" },
  { id: 12, slug: "full-operations-document-suite-12", name: "Full Operations Document Suite", price: 86.88, category: "Business Kits", sizes: null, image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80&auto=format&fit=crop" },
  { id: 13, slug: "franchise-operations-manual-template-13", name: "Franchise Operations Manual Template", price: 87.64, category: "SOP Systems", sizes: null, image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80&auto=format&fit=crop" },
  { id: 14, slug: "enterprise-sop-process-map-bundle-14", name: "Enterprise SOP + Process Map Bundle", price: 87.76, category: "Process Maps", sizes: null, image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format&fit=crop" },
  { id: 15, slug: "complete-business-document-library-15", name: "Complete Business Document Library", price: 94.82, category: "Business Kits", sizes: null, image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80&auto=format&fit=crop" },
  { id: 16, slug: "ultimate-workflow-operations-system-16", name: "Ultimate Workflow & Operations System", price: 96.95, category: "Business Kits", sizes: null, image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&auto=format&fit=crop" }
];

export const hasSizeGuide = false;
