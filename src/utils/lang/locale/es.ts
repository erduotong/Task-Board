const es = {
  1: "Ahorrar",
  2: "Cerca",
  3: "Archivo",
  4: "Agregar subtarea",
  5: "Volver a escanear la bóveda",
  6: "General",
  7: "No hay tareas disponibles",
  8: "Editar tarea",
  9: "Eliminar tarea",
  10: "Tipo de columna",
  11: "Sin fecha",
  12: "Anticuado",
  13: "Etiquetado",
  14: "Sin etiquetar",
  15: "Terminado",
  16: "Otras etiquetas",
  17: "Nombre de la columna",
  18: "Entregar",
  19: "Cancelar",
  20: "Introduzca el nombre de la columna",
  21: "Editar tarea",
  22: "Agregar nueva tarea",
  23: "Título de la tarea",
  24: "Subtareas",
  25: "Avance",
  26: "Editor",
  27: "Abrir archivo",
  28: "Edite o agregue una descripción para la tarea o agregue más subtareas.",
  29: "Contenido del cuerpo",
  30: "Hora de inicio",
  31: "Fin del tiempo",
  32: "Fecha de vencimiento",
  33: "Prioridad",
  34: "Etiqueta",
  35: "No se ha seleccionado ningún tablero para eliminar.",
  36: "Configuración global del complemento",
  37: "configuración del tablero",
  38: "Nombre del tablero",
  39: "Nombre del tablero que aparecerá como una pestaña en el encabezado de pestaña dentro del complemento.",
  40: "Mostrar etiquetas en columnas de tipo 'etiquetado'",
  41: "Solo funciona para columnas de tipo 'etiquetado'. Si no desea ver la etiqueta en la tarjeta para el tipo de columna.",
  42: "Filtrar etiquetas",
  43: "Ingresa las etiquetas, separadas por comas, que deseas ver en este tablero. Solo se mostrarán las tareas con estas etiquetas.",
  44: "Polaridad del filtro",
  45: "Activar o desactivar las etiquetas de filtro anteriores dentro de los tableros.",
  46: "Activar",
  47: "Desactivar",
  48: "Mostrar etiquetas filtradas",
  49: "Si desea mostrar las etiquetas filtradas mencionadas anteriormente en la 'tarjeta de tarea'.",
  50: "Columnas",
  51: "Introducir etiqueta",
  52: "Máximo de artículos",
  53: "De",
  54: "A",
  55: "Eliminar columna",
  56: "Agregar columna",
  57: "Eliminar este tablero",
  58: "Configuración global",
  59: "Agregar tablero",
  60: "Confirmar eliminación",
  61: "¿Está seguro de que desea eliminar esta tarea?",
  62: "Sí",
  63: "No",
  64: "Escaneo de bóveda completado.",
  65: "Escanear tareas desde la bóveda",
  66: "Ejecute esta función solo si sus tareas no se han detectado o escaneado correctamente o si el tablero actúa de manera extraña.",
  67: "No es necesario ejecutar esta función con frecuencia, el complemento detectará automáticamente las tareas recién agregadas o editadas.",
  68: "NOTA: primero verifique sus 'filtros para escaneo' desde la configuración del complemento, si está escaneando para detectar tareas no detectadas.",
  69: "Correr",
  70: "Ocultar tareas recopiladas",
  71: "Mostrar tareas recopiladas",
  72: "Error al cargar la configuración.",
  73: "Lea la documentación para hacer un uso eficiente de este complemento:",
  74: "Documentos del tablero de tareas",
  75: "Filtros para escanear",
  76: "Solo escanea esto",
  77: "No escanee esto",
  78: "Desactivar",
  79: "Interfaz de usuario del tablero",
  80: "Mostrar encabezado de la tarjeta de tarea",
  81: "Habilite esto para ver el encabezado en la tarjeta de tarea",
  82: "Mostrar pie de página de la tarjeta de tarea",
  83: "Habilite esto para ver el pie de página en la tarjeta de tarea",
  84: "Ancho de cada columna",
  85: "Introduzca el valor del ancho de cada columna. El valor predeterminado es 273 px.",
  86: "Mostrar barra de desplazamiento de columna",
  87: "Habilite la visualización de una barra de desplazamiento para cada columna. Esto reducirá el ancho de las 'tarjetas de tareas'.",
  88: "Colores de la etiqueta",
  89: "Borrar",
  90: "Agregar color de etiqueta",
  91: "Nombre de la etiqueta",
  92: "Automatización",
  93: "Escaneo en tiempo real",
  94: "Una vez que pierda el foco del archivo que ha editado, la tarea se actualizará inmediatamente en el tablero de tareas.\nAl deshabilitar esta configuración, se escanearán los archivos modificados después de un tiempo.",
  95: "Agregar automáticamente fecha de vencimiento a las tareas",
  96: "Cuando esta opción está habilitada, si agrega una tarea usando la ventana emergente 'agregar nueva tarea', se agregará la fecha de hoy como fecha de vencimiento, si no se ingresa ninguna fecha.",
  97: "Escaneo automático de la bóveda al iniciar Obsidian",
  98: "Utilice esta función únicamente si edita los archivos de la bóveda fuera de Obsidian. Por lo general, todas las tareas recién agregadas o editadas se detectarán automáticamente.",
  99: "Si su bóveda contiene muchos archivos con grandes cantidades de datos, esto podría afectar el tiempo de inicio de Obsidian.",
  100: "Plugins compatibles",
  101: "compatibilidad de complementos",
  102: "Si ha instalado el complemento de planificación diaria, habilítelo para ver la hora al comienzo del título de la tarea, en lugar de en los metadatos. Después de habilitar esta función, la hora se mostrará de acuerdo con el complemento de planificación diaria dentro de los archivos Markdown, pero en la tarjeta de tarea, la hora se mostrará en el pie de página como de costumbre.",
  103: "Cuando esta opción está habilitada, si agrega una tarea en un archivo de notas diarias, que tiene un nombre de archivo en formato como 'aaaa-MM-DD', esta fecha se considerará como la fecha de vencimiento de la tarea.",
  104: "Formato de fecha de vencimiento",
  105: "Introduzca el formato de fecha que está utilizando para nombrar sus archivos de notas diarias. Utilice los formatos 'aaaa-MM-DD' o 'DD-MM-aaaa'.",
  106: "Formatos",
  107: "Tu tarea se verá así en tus notas",
  108: "Formatos de complementos admitidos",
  109: "Los distintos complementos tienen distintos formatos para asignar los valores de 'fecha de entrega' y 'finalización' a la tarea. Seleccione uno de los valores y consulte el formato anterior, si es compatible con su configuración actual.",
  110: "Por defecto",
  111: "Patrón de fecha y hora de finalización de la tarea",
  112: "Introduzca el patrón de fecha y hora que desea ver como valor de finalización. Por ejemplo: aaaa-MM-dd/HH:mm:ss",
  113: "Primer día de la semana",
  114: "Establecer el primer día de la semana",
  115: "Domingo",
  116: "Lunes",
  117: "Martes",
  118: "Miércoles",
  119: "Jueves",
  120: "Viernes",
  121: "Sabado",
  122: "Finalización de la tarea en hora local",
  123: "Si la fecha y hora de finalización de la tarea deben mostrarse en hora local",
  124: "Mostrar la diferencia horaria UTC para la finalización de la tarea",
  125: "Si se debe mostrar la diferencia UTC para los tiempos de finalización de las tareas",
  126: "Si te gusta este complemento, ¡considera apoyar mi trabajo haciendo una pequeña donación para seguir mejorando esta idea!",
  127: "Idioma del complemento",
  128: "Seleccione el idioma de la interfaz de usuario del complemento. Para contribuir a mejorar el idioma actual o agregar su propio idioma nativo, consulte la documentación.",
  129: "¿Estás seguro de que deseas eliminar este tablero? Puedes volver a crearlo fácilmente si recuerdas la configuración.",
  130: "Tablero de tareas",
  131: "Agregar nueva tarea al archivo actual",
  132: "Abrir el tablero de tareas",
  133: "Abrir el tablero de tareas en una nueva ventana",
  134: "Actualizar tareas desde este archivo",
  135: "Agregar archivo en el filtro 'No escanear esto'",
  136: "Agregar archivo en el filtro 'Escanear solo esto'",
  137: "Agregar carpeta en el filtro 'No escanear esto'",
  138: "Agregar carpeta en el filtro 'Escanear solo esto'",
  139: "Filtros de tablero",
  140: "Archivos",
  141: "Carpetas",
  142: "Etiquetas",
  143: "Complemento",
  144: "Nativo",
  145: "Botón de configuración de la placa",
  146: "Botón Actualizar tablero",
  147: "No hay ningún editor activo abierto. Coloque el cursor dentro del editor donde desea agregar la tarea y ejecute este comando.",
  148: "Presione enter después de escribir la etiqueta",
  149: "Notas diarias",
  151: "Título de la tarea",
  152: "Esta sección contiene las configuraciones que le ayudarán a aplicar filtros y le darán control para escanear solo archivos seleccionados o eliminar ciertos archivos del escaneo. Los filtros son muy recomendables si tiene muchos archivos que nunca contendrán ninguna tarea.",
  153: "Introduzca los nombres de los archivos, la carpeta o la etiqueta de la tarea para controlar qué archivos desea que el complemento escanee para extraer tareas de ellos. Se recomienda encarecidamente leer la documentación si está utilizando los tres filtros al mismo tiempo.",
  154: "Este complemento fue creado por",
  155: "Esta sección contiene las configuraciones para controlar el aspecto del tablero. Estas configuraciones se aplicarán a todos los tableros.",
  156: "Establezca colores personalizados para sus etiquetas específicas.",
  157: "Esta sección contiene las configuraciones para automatizar ciertas tareas para un flujo de trabajo eficiente, de modo que pueda dedicar más tiempo a su proyecto que a la gestión de tareas.",
  158: "Nota",
  159: "Esta sección contiene las configuraciones para ajustar los formatos que utiliza para crear tareas.",
  160: "NINGUNO",
  161: "Más alto",
  162: "Alto",
  163: "Medio",
  164: "Bajo",
  165: "Más bajo",
  166: "Escribe aquí...",
  167: "Eliminar subtarea",
  168: "Mantenga presionada la tecla CTRL para abrir en una nueva ventana",
};
export default es;