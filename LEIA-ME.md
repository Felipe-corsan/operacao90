# Operação 90 — versão standalone (fora do Claude)

App próprio, com link só seu, funcionando no celular como um app de verdade.
Não precisa saber programar — só seguir o passo a passo.

## O que tem nessa pasta

- `public/index.html` — o app inteiro (peso, alimentação, treino, coach de IA)
- `api/claude.js` — a "ponte" segura que fala com a IA sem expor sua chave
- `vercel.json` — configuração

## Passo a passo (uns 10-15 minutos, só na primeira vez)

### 1. Pegue sua chave de API
1. Entre em **console.anthropic.com** com sua conta
2. No menu, vá em **API Keys**
3. Clique em **Create Key**, dê um nome (ex: "operacao90") e copie a chave (começa com `sk-ant-...`)
4. Guarde essa chave em algum lugar seguro por enquanto — você vai colar ela daqui a pouco

### 2. Crie uma conta no Vercel (gratuito)
1. Vá em **vercel.com** e crie conta (dá pra usar login do GitHub, Google, etc)

### 3. Suba esse projeto
A forma mais simples sem usar terminal:
1. Crie uma conta no **github.com** (se ainda não tiver)
2. Crie um repositório novo (pode ser privado) e faça upload de todos os arquivos dessa pasta (`public/index.html`, `api/claude.js`, `vercel.json`) mantendo essa mesma estrutura de pastas
3. No Vercel, clique em **Add New → Project**, conecte sua conta do GitHub e escolha esse repositório
4. Antes de clicar em "Deploy", vá em **Environment Variables** e adicione:
   - Nome: `ANTHROPIC_API_KEY`
   - Valor: cole a chave que você copiou no passo 1
5. Clique em **Deploy**

Em menos de um minuto o Vercel te dá um link tipo `operacao90-felipe.vercel.app` — esse é o seu app, com seu link próprio.

### 4. Adicione na tela inicial do celular
1. Abra o link no navegador do celular (Chrome ou Safari)
2. Toque no menu (⋮ ou ícone de compartilhar)
3. Escolha **"Adicionar à tela inicial"**

Pronto — vira um ícone igual a um app, abre em tela cheia, sem barra de navegador.

## Importante sobre os dados

Os dados (peso, refeições, treinos) ficam salvos **só no navegador desse celular/computador** (chamado de `localStorage`). Isso significa:
- Não precisa de login, é automático
- Mas **não sincroniza** entre celular e computador — são dois "bancos" separados
- Se limpar os dados do navegador ou trocar de celular, perde o histórico

Se no futuro você quiser sincronizar entre aparelhos, dá pra evoluir isso (ex: usando um banco de dados simples tipo Supabase, gratuito também) — só avisar que ajudo a configurar.

## Sobre custos

Você só paga pela API da Anthropic (os créditos do Claude Console), não pelo Vercel — o plano gratuito do Vercel cobre esse uso tranquilamente. Os $4 que você tem no console cobrem a Operação 90 inteira com folga, conforme calculamos antes.

## Se algo der errado

- **"ANTHROPIC_API_KEY não configurada"**: revisa o passo 3.4, a variável de ambiente precisa estar exatamente com esse nome
- **App não atualiza depois de mudar algo**: no Vercel, vá em Deployments e force um novo deploy
- Qualquer erro, pode colar a mensagem aqui no chat que eu te ajudo a resolver
