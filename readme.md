# Angular 20

Duración: 30 horas
Modalidad: On-line
Fechas/Horario:

- Días 15, 16, 17, 18 y 19 Septiembre 2025
- Horario 9:00 – 15:00 hs

Instructor: Alejandro Cerezo Lasne <alce65@hotmail.es>
Repositorio: https://github.com/IconoTC/Angular-AF75828---GR-82941

## Día 1 (L-15): Introducción a Typescript y Angular

- Introducción a Angular y su ecosistema.
- Elementos básicos de TypeScript.
  - Tipos de datos. Inferencia y anotación de tipos.
  - Tipado de funciones.
  - Tipos personalizados. Interfaces y tipos.
  - Clases ES6 en TypeScript.
    - Modificadores de acceso.
    - Getters y Setters.
    - Herencia.
    - Clases abstractas.
- Instalación de Angular CLI.
- Creación de un nuevo workspace Angular sin proyecto. `ng new`
- Creación de un nuevo proyecto (app) Angular. `ng generate app`
- Estructura de un workspace/proyecto Angular.
- Añadiendo ESLint y Prettier.
- Angular CLI: Comandos básicos.
  - Servidor de desarrollo: `ng serve`.
  - Testing con Karma y Jasmine: `ng test`.
  - Construcción del proyecto: `ng build`.
- Generación de componentes: `ng generate`.
  - Elementos de un componente: HTML, CSS, TypeScript.

## Día 2 (M-16): Componentes y Rutas

- Componentes: estado y eventos. Zone v. Zoneless
- Estado en los componentes con ZoneJS.
  - Componente Counter. Estado y eventos.
  - Detección del cambio: Zone v. Zoneless
  - Signals y estado
  - Zoneless y asincronía: uso de Signals
- Scaffolding. Core y Features
  - Componentes (pages): Home, About, Contact.
- Rutas básicas. `app.routes.ts`
  - Array de rutas.
  - Array de opciones de menu
  - RouterOutlet en AppComponent.
  - Navegación. Componente menu. @for
  - SPA: RouterLink y RouterLinkActive
- Rutas Lazy. Default import en las páginas
- Componentes.
  - Componente Counter. Condicionales @If
  - Componente Greeting. Input de usuario: data binding.
  - Componente Layout. Proyección de contenido
    - Componente Header.
    - Componente Footer.
- Pipes. Location "es"
- Testing de componentes
  - Configuración de Karma y Jasmine.
  - Coverage istambul
  - Creación de pruebas unitarias para componentes.

## Día 3 (X-17). Comunicaciones y Arquitectura de componentes. Formularios TD

- Testing de componentes (continuación)
  - Pruebas unitarias para componentes con eventos y data binding.
- Debugging
<!-- - Logo. Componentes de template svg -->
- Comunicación entre componentes
  - Input. Decoradores @Input. Drilling del título
  - Output. Decorador @Output. EventEmitter
  - Agrupando contadores.
  - Contadores. Eventos con valor
  - Testing de componentes con comunicación.
- Arquitectura de componentes
  - Componentes de presentación vs contenedores.
  - Componentes inteligentes vs tontos.
- Ejemplo: ToDo List
  - Entidad ToDo. Modelo y mock de datos (RxJs).
  - Componente Tasks. Lógica del estado
  - Componente TodoItem. Input y Output (Eventos)
  - Componente TodoCreate. Output (Eventos). Forms Template Driven (TD)
