import { useState } from "react";
import { useClient, useCurrentUser, useDocumentOperation, type DocumentActionComponent } from "sanity";

export const GivingPublishAction: DocumentActionComponent = (props) => {
  const { publish } = useDocumentOperation(props.id, props.type);
  const client = useClient({ apiVersion: "2026-07-01" });
  const currentUser = useCurrentUser();
  const [busy, setBusy] = useState(false);

  return {
    label: busy ? "Publishing…" : "Review and publish",
    disabled: Boolean(publish.disabled) || busy,
    title: "Confirm donation contacts and QR codes before publishing",
    onHandle: async () => {
      const confirmed = window.confirm(
        "Sensitive giving information\n\nHave you verified every payment destination and QR code against the church's official records?",
      );
      if (!confirmed) {
        props.onComplete();
        return;
      }
      setBusy(true);
      try {
        const draftId = props.draft?._id ?? `drafts.${props.id}`;
        await client.patch(draftId).set({ lastReviewedAt: new Date().toISOString(), lastReviewedBy: currentUser?.name ?? currentUser?.email ?? "Church editor" }).commit();
        publish.execute();
        props.onComplete();
      } finally {
        setBusy(false);
      }
    },
  };
};
