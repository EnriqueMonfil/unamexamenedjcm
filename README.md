Requisitos previos
Antes de ejecutar este proyecto en tu máquina local, asegúrate de tener instalados los siguientes programas:
* Node.js (versión 16 o superior)
* npm 
* Git

Instalación
Sigue estos pasos para configurar y ejecutar el proyecto en tu computadora:

1. Clonar el repositorio
Clona el repositorio de GitHub en tu máquina local utilizando el siguiente comando:

git clone https://github.com/EnriqueMonfil/unamexamenedjcm.git

2. Navegar al directorio del proyecto
Entra en el directorio del proyecto:

cd nombre-del-repo

3. Instalar las dependencias
Instala las dependencias del proyecto con npm (o yarn si prefieres):

npm install

4. Ejecutar la aplicación en modo de desarrollo
Para iniciar la aplicación en modo de desarrollo, utiliza el siguiente comando:

npm run dev


Este comando iniciará el servidor de desarrollo de Vite y la aplicación será accesible en el navegador en http://localhost:5173.


Problemas comunes
* Error de JSX: Si encuentras problemas relacionados con JSX, asegúrate de que el archivo tsconfig.app.json esté configurado correctamente con la opción "jsx": "react-jsx".
* Dependencias de Jest: Si ves errores relacionados con Jest, asegúrate de que las versiones de jest, ts-jest, y jest-environment-jsdom estén correctamente instaladas.
Desinstalar dependencias
Si necesitas eliminar las dependencias y limpiar el proyecto, puedes usar los siguientes comandos:

rm -rf node_modules
npm install