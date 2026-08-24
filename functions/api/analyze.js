export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const { query } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY; // Cloudflare 대시보드에서 등록할 변수

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API Key Missing" }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const systemPrompt = `
You are an expert Semiconductor Process & Device Engineer AI Assistant at SK Hynix.
Analyze the user's process issue and respond in structured JSON format with two clear sections:
1. "root_cause": Detailed physical/chemical root cause analysis.
2. "proposals": Bullet points of actionable process optimization conditions.

User Query: ${query}

Return ONLY valid JSON matching this schema:
{
  "root_cause": "string",
  "proposals": ["string", "string"]
}
    `;

    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: systemPrompt }] }]
      })
    });

    const data = await response.json();
    const rawText = data.candidates[0].content.parts[0].text;
    const cleanJson = rawText.replace(/```json|```/g, '').trim();
    const parsedResult = JSON.parse(cleanJson);

    return new Response(JSON.stringify(parsedResult), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}