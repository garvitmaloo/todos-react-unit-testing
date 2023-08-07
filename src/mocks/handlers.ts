import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:4000/todos", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "1",
          title: "New todo",
          description: "Some details",
          isFinished: false,
        },
        {
          id: "2",
          title: "One more todo",
          description: "Some more details",
          isFinished: true,
        },
      ])
    );
  }),

  rest.post("http://localhost:4000/todos", (req, res, ctx) => {
    return res(
      ctx.json({
        id: "1",
        title: "New todo",
        description: "Some details",
        isFinished: false,
      })
    );
  }),
];
