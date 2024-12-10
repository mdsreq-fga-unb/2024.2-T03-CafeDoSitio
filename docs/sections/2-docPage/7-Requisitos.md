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

**US01 -** Criar Blog
**US02 -** Editar Blog
**US03 -** Comentar no Blog
**US04 -** Categorizar Blog
**US05 -** Categorizar Blog
**US06 -** Pesquisar Blog
**US07 -** Baixar Blog
**US08 -** Recomendar outros Blogs
**US09 -** Conectar Blog com Produtos da Empresa
**US10 -** Compartilhar Blog
**US11 -** Configurar disponibilidade de Visita
**US12 -** Realizar Tour Virtual
**US13 -** Emitir certificado de Visita
**US14 -** Agendar Visita Presencial
**US15 -** Realizar SAC
**US16 -** Localizar Produtos
**US17 -** Lembrar usuários de Visita
**US18 -** Fazer login na Central Administrativa
**US19 -** Gerenciar acesso à Central de Administração

## Requisitos Não Funcionais

Os requisitos não funcionais foram organizados com base no modelo URPS+, que classifica esses requisitos em categorias que abrangem Usabilidade, Confiabilidade, Desempenho, Suportabilidade e outras características relevantes. Esse sistema facilita a análise e priorização das características que impactam na qualidade geral do software, além de assegurar que ele atenda aos padrões esperados pelo cliente e pelos usuários.

### Usabilidade

#### Necessários de estar no backlog:
**RNF01 -** O sistema deve permitir que os usuários localizem facilmente a seção que apresenta a história da empresa, com navegação intuitiva e conteúdo disposto de forma clara e acessível.
**RNF02 -** A interface deve exibir os produtos da empresa de forma visualmente organizada e categorizada, facilitando a identificação e compreensão de cada item pelo usuário.
**RNF03 -** As informações sobre ações sociais da empresa devem estar disponíveis de maneira acessível e atrativa, garantindo clareza na comunicação e fácil navegação para o usuário.
**RNF04 -** Os contatos da empresa devem ser apresentados em um formato padronizado e de fácil compreensão, com suporte a links clicáveis para e-mail, telefone e redes sociais.
**RNF05 -** As vagas de emprego da empresa devem ser exibidas de forma clara, com uma organização que facilitem a busca por oportunidades compatíveis com o interesse do usuário, instruindo o usuário como prosseguir com o processo no site terceiro empregare.
**RNF06 -** As instruções do E-commerce devem ser descritas de maneira clara, com linguagem simples e objetiva, utilizando elementos visuais, como ícones e guias passo a passo, para melhorar a compreensão.

#### Apenas referências para a produção:
**RNF07 -** A interface do usuário deve ser intuitiva e acessível para pessoas com diferentes níveis de habilidade técnica.
**RNF08 -** O tempo de aprendizado para novos administradores não deve exceder 2 horas com um tutorial básico.
**RNF09 -** As cores utilizadas no software não podem estar fora da paleta de cores da Família do Sítio, com exceção da cor Preta e Branca.
**RNF10 -** A tipografia utilizada no software deverá estar dentro das estabelecidas no manual de marca da Família do Sítio: Myriad Pro ou Impact.

### Confiabilidade


**RNF11 -** O sistema deve estar disponível pelo menos 99,5% do tempo por mês (uptime). 
**RNF12 -** Em caso de falhas no servidor, o sistema deve se recuperar dentro de 10 minutos.

### Desempenho

**RNF13 -** O sistema deve suportar pelo menos 1000 acessos simultâneos sem degradação perceptível de desempenho.
**RNF14 -** Consultas no feed de blogs devem ser respondidas em até 1 segundo.

### Suportabilidade

**RNF15 -** O sistema deve ser compatível com as últimas duas versões dos navegadores Chrome, Firefox, Edge e Safari.

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





