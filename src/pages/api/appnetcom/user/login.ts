// pages/api/brazmovel/customer-proxy-fetch.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Esta API Route aceitará apenas requisições GET
  if (req.method === 'GET') {
    try {
      // 1. Obtenha o CPF da query string da sua requisição para esta API Route
      // Exemplo de acesso: /api/brazmovel/customer-proxy-fetch?cpf=07597162693
      const { cpf } = req.query;

      if (!cpf || typeof cpf !== 'string') {
        return res.status(400).json({ message: 'CPF é obrigatório como parâmetro de query (ex: ?cpf=...) .' });
      }

      // 2. O token (que você forneceu fixo) e o Content-Type
      // ATENÇÃO: É ALTAMENTE RECOMENDADO USAR process.env.BRAZMOVEL_PARTNER_TOKEN AQUI
      // E NÃO COLOCAR O TOKEN DIRETAMENTE NO CÓDIGO FONTE POR SEGURANÇA.
      // Usei o token fixo como solicitado, mas reconsidere essa prática em produção.
      const fixedToken = process.env.TOKEN_BRAZ_MOVEL;
      const authorizationHeader = `Bearer ${fixedToken}`;

      // 3. A URL completa da API da Braz Móvel
      const brazmovelApiUrl = `http://api.brazmovel.com.br/v1/customer/cpf/${cpf}`;

      console.log('DEBUG - Proxying GET request to BrazMovel URL (using fetch):', brazmovelApiUrl);
      console.log('DEBUG - Proxy Headers Authorization:', authorizationHeader);
      console.log('DEBUG - Proxy Headers Content-Type:', 'application/json');

      // 4. Faça a requisição GET para a API da Braz Móvel usando a fetch API
      const response = await fetch(brazmovelApiUrl, {
        method: 'GET', // O método HTTP
        headers: {
          'Authorization': authorizationHeader,
          'Content-Type': 'application/json',
        },
      });

      // 5. Verifique se a requisição foi bem-sucedida (status 2xx)
      if (!response.ok) {
        // Se a resposta não for OK, tente ler o corpo do erro da API externa
        const errorData = await response.json().catch(() => ({ message: 'Erro desconhecido da API externa' }));
        console.error('API Error (BrazMovel Proxy - fetch):', response.status, errorData);
        return res.status(response.status).json({
          message: errorData.message || `Erro ao consultar o cliente na Braz Móvel. Status: ${response.status}`,
          details: errorData,
        });
      }

      // 6. Leia o corpo da resposta como JSON
      const data = await response.json();

      // 7. Retorne a resposta da API Braz Móvel para o seu cliente
      console.log('DEBUG - Resposta da API BrazMovel (fetch):', response.status, data);
      return res.status(response.status).json(data);

    } catch (error: any) { // Usamos 'any' aqui para facilitar o tratamento de erros genéricos de fetch
      console.error('Unhandled Proxy Error (fetch):', error);
      // Erros aqui geralmente são de rede ou problemas antes de receber uma resposta HTTP
      return res.status(500).json({ message: 'Ocorreu um erro inesperado no servidor proxy (fetch).' });
    }
  } else {
    // Se o método da requisição não for GET, retorna 405 Method Not Allowed
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}