export default {
  name: "paymentFeatures",
  title: "API Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
    },
    {
      name: "description",
      title: "Section Description",
      type: "text",
    },
    {
      name: "features",
      title: "Key Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Feature Title" },
            { name: "desc", type: "string", title: "Feature Description" },
          ],
        },
      ],
    },
    {
      name: "whoFor",
      title: "Who it’s for",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "number", type: "string", title: "Number" },
            { name: "desc", type: "string", title: "Description" },
          ],
        },
      ],
    },
  ],
}
