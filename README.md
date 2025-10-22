[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/aZzykbwC)

# Trello Simplificado

Este proyecto es una versión simplificada de **Trello**, desarrollada como parte de una clase de Ingeniería de Aplicaciones Web. Permite gestionar proyectos, listas de tareas y tareas individuales con operaciones CRUD completas, sin necesidad de autenticación o base de datos.

## 🚀 Tecnologías utilizadas

### Frontend

- **React**: Biblioteca principal para la construcción de interfaces de usuario.
- **TanStack Query (React Query)**: Manejo eficiente del estado asincrónico y cacheo de datos.
- **React Router**: Navegación entre vistas del frontend.
- **Radix UI**: Componentes personalizables para la interfaz de usuarios.
- **Axios**: Biblioteca para realizar peticiones HTTP.
- **React Hook Form**: Manejo de formularios y validaciones.
- **Tailwind CSS**
- **React Toastify**
- **React Icons**
- **Otros**: Herramientas complementarias para mejorar la experiencia de desarrollo.

### Backend

- **Express.js**: Framework web para Node.js, utilizado para exponer una API REST simple.
- **UUID**: Generación de identificadores únicos para proyectos, listas y tareas.

## 📦 Funcionalidades principales

- **Proyectos**:
  - Crear, editar, eliminar.
  - Atributos: id, name, gradient (color personalizable para cada proyecto), lists.
- **Listas de tareas**:
  - Crear, editar, eliminar.
  - Atributos: id, name, tasks, projectId.
- **Tareas**:
  - Crear, editar, eliminar.
  - Atributos: id, name, description, type, isCompleted, listId.

## 📁 Estructura del proyecto

- /frontend --> Aplicación React (UI)
  - /src --> Código fuente de la aplicación
    - /components --> Componentes react reutilizables
    - /hooks --> Custom hooks
    - /services --> Servicios para interactuar con la API
    - /types --> Tipos de datos utilizados en el frontend
- /backend --> Servidor Express con almacenamiento en JSON
  - server.ts --> Archivo principal del servidor express
  - /routes --> Rutas para la API
  - /controllers --> Controladores para manejar la lógica de negocio
  - /services --> Servicios para interactuar con el sistema de archivos
  - /data --> Archivos JSON para almacenar los datos
  - /types --> Tipos de datos utilizados en el backend

---

### 💡 Lecciones Aprendidas y Mejoras Futuras

Las limitaciones actuales del proyecto fueron decisiones de diseño explícitas para cumplir con la consigna académica, que se centraba en el manejo del estado del frontend.

- **Persistencia de Datos:** El backend actualmente persiste los datos en un archivo `data.json` local.
  - **Mejora a futuro:** El siguiente paso obvio sería reemplazar esto con una base de datos real (ej. **PostgreSQL** o **MongoDB**) y un ORM como **Prisma**, para permitir datos persistentes y escalables.
- **Autenticación:** El proyecto no cuenta con autenticación de usuarios.
  - **Mejora a futuro:** Implementaría un sistema de autenticación (ej. **JWT** o **Next-Auth**) para que los tableros sean privados y pertenezcan a usuarios específicos.
- **Experiencia de Usuario (UX):**
  - **Mejora a futuro:** Añadiría la funcionalidad de **"Drag and Drop"** (arrastrar y soltar) para mover tareas entre listas, utilizando una librería como `react-beautiful-dnd`.

* **Flujo de Trabajo Git:** Aunque la colaboración en equipo fue exitosa, una mejora clave sería implementar un flujo de trabajo de Git más estricto (como **GitFlow**). Esto nos permitiría gestionar el desarrollo de nuevas _features_ y los _releases_ de forma mucho más ordenada y profesional, similar a como se trabaja en la industria.

---

## 🛠️ Cómo ejecutar el proyecto

### Requisitos

- Node.js y npm instalados

### Pasos

1. **Clonar el repositorio:**

```bash
git clone https://github.com/IAW-2025/react-express-popp-brugnoni.git
cd react-express-popp-brugnoni
```

2. **Instalar dependencias y ejecutar**

```bash
npm install
npm start
```

3. **Acceder en http://localhost:5173**

## :link: Enlaces útiles

- **Aplicación en Render**: https://trello-lgg5.onrender.com
- **API en Render**: https://trello-api-zr11.onrender.com

## 📚 Notas

- Este proyecto no cuenta con autenticación de usuarios.

- No se utiliza una base de datos; los datos persisten en un archivo local data.json en el backend.

- El objetivo principal es demostrar habilidades con React, Express y gestión de estado en el frontend.

## 📖 Autores

Franco Popp - https://github.com/FrancoPopp

Román Brugnoni - https://github.com/JRoman-brug
