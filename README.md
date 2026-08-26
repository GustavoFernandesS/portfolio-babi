# Portfólio — Barbara Paschoalini

Site de apresentação profissional, posicionado para vagas de **RH e Gestão de Pessoas**.
React + TypeScript + Vite, sem dependências de UI: todo o design é CSS próprio.

## Rodar

```bash
npm install
npm run dev
```

`npm run build` gera a versão de produção em `dist/`. `npm run preview` serve essa versão.

## O que precisa ser preenchido

O site marca em **rosa tracejado** tudo que ainda é placeholder. Nada disso deve ir ao ar.

| Onde | O quê |
| --- | --- |
| `src/site.ts` | E-mail, link do currículo em PDF |
| `src/content/pt.ts` | Todo o texto em português (procure por `PREENCHER`) |
| `src/content/en.ts` | O mesmo texto em inglês (procure por `FILL IN`) |

Antes de mexer em qualquer texto, leia [TONE.md](TONE.md): é o guia de voz do site,
derivado das publicações reais dela. Ele diz o que a voz faz, o que ela nunca faz e
quais palavras estão banidas.

Para achar tudo que falta de uma vez:

```bash
npm run pendencias
```

### Prioridade de preenchimento

1. **`src/site.ts` → `email`** — sem ele, os botões caem no LinkedIn.
2. **`timeline.entries`** — datas de entrada na Consultoria RH Junior e na graduação.
3. **`cases.items`** — os três projetos. Esta é a seção que faz a diferença numa
   entrevista: cada card tem **Contexto → O que eu fiz → Resultado**. Coloque número
   no resultado sempre que houver (candidatos triados, cargos descritos, taxa de
   resposta, dias de fechamento de vaga). É isso que mostra entrega, não esforço.
4. **`skills.groups`** — confirmar a lista de ferramentas.

### Currículo em PDF

Coloque o arquivo em `public/` e aponte para ele:

```ts
// src/site.ts
resumePdf: "/curriculo-barbara-paschoalini.pdf",
```

Enquanto estiver vazio, o link de download simplesmente não aparece.

## Imagem de compartilhamento (LinkedIn, WhatsApp)

`public/og.png` é gerada a partir de `tools/og.html`. Depois de editar o HTML:

```bash
npm run og
```

O comando usa o Chrome instalado na máquina. Se o caminho do Chrome for diferente,
ajuste o script `og` no `package.json`.

## Estrutura

```
src/
  site.ts              dados reais (e-mail, LinkedIn, currículo)
  content/             todo o texto, em pt.ts e en.ts, tipado por types.ts
  components/          um .tsx + um .css por bloco da página
  hooks/               idioma (com persistência) e reveal no scroll
  styles/global.css    tokens de cor, tipografia e espaçamento
tools/og.html          fonte da imagem de compartilhamento
```

Trocar de idioma não recarrega a página: o botão PT/EN troca o dicionário, atualiza
`<html lang>`, o `<title>` e a meta description, e guarda a escolha no navegador.

## Design

- **Conceito:** a página é uma *ficha de perfil profissional*. O elemento-assinatura
  é o gráfico de perfil bipolar do topo, desenhado como uma folha de avaliação
  psicológica — o instrumento da área dela, não um gráfico genérico.
- **Cores:** fundo `#E9EBF2`, tinta `#14161F`, índigo `#2A31A8` (o traço do
  instrumento), rosa `#B23A63` (marcações e pendências).
- **Tipografia:** Bricolage Grotesque (títulos), Newsreader (texto corrido),
  IBM Plex Mono (rótulos e dados).
- Responsivo, foco de teclado visível, `prefers-reduced-motion` respeitado e
  âncoras com folga para o cabeçalho fixo.

## Publicar

O build é estático. Qualquer host serve:

```bash
npm run build
npx vercel deploy --prod    # ou Netlify, GitHub Pages, Cloudflare Pages
```

Nenhuma variável de ambiente é necessária.
