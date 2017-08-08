# xy-inc
Serviço Restful Xy Inc


Serviço RestFul Criado com Spring Boot
Deve ser executado com Maven ou pode ser compilado, também com Maven, e implantado em um conteiner Java Web como o TomCat.
Para compilar deve-se descomentar o método SpringApplicationBuilder da classe ZupXyzIncApplication, essa mesma classe também deve extender
SpringBootServletInitializer, nessa situação de compilação.

Utiliza um banco de dados PostgreSQL que dever ser configurado no arquivo "aplication.properties" nas seguintes linhas:
spring.datasource.url=
spring.datasource.username=
spring.datasource.password=
