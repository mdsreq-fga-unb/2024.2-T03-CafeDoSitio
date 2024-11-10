# Backlog do Produto

O backlog de produto é uma lista dinâmica e priorizada que contém todos os requisitos, funcionalidades, melhorias e correções que serão necessárias para o desenvolvimento de um produto. Ele funciona como um guia para a equipe de desenvolvimento, servindo de referência para todas as tarefas que precisam ser realizadas ao longo do ciclo de vida do projeto. Essa lista não é fixa, mas sim atualizável conforme o produto evolui e novas necessidades surgem, garantindo que o time esteja sempre alinhado às prioridades e expectativas do projeto.

Dentro do backlog, um dos principais elementos são as User Stories (US), ou histórias de usuário. As histórias de usuário descrevem, em uma linguagem simples e direta, as necessidades do usuário final de forma que todos da equipe possam compreender o valor de cada funcionalidade. Elas são compostas por três elementos principais: quem é o usuário, o que ele deseja fazer e qual o benefício dessa ação. Esse formato ajuda a manter o foco nas necessidades dos usuários, incentivando a equipe a desenvolver soluções que realmente agreguem valor ao produto.

As User Stories mais complexas ou que englobam várias funcionalidades estão agrupadas em Épicos. Um épico é uma descrição ampla de uma necessidade maior, que será posteriormente dividida em histórias menores e mais detalhadas. Esse processo de desmembramento ajuda a equipe a compreender o escopo do projeto e a definir prioridades para desenvolver partes do produto em blocos mais manejáveis. Épicos podem ser definidos com base nas principais funcionalidades ou objetivos do produto, e cada um pode se desdobrar em várias histórias de usuário que detalham as tarefas específicas.

Por sua vez, os Temas funcionam como agrupamentos de histórias e épicos que compartilham um propósito ou um objetivo comum dentro do produto. Eles são úteis para organizar o backlog em seções que representem áreas ou funcionalidades do sistema, facilitando a priorização de desenvolvimento de acordo com as metas do projeto. Diferente dos épicos, que normalmente possuem um escopo mais restrito, os temas são mais amplos e podem abranger múltiplos épicos e histórias de usuário, fornecendo uma visão geral das grandes áreas do produto.

# Workshop Lean Inception

O Lean Inception é uma metodologia colaborativa criada para alinhar a equipe de desenvolvimento em torno de uma visão clara e um conjunto de funcionalidades essenciais para o desenvolvimento de um produto mínimo viável (MVP). Idealizada por Paulo Caroli, a Lean Inception reúne diferentes stakeholders, como desenvolvedores, designers e representantes de negócios, para discutir e mapear as ideias do projeto de forma concisa e focada. Esse processo se baseia em uma série de workshops e atividades práticas que ajudam a priorizar funcionalidades e validar hipóteses, garantindo que o produto final tenha alto valor para o cliente com o menor desperdício de recursos possível.

O diferencial do Lean Inception é a sua ênfase na colaboração intensa e no alinhamento de objetivos entre todos os envolvidos no projeto. Ao longo da Lean Inception, a equipe passa por atividades que vão desde a definição do propósito do produto até a criação de uma lista de funcionalidades ordenadas por valor e esforço, chegando a um consenso sobre o que deve fazer parte do MVP. Essa abordagem ágil e enxuta reduz riscos e incertezas, permitindo que o produto chegue ao mercado de forma mais rápida e ajustada às reais necessidades dos usuários.

Os resultados do Lean Inception pode ser consultados no board abaixo:

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVLJUh_Eo=/?moveToViewport=-6919,-1897,12879,5798&embedId=144438836556" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

<br>
# Requisitos Elicitados (Inclindo Incrementos)

## 1. TEMAS:

Código | Título | Descrição
------ | ----------------------------------- | ---------
T01    | Comunicação e Interação com Cliente | Agrupam Épicos e User Stories focados nas funcionalidades voltadas para o relacionamento e comunicação entre a Família do Sítio e seus clientes.
T02    | Otimização e Usabilidade | Este tema foca na melhoria da experiência de uso e eficiência do sistema.

## 2. ÉPICOS:

Código | Tema Associado | Título | Descrição
------ | --- | ---------- | ---------------------------
EP01   | T01 | Blog       | Agrupa US's que desenvolvem a parte de blog da solução de software da Família do Sítio.
EP02   | T01 | Visitas    | Agrupa US's que desenvolvem a parte da adminstração e controle de visitas técnicas.
EP03   | T02 | Interface  | Agrupa US's que desenvolvem somente interfaces à solução da família do Sítio.
EP04   | T02 | Automações | Agrupa US's que automatizam processos dentro da solução de software da Família do Sítio.

## 3. FUNCIONALIDADES/USER STORY:

