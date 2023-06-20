# PerryChat
Este es un proyecto de chat que utiliza React para crear una interfaz de usuario simple y intuitiva. Aquí se describen las principales características y tecnologías utilizadas en el proyecto.

## Características principales

1. Implementación de una interfaz de usuario simple e intuitiva con capacidad de enviar y recibir mensajes en un canal especifico.
2. Uso del useState para conocer el estado de un mensaje, si es una cadena de texto o no, o si la casilla de texto está llena.
3. Guarda los nombres de usuario en el localStorage para almacenarlos en Firebase.
4. Utiliza useEffect para publicar los mensajes y realizar scroll en la lista de mensajes.
5. Utiliza useMemo para calcular el número total de mensajes en el chat.
6. Utiliza `memo` para optimizar el rendimiento del componente mensajes y evitar renderizados innecesarios de todos los mensajes enviados.
7. Utiliza useRef para hacer scroll a nuevos mensajes que lleguen.
8. Utiliza un contexto para cambiar el estado de inicio de sesión en la página.
9. Utiliza useReducer para implementar el storeReducer.
10. Utiliza react-router-dom para crear diferentes rutas en la aplicación, como la página de chat y el inicio de sesión.
11. Implementa un formulario de registro utilizando react-hook-form que valida los campos de nombre, correo electrónico y contraseña.
12. Utiliza Material-UI para diseñar y estilizar la interfaz de usuario de la aplicación.
13. Implementa guards de autenticación utilizando react-router-dom para proteger las rutas que requieren autenticación.
14. El proyecto está organizado de acuerdo a las prácticas aprendidas en clase.

Link a la pagina: 
[perryChat](https://perrychat-76a4d.web.app/auth/login)

Link al video:
[Video](https://drive.google.com/drive/folders/1l4UJBOGbcR6thzZXTpLM3VMvIiU4eS4y?usp=sharing)
