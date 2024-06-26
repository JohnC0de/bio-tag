# Bio Tag

[Bio Tag já está disponível para uso!](https://bio-tag.vercel.app/)

Bio Tag é um projeto desenvolvido para ajudar biólogos que trabalham com taxidermia a gerar etiquetas em PDF no formato A4, facilitando a impressão, recorte e uso das etiquetas. A motivação do projeto é automatizar e simplificar o processo manual e exaustivo de criar etiquetas usando programas como o Word. Com o Bio-Tag, é possível criar designs de etiquetas mais padronizados com facilidade, realizar edições em massa, importar e exportar dados em CSV, salvar as etiquetas na nuvem, visualizar etiquetas de forma isolada e oferecer uma usabilidade aprimorada para o usuário.

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **Next.js:** Framework Full-Stack React.
- **Drizzle:** ORM para mapeamento de objetos-relacionais.
- **Turso (LIBSQL):** Banco de dados utilizado no projeto.
- **shadcn/ui:** Biblioteca de componentes de interface.

## Como Usar

### Instalação

1. Clone o repositório `git clone https://github.com/JohnC0de/bio-tag`
2. Instale as dependências com seu gerenciador de pacotes preferido: `bun i`
3. Configure as variáveis de ambiente no arquivo `.env` com as credenciais do seu banco de dados [Turso](https://turso.tech/)
4. Execute a aplicação: `bun dev`

### Gerar Etiquetas

1. Acesse a aplicação em `http://localhost:3000/`.
2. Preencha as informações necessárias para a etiqueta.
3. Gere o PDF com as etiquetas no formato A4.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões ou encontrar problemas, por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
