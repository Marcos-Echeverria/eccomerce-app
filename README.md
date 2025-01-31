# E-Commerce Web Application

## Descripción
Este es un proyecto de sitio web de comercio electrónico desarrollado con **React** en el frontend y **Node.js** en el backend.

### Características Principales
- Exploración de productos disponibles en la tienda.
- Opciones para archivar y acortar productos.
- Agregar productos al carrito seleccionando variantes (como el tamaño).
- Realización de pedidos proporcionando la dirección de entrega.
- Opciones de pago:
  - **Contra reembolso**
  - **Pago en línea** (Stripe y Razorpay)
- Panel de administración con funcionalidades para:
  - Subir nuevos productos.
  - Eliminar productos.
  - Gestionar el inventario de la tienda.

## Tecnologías Utilizadas
### Frontend
- React
- React Bootstrap
- React Icons

### Backend
- Node.js
- Express
- MongoDB

### Pasarelas de Pago
- Stripe
- Razorpay

## Instalación y Configuración
### Requisitos Previos
- Node.js instalado
- MongoDB configurado y en ejecución
- Clave API para Stripe y Razorpay

### Instalación
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/Marcos-Echeverria/tu-repo.git
   ```

2. Instalar dependencias en el backend:
   ```sh
   cd backend
   npm install
   ```

3. Instalar dependencias en el frontend:
   ```sh
   cd ../frontend
   npm install
   ```

4. Configurar las variables de entorno en el archivo `.env` en el backend:
   ```env
   MONGO_URI=tu_conexion_mongodb
   STRIPE_SECRET_KEY=tu_clave_stripe
   RAZORPAY_KEY_ID=tu_clave_razorpay
   RAZORPAY_KEY_SECRET=tu_secreto_razorpay
   ```

5. Iniciar el servidor backend:
   ```sh
   cd backend
   npm start
   ```

6. Iniciar la aplicación frontend:
   ```sh
   cd ../frontend
   npm start
   ```

## Contribución
Si deseas contribuir a este proyecto, siéntete libre de hacer un **fork** y enviar un **pull request**.

## Licencia
Este proyecto está bajo la licencia MIT.

