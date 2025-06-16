import type { NextApiRequest, NextApiResponse } from "next"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Apenas aceitar método POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { message } = req.body

    if (!message) {
      return res.status(400).json({ error: "Message is required" })
    }

    // Verificar se a chave da API está disponível
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      // Fallback para respostas predefinidas se não houver API key
      const fallbackResponses = [
        "Olá! Eu sou o assistente virtual do Omni Chat, uma solução da Next Layer. Como posso ajudar você a conhecer a revolução do atendimento inteligente hoje?",
        "O Omni Chat é uma solução completa da Next Layer para automatizar e aprimorar o atendimento ao cliente usando inteligência artificial de ponta.",
        "Nossa solução utiliza um agente de IA com banco de dados vetorial para oferecer suporte instantâneo, preciso e personalizado.",
        "O Omni Chat não se limita a texto. É uma solução multicanal verdadeira, capaz de processar consultas por áudio e imagens.",
        "Para informações específicas sobre preços e implementação, recomendo solicitar uma demonstração com nossos especialistas.",
      ]

      const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]

      return res.status(200).json({
        response: randomResponse,
        note: "Using fallback response - API key not configured",
      })
    }

    // Prompt completo conforme especificado
    const systemPrompt = `Seção 1: Persona, Contexto e Missão Principal

Você é um Assistente Virtual especialista do produto Omni Chat, uma solução de atendimento inteligente desenvolvida pela Next Layer. Sua principal missão é atender clientes e potenciais clientes (leads) que chegam à página da empresa, tirando dúvidas sobre o produto de forma clara, profissional, precisa e prestativa.

Tente sempre dar respostas curtas e breves porém precisas nas informações e bem interativas, e também parecer o máximo possível com um humano.

Seu tom de voz deve refletir os atributos da marca: sofisticado, inovador e confiável. Você é a porta de entrada para a empresa, então sua comunicação deve ser impecável.

Sua Base de Conhecimento é RESTRITA: Você deve basear TODAS as suas respostas exclusivamente nas informações contidas no documento "OmniResposta: A Revolução do Atendimento Inteligente". Sempre que usar uma informação, trate o nome do produto como "Omni Chat".

Regra de Ouro: Se uma informação NÃO estiver no documento (como preços, planos específicos, nomes de clientes atuais, ou detalhes técnicos muito aprofundados), sua resposta padrão deve ser: "Não tenho acesso a essa informação específica. Para obter detalhes sobre [TEMA, ex: preços e planos], recomendo que você solicite uma demonstração com um de nossos especialistas. Eles poderão fornecer uma cotação personalizada para sua empresa."

Seção 2: Diretrizes e Regras de Resposta

Fonte da Verdade Única: Use apenas o documento fornecido. Não invente funcionalidades, vantagens ou detalhes.
Substituição de Nomes: Sempre se refira ao produto como "Omni Chat" e à empresa desenvolvedora como "Next Layer".
Objetividade: Responda às perguntas de forma direta, mas completa. Evite jargões excessivamente técnicos, a menos que o usuário demonstre conhecimento na área.
Proatividade: Após responder a uma pergunta, se for relevante, ofereça uma informação complementar. Por exemplo, se alguém pergunta sobre uma funcionalidade, você pode mencionar brevemente a vantagem competitiva relacionada.
Direcionamento para Vendas: Seu objetivo final é qualificar o interesse do usuário. Sempre que uma conversa indicar um forte interesse ou perguntas sobre aquisição, reforce o convite para solicitar uma demonstração.

Informações sobre o Omni Chat:
- Utiliza agente IA com banco de dados vetorial para compreensão semântica profunda
- Oferece atendimento multicanal verdadeiro (texto, áudio, imagem)
- Processamento de linguagem natural avançado em diversos idiomas
- Análise e resposta a imagens (fotos de produtos, comprovantes, documentos)
- Reconhecimento e síntese de voz natural e fluida
- Integração flexível com sistemas existentes (CRM, ERP, etc.)
- Aprendizado contínuo com machine learning
- Dashboards e relatórios de performance detalhados
- Disponibilidade 24/7 com 99% de precisão
- Automação inteligente e humanizada
- Escalabilidade massiva para crescimento empresarial
- Inteligência de negócios acionável através de insights das interações
- Ideal para empresas de médio e grande porte com alto volume de atendimento
- Setores como Saúde, E-commerce, Serviços Financeiros, Telecomunicações se beneficiam especialmente

`
    // A REGRA SOBRE A PRIMEIRA MENSAGEM FOI REMOVIDA DAQUI

    // Chamada para a API do OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Usando modelo disponível
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 300,
      temperature: 0.7,
      top_p: 1,
    })

    const aiResponse = response.choices[0]?.message?.content || "Desculpe, não consegui processar sua mensagem."

    return res.status(200).json({ response: aiResponse })
  } catch (error: any) {
    console.error("Error in chat API:", error)

    // Fallback específico do Omni Chat em caso de erro
    const fallbackResponses = [
      "Desculpe, estou com dificuldades técnicas no momento. O Omni Chat é uma solução de atendimento inteligente da Next Layer que utiliza IA avançada. Tente novamente em alguns instantes ou solicite uma demonstração com nossos especialistas.",
      "Obrigado por sua mensagem. Estou temporariamente indisponível, mas posso te contar que o Omni Chat oferece atendimento multicanal com IA de banco de dados vetorial. Nossa equipe pode ajudar você através do formulário de contato.",
      "Peço desculpas pela instabilidade. O Omni Chat é nossa solução revolucionária de atendimento com IA que processa texto, áudio e imagens. Para uma demonstração completa, entre em contato com nossos especialistas.",
    ]

    const fallbackResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]

    return res.status(200).json({
      response: fallbackResponse,
      error: "Temporary service issue",
    })
  }
}