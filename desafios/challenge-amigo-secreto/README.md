# Challenge Amigo Secreto

## Descripción

**Challenge Amigo Secreto** es una aplicación web desarrollada como parte de un curso de programación en JavaScript. Permite a los usuarios crear una lista de nombres de amigos y realizar sorteos aleatorios para determinar un "amigo secreto". La aplicación incluye funcionalidades adicionales como múltiples sorteos, validaciones mejoradas y mensajes informativos para mejorar la experiencia del usuario.

## Funcionalidades

- **Agregar nombres**: Los usuarios pueden ingresar nombres en un campo de texto y añadirlos a una lista visible al hacer clic en el botón "Adicionar".
- **Validación de entrada**:
  - Se muestra una alerta si el campo de texto está vacío.
  - No se permiten nombres con menos de 2 caracteres.
  - El sorteo requiere al menos dos nombres en la lista.
- **Visualización de la lista**: Los nombres ingresados se muestran en una lista en la página.
- **Sorteo aleatorio**: Al hacer clic en "Sortear Amigo", se selecciona un nombre aleatoriamente y se muestra en pantalla.
- **Múltiples sorteos**: Permite realizar varios sorteos, asegurando que cada sorteo seleccione un amigo diferente al sorteado previamente.
- **Notificación de finalización**: Muestra un mensaje cuando todos los amigos han sido sorteados.

## Tecnologías utilizadas

- **HTML**: Estructura de la interfaz de usuario.
- **CSS**: Estilización de la página para una experiencia visual atractiva.
- **JavaScript**: Lógica de la aplicación, incluyendo la gestión de la lista, validaciones y sorteos aleatorios.

## Instalación

1. Clona o descarga el repositorio en tu computadora.
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Abre el archivo `index.html` en un navegador web moderno (Google Chrome, Firefox, etc.).
   - No se requieren dependencias adicionales ni servidores, ya que la aplicación es completamente del lado del cliente.

## Cómo usar

1. **Agregar amigos**:
   - Escribe el nombre de un amigo en el campo de texto.
   - Haz clic en el botón **Adicionar** para añadir el nombre a la lista.
   - Repite hasta agregar todos los nombres deseados (mínimo 2 nombres).
2. **Realizar sorteo**:
   - Haz clic en el botón **Sortear Amigo** para seleccionar un nombre aleatoriamente.
   - El nombre sorteado aparecerá en pantalla.
3. **Continuar sorteos**:
   - Puedes realizar múltiples sorteos; cada sorteo seleccionará un amigo diferente.
   - Cuando todos los amigos hayan sido sorteados, aparecerá un mensaje indicando que no hay más nombres disponibles.

## Estructura del proyecto

```
Challenge-Amigo-Secreto/
├── index.html      # Estructura principal de la aplicación
├── styles.css      # Estilos de la interfaz
├── app.js       # Lógica de la aplicación en JavaScript
└── README.md       # Documentación del proyecto
```

## Ejemplo de uso

1. Ingresa nombres como "Ana", "Juan", "María" usando el botón "Adicionar".
2. La lista en pantalla mostrará: Ana, Juan, María.
3. Haz clic en "Sortear Amigo" y aparecerá, por ejemplo, "Tu amigo secreto es: Juan".
4. Continúa sorteando hasta que todos los nombres se hayan seleccionado.
5. Si intentas sortear con un solo nombre o un nombre inválido, recibirás una alerta.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m "Descripción de cambios"`).
4. Envía un pull request para revisión.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE), lo que permite su uso, modificación y distribución libremente, siempre que se incluya el aviso de copyright y la declaración de la licencia.
