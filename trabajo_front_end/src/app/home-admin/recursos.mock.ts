export interface Recurso {
    id:string,
    img:string,
    subtitle:string,
    subdescrip:string,
    title:string,
    pregun1:string,
    pregun2:string,
    pregun3:string,
    pregun4:string,
    descrip1:string,
    descrip2:string,
    descrip3:string,
    descrip4:string
}

export const listaRecursos: Recurso[] = [
    {
        id:'1',
        img:'../../assets/images/html.png',
        subtitle: 'HTML',
        subdescrip:'HTML (Hypertext Markup Language) es un lenguaje de programación que se utiliza para crear y estructurar páginas web',
        title:'HTML Lenguaje de etiquetas de hipertexto',
        pregun1:'¿Que es HTML?',
        descrip1:`¿Qué es HTML?
        \n
        El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos. Como lo sugiere el título, este artículo te dará una comprensión básica de HTML y cual es su función. 
        \n
        HTML no es un lenguaje de programación; es un lenguaje de marcado que define la estructura de tu contenido. HTML consiste en una serie de elementos que usarás para encerrar diferentes partes del contenido para que se vean o comporten de una determinada manera. Las etiquetas de encierre pueden hacer de una palabra o una imagen un hipervínculo a otro sitio, se pueden cambiar palabras a cursiva, agrandar o achicar la letra, etc. Por ejemplo, toma la siguiente línea de contenido: 
        \n
        Mi gato es muy gruñon .
        \n
        Si quieres especificar que se trata de un párrafo, podrías encerrar el texto con la etiqueta de párrafo (<p>): <p>Mi gato es muy gruñon</p>`,
        pregun2: 'Anidar ELementos',
        descrip2:`\nAnidar ELementos
        \n
        Puedes también colocar elementos dentro de otros elementos —esto se llama anidamiento—. Si, por ejemplo, quieres resaltar una palabra del texto (en el ejemplo la palabra «muy»), podemos encerrarla en un elemento <strong>, que significa que dicha palabra se debe enfatizar:
        \n
        <p>Mi gato es <strong>muy</strong> gruñon.</p>
        \n
        Los elementos deben abrirse y cerrarse ordenadamente, de forma tal que se encuentren claramente dentro o fuera el uno del otro. Si estos se encuentran solapados, el navegador web tratará de adivinar lo que intentas decirle, pero puede que obtengas resultados inesperados. Así que, ¡no lo hagas!`,
        pregun3:'Elementos Vacíos',
        descrip3:`\nElementos Vacíos
        \n
        Algunos elementos no poseen contenido, y son llamados elementos vacíos. Toma, por ejemplo, el elemento <img> de nuestro HTML:
        \n
        <img src="images/imagen_ejemplo.png" alt="Imagen de prueba" />
        \n
        Posee dos atributos, pero no hay etiqueta de cierre </img> ni contenido encerrado. Esto es porque un elemento de imagen no encierra contenido al cual afectar. Su propósito es desplegar una imagen en la página HTML, en el lugar en que aparece.`,
        pregun4:'Anatomía de un documento HTML',
        descrip4:`Anatomía de un documento HTML
        \n
        Hasta ahora has visto lo básico de elementos HTML individuales, pero estos no son muy útiles por sí solos. Ahora verás cómo los elementos individuales son combinados para formar una página HTML entera. Vuelve a visitar el código de tu ejemplo en index.html
        \n
        Referencia:  https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content`
    },
    {
        id:'2',
        img:'../../assets/images/css.png',
        subtitle: 'CSS',
        subdescrip:'CSS (Cascading Style Sheets) es un lenguaje de diseño web que se utiliza para dar estilo a páginas escritas en HTML o XML.',
        title:'CSS Hoja de Estilo en Cascada',
        pregun1:'¿Que es CSS?',
        descrip1:`¿Que es CSS?
        \n
        CSS, al igual que HTML, es uno de los lenguajes centrales de Internet. Mientras que para añadir texto a un sitio web se utiliza HTML y se estructura semánticamente, para definir el diseño del contenido se utiliza CSS. Aunque HTML y CSS se utilizan en combinación, las instrucciones de diseño de CSS y los elementos de HTML existen por separado. Esto significa que una máquina puede leer un documento electrónico incluso sin CSS. Con la ayuda de CSS, el contenido del navegador se prepara visualmente y se presenta de forma atractiva.
        \n
        CSS es un “estándar vivo” que sigue siendo desarrollado por el World Wide Web Consortium. Por esta razón siempre hay nuevas funciones y aplicaciones prácticas que descubrir. El lenguaje de hojas de estilo, muy extendido, surgió en los años 90. En aquella época, la idea de utilizar hojas de estilo para mostrar el contenido de la web no era del todo nueva. Pero CSS se diferenciaba en un aspecto importante de otros elementos orientados a la visualización que ya existían en HTML: los usuarios tenían ahora la opción de definir reglas de diseño para grupos de elementos en varios documentos y en una sola hoja de estilo.`,
        pregun2:'Ventajas y ámbitos de aplicación de CSS',
        descrip2:`Ventajas y ámbitos de aplicación de CSS
        \n
        El éxito de un sitio web no depende solo del contenido, sino también de un buen diseño. Los usuarios pierden rápidamente el interés por las páginas web que no son fáciles de usar o no están bien estructuradas. En este caso, CSS ofrece una serie de opciones de diseño que no están disponibles en HTML puro.

        Por ejemplo, CSS permite controlar algunas especificaciones de forma centralizada. Esto significa que elementos similares (como todos los hipervínculos o imágenes) dentro de un mismo documento pueden ser reconocidos y formateados mediante un único comando. Las instrucciones de diseño no tienen que estar en forma de hoja de estilo interna en el propio documento HTML. Si se guardan las instrucciones CSS en una hoja de estilo externa, es decir, en un archivo separado, ésta puede utilizarse también para otros documentos.

        Además de las instrucciones básicas de visualización relativas a los colores, las formas y la tipografía de los elementos HTML, ahora existen módulos más sofisticados en CSS. Con ellos se pueden, por ejemplo, definir animaciones o representaciones diferentes según el medio de salida. De este modo, el mismo documento HTML puede prepararse de forma idéntica para todos los medios posibles. Como el contenido y el diseño están separados en este documento, el código del sitio web es más claro. El llamado lenguaje de estilo SASS ofrece aún más posibilidades, pero no sustituye por completo al CSS.`,
        pregun3:'La estructura de una instrucción CSS',
        descrip3:`La estructura de una instrucción CSS
        \n
        Una instrucción CSS determina los valores o propiedades que deben tener los elementos de tu documento electrónico. En su estructura básica, la instrucción consiste en un selector y corchetes. Las declaraciones se enumeran dentro de los corchetes, separadas por punto y coma. Cada instrucción consta del nombre de la propiedad, dos puntos y un valor específico. Después de la instrucción final y antes del corchete de cierre, se puede añadir otro punto y coma, pero no es obligatorio. Por ejemplo, la instrucción CSS del siguiente ejemplo pide que el encabezado H1 se muestre en azul y con un tamaño de letra 12`,
        pregun4:'¿Cómo integrar CSS en tu sitio web?',
        descrip4:`¿Cómo integrar CSS en tu sitio web?
        \n
        Es posible integrar CSS en un documento electrónico utilizando hojas de estilo internas y externas. Además, las propiedades pueden colocarse directamente en el código fuente HTML de un elemento utilizando el estilo inline. A continuación, ofrecemos una visión general de los tres métodos para integrar CSS en HTML.
        \n
        Hojas de estilo externas\n\n
        En las hojas de estilo externas, las instrucciones CSS se definen en archivos externos mediante la terminación “.css” y se integran en el archivo HTML mediante una etiqueta “link”. Este es el método más habitual porque el contenido y el diseño están perfectamente separados y se pueden realizar cambios fácilmente. El enlace se hace en la zona “head” del documento HTML
        \n
        Hojas de estilo internas\n\n
        Aquí es donde se añaden todas las instrucciones CSS en el archivo HTML. Ten en cuenta que estas solo se aplican al documento correspondiente. Para las hojas de estilo internas, inserta el elemento “style” en el área “head” del documento HTML
        \n
        Estilo inline\n\n
        Al igual que con la hoja de estilo interna, las instrucciones CSS están contenidas en el archivo HTML. Sin embargo, hay una diferencia importante: los atributos correspondientes se encuentran directamente en la etiqueta de inicio del elemento y no se aplican a ningún otro elemento. `
    },
    {
        id:'3',
        img:'../../assets/images/js.png',
        subtitle: 'JAVASCRIPT',
        subdescrip:'Lenguaje de programación: Herramienta que nos permite darle instrucciones a un ordenador a traves de código, código que está estructurado para que los programadores puedan escribirlo siguiendo una lógica',
        title:'JavaScript',
        pregun1:'',
        descrip1:``,
        pregun2:'',
        descrip2:``,
        pregun3:'',
        descrip3:``,
        pregun4:'',
        descrip4:``
    },
    {
        id:'4',
        img:'../../assets/images/icono_angular.png',
        subtitle: 'ANGULAR',
        subdescrip:'Es un framework de diseño de aplicaciones y plataforma de desarrollo para crear aplicaciones de una sola página eficientes y sofisticadas',
        title:'Angular Framework',
        pregun1:'',
        descrip1:``,
        pregun2:'',
        descrip2:``,
        pregun3:'',
        descrip3:``,
        pregun4:'',
        descrip4:``
    },
    {
        id:'5',
        img:'../../assets/images/icon_react.png',
        subtitle: 'REACT',
        subdescrip:'Es una biblioteca de JavaScript de código abierto, mantenida por Facebook y la comunidad, utilizada para construir interfaces de usuario interactivas ...' ,
        title:'React Libreria',
        pregun1:'',
        descrip1:``,
        pregun2:'',
        descrip2:``,
        pregun3:'',
        descrip3:``,
        pregun4:'',
        descrip4:``
    },
    {
        id:'6',
        img:'../../assets/images/vue.png',
        subtitle: 'VUE',
        subdescrip:'Es un framework de JavaScript de código abierto que se utiliza para crear interfaces de usuario y aplicaciones web.',
        title:'VUE',
        pregun1:'',
        descrip1:``,
        pregun2:'',
        descrip2:``,
        pregun3:'',
        descrip3:``,
        pregun4:'',
        descrip4:``
    },
    {
        id:'7',
        img:'../../assets/images/DOM.png',
        subtitle: 'DOM',
        subdescrip:'Document Object Model. Es una interfaz de programación que permite acceder, modificar y crear elementos en documentos HTML y XML',
        title:'DOM - Document Object Model',
        pregun1:'',
        descrip1:``,
        pregun2:'',
        descrip2:``,
        pregun3:'',
        descrip3:``,
        pregun4:'',
        descrip4:``
    },
    {
        id:'8',
        img:'../../assets/images/desarrollo_web.jpg',
        subtitle: '¿Que es el desarrollo Web?',
        subdescrip:'Es el proceso de crear y mantener sitios web, aplicaciones y software',
        title:'Desarrollo Web',
        pregun1:'',
        descrip1:``,
        pregun2:'',
        descrip2:``,
        pregun3:'',
        descrip3:``,
        pregun4:'',
        descrip4:``
    },
    {
        id:'9',
        img:'../../assets/images/mas_rec.png',
        subtitle: 'Más Recursos',
        subdescrip:'Aquí encontraras todo lo que necesitas para aprender sobre el Desarrollo Web',
        title:'Más Recursos',
        pregun1:'',
        descrip1:``,
        pregun2:'',
        descrip2:``,
        pregun3:'',
        descrip3:``,
        pregun4:'',
        descrip4:``
    }
]

