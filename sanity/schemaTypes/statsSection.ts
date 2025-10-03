export default {
  name: "statsSection",
  title: "Stats Section",
  type: "document",
  fields: [
    {
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "string", title: "Description" },
            { name: "blueText", type: "boolean", title: "Highlight in Blue?" },
          ],
        },
      ],
    },
  ],
}
