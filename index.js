const { serve } = require("@hono/node-server");
const { Hono } = require("hono");
const { default: Kuroshiro } = require("kuroshiro");
const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji");


const app = new Hono();
app.post("/", async (c) => {
  const { text, type, mode, romajiSystem } = await c.req.json();
  if (!text || !type) {
    return c.text("Text and type are required", 400);
  }
  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer());
  try {
    const result = await kuroshiro.convert(
      text,
      { to: type, mode, romajiSystem }
    );
    return c.text(result);
  } catch (e) {
    return c.text(e.message, 500);
  }
});

serve(app);
