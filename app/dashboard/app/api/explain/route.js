import OpenAI from "openai";

export async function POST(req) {
  const { text } = await req.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Explain document in very simple words." },
      { role: "user", content: text }
    ]
  });

  return Response.json({
    result: completion.choices[0].message.content
  });
}
