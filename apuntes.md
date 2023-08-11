isolar las pruebas significa, que un esenario de pruebas no puede afectar a otras, ya que es unica es decir isolada,
teardown: demoler normalemente se ocupan en pruebas de integracion, esto cuando tenemos una base de datos y no queremos que el esenario de pruebas afecte a otra, por lo tanto empezamos a demoler los casos de prueba, el estado que dejo la prueba anterios, para que todos las pruebas tenga un caso unico desde 0


Fases del desarrollo de software:
  requerimientos
  diseño o arquitectura
  desarrollo
  pruebas
  produccion

SUT: system Under Test (sujeto bajo prueba)
validar o verificar:
  validar: ¿Estamos construyendo el sistema correcto?, por lo general en la capa de negocio o requerimientos, preguntamos al cliente si es lo que realmente quiere al final
  verificar: ¿Estamos construyendo el sistema correctamente? casi obviando que ya se produce valor al cliente.


Requerimientos fases
  SUT: requerimientos
  Ejecucion: Manuales
  Objetivo: Validar
  Herramientas: Inspeccion

Diseño / Arquitectura
  SUT: Sistema
  Ejecucion: Manuales/automaticas
  Objetivo: Verificar
  Herramientas: Case Tools

Desarrollo / Implementacion
  SUT: Depende de la fase en que se encuentre el proyecto
  Ejecucion: Automaticas
  Objetivo: Verificar


Tipos de pruebas
  estaticas: eslint,typeScript, sonarqube, code climate, codacy
    sonarqube mantine que el codigo no sea tan complejo,
  funcionales: unitarias,integracion, End to end, ui test
  no funcionales: Rendimiento, de carga o estabilidad, pruebas de estres, usabilidad, seguridad

Metodologias para escribir buenas pruebas:
  TDD: test Driven Development: Desarrollo guiado por pruebas, donde primero se hacen las pruebas antes de escribir el codigo(primero los expects)  (Agregar prueba, ver prueba fallar, Escribir codigo, pasar prueba, refactorizar codigo)
  BDD: behavior Driven Development Desarrollo guiado por comportamiento de acuerdo a los requisitos y luego las
  pruebas.
  AAA: 'mantra' A Arrange: preparar o listar el esenario de prueba, A Act ejecutar o actuar nuestro esenario, A Assert cuando resolvemos nuestras hipotesis (give, when, then, dado el caso x cuando x entonces x)

falso positivo: Un examen indica una enfermedad cuando no la hay, cuando una prueba no esta bien escrita
false negativo: un examen indeca que todo es normal cuando en realidad el paciente esta enfermo, cuando hay un bug pero no lo identificamos, es decir solo el happy path, probar las condiciones en las que sabemos que el programa funciona. cuando tenemos unn bug hay que hacer un TDD

Sistema Legacy, son aquellos que piden agregar pruebas a algo funcional, incluso en paralelo, hay que hacer refactoring, es decir refactorizar los metodos enormes a pequeños para hacer unit test de pocos a muchos metodos, legacy no lleva una buena arquitectuara.

Pruebas Unitarias
Son las mas comunes y se enfocan en probar unidades especificas, incluso conectando dependencias como
BD o librerias emuladas, se les conoce tambien como pruebas de estado o de caja negra, ya que solo importan las entradas y las salidas, en algunas ocasiones se hace con dependencias reales.
Una unidad puede ser una funcion o metodo o una clase, depende del paradigma usado en desarrollo (funcional o POO)
caja blanca importa el proceso de la funcion.

una utilidad importante a la hora de hacer pruebas unitarias es el cover Report o reporte de covertura

Coverage report
npm jest --coverage 
  el porcentage de covertura nos ayuda a tener un equilibrio y no hacer pruebas innecesarias
  el coverge report es una medida porcentual que nos indica que tanto del codigo hemos hecho pruebas unitarias
  Es una medida porcentual que evalua el grado que un codigo ha sido ejecutado
  100% de cobertura no significa no tener errores
  Tambien es usada como tecnica para eliminar codigo que nunca va a ser ejecutado
NOTA: para obtener certificacines iso, en software se requiere tener un 100% de coverage report, ISO international organization for standardzation

las pruebas de integracion tambien son llamadas end to end
Las pruebas end-to-end se pueden definir simplemente como un procedimiento que se ejecuta para productos complejos. Este tipo de pruebas confirman que la aplicación funciona tal como se espera analizando todos sus componentes

doubles
  los doubles son elementos que nos sirven para simular atributos comportamientos o metodos en nuestro entrono de pruebas
  mocking, stub, facke, dummies, doubles

  Dummy: son datos fictisios para llenar informacion, por ejemplo un metodo que nos este pidiendo un parametro no tiene gran utilidad,
  fake: simulan un objeto real y sirven para suplantar ciertos datos y comportamientos, por ejemplo podemos tener un usuario logeado, en nuestras pruebas podriamos inventar un usuario, una sesion un token, y con ese usuario podemos hacer unas pruebas, puede que incluso tenga un rol
  stubs: Proveen respuestas preparadas y se pueden llamar durante el test para simular un comportamiento por ejemplo, imaginemos que tenemos una api y esta se conecta a una api de terceros por ejemplo, el clima, autentificacion etc, ahi podemos simular el comportamiento de un stubs, es decir respuestas preparadas de un servicio,
  spies: pueden ser stub pero puedo recolectar informacion de como fue llamado, por ejemplo podemos espiar ciertos comportamientos, cuantas veces fue llamado, con que parametro lo llamamos etc, se usa en caja blanca
  mocks: stub + spies, a veces pueden estar ya pre-programados. pueden haber librerias o apis que ya nos den mocks, y solo tengamos que replazar algunas cosas, 
  
la piramide del testing es
  ui Test
  End to End Tests
  Integration Tests
  Unit Tests


  en jest para generar fake test, es decir datos emulados, objetos falsos utilizamos una libreria, fakejs.dev, nos provee datos fake. 

el objetivo de las pruebas de integracion es probar todos los componentes interacturando entre si, a diferencia de las pruebas unitarias, solo probamos un elemento en especifico, en las pruebas de integracion de hace mocking a todo lo de terceros como bases de datos o apis.
para ello se utiliza supertest 
"test:e2e": "test --config ./e2e/test.e2e.json --forceExit",
establecemos un nueva forma de ejecutar le decimos que tome la configuracion que hay en ese archivo y si llega a haber algo que quede pendiente que force la salida

una prueba punto a punto o end to end, no solo va aprobar el flujo, sino que vamos a hacer todo, la consulta hasta la base de datos e incluso hacer verificaciones si a la hora de la creacion inserto la base de datos que mandamos, o incluso insertar semillas de datos, es decir que podemos tener una base de datos prepoblada y si hacemos request deberia devolver esa informacion, normalmente no nos comunicacion con la base de datos que tenemos en produccion, si no que lo que hacemos es en vez de apuntar a la base de datos real, apuntamos a una base de datos en la cual se de prueba.

ui test
significa emular dispositivos los cuales los usuarios tendrian.
para hacer pruebas de ui utilizamos playwright
ci = continuous integration