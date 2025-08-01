# Prueba-Tecnica-HermesCorp

Prueba Técnica HermesCorp de Rodrigo Hernández

## 📝 Registro de Tareas (Frontend + Backend)

Este proyecto es una aplicación web que permite gestionar tareas marcándolas como completadas o no completadas. Está compuesto por:

- Un **backend** hecho en **Node.js + Express**
- Un **frontend** hecho en **React + TypeScript**
- Una **base de datos MySQL** que almacena las tareas

El objetivo es proporcionar una herramienta simple para crear, consultar y actualizar tareas mediante una interfaz clara y conectada con una API REST.

---

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/RodrigoHdzH/Prueba-Tecnica-HermesCorp
cd Prueba-Tecnica-HermesCorp
```

### 2. Configurar la base de datos

1. Crea una base de datos llamada `tareas_db` en MySQL.
2. Importa el archivo `tareas_db.sql` que se encuentra en la raíz del proyecto.

---

## ⚙️ Configuración de entorno

Antes de ejecutar el backend, asegúrate de tener un archivo `.env` en la carpeta `Node` con el siguiente contenido:

```env
PORT=4000
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DB=tareas_db
```

> **Importante:** El backend **debe ejecutarse en el puerto 4000**, de lo contrario el frontend no podrá conectarse correctamente a la API.

---

### 3. Ejecutar el backend

```bash
cd Node
npm install
npm run dev
```

El backend correrá en `http://localhost:4000`

---

### 4. Ejecutar el frontend

```bash
cd frontend
npm install
npm run dev
```

El frontend correrá en `http://localhost:5173`.

> El frontend está configurado para conectarse al backend en `http://localhost:4000`, por lo que es fundamental que ese puerto esté en uso por el servidor Express.

---

## 🛠️ Tecnologías utilizadas

### Backend

- Node.js
- Express
- MySQL

### Frontend

- React
- TypeScript
- Vite

---
