// api/claude.js
// Função serverless (Vercel) que repassa chamadas para a API da Anthropic
// sem nunca expor sua chave no navegador.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'ANTHROPIC_API_KEY não configurada no servidor.' });
    return;
  }

  try {
    const { system, content, maxTokens } = req.body || {};
    if (!content) {
      res.status(400).json({ error: 'Campo "content" é obrigatório.' });
      return;
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: maxTokens || 800,
        system: system || undefined,
        messages: [{ role: 'user', content }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      res.status(response.status).json({ error: data.error?.message || 'Erro na API da Anthropic' });
      return;
    }

    const text = (data.content || [])
      .filter((b) => b.type === 'text')
      .map((b) => b.text)
      .join('\n')
      .trim();

    res.status(200).json({ text });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
}