Código | Épico Associado | Título | User Story
------ | ---- | --------------------------------------- | ---------------------------
US01   | EP01 | Criar Blog                              | -x-
US02   | EP01 | Editar Blog                             | -x-
US03   | EP01 | Comentar no Blog                        | -x-
US04   | EP01 | Categorizar Blog                        | -x- 
US05   | EP01 | Filtrar Blogs                           | -x-
US06   | EP01 | Pesquisar Blog                          | -x-
US07   | EP01 | Baixar Blog                             | -x-
US08   | EP01 | Recomendar outros Blogs                 | -x-
US09   | EP01 | Conectar Blog com Produtos da Empresa   | -x-
US10   | EP01 | Compartilhar Blog                       | -x-
US11   | EP02 | Configurar disponibilidade de Visita    | -x-
US12   | EP02 | Realizar Tour Virtual                   | -x-
US13   | EP02 | Emitir certificado de Visita            | -x-
US14   | EP02 | Agendar Visita Presencial               | -x-
US15   | EP03 | Conhecer história da Empresa            | -x-
US16   | EP03 | Conhecer produtos da Empresa            | -x-
US17   | EP03 | Conhecer Ações Sociais da Empresa       | -x-
US18   | EP03 | Consultar contatos da Empresa           | -x-
US19   | EP03 | Consultar vagas de empresa da Empresa   | -x-
US20   | EP03 | Realizar SAC                            | -x- 
US21   | EP03 | Consultar detalhes do E-Commerce        | -x-
US22   | EP04 | Notificar setores Ideais                | -x-
US22   | EP04 | Localizar Produtos                      | -x-
US22   | EP04 | Lembrar usuários de Visita              | -x-
US22   | EP04 | Conversar com Chatbot                   | -x-

# Produto Mínimo Viável

Decidido durante a produção do Workshop Lean Inception, foi estabelecido o MVP do produto de software da Família do Sítio e a sua versão de incremento baseando-se na definição de 3 categorias:

- Esforço de Execução;
- Valor Agregado;
- Impacto na experiência do Usuário:

Limitando-se os nível entre 1 até 3 para cada categoria, foi possível elencar as funcionalidades de maior valor agregado e impacto na experiência do usuário para as primeiras produções feita pelo time. Dessa forma, as funcionalidades **que estão MVP**, são:

Código | Título                                | Nível de Esforço           | Nível de Valor Agregado           | Nível de UX
------ | ------------------------------------- | -------------------------  | --------------------------------- | -----------
US01   | Criar Blog                            | Nível 1                    | Nível 3                           | Nível 3 
US02   | Editar Blog                           | Nível 1                    | Nível 2                           | Nível 1
US04   | Categorizar Blog                      | Nível 2                    | Nível 3                           | Nível 3
US05   | Filtrar Blogs                         | Nível 1                    | Nível 1                           | Nível 2
US06   | Pesquisar Blog                        | Nível 2                    | Nível 2                           | Nível 3
US08   | Recomendar outros Blogs               | Nível 1                    | Nível 3                           | Nível 2
US11   | Configurar disponibilidade de Visita  | Nível 2                    | Nível 2                           | Nível 3
US13   | Emitir certificado de Visita          | Nível 1                    | Nível 2                           | Nível 3
US14   | Agendar Visita Presencial             | Nível 2                    | Nível 3                           | Nível 3
US15   | Conhecer história da Empresa          | Nível 1                    | Nível 3                           | Nível 2         
US16   | Conhecer produtos da Empresa          | Nível 1                    | Nível 3                           | Nível 3
US17   | Conhecer Ações Sociais da Empresa     | Nível 1                    | Nível 3                           | Nível 1
US18   | Consultar contatos da Empresa         | Nível 1                    | Nível 3                           | Nível 3
US19   | Consultar vagas de empresa da Empresa | Nível 1                    | Nível 3                           | Nível 2
US20   | Realizar SAC                          | Nível 2                    | Nível 3                           | Nível 3
US21   | Consultar detalhes do E-Commerce      | Nível 1                    | Nível 3                           | Nível 3
US22   | Notificar setores Ideais              | Nível 2                    | Nível 3                           | Nível 2
US23   | Localizar Produtos                    | Nível 3                    | Nível 3                           | Nível 3

Em contrapartida, as funcionalidades que foram **consideradas Incremento** são:

Código | Título                                | Nível de Esforço           | Nível de Valor Agregado           | Nível de UX
------ | ------------------------------------- | -------------------------  | --------------------------------- | -----------
US24   | Comentar no Blog                      | Nível 2                    | Nível 1                           | Nível 1
US25   | Baixar Blog                           | Nível 2                    | Nível 1                           | Nível 2
US26   | Conectar Blog com Produtos da Empresa | Nível 1                    | Nível 2                           | Nível 2
US27   | Compartilhar Blog                     | Nível 1                    | Nível 2                           | Nível 2
US28   | Realizar Tour Virtual                 | Nível 3                    | Nível 2                           | Nível 3
US29   | Lembrar usuários de Visita            | Nível 2                    | Nível 1                           | Nível 2
US30   | Conversar com Chatbot                 | Nível 2                    | Nível 1                           | Nível 2

# Referências Bibliográficas

> PRESSMAN, Roger S. Engenharia de Software: Uma Abordagem Profissional. 7ª ed. São Paulo: McGraw Hill, 2011.

> RUBIN, Kenneth S. Scrum Essencial: Um Guia Prático para o Processo Ágil Mais Popular. São Paulo: Alta Books, 2014.

> SCHWABER, Ken; SUTHERLAND, Jeff. Guia do Scrum: O Guia Definitivo para o Scrum, as Regras do Jogo. Scrum.org, 2020.

> CAROLI, Paulo. Lean Inception: Como Alinhar Pessoas e Construir o Produto Certo. São Paulo: Caroli.org, 2018.

> RIES, Eric. A Startup Enxuta: Como os Empreendedores Atuais Utilizam a Inovação Contínua para Criar Empresas Extremamente Bem-Sucedidas. Rio de Janeiro: Alta Books, 2012.

---
## Histórico de Versão: 
| Data | Versão | Descrição | Autor | Revisores |
|---- | ------ | --------- | ----- | --------- |
| 08/11/24 | 1.0 | Criação do documento | Daniel Rodrigues | Arthur Miranda |
| 10/11/24 | 1.1 | Correções dos Códigos da US's | Daniel Rodrigues | Arthur Miranda |
