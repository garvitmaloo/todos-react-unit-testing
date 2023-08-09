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
        {
          id: "3",
          title: "Last todo",
          description: "All the details",
          isFinished: false,
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

  rest.delete("http://localhost:4000/todos/1", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
