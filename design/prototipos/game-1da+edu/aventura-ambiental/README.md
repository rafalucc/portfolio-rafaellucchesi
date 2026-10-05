# Aventura Ambiental · jogo educativo em 3D

Releitura digital (2026) do jogo de tabuleiro "Aventura Ambiental", criado em 2015 pelo estúdio Umdeia, sob direção de Rafael Lucchesi, para o programa de educação ambiental da Anglo American com a Educaminas.

O jogo é estático: não precisa de servidor, banco de dados nem build. Basta publicar a pasta.

## Estrutura

```
aventura-ambiental/
├── index.html                 Página do jogo
├── css/style.css              Estilos da interface (HUD, cards, placar)
├── js/game.js                 Toda a lógica e a cena 3D
├── js/vendor/                 Pasta para o three.js local (opcional)
└── assets/
    ├── img/parceiros-anglo-american-educaminas.png
    └── ods/ods-*.png          Ícones dos ODS usados nos blocos
```

## Como publicar no portfólio

1. Copie a pasta inteira para o repositório, por exemplo em `design/trabalhos/anglo-american/jogo/`.
2. Faça o deploy normalmente. O jogo fica disponível em `rafaellucchesi.com/design/trabalhos/anglo-american/jogo/`.

## three.js (opcional, recomendado)

O jogo usa o three.js na versão **r128**. O `index.html` tenta carregar primeiro uma cópia local e, se ela não existir, usa o CDN do cdnjs automaticamente.

Para não depender do CDN, baixe o arquivo abaixo e salve como `js/vendor/three.min.js`:

```
https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js
```

Use exatamente a r128: versões mais novas mudaram APIs usadas no jogo.

## Testar localmente

Abra por um servidor local, e não com duplo clique no arquivo, porque os navegadores bloqueiam o carregamento das texturas via `file://`.

```bash
cd aventura-ambiental
python3 -m http.server 8000
# abra http://localhost:8000
```

## Incorporar na página do case

```html
<iframe src="/design/trabalhos/anglo-american/jogo/"
  title="Aventura Ambiental, jogo educativo em 3D"
  loading="lazy" allow="fullscreen"
  style="width:100%; aspect-ratio:16/10; border:0; border-radius:16px;"></iframe>

<a href="/design/trabalhos/anglo-american/jogo/">Jogar em tela cheia</a>
```

No celular, prefira o link para tela cheia: o iframe fica pequeno para jogar.

## Modo teste

Para testar o final do jogo, abra `js/game.js` e troque:

```js
var TEST_MODE = false;
```

por `true`. A partida passa a começar na casa 59, com 4 fases concluídas e 60 pontos. Volte para `false` antes de publicar.

## Regras implementadas

- Uma pergunta educativa a cada jogada, com o tema do trecho do tabuleiro (água, floresta, queimadas, lixo e bichos da mata).
- 10 pontos por ação concluída. Com 70 pontos ou mais, o final mostra o livro "Brincando e Aprendendo com a Educação Ambiental" e orienta a procurar a instrutora da exposição.
- 5 atividades ecológicas nas casas 12, 23, 35, 47 e na estrela; as 4 primeiras têm uma pergunta extra ligada a um ODS.
- Ações de correção após desmatamento (plantar uma muda) e queimada (ligar 193, Bombeiros).
- Português e inglês, com suporte a movimento reduzido e navegação por teclado.

## Direitos de uso

- Marcas Anglo American e Educaminas: confirmar autorização antes de publicar.
- Ícones dos ODS: seguir as diretrizes de uso da ONU. Os ODS 8 e 10 usam placas provisórias; substitua pelos ícones oficiais quando tiver os arquivos.
