# 9. Backlog do Produto

## 9.1 - Backlog Geral

O backlog de produto é uma lista dinâmica e priorizada que contém todos os requisitos, funcionalidades, melhorias e correções que serão necessárias para o desenvolvimento de um produto. Ele funciona como um guia para a equipe de desenvolvimento, servindo de referência para todas as tarefas que precisam ser realizadas ao longo do ciclo de vida do projeto. Essa lista não é fixa, mas sim atualizável conforme o produto evolui e novas necessidades surgem, garantindo que o time esteja sempre alinhado às prioridades e expectativas do projeto.

Essa configuração da logística de escrita das histórias de usuários se justifica pelo fato do processo de engenharia selecionada pela equipe: ScrumXP, conforme descrito na seção de [Estratégias de Engenharia de Software](./3-estrategiasEngSoftware.md). Em resumo, os Requisitos Funcionais são detalhados com mais profundidade durante a fase de Sprint Planning, momento em que as histórias de usuário são escritas no formato _"Eu como (agente), gostaria de (ação), para que (agregação de valor)"_.

### 9.1.1 - Relacionado aos Requisitos Funcionais:
Código | User Story
------ | ----------------------------------------------------
US01   | Eu como usuário devo ser capaz desenvolver um conteúdo, com permissão à formatação de texto avançados e inserição imagens para que seja publicado como blog no site da Família do Sítio.
US02   | _À DESENVOLVER_
US03   | **INCREMENTO (User Story não será escrito)**
US04   | _À DESENVOLVER_
US05   | _À DESENVOLVER_
US06   | _À DESENVOLVER_
US07   | **INCREMENTO (User Story não será escrito)**
US08   | _À DESENVOLVER_
US09   | **INCREMENTO (User Story não será escrito)**
US10   | **INCREMENTO (User Story não será escrito)**
US11   | Eu como usuário gostaria de criar uma disponilibidade de visita técnica em um calendário no sistema, para que o público externo, como consumidores, possam selecionar este dia para agendar sua visita à empresa.
US12   | **INCREMENTO (User Story não será escrito)**
US13   | **INCREMENTO (User Story não será escrito)**
US14   | Eu como usuário gostaria de cadastrar meu agendamento em um dos dias disponíveis de visitação, para realizar a visita técnica de forma presencial.
US15   | Eu como usuário, devo ser capaz de fazer uma reclamação, um elogio, uma dúvida, sugestão ou parcerias para que os colaboradores da Família do Sítio esteja ciente e eu receba um retorno sobre minha solicitação.
US16   | _À DESENVOLVER_
US17   | **INCREMENTO (User Story não será escrito)**
US18   | Eu como Funcionário da Família do Sítio, devo ser capaz de fazer login com meu email empresarial e senha, para que eu possa acessar as funções da Central de Administração.
US19   | Eu como Funcionário da Família do Sítio, devo ser capaz de criar ou apagar o acesso de novas contas no sistema, para que eu possa controlar o acesso à central administrativa.

### 9.1.1 - Relacionado aos Requisitos Não Funcionais (Somente de Usabibilidade):
Código | Título do Requisito de Usabilidade (Relacionada à implementação de uma interface)
------ | ----------------------------------------------------
RQNF01 | O sistema deve permitir que os usuários localizem facilmente a seção que apresenta a história da empresa, com navegação intuitiva e conteúdo disposto de forma clara e acessível.
RQNF02 | A interface deve exibir os produtos da empresa de forma visualmente organizada e categorizada, facilitando a identificação e compreensão de cada item pelo usuário.
RQNF03 | As informações sobre ações sociais da empresa devem estar disponíveis de maneira acessível e atrativa, garantindo clareza na comunicação e fácil navegação para o usuário.
RQNF04 | Os contatos da empresa devem ser apresentados em um formato padronizado e de fácil compreensão, com suporte a links clicáveis para e-mail, telefone e redes sociais.
RQNF05 | As vagas de emprego da empresa devem ser exibidas de forma clara, com uma organização que facilitem a busca por oportunidades compatíveis com o interesse do usuário, instruindo o usuário como prosseguir com o processo no site terceiro empregare.
RQNF06 | As instruções do E-commerce devem ser descritas de maneira clara, com linguagem simples e objetiva, utilizando elementos visuais, como ícones e guias passo a passo, para melhorar a compreensão.

