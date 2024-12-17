# 7. Requisitos de Software

## 7.1 Workshop Lean Inception

# Workshop Lean Inception

O Lean Inception é uma metodologia colaborativa criada para alinhar a equipe de desenvolvimento em torno de uma visão clara e um conjunto de funcionalidades essenciais para o desenvolvimento de um produto mínimo viável (MVP). Idealizada por Paulo Caroli, a Lean Inception reúne diferentes stakeholders, como desenvolvedores, designers e representantes de negócios, para discutir e mapear as ideias do projeto de forma concisa e focada. Esse processo se baseia em uma série de workshops e atividades práticas que ajudam a priorizar funcionalidades e validar hipóteses, garantindo que o produto final tenha alto valor para o cliente com o menor desperdício de recursos possível.

O diferencial do Lean Inception é a sua ênfase na colaboração intensa e no alinhamento de objetivos entre todos os envolvidos no projeto. Ao longo da Lean Inception, a equipe passa por atividades que vão desde a definição do propósito do produto até a criação de uma lista de funcionalidades ordenadas por valor e esforço, chegando a um consenso sobre o que deve fazer parte do MVP. Essa abordagem ágil e enxuta reduz riscos e incertezas, permitindo que o produto chegue ao mercado de forma mais rápida e ajustada às reais necessidades dos usuários.

Os resultados do Lean Inception pode ser consultados no board abaixo:

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVLJUh_Eo=/?moveToViewport=-6919,-1897,12879,5798&embedId=144438836556" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

<br>

## Requisitos Funcionais

Os requisitos funcionais descrevem as funcionalidades específicas que o sistema deve oferecer para atender às necessidades dos usuários e alcançar os objetivos do projeto. Eles indicam o que o sistema deve fazer, detalhando os serviços, ações ou processos que ele deve executar. Essas especificações são diretamente relacionadas ao comportamento do sistema em interação com os usuários ou outros sistemas.

Os requisitos funcionais do sistema da Família do Sítio são:

**US01 -** Criar Post no blog <br>
**US02 -** Editar Post no blog <br>
**US03 -** Comentar no Post do Blog <br>
**US04 -** Categorizar Post no Blog <br>
**US05 -** Filtrar por Posts no Blog <br>
**US06 -** Pesquisar por Posts no blog <br>
**US07 -** Baixar Post do blog <br>
**US08 -** Recomendar outros Posts do Blog <br>
**US09 -** Conectar Posts do blog com os Produtos da Empresa <br>
**US10 -** Compartilhar Post do blog <br>
**US11 -** Configurar disponibilidade de Visita Técnica à Fábrica<br>
**US12 -** Realizar Visita Técnica Virtual à Fábrica<br>
**US13 -** Emitir certificado de presença da Visita Técnica <br>
**US14 -** Agendar Visita Técnica à Fábrica <br>
**US15 -** Enviar mensagem à empresa pela Central de Atendimento ao Cliente <br>
**US16 -** Localizar por Produtos da Família do Sítio <br>
**US17 -** Notificar usuários de Visita Técnica marcada<br>
**US18 -** Fazer login na Central Administrativa <br>
**US19 -** Gerenciar contas com acesso à Central de Administração

## Requisitos Não Funcionais

Os requisitos não funcionais foram organizados com base no modelo URPS+, que classifica esses requisitos em categorias que abrangem Usabilidade, Confiabilidade, Desempenho, Suportabilidade e outras características relevantes. Esse sistema facilita a análise e priorização das características que impactam na qualidade geral do software, além de assegurar que ele atenda aos padrões esperados pelo cliente e pelos usuários.

### Usabilidade

#### Necessários de estar no backlog:
**RNF01 -** O sistema deve permitir que os usuários localizem facilmente a seção que apresenta a história da empresa, com navegação intuitiva e conteúdo disposto de forma clara e acessível. <br>
**RNF02 -** A interface deve exibir os produtos da empresa de forma visualmente organizada e categorizada, facilitando a identificação e compreensão de cada item pelo usuário. <br>
**RNF03 -** As informações sobre ações sociais da empresa devem estar disponíveis de maneira acessível e atrativa, garantindo clareza na comunicação e fácil navegação para o usuário. <br>
**RNF04 -** Os contatos da empresa devem ser apresentados em um formato padronizado e de fácil compreensão, com suporte a links clicáveis para e-mail, telefone e redes sociais. <br>
**RNF05 -** As vagas de emprego da empresa devem ser exibidas de forma clara, com uma organização que facilitem a busca por oportunidades compatíveis com o interesse do usuário, instruindo o usuário como prosseguir com o processo no site terceiro empregare. <br>
**RNF06 -** As instruções do E-commerce devem ser descritas de maneira clara, com linguagem simples e objetiva, utilizando elementos visuais, como ícones e guias passo a passo, para melhorar a compreensão. <br>

#### Apenas referências para a produção:
**RNF07 -** A interface do usuário deve ser intuitiva e acessível para pessoas com diferentes níveis de habilidade técnica. <br>
**RNF08 -** O tempo de aprendizado para novos administradores não deve exceder 2 horas com um tutorial básico. <br>
**RNF09 -** As cores utilizadas no software não podem estar fora da paleta de cores da Família do Sítio, com exceção da cor Preta e Branca. <br>
**RNF10 -** A tipografia utilizada no software deverá estar dentro das estabelecidas no manual de marca da Família do Sítio: Myriad Pro ou Impact. 

### Confiabilidade

**RNF11 -** O sistema deve estar disponível pelo menos 99,5% do tempo por mês (uptime). <br>
**RNF12 -** Em caso de falhas no servidor, o sistema deve se recuperar dentro de 10 minutos.

### Desempenho

**RNF13 -** O sistema deve suportar pelo menos 1000 acessos simultâneos sem degradação perceptível de desempenho. <br>
**RNF14 -** Consultas no feed de blogs devem ser respondidas em até 1 segundo.

### Suportabilidade

**RNF15 -** O sistema deve ser compatível com as últimas duas versões dos navegadores Chrome, Firefox, Edge e Safari. <br>

# Bibliografia:

> ISO/IEC 25010:2011. Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models. International Organization for Standardization, 2011.

> SOMMERVILLE, Ian. Engenharia de Software. 10ª ed. São Paulo: Pearson, 2011.

> PRESSMAN, Roger S. Engenharia de Software: Uma Abordagem Profissional. 8ª ed. Porto Alegre: AMGH, 2016.

---
## Histórico de Versão
Data     | Versão | Descrição           | Autor    | Revisores 
-------- | ------ | ------------------- | -------- | ---------
09/12/24 | 1.0 | Adição das tabelas de requisitos | Manuella Valadares | Ana Carolina
10/12/24 | 1.1 | Redesign da página dos requisitos | Daniel Rodrigues | Manuella Valadares
12/12/24 | 2.0 | Novos requisitos e reestruturação do backlog | Daniel Rodrigues | Arthur Suares





