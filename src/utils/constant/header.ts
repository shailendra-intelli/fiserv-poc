const header = [
    { label: "Title", name: "info.title", type: "text" },
    { label: "Version", name: "info.version", type: "text" },
    { label: "Description", name: "info.description", type: "text" },
    { label: "Contact Name", name: "info.contact.name", type: "text" },
    { label: "Contact Email", name: "info.contact.email", type: "email" },
    { label: "Contact URL", name: "info.contact.url", type: "text" },
    { label: "Terms of Service URL", name: "info.termsOfService", type: "text" },
    {
      label: "License URL",
      name: "info.license.url",
      type: "text",
    },
  
    {
      label: "License Name",
      name: "info.license.name",
      type: "option",
      update: "info.license.url",
      values: [
        { name: "MIT", 
        update: "https://opensource.org/licenses/MIT" },
        {
          name: "Apache 2.0",
          update: "https://opensource.org/licenses/Apache-2.0",
        },
        {
          name: "CC BY-SA 4.0",
          update: "https://creativecommons.org/licenses/by/4.0/",
        },
        {
          name: "CC NC-SA 4.0",
          update: "https://creativecommons.org/licenses/by-nc/4.0/",
        },
      ],
    },
    // { label: "License Name", namea: "info.license.name", type: "text" },
    { label: "External Docs", name: "externalDocs.description", type: "text" },
    { label: "Documentation URL", name: "externalDocs.url", type: "text" },
  ];
  export default header;
  