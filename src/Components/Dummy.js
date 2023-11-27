import {
  userIcon,
  chartIcon,
  setIcon,
  graphIcon,
  categoryIcon,
  headphoneIcon,
  bagIcons,
  folderIcon,
  giftIcon,
  graphsIcon,
} from "../Asset";

export const pages = [
  {
    id: 1,
    icon: categoryIcon,
    pages: "Dashboard",
    // style: "bg-red-500",
    pageLink: "/",
    style: "bg-blue-500 rounded-lg hover:scale-95 text-white py-1",
  },
  {
    id: 2,
    icon: bagIcons,
    pages: "Order",
    // style: "bg-red-100",
    pageLink: "order",
  },
  {
    id: 3,
    icon: userIcon,
    pages: "Customer",
    pageLink: "customer",
  },
  {
    id: 4,
    icon: folderIcon,
    pages: "Inventory",
    pageLink: "tunji",
  },
  {
    id: 5,
    icon: chartIcon,
    pages: "Conversation",
    pageLink: "conversation",
  },
  {
    id: 6,
    icon: setIcon,
    pages: "Settings",
  },
  {
    id: 7,
    icon: headphoneIcon,
    pages: "Contact Support",
    style: "bg-[wheat] pr-3 rounded-lg ",
  },
  {
    id: 8,
    icon: giftIcon,
    pages: "Free Gift Awaits You!",
    style: "bg-chestnut text-xs font-thin pr-2 rounded-lg",
  },
];

export const dashData = [
  {
    id: 1,
    firsData: "Customer",
    firstDataValue: "#4,000,000.00",
    secondValue: "Volume",
    secondValueData: "450",
    secondValueSubData: "+45%",
    DashIcon: graphsIcon,
    iconBackground: "bg-red-500",
  },
  {
    id: 2,
    firsData: "Sales",
    firstDataValue: "240",
    secondValue: "Volume",
    secondValueData: "450",
    secondValueSubData: "+25%",
    DashIcon: graphIcon,
    iconBackground: "bg-blue-300",
  },
];
