import {
  HomeIcon,
  UploadIcon,
  HeaderIcon,
  ServersIcon,
  ExportsIcon,
  TagsIcon,
  EditIconOutlined,
} from "../../assets/icons";

export interface SidebarItem {
  path: string;
  title: string;
  icon: any;
  id: string;
}

export const sidebarMenu = [
  {
    path: "/Home",
    title: "Home",
    icon: HomeIcon,
    id: "home",
  },
  {
    path: "/api-doc-gen/upload",
    title: "Load Spec",
    desc: " Upload or paste API documentation definition e.g. OpenAPI Specification definition.",
    icon: UploadIcon,
    id: "upload",
  },
  {
    path: "/api-doc-gen/header",
    title: "Header",
    desc: "Specify Definition of HTTP/HTTPS headers for requests and responses.",
    icon: HeaderIcon,
    id: "header",
  },
  {
    path: "/api-doc-gen/servers",
    title: "Servers",
    desc: "Specify Host URL and BasePath for API endpoints.",
    icon: ServersIcon,
    id: "servers",
  },
  {
    path: "/api-doc-gen/tags",
    title: "Tags",
    desc: "Specify Grouping mechanism for categorizing API operations.",
    icon: TagsIcon,
    id: "tags",
  },
  {
    path: "/api-doc-gen/path-and-operations",
    title: "Path And Operations",
    desc: "Specify API endpoints and supported HTTP methods with related information.",
    icon: EditIconOutlined,
    id: "main",
  },
  {
    path: "/api-doc-gen/schemas",
    title: "Schemas",
    desc: "Specify Structure and data types of request/response payloads.",
    icon: EditIconOutlined,
    id: "schemas",
  },
  {
    path: "/api-doc-gen/exports",
    title: "Exports",
    desc: "Get the documentation based on the information provided to API DocGen.	",
    icon: ExportsIcon,
    id: "exports",
  },
  {
    path: "/test-wizard/test-builder",
    title: "Test Builder",
    desc: "Generate API requests in the form of Postman collection.",
    icon: HeaderIcon,
    id: "apiValidator",
  },
  {
    path: "/test-wizard/test-executor",
    title: "Test Executor",
    desc: "Execute the Postman collection to test API requests.",
    icon: HeaderIcon,
    id: "apiValidator",
  },
];