## 9.2 - Priorização do Backlog Geral

Para a construção da priorização, a equipe utilizou uma das fases do workshop Lean Inception para auxiliar na atividade: **Revisão Técnica e de Negócio**. Nessa fase, todas as funcinalidades são classificadas em níveis de 1 à 3, onde:

- **1:** Classifica a funcinalidade como _Baixo_ no tópico de revisão de referência;
- **2:** Classifica a funcinalidade como _Médio_ no tópico de revisão de referência;
- **3:** Classifica a funcinalidade como _Alta_ no tópico de revisão de referência;

Em outras palavras, caso o nível de esforço seja nível 1, por exemplo, isto significa que aquela funcionalidade possui _Baixo nível de esforço_, se for nível 2, possui _Médio nível de esforço_. Em contrapartida, os 3 tópicos de revisões tangem:

- **Nível de Esforço:** Indica a quantidade de trabalho e dedicação necessária para desenvolver e finalizar a funcionalidade, considerando o tempo e os recursos da equipe. Esse tópico avalia o esforço total, mas não necessariamente a dificuldade técnica. Cada nível indica:
    - **1:** Exige baixo esforço, sendo uma funcionalidade simples de implementar, com impacto mínimo no tempo de desenvolvimento e sem grande consumo de recursos.
    - **2:** Exige esforço moderado, demandando mais tempo e dedicação, mas ainda sendo possível dentro do escopo regular do time.
    - **3:** Exige alto esforço, representando uma funcionalidade que pode consumir grande parte dos recursos e do tempo disponíveis, exigindo maior planejamento e execução detalhada.

<br>

- **Nível de Valor Agregado:** Indica o quanto a funcionalidade agrega valor ao produto ou serviço final, considerando os benefícios que trará para os usuários ou para o alcance dos objetivos estratégicos do negócio. Cada nível indica:
    - **1:** Agrega baixo valor ao produto, sendo um requisito que não gera grande impacto para os usuários ou para os objetivos estratégicos.
    - **2:** Agrega valor médio ao produto, contribuindo moderadamente para a satisfação dos usuários ou objetivos do negócio.
    - **3:** Agrega alto valor, sendo essencial para o sucesso do produto e trazendo impacto significativo para os usuários ou para o negócio.

Para calcular a **prioridade** das funcionalidades com base nos três níveis de avaliação (Esforço, Valor Agregado e UX), iremos utilizar uma fórmula que combine os pesos de cada critério. O objetivo é priorizar funcionalidades que agreguem mais valor e ofereçam uma boa experiência ao usuário, mas com menor esforço.

**Prioridade = (4 * Valor_Agregado) - Esforço**

- **Valor Agregado** têm peso **2**, pois são mais importantes para o impacto do produto.
- **Esforço** é subtraído, pois funcionalidades com menor esforço são mais prioritárias.

Os requisitos em sua devida priorização é:

Código | Nível de Valor Agregado | Nível de Esforço | Prioridade
------ | ----------------------- | ---------------- | ----------
US01   | 3                       | 1                | 11
US08   | 3                       | 1                | 11
US04   | 3                       | 2                | 10
US14   | 3                       | 2                | 10
US15   | 3                       | 2                | 10
US19   | 3                       | 2                | 10
US12   | 3                       | 3                | 9
US16   | 3                       | 3                | 9
US02   | 2                       | 1                | 7
US06   | 2                       | 2                | 6
US11   | 2                       | 2                | 6
US13   | 2                       | 2                | 6
US18   | 2                       | 2                | 6
US10   | 2                       | 3                | 5
US03   | 1                       | 1                | 3
US05   | 1                       | 1                | 3
US07   | 1                       | 2                | 2
US09   | 1                       | 2                | 2
US17   | 1                       | 2                | 2
RQNF01 | 3                       | 1                | 11
RQNF02 | 3                       | 1                | 11
RQNF03 | 3                       | 1                | 11
RQNF04 | 3                       | 1                | 11
RQNF05 | 3                       | 1                | 11
RQNF06 | 3                       | 1                | 11

