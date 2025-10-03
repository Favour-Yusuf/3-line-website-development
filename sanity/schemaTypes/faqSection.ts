export default {
  name: "faqSection",
  title: "FAQ Section",
  type: "document",
  fields: [
    {
      name: "sections",
      title: "FAQ Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "section", type: "string", title: "Section Title" },
            {
              name: "items",
              title: "Questions & Answers",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "question", type: "string", title: "Question" },
                    { name: "answer", type: "text", title: "Answer" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
