# Nexo — página de vendas

Página estática modular, sem banco de dados ou dependências de instalação.

## Personalização
- `dist/config.js`: marca, valor, WhatsApp (55 + DDD + número, somente dígitos), Instagram e mensagem inicial.
- `dist/components/`: textos e estrutura de cada seção.
- `dist/styles.css`: cores, espaçamentos e comportamento responsivo.
- `dist/hero.png`: notebook e celular com o mesmo projeto conceitual.

WhatsApp e Instagram estão vazios intencionalmente. Os botões mostram um aviso temporário até que sejam preenchidos. Os depoimentos são fictícios, identificados na página e no código, e devem ser substituídos por depoimentos autorizados antes da divulgação. O portfólio apresenta conceitos, sem alegar clientes reais.

Sirva `dist` com qualquer servidor HTTP. O site usa módulos JavaScript; abrir o HTML diretamente pelo sistema de arquivos não é suficiente.
