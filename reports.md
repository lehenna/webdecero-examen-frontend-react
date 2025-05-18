1. ¿Qué es una API?

Una API es un conjunto de reglas y protocolos que permiten que dos o más aplicaciones comunicarse entre si y realizar tareas.

2. Framework de estilos

Inicialmente, consideré usar Tailwind CSS para optimizar el desarrollo y ahorrar tiempo. Sin embargo, después de analizar el proyecto, decidí que no era la mejor opción, ya que se estaba utilizando Create React App. Según la documentación de Tailwind, esta herramienta requiere configuraciones de PostCSS que no son compatibles con Create React App.

La documentación menciona lo siguiente: "Create React App no admite configuraciones personalizadas de PostCSS y es incompatible con muchas herramientas del ecosistema, como postcss-import."

Por esta razón, se optó por usar únicamente CSS.

3. Patrones de componentes

- Componentes Presentacionales y Contenedores -> Separe la UI (ProfileCard) de la lógica (useProfile), lo que hace que los componentes sean más organizados y fáciles de mantener.
- Context API -> Use ProfileContext para compartir datos sin necesidad de pasarlos manualmente entre componentes, evitando la repetición de props.
- Render Props -> En los formularios (Field), permite personalizar el contenido sin modificar la estructura base del componente.

4. Patrones de diseño

Durante mi desarrollo, he aplicado varios patrones de diseño porque ayudan a estructurar el código de forma más clara y reutilizable.

- Custom Hooks (useLogin, useProfile) -> Separan la lógica de negocio de los componentes, evitando duplicación de código.
- Context API (ProfileContext) -> Facilita el manejo de estado global sin necesidad de pasar props manualmente.
- Factory Method (loginUser, getUserProfile) -> Encapsula la creación de objetos, haciendo que el código sea más flexible.

5. Módulos adicionales

- Axios -> Me permitió hacer peticiones HTTP de manera más sencilla y eficiente, como obtener datos de usuario o enviar credenciales de login.
- React Router -> Me ayudó a manejar la navegación dentro de la aplicación, permitiendo redirigir usuarios y proteger rutas según el estado de autenticación.
- Valibot -> Facilitó la validación de datos en formularios, asegurando que la información ingresada por el usuario cumpliera con ciertos requisitos antes de enviarla.
- React Hook Form -> Hizo que el manejo de formularios fuera más eficiente, reduciendo el número de renders y mejorando la gestión de errores y validaciones.
- StoryBook -> Me permitió documentar y probar componentes de manera aislada, asegurando que su apariencia y funcionalidad fueran correctas antes de integrarlos en la aplicación.
