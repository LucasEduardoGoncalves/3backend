## config para criação de projeto
`cd` para entrar onde vai ficar o projeto
`mkdir <nome do projeto>` comando para criar a pasta onde vai ficar o projeto
`yarn init -y` para criar o packge.json

__Para Fazer O Projeto Rodar__
<!-- 
    ! Rodar o comando `yarn tsc --init` para a inicialização do typescript
    * Dentro do tsconfig retirar a opção `"strict": true,` 
-->

`yarn tsc` para fazer a conversão
`node <a sequencia de pastas onde está localizado o seu aquivo principal>` para dar inicio ao servidor

## dependencias utilizadas
`express` para utilizar o express
`typescript`
`uuid` para criação de links

## tipagens nescessarias <!-- ! Todas devem ser utilizadas como depedencia de desenvolvimento-->
`@types/express -D`
`@types/uuid -D`

## instalação do eslint
`yarn add eslint -D`
`yarn eslint --init` precisamos inicializar o eslint


_YARN_
yarn add
yarn remove 
yarn upgrade


## SOLID ## 
<!--
    O SOLID são orientações e principios para facilitar o entendimento do código e sua manutenção. A estrutura passada nas 
    aulas não é uma "regra" absoluta do SOLID, mas sim, uma possibilidade de aplicar os principios. Você pode criar sua estrutura se achar 
    melhor, mas ao seguir uma já existente não estará reinventando a roda, e tendo uma "estrutura" padrão o time de desenvolvimento 
    rapidamente conseguirá entender o sistema.

    ! A estrutura funciona desta maneira:
    * rotas - têm a responsabilidade de receber os requests, repassá-los para as outras camadas e retornar um response
    * controller - um intermediário entre a rota e o use case, conhece os dois lados e (até o momento) é onde fazemos um tratamento de erro
    * UseCases - é onde colocamos a regra de negócio: validações, cálculos,etc
    * Repository - é onde temos informações do nosso repositório, estrutura de dados , conexões etc.
    * Model é onde modelamos nossa entidade

    Veja que cada "camada" têm sua responsabilidade/objetivo e, apesar de haver uma comunicação entre elas, uma não sabe de todos os detalhes 
    da outra. Isto fica mais claro usando a rota como exemplo. A rota não sabe nada do nosso reposítório, model, etc.

    Indo mais além, para tornar o projeto mais maleável, foi utilizado o conceito de interfaces, que faz com quem usa um "objeto" de uma 
    interface não precise se preocupar com sua implementação, uma vez que a interface garante que o objeto está aderente ao contrato 
    estabelecido pela interface. Esta estruturação permite que mudemos "peças" do projeto sem termos problemas. um bom exemplo é imaginar uma 
    interface aves que têm alguns atributos como : cor das penas, cor do bico, etc, e alguns métodos como voar e cantar. A interface não 
    implementa nenhum código, ela só "define" o que é uma ave. Ai podemos criar a classe canarinho que implementa a interface aves. Podemos 
    criar uma outra classe Pato, outra Ganso..e assim por diante. Veja que os metódos de cantar e voar serão diferentes, mas todos as classes 
    preenchem os requisitos definidos na interface.
-->