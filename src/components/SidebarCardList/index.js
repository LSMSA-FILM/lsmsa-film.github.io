import DocCardList from "@site/src/theme/DocCardList";

const SidebarList = [
  {
    type: "link",
    href: "/docs/livestreaming",
    label: "Livestreaming",
    description: "Guide on how to livestream at LSMSA",
    icon: "📻",
  },
  {
    type: "link",
    href: "/docs/assets",
    label: "Assets",
    description: "Files and media for LSMSA FILM",
    icon: "🗃",
  },
];

export default function SidebarCardList() {
  return <DocCardList items={SidebarList} />;
}
