import reflex as rx 
from mi_web.components.general.nav_bar import navbar_dropdown
from mi_web.components.general.footer import footer
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
from mi_web.components.general.drawer import drawer
from mi_web.components.modules_components.module2_components.module2_table1 import module2_table1
from mi_web.components.modules_components.module2_components.module2_table2 import module2_table2
from mi_web.views.links.next_button import next_button
from mi_web.views.links.back_button import back_button
from mi_web.components.general.zoom_images import zoomed_image
from mi_web.components.general.imagenes.image_despedida import image_despedida


def module_2() -> rx.Component:
  return rx.box(
    navbar_dropdown(),
    drawer(),
    rx.center( 
        rx.vstack(
            rx.box(
                #encabezado del modulo 2 tipos de inversores e intrumentos
                rx.heading("Módulo 2: Tipos de Inversores e Instrumentos de inversion",
                **styles.TEXT_STYLE["title"]),
     
                #seccion 1 tipos de inversores
                rx.heading("1. Tipos de Inversores y Cómo Identificar el Tuyo", **styles.TEXT_STYLE["subtitle"]),
                rx.text("Cuando hablamos de inversiones, no todos los inversores son iguales. Cada persona tiene una "
                        "tolerancia al riesgo diferente, lo que influye en las decisiones que toma a la hora de invertir.",
                        **styles.TEXT_STYLE["body"],
                        margin_bottom=Size.DEFAULT.value),
      
                #imagen tipo de inversor
                rx.hstack(
                  zoomed_image("/tipo_inversor.jpg?refresh=1"),
                  margin_bottom=Size.DEFAULT.value
                ),
      
                rx.heading("¿Qué es un perfil de inversor?",**styles.TEXT_STYLE["subseccion"]),
                rx.text("Un perfil de inversor es una clasificación que nos ayuda a entender cómo reaccionamos"
                        " ante los riesgos y qué tipo de inversiones son más adecuadas para nosotros.",
                        **styles.TEXT_STYLE["body"],
                        margin_bottom=Size.DEFAULT.value),
      
                rx.heading("¿Para qué sirve conocer tu perfil?", **styles.TEXT_STYLE["subseccion"]),
                rx.text("Determinar tu perfil de inversor te ayudará a elegir estrategias alineadas con tu comodidad "
                        "financiera y objetivos. Por ejemplo, si prefieres estabilidad, quizás no sea conveniente invertir "
                        "en activos muy volátiles como criptomonedas o acciones de alto riesgo.",
                        **styles.TEXT_STYLE["body"],
                        margin_bottom=Size.DEFAULT.value),
      
                rx.heading("Tipos de inversores según su tolerancia al riesgo", **styles.TEXT_STYLE["subseccion"]),
                #tabla de inversores
                rx.vstack(
                    module2_table1(),
                    margin_bottom=Size.DEFAULT.value
                    ),
                #como saber que tipo de inversor eres?
                rx.heading("¿Cómo saber qué tipo de inversor eres?", **styles.TEXT_STYLE["subseccion"]),
      
                rx.text(rx.text.strong("Responde estas preguntas y descubre tu perfil:"), **styles.TEXT_STYLE["body"]),
      
                rx.text("✔ ¿Cómo reaccionarías si tu inversión pierde valor en el corto plazo?",**styles.TEXT_STYLE["body"]),
                rx.text("✔ ¿Prefieres estabilidad o estás dispuesto a asumir riesgos por mayor rentabilidad?",**styles.TEXT_STYLE["body"]),
                rx.text("✔ ¿Cuánto tiempo estás dispuesto a mantener una inversión?",**styles.TEXT_STYLE["body"],
                        margin_bottom=Size.DEFAULT.value),
      
                rx.text("Este análisis será clave antes de adentrarte en el mundo del trading, ya que te permitirá tomar decisiones "
                        "financieras con mayor seguridad.", **styles.TEXT_STYLE["body"],
                        margin_bottom=Size.DEFAULT.value),
      
                rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
      
                #seccion 2 Introduccion a los Instumentos de inversion
                rx.heading("2. los Instumentos de inversion",
                **styles.TEXT_STYLE["subtitle"]),

                rx.text("La inversión es una de las mejores herramientas para hacer "
                      "crecer el capital y alcanzar objetivos financieros a mediano y "
                      "largo plazo. Existen distintos instrumentos de inversión, cada "
                      "uno con sus propias características, riesgos y niveles de rentabilidad.",
                     **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                #imagen instrumentos de inversion
                rx.hstack(
                  zoomed_image("/instrumentos_inversion.jpg?refresh=1"),
                  margin_bottom=Size.DEFAULT.value
                ),
      
                #subseccion como elijo el adecuado
                rx.heading(" ¿Como elijo el adecuado para mi perfil?", **styles.TEXT_STYLE["subseccion"]),
                rx.text("Para elegir el instrumento adecuado, es importante considerar factores como:",
                      **styles.TEXT_STYLE["body"]),
      
                #lista de instumentos financieros
                rx.list.ordered(
                  rx.list.item(rx.text.strong("Plazo:")," Se refiere al tiempo durante el cual se mantiene una inversión "
                          "antes de obtener rendimientos o recuperar el capital. Puede ser ",rx.text.strong("corto plazo"),
                          " (hasta 1 año), ",rx.text.strong("mediano plazo")," (entre 1 y 5 años) o ",
                          rx.text.strong("largo plazo")," (más de 5 años).",margin_bottom=Size.DEFAULT.value),
                rx.list.item(rx.text.strong("Riesgo:")," Representa la posibilidad de perder dinero en una inversión. ",
                          rx.text.strong("Inversiones seguras")," (como un plazo fijo o bonos gubernamentales)"
                          " ofrecen menor riesgo pero rendimientos más bajos, mientras que",
                          rx.text.strong(" inversiones más volátiles")," (como acciones u opciones) pueden generar "
                          "mayores ganancias, pero también mayores pérdidas.",margin_bottom=Size.DEFAULT.value),
                rx.list.item(rx.text.strong("Liquidez:")," Indica qué tan rápido y fácilmente se puede vender una inversión y convertirla "
                          "en efectivo sin perder valor. Inversiones como acciones o FCI tienen alta liquidez, "
                          "mientras que inmuebles o bonos a largo plazo suelen tener menor liquidez.",margin_bottom=Size.DEFAULT.value),
                rx.list.item(rx.text.strong("Rentabilidad esperada:")," Es la ganancia potencial que se puede obtener de una inversión. "
                          "A mayor riesgo, generalmente se espera una mayor rentabilidad. Por ejemplo, los plazos "
                          "fijos tienen baja rentabilidad pero son seguros, mientras que las acciones pueden generar "
                          "altos retornos pero con mayor incertidumbre.",margin_bottom=Size.DEFAULT.value),
                  list_style_type="disc",
                  color="white",
                  margin_bottom=Size.DEFAULT.value,
                ),
       
       
                rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
       
                #seccion 3                        
                rx.heading("3. Diferencias entre Renta Fija y Renta Variable", **styles.TEXT_STYLE["subtitle"]),
                rx.text("Las inversiones pueden dividirse en renta fija y renta variable, dependiendo de la previsibilidad"
                        " de sus rendimientos y el nivel de riesgo asociado.", **styles.TEXT_STYLE["body"],
                        margin_bottom=Size.DEFAULT.value),
                #imagen diferencias renta fija vs renta variable
                rx.hstack(
                    zoomed_image("/diferencia_fija_variable.jpg?refresh=1"),
                    margin_bottom=Size.DEFAULT.value
                ),
                #Renta fija
                rx.heading("Renta fija", **styles.TEXT_STYLE["subseccion"]),
                rx.text("Son inversiones con un retorno predecible, donde se conoce de antemano la tasa de interés o "
                      "el pago que se recibirá. Son más seguras, pero su rentabilidad suele ser menor en comparación con "
                      "la renta variable", **styles.TEXT_STYLE["body"],
                      margin_bottom=Size.DEFAULT.value),
      
                #lista de renta fija
                rx.list.ordered(
                  rx.list.item(rx.text.strong("Plazo fijo:")," Depósito de dinero en un banco durante un tiempo determinado,"
                     " a cambio de un interés fijo al finalizar el período."),
                  rx.list.item(rx.text.strong("Bonos:")," Instrumentos de deuda emitidos por gobiernos o empresas. Funcionan "
                     "como un préstamo en el que el inversionista recibe intereses periódicos hasta el vencimiento."),
                  rx.list.item(rx.text.strong("Letras:")," Títulos de deuda pública a corto plazo, emitidos por el Estado para "
                      "financiarse. Suelen ofrecer rendimientos menores que los bonos, pero con menor riesgo."),
                list_style_type="disc",
                color="white",
                margin_bottom=Size.DEFAULT.value
                ),
                #Renta variable
                rx.heading("Renta Variable", **styles.TEXT_STYLE["subseccion"]),
                rx.text("En estas inversiones, la rentabilidad no está garantizada y depende de factores del mercado,"
                        " lo que las hace más volátiles pero con un potencial de ganancias mayor.", **styles.TEXT_STYLE["body"],
                        margin_bottom=Size.DEFAULT.value),
                #lista de instrmentos
                rx.list.ordered(
                  rx.list.item(rx.text.strong("Acciones:")," Representan una parte de una empresa. Su valor varía según la oferta"
                      " y demanda en la bolsa, pudiendo generar ganancias por apreciación del precio o por dividendos"),
                  rx.list.item(rx.text.strong("Commodities:")," Materias primas como oro, petróleo o soja, cuyos precios fluctúan en "
                      "función de la oferta y demanda global."),
                  rx.list.item(rx.text.strong("Opciones:")," Derivados financieros que otorgan el derecho (pero no la obligación) "
                      "de comprar o vender un activo en una fecha futura a un precio determinado. Se utilizan para especulación"
                      " o cobertura de riesgos."),
                  rx.list.item(rx.text.strong("Criptomonedas:")," Activos digitales descentralizados que operan en tecnología blockchain."
                      " Su valor es altamente volátil y depende del mercado. Mas adelante abundaremos mas sobre ellas."),
                  list_style_type="disc",
                  color="white",
                  margin_bottom=Size.DEFAULT.value
                ),
      
                #cuadro comparativo renta fija vs renta variable
                rx.vstack(module2_table2(),
                margin_bottom=Size.DEFAULT.value),
      
                rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),

                #seccion 4 fondos comunes de inversion
                rx.heading("4. Fondos comunes de inversion.", **styles.TEXT_STYLE["subtitle"]),
                rx.text("Los Fondos Comunes de Inversión (FCI) son herramientas que permiten invertir "
                        "sin necesidad de conocimientos avanzados. Funcionan agrupando dinero de muchas personas "
                        "y gestionándolo en distintos activos según el tipo de fondo.", **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                #imagen fci 
                rx.hstack(
                    zoomed_image("/fci_image.jpg?refresh=1"),
                    margin_bottom=Size.DEFAULT.value,
                ),
      
                #tipos de fci
                rx.heading("Tipos de FCI según sus características:", **styles.TEXT_STYLE["subseccion"]),
                rx.text("1.",rx.text.strong(" Según el riesgo:"), **styles.TEXT_STYLE["body"],align_items="center"),
                
                #lista de fci
                rx.list.ordered(
                  rx.list.item(rx.text.strong("Renta fija:")," Invierte en instrumentos estables "
                      "como bonos o plazos fijos. Bajo riesgo y menor rentabilidad."),
                  rx.list.item(rx.text.strong("Renta variable:")," Invierte en acciones u otros activos de mayor "
                     "volatilidad. Mayor riesgo y potencial de ganancia."),
                list_style_type="disc",
                color="white",
                margin_bottom=Size.DEFAULT.value,
                align_items="center"
                ),
      
      
                rx.text("2.​",rx.text.strong(" Mercado de capitales:"), **styles.TEXT_STYLE["body"],
                align_items="center"
                ),
                #lista de fci
                rx.list.ordered(
                  rx.list.item(rx.text.strong("Según la moneda:")," Fondos en pesos."),
                  rx.list.item(rx.text.strong("Renta variable:")," Fondos en dólares."),
                list_style_type="disc",
                color="white",
                margin_bottom=Size.DEFAULT.value,
                align_items="center"
                ),
      

                rx.text("3.",rx.text.strong(" Según el mercado en el que invierten:"), **styles.TEXT_STYLE["body"]),
                #lista de fci
                rx.list.ordered(
                  rx.list.item(rx.text.strong("Mercado de dinero:")," Plazos fijos, bonos cortos, inversiones de bajo riesgo."),
                  rx.list.item(rx.text.strong("Mercado de capitales:"),"  Acciones, bonos de largo plazo, instrumentos "
                    "financieros más complejos"),
                  rx.list.item(rx.text.strong("Mercados internacionales:")," FCI que invierten en activos de otros países."
                   " financieros más complejos"),
                list_style_type="disc",
                color="white",
                margin_bottom=Size.DEFAULT.value
                ),
      
                rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
      
                #fin del modulo 2 conclusion y resumen
                rx.heading("Conclusión del Módulo 2: ", **styles.TEXT_STYLE["subtitle"]),
                rx.list.ordered(
                  rx.list.item(rx.text.strong("Resumen:")," En este módulo exploramos los distintos instrumentos de inversión, "
                      "diferenciamos entre renta fija y renta variable, entendimos el funcionamiento de los Fondos Comunes"
                      " de Inversión y la importancia de conocer nuestro perfil de inversor."),
                  rx.list.item(rx.text.strong("Aplicación Práctica:")," Reflexioná sobre tu tolerancia al riesgo y qué tipo de inversor"
                      " sos. Investigá qué instrumentos de inversión se alinean mejor con tus objetivos "
                   "financieros y empezá a evaluar opciones reales en el mercado"),
                  rx.list.item(rx.text.strong("Próximos Pasos:")," En el siguiente módulo, daremos un paso más profundo en el mundo "
                   "de las inversiones y nos adentraremos en el trading, explorando estrategias, el analisis tecnico, velas doji "
                   "y herramientas clave para operar en los mercados financieros."),
                list_style_type="disc",
                color="white",
                margin_bottom=Size.DEFAULT.value
                ),
      
            ),
            #_____________________________________________________________________________________#
            max_width="600px",
            width="100%",
            margin_y=Size.SMALL.value,
            align_items="center",
          )
        ),
        image_despedida(),
        next_button("/module_3"),
        back_button("/module_1"),
        footer(),
        background_color="black"
)
