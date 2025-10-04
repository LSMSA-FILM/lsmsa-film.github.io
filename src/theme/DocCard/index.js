import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import {
  useDocById,
  findFirstSidebarItemLink,
} from "@docusaurus/plugin-content-docs/client";
import { usePluralForm } from "@docusaurus/theme-common";
import isInternalUrl from "@docusaurus/isInternalUrl";
import { translate } from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
function useCategoryItemsPlural() {
  const { selectMessage } = usePluralForm();
  return (count) =>
    selectMessage(
      count,
      translate(
        {
          message: "1 item|{count} items",
          id: "theme.docs.DocCard.categoryDescription.plurals",
          description:
            "The default description for a category card in the generated index about how many items this category includes",
        },
        { count }
      )
    );
}
function CardContainer({ className, href, children }) {
  return <Link href={href}>{children}</Link>;
}
function CardLayout({
  className,
  href,
  icon,
  title,
  description,
  internalLink,
}) {
  return (
    <div className={clsx("card", styles.cardContainer, className)}>
      <Link href={href} className="padding--lg">
        <Heading
          as="h2"
          className={clsx("text--truncate", styles.cardTitle)}
          title={title}
        >
          {icon} {title}
        </Heading>
        {description && (
          <p
            className={clsx("text--truncate", styles.cardDescription)}
            title={description}
          >
            {description}
          </p>
        )}
      </Link>
      {/* {internalLink && (
        <Link
          href={internalLink}
          className={clsx("padding--lg", styles.cardInternalLink)}
        >
          Click here to scroll down...
        </Link>
      )} */}
    </div>
  );
}
function CardCategory({ item }) {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useCategoryItemsPlural();
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  return (
    <CardLayout
      className={item.className}
      href={href}
      icon="🗃️"
      title={item.label}
      description={item.description ?? categoryItemsPlural(item.items.length)}
      internalLink={item.internalLink}
    />
  );
}
function CardLink({ item }) {
  const icon = item.icon ?? (isInternalUrl(item.href) ? "📄️" : "🔗");
  let doc;
  try {
    doc = useDocById(item.docId ?? undefined);
  } catch (error) {}
  // const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      className={item.className}
      href={item.href}
      icon={icon}
      title={item.label}
      description={item.description ?? doc?.description}
      internalLink={item.internalLink}
    />
  );
}
export default function DocCard({ item }) {
  switch (item.type) {
    case "link":
      return <CardLink item={item} />;
    case "category":
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