<!-- US03   | Nível 2                    | Nível 1                           | Nível 2     |3 -->
<!-- US12   | Nível 3                    | Nível 2                           | Nível 3     |7 -->
<!-- US13   | Nível 1                    | Nível 2                           | Nível 3     |9 -->
<!-- US09   | Nível 1                    | Nível 2                           | Nível 2     |7 -->
<!-- US10   | Nível 1                    | Nível 2                           | Nível 2     |7 -->


## 9.3 - MVP

Decidido durante a produção do Workshop Lean Inception, foi estabelecido o MVP do produto de software da Família do Sítio e a sua versão de incremento baseando-se na definição de 3 categorias, como dito na seção anterior:

- Esforço de Execução;
- Valor Agregado;
- Impacto na experiência do Usuário:

Com esta técnica, foi possível elencar as funcionalidades de maior valor agregado e impacto na experiência do usuário para as primeiras produções feita pelo time. Dessa forma, as funcionalidades **que estão em MVP**, são:

### 9.3.1 - Requisitos Funcionais

- **US01:** Criar Post no Blog;
- **US02:** Editar Post no Blog;
- **US04:** Categorizar Post no Blog;
- **US05:** Fitrar Posts no Blog;
- **US06:** Pesquisar Posts no Blog;
- **US08:** Recomendar outros Posts no Blog;
- **US11:** Configurar disponibilidade de Visita Técnica à Fábrica;
- **US14:** Agendar visita técnica à Fábrica;
- **US15:** Enviar mensagem à empresa pela Central de Atendimento ao Cliente;
- **US16:** Localizar por Produtos da Família do Sítio;
- **US18:** Fazer login na Central Administrativa;
- **US19:** Gerenciar acessos à Central Administrativa.

### 9.3.2 - Requisitos não Funcionais de Usabilidade (Relacionadas à implementação de uma Interface)

- **RQNF01:** Visualizar história da Empresa;
- **RQNF02:** Visualizar produtos da Empresa;
- **RQNF03:** Visualizar ações sociais da Empresa;
- **RQNF04:** Visualizar contatos da empresa;
- **RQNF05:** Visualizar vagas de emprego da Empresa;
- **RQNF06:** Visualizar detalhes do E-Commerce.


# Referências Bibliográficas:

> PRESSMAN, Roger S. Engenharia de Software: Uma Abordagem Profissional. 7ª ed. São Paulo: McGraw Hill, 2011.

> RUBIN, Kenneth S. Scrum Essencial: Um Guia Prático para o Processo Ágil Mais Popular. São Paulo: Alta Books, 2014.

## Histórico de Versão:
| Data | Versão | Descrição | Autor | Revisores |
|---- | ------ | --------- | ----- | --------- |
| 03/12/24 | 1.0 | Criação do documento | Daniel Rodrigues | Arthur Sousa
| 06/12/24 | 1.1 | Desenvolvimento de novos tópicos | Daniel Rodrigues | Arthur Sousa
| 09/12/24 | 1.2 | Corrigindo tópicos e adicinando novos itens do backlog | Daniel Rodrigues | Arthur Sousa
| 09/12/24 | 1.3 | Incluindo o calculo de priorização | Manuella, Arthur, João | Daniel
| 12/12/24 | 2.0 | Novos requisitos e reestruturação do backlog | Daniel Rodrigues | Arthur Sousa
