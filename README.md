## Lista de Empleados

En esta séptima práctica de React, se creó una aplicación web que permite gestionar una lista de empleados. La estructura de componentes utilizada incluye un EmpleadoAvatar, un EmpleadoRenglon, y un EmpleadoLista. Los datos de los empleados se muestran mediante un arreglo de objetos.

## Características Principales

- Reutilización de Componentes: Se implementa una estructura modular con componentes reutilizables, como EmpleadoAvatar, EmpleadoRenglon, y EmpleadoLista.

## Componentes Utilizados
1. EmpleadoAvatar: Este componente representa el avatar de un empleado.
2. EmpleadoRenglon: Cada renglón contiene información detallada de un empleado.
3. EmpleadoLista: Este componente utiliza EmpleadoRenglon para mostrar una lista completa de empleados.

## Estructura de Datos

Los datos de los empleados se manejan mediante un arreglo de objetos.


- **Bootstrap y React-Bootstrap:** Utilizados para estilizar y estructurar la interfaz de usuario de la aplicación de manera eficiente y responsiva.

- **FontAwesome:** Se incorporó FontAwesome para agregar iconos a la interfaz de usuario, proporcionando una experiencia visual mejorada.

- **React:** El proyecto se basa en el framework de trabajo React, permitiendo un desarrollo eficiente y una interfaz de usuario dinámica.



## Dependencias Instaladas
- [Documentación React-bootstrap](https://react-bootstrap.github.io/docs/getting-started/introduction)
- [Documentación React-Fontawesome](https://fontawesome.com/v5/docs/web/use-with/react)


- Copiar y pegar los siguientes comandos en el bash y luego realziar los imports:
>npm install --save @fortawesome/fontawesome-free@6.5.1
>npm i --save @fortawesome/fontawesome-svg-core
>npm install --save @fortawesome/free-solid-svg-icons
>npm install --save @fortawesome/react-fontawesome
>npm install react-bootstrap bootstrap

## Imports de las depdendencias (Main.jsx)

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

# React + Vite

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refreshsh
