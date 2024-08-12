# interface de pesquisa


 Configurei a estrutura básica da página. Defini o idioma como português (pt) e configurei o título da página como "Hougle". Criei um contêiner centralizado para a pesquisa, que inclui um logotipo estilizado como "Search the web" e um formulário de pesquisa. O formulário contém um campo de entrada de texto e um botão de envio.

Estilização CSS

Utilizei estilos para criar uma aparência limpa e moderna. O corpo da página está configurado para centralizar o conteúdo vertical e horizontalmente, com uma cor de fundo suave. O contêiner de pesquisa é estilizado para centralizar o logotipo e o formulário. O campo de entrada de texto tem bordas arredondadas e um efeito de foco, enquanto o botão de envio tem um design moderno com um efeito de hover para melhorar a experiência do usuário.

Funcionalidade JavaScript

No arquivo scripts.js, adicionei funcionalidade ao formulário de pesquisa. Utilizei o método addEventListener para adicionar um manipulador de eventos ao formulário. Quando o formulário é enviado, a função previne o comportamento padrão de envio, pega o valor inserido no campo de entrada e redireciona o usuário para a página de resultados do Google, utilizando o valor da consulta inserida.