# DesenvolvimentoMobile
Desenvolvimento Mobile usando React Native

## Projeto

Este projeto usa Expo com JavaScript, `FlatList` para o feed principal e os arquivos de `reutilizaveis` como base visual.

## Como rodar

1. Instale as dependências com `npm install`.
2. Inicie o app com `npm run start`.
3. Se quiser abrir direto no celular ou emulador, use `npm run android` ou `npm run ios`.

## Acesso fora da rede local

Use `npm run start:tunnel` para abrir o Expo com túnel, o que facilita acessar o app em outra rede.

Se você quiser uma build instalada no aparelho, use EAS:

1. Crie uma build de desenvolvimento com `npm run eas:build:dev`.
2. Instale o app gerado no celular.
3. Inicie o Metro com `npm run start:tunnel` para conectar o development client.

## Estrutura

- `App.js`: tela principal com o `FlatList`.
- `src/components`: cartões do feed e barra inferior.
- `src/assets`: mapeamento dos SVGs reaproveitados.
- `src/data`: dados que alimentam a lista.
