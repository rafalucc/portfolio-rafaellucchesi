# Manifesto V.O.A.

Lâmina única do manifesto **V.O.A. — Volte-se, Observe-se e Aprenda**, de Rafael Lucchesi (R.7).
Site estático: HTML + CSS, sem dependências nem build.

## Estrutura

```
index.html                 página
assets/css/style.css       estilos (tokens de cor, tipografia e espaçamento no :root)
assets/fonts/              RL7 Manuscrita (woff para o site, ttf para uso geral)
assets/img/                símbolos e ilustrações em SVG; moldura e textura do veludo em PNG
```

## Publicar

- **GitHub Pages:** suba a pasta na raiz do repositório (ou em `/docs`) e ative Pages em
  Settings → Pages, apontando para a branch e a pasta.
- **Outra hospedagem:** envie a pasta inteira mantendo a estrutura; a página abre em `index.html`.

Os caminhos são relativos, então a pasta também funciona dentro de um subdiretório
(ex.: `rafaellucchesi.com/manifesto/`).

## Editar

- Textos: direto no `index.html`.
- Cores: variáveis `--veludo-*` e `--amarelo*` no topo de `assets/css/style.css`.
- A fonte RL7 Manuscrita tem apenas maiúsculas (minúsculas usam as mesmas letras);
  © e · aparecem na fonte de reserva.
