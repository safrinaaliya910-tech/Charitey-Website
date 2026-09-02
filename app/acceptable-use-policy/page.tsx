import { createLegalMetadata, LegalDocumentPage } from "@/lib/legal";

export const metadata = createLegalMetadata("data-collection-permission-policy");

export default function DataCollectionPermissionPolicyPage() {
  return <LegalDocumentPage slug="data-collection-permission-policy" />;
}