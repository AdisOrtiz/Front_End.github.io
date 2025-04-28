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
        descrip1:'¿Qué es HTML?. El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos. Como lo sugiere el título, este artículo te dará una comprensión básica de HTML y cual es su función. HTML no es un lenguaje de programación; es un lenguaje de marcado que define la estructura de tu contenido. HTML consiste en una serie de elementos que usarás para encerrar diferentes partes del contenido para que se vean o comporten de una determinada manera. Las etiquetas de encierre pueden hacer de una palabra o una imagen un hipervínculo a otro sitio, se pueden cambiar palabras a cursiva, agrandar o achicar la letra, etc. Por ejemplo, toma la siguiente línea de contenido: Mi gato es muy gruñon Si quieres especificar que se trata de un párrafo, podrías encerrar el texto con la etiqueta de párrafo (<p>): <p>Mi gato es muy gruñon</p>',
        pregun2: 'Anidar ELementos',
        descrip2:'Anidar Elementos. Puedes también colocar elementos dentro de otros elementos —esto se llama anidamiento—. Si, por ejemplo, quieres resaltar una palabra del texto (en el ejemplo la palabra «muy»), podemos encerrarla en un elemento <strong>, que significa que dicha palabra se debe enfatizar: <p>Mi gato es <strong>muy</strong> gruñon.</p>. Los elementos deben abrirse y cerrarse ordenadamente, de forma tal que se encuentren claramente dentro o fuera el uno del otro. Si estos se encuentran solapados, el navegador web tratará de adivinar lo que intentas decirle, pero puede que obtengas resultados inesperados. Así que, ¡no lo hagas!',
        pregun3:'Elementos Vacíos',
        descrip3:'Elementos Vacíos. Algunos elementos no poseen contenido, y son llamados elementos vacíos. Toma, por ejemplo, el elemento <img> de nuestro HTML: <img src="images/imagen_ejemplo.png" alt="Imagen de prueba" />Posee dos atributos, pero no hay etiqueta de cierre </img> ni contenido encerrado. Esto es porque un elemento de imagen no encierra contenido al cual afectar. Su propósito es desplegar una imagen en la página HTML, en el lugar en que aparece.',
        pregun4:'Anatomía de un documento HTML',
        descrip4:'Anatomía de un documento HTML. Hasta ahora has visto lo básico de elementos HTML individuales, pero estos no son muy útiles por sí solos. Ahora verás cómo los elementos individuales son combinados para formar una página HTML entera. Vuelve a visitar el código de tu ejemplo en index.html. Referencia:  https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content'
    }
    // {
    //     id:'2',
    //     img:'../../assets/images/css.png',
    //     subtitle: 'CSS',
    //     subdescrip:'CSS (Cascading Style Sheets) es un lenguaje de diseño web que se utiliza para dar estilo a páginas escritas en HTML o XML.',
    //     title:'CSS Hoja de Estilo en Cascada',
    //     descrip:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ut consectetur quidem iusto dicta corporis minima suscipit vero eos, ullam a maxime voluptatem nemo delectus optio nihil, alias harum consequuntur?"
    // },
    // {
    //     id:'3',
    //     img:'../../assets/images/js.png',
    //     subtitle: 'JAVASCRIPT',
    //     subdescrip:'Lenguaje de programación: Herramienta que nos permite darle instrucciones a un ordenador a traves de código, código que está estructurado para que los programadores puedan escribirlo siguiendo una lógica',
    //     title:'JavaScript',
    //     descrip:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ut consectetur quidem iusto dicta corporis minima suscipit vero eos, ullam a maxime voluptatem nemo delectus optio nihil, alias harum consequuntur?"
    // },
    // {
    //     id:'4',
    //     img:'../../assets/images/icono_angular.png',
    //     subtitle: 'ANGULAR',
    //     subdescrip:'Es un framework de diseño de aplicaciones y plataforma de desarrollo para crear aplicaciones de una sola página eficientes y sofisticadas',
    //     title:'Angular Framework',
    //     descrip:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ut consectetur quidem iusto dicta corporis minima suscipit vero eos, ullam a maxime voluptatem nemo delectus optio nihil, alias harum consequuntur?"
    // },
    // {
    //     id:'5',
    //     img:'../../assets/images/icon_react.png',
    //     subtitle: 'REACT',
    //     subdescrip:'Es una biblioteca de JavaScript de código abierto, mantenida por Facebook y la comunidad, utilizada para construir interfaces de usuario interactivas ...' ,
    //     title:'React Libreria',
    //     descrip:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ut consectetur quidem iusto dicta corporis minima suscipit vero eos, ullam a maxime voluptatem nemo delectus optio nihil, alias harum consequuntur?"
    // },
    // {
    //     id:'6',
    //     img:'../../assets/images/vue.png',
    //     subtitle: 'VUE',
    //     subdescrip:'Es un framework de JavaScript de código abierto que se utiliza para crear interfaces de usuario y aplicaciones web.',
    //     title:'VUE',
    //     descrip:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ut consectetur quidem iusto dicta corporis minima suscipit vero eos, ullam a maxime voluptatem nemo delectus optio nihil, alias harum consequuntur?"
    // },
    // {
    //     id:'7',
    //     img:'../../assets/images/DOM.png',
    //     subtitle: 'DOM',
    //     subdescrip:'Document Object Model. Es una interfaz de programación que permite acceder, modificar y crear elementos en documentos HTML y XML',
    //     title:'DOM - Document Object Model',
    //     descrip:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ut consectetur quidem iusto dicta corporis minima suscipit vero eos, ullam a maxime voluptatem nemo delectus optio nihil, alias harum consequuntur?"
    // },
    // {
    //     id:'8',
    //     img:'../../assets/images/desarrollo_web.jpg',
    //     subtitle: '¿Que es el desarrollo Web?',
    //     subdescrip:'Es el proceso de crear y mantener sitios web, aplicaciones y software',
    //     title:'Desarrollo Web',
    //     descrip:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ut consectetur quidem iusto dicta corporis minima suscipit vero eos, ullam a maxime voluptatem nemo delectus optio nihil, alias harum consequuntur?"
    // },
    // {
    //     id:'9',
    //     img:'../../assets/images/mas_rec.png',
    //     subtitle: 'Más Recursos',
    //     subdescrip:'Aquí encontraras todo lo que necesitas para aprender sobre el Desarrollo Web',
    //     title:'Más Recursos',
    //     descrip:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ut consectetur quidem iusto dicta corporis minima suscipit vero eos, ullam a maxime voluptatem nemo delectus optio nihil, alias harum consequuntur?"
    // }
]

