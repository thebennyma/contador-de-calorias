# Contador de Calorías

La aplicación "Contador de Calorías" es una herramienta web diseñada para ayudar a los usuarios a rastrear y gestionar sus actividades diarias y su ingesta de calorías. La aplicación está construida utilizando React y se basa en varios componentes clave para proporcionar una experiencia de usuario fluida y eficiente. A continuación, se describen las principales características y la estructura de la aplicación:

## Características Principales
1. **Registro de Actividades**:
   - Los usuarios pueden añadir nuevas actividades junto con la cantidad de calorías quemadas.
   - Las actividades se almacenan en el almacenamiento local del navegador, lo que permite la persistencia de los datos entre sesiones.

2. **Listado de Actividades**:
   - Las actividades registradas se muestran en una lista detallada.
   - Cada actividad puede ser editada o eliminada fácilmente utilizando los botones correspondientes.

3. **Reinicio de Aplicación**:
   - La aplicación permite reiniciar la lista de actividades, borrando todas las entradas actuales y comenzando desde cero.

4. **Categorías de Actividades**:
   - Las actividades pueden ser clasificadas en diferentes categorías, tales como ejercicio o comida, cada una con su propio estilo visual.

## Estructura de la Aplicación
1. **Componentes**:
   - **Form**: Un formulario para añadir nuevas actividades.
   - **ActivityList**: Un componente que muestra todas las actividades registradas.
   - **CalorieTracker**: Un componente que muestra el total de calorías consumidas y quemadas.

2. **Reducer**:
   - **activityReducer**: Gestiona el estado de las actividades, incluyendo añadir, editar, eliminar y reiniciar las actividades.

3. **Estilos y Diseño**:
   - La aplicación utiliza Tailwind CSS para el diseño y el estilo, proporcionando una interfaz moderna y responsive.

4. **Íconos**:
   - Los íconos utilizados para las acciones (editar y eliminar) son proporcionados por Heroicons, integrándose de manera fluida en la interfaz de usuario.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Tailwind CSS**: Framework de CSS para el diseño.
- **Heroicons**: Íconos SVG para acciones y elementos visuales.
- **Local Storage**: Utilizado para la persistencia de datos en el navegador.
