import NavigationItem from "@craftercms/models/src/NavigationItem";

export type TLink = {
  label: string;
  url: string;
  active: boolean;
  attributes: Record<string, string>;
};

export type TNavItem = (NavigationItem | TLink);

export type TInfoGraphicItem = {
  figureStart_s: string;
  figureStop_s: string;
  title_s: string;
  image_s: string;
  figurePrefix_s?: string;
  figureSuffix_s?: string;
}