import reflex as rx 
from mi_web.components.general_components.course_navbar import navbar_course
from mi_web.components.general_components.footer import footer
from mi_web.styles.course_styles import Size as Size
import mi_web.styles.course_styles as styles
import mi_web.styles.course_styles as c_styles
from mi_web.components.course_components.module2_components.module2_table1 import module2_table1
from mi_web.components.course_components.module2_components.module2_table2 import module2_table2
from mi_web.components.course_components.module2_components.module2_table1 import mobile_module2_table1
from mi_web.components.course_components.module2_components.module2_table2 import mobile_module2_table2
from mi_web.components.general_components.next_button import next_button
from mi_web.components.general_components.back_button import back_button
from mi_web.components.general_components.zoom_images import zoomed_image


def module_2() -> rx.Component:
    return rx.box(
        navbar_course(),
        rx.center( 
            rx.vstack(
                rx.box(
                    #encabezado del modulo 2 tipos de inversores e intrumentos
                    rx.heading("Módulo 2: Inversores y tipos de Instrumentos",
                               **c_styles.TEXT_STYLE["title"],
                               margin_top="35px",
                               margin_bottom=Size.MEDIUM.value),
     
                    #seccion 1 tipos de inversores
                    rx.heading("1. Tipos de Inversores y Cómo Identificar el Tuyo",
                               **c_styles.TEXT_STYLE["subtitle"],
                               margin_bottom=Size.MEDIUM.value),
                    
                    rx.text("Cuando hablamos de inversiones, no todos los inversores son iguales. Cada persona tiene una "
                            "tolerancia al riesgo diferente, lo que influye en las decisiones que toma a la hora de invertir.",
                            **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.DEFAULT.value),
      
                    #imagen tipo de inversor
                    rx.hstack(
                      zoomed_image("/tipo_inversor.jpg?refresh=1"),
                      margin_bottom=Size.DEFAULT.value
                    ),
      
                    rx.heading("¿Qué es un perfil de inversor?",
                               **c_styles.TEXT_STYLE["subseccion"],
                               margin_bottom=Size.MEDIUM.value),
                    
                    rx.text("Un perfil de inversor es una clasificación que nos ayuda a entender cómo reaccionamos"
                            " ante los riesgos y qué tipo de inversiones son más adecuadas para nosotros.",
                            **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.DEFAULT.value),
      
                    rx.heading("¿Para qué sirve conocer tu perfil?", 
                               **c_styles.TEXT_STYLE["subseccion"],
                               margin_bottom=Size.MEDIUM.value),
                    
                    rx.text("Determinar tu perfil de inversor te ayudará a elegir estrategias alineadas con tu comodidad "
                            "financiera y objetivos. Por ejemplo, si prefieres estabilidad, quizás no sea conveniente invertir "
                            "en activos muy volátiles como criptomonedas o acciones de alto riesgo.",
                            **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.DEFAULT.value),
      
                    rx.heading("Tipos de inversores según su tolerancia al riesgo", 
                               **c_styles.TEXT_STYLE["subseccion"],
                               margin_bottom=Size.MEDIUM.value),
                   
                    #tabla de inversores
                    rx.vstack(
                        module2_table1(),
                        mobile_module2_table1(),
                        margin_bottom=Size.DEFAULT.value
                    ),
                    
                    #como saber que tipo de inversor eres?
                    rx.heading("¿Cómo saber qué tipo de inversor eres?",
                               **c_styles.TEXT_STYLE["subseccion"],
                               margin_bottom=Size.MEDIUM.value),
      
                    rx.text(rx.text.strong("Responde estas preguntas y descubre tu perfil:"),
                            **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.MEDIUM.value),
      
                    rx.text("✔ ¿Cómo reaccionarías si tu inversión pierde valor en el corto plazo?",
                            **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.MEDIUM.value),
                    
                    rx.text("✔ ¿Prefieres estabilidad o estás dispuesto a asumir riesgos por mayor rentabilidad?",
                            **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.MEDIUM.value),
                    
                    rx.text("✔ ¿Cuánto tiempo estás dispuesto a mantener una inversión?",
                            **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.DEFAULT.value),
      
                    rx.text("Este análisis será clave antes de adentrarte en el mundo del trading, ya que te permitirá tomar decisiones "
                            "financieras con mayor seguridad.", **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.DEFAULT.value),
      
                    rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),
      
                    #seccion 2 Introduccion a los Instumentos de inversion
                    rx.heading("2. los Instumentos de inversion",
                               **c_styles.TEXT_STYLE["subtitle"],
                               margin_bottom=Size.MEDIUM.value),

                    rx.text("La inversión es una de las mejores herramientas para hacer "
                          "crecer el capital y alcanzar objetivos financieros a mediano y "
                          "largo plazo. Existen distintos instrumentos de inversión, cada "
                          "uno con sus propias características, riesgos y niveles de rentabilidad.",
                          **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                    #imagen instrumentos de inversion
                    rx.hstack(
                      zoomed_image("/instrumentos_inversion.jpg?refresh=1"),
                      margin_bottom=Size.DEFAULT.value
                    ),
      
                    #subseccion como elijo el adecuado
                    rx.heading(" ¿Como elijo el adecuado para mi perfil?",
                               **c_styles.TEXT_STYLE["subseccion"],
                               margin_bottom=Size.MEDIUM.value),
                    
                    rx.text("Para elegir el instrumento adecuado, es importante considerar factores como:",
                          **c_styles.TEXT_STYLE["body"],
                          margin_bottom=Size.MEDIUM.value),
      
                    #lista de instumentos financieros
                    rx.list.ordered(
                      rx.list.item(rx.text.strong("Plazo:",**c_styles.TEXT_STYLE["highlight"])," Se refiere al tiempo durante el cual se mantiene una inversión "
                              "antes de obtener rendimientos o recuperar el capital. Puede ser ",rx.text.strong("corto plazo"),
                              " (hasta 1 año), ",rx.text.strong("mediano plazo")," (entre 1 y 5 años) o ",
                              rx.text.strong("largo plazo")," (más de 5 años).",
                              margin_bottom=Size.DEFAULT.value,
                              **c_styles.TEXT_STYLE["body"]),
                    
                    rx.list.item(rx.text.strong("Riesgo:", **c_styles.TEXT_STYLE["highlight"])," Representa la posibilidad de perder dinero en una inversión. ",
                              rx.text.strong("Inversiones seguras")," (como un plazo fijo o bonos gubernamentales)"
                              " ofrecen menor riesgo pero rendimientos más bajos, mientras que",
                              rx.text.strong(" inversiones más volátiles")," (como acciones u opciones) pueden generar "
                              "mayores ganancias, pero también mayores pérdidas.",
                              margin_bottom=Size.DEFAULT.value,
                              **c_styles.TEXT_STYLE["body"]),
                    
                    rx.list.item(rx.text.strong("Liquidez:", **c_styles.TEXT_STYLE["highlight"])," Indica qué tan rápido y fácilmente se puede vender una inversión y convertirla "
                              "en efectivo sin perder valor. Inversiones como acciones o FCI tienen alta liquidez, "
                              "mientras que inmuebles o bonos a largo plazo suelen tener menor liquidez.",
                              margin_bottom=Size.DEFAULT.value,
                              **c_styles.TEXT_STYLE["body"]),
                    
                    rx.list.item(rx.text.strong("Rentabilidad esperada:", **c_styles.TEXT_STYLE["highlight"])," Es la ganancia potencial que se puede obtener de una inversión. "
                              "A mayor riesgo, generalmente se espera una mayor rentabilidad. Por ejemplo, los plazos "
                              "fijos tienen baja rentabilidad pero son seguros, mientras que las acciones pueden generar "
                              "altos retornos pero con mayor incertidumbre.",
                              margin_bottom=Size.DEFAULT.value,
                              **c_styles.TEXT_STYLE["body"]),
                      
                      list_style_type="disc",
                      color="white",
                      margin_bottom=Size.DEFAULT.value,
                    ),
       
       
                    rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),
       
                    #seccion 3                        
                    rx.heading("3. Diferencias entre Renta Fija y Renta Variable", 
                               **c_styles.TEXT_STYLE["subtitle"],
                               margin_bottom=Size.MEDIUM.value),
                    
                    rx.text("Las inversiones pueden dividirse en renta fija y renta variable, dependiendo de la previsibilidad"
                            " de sus rendimientos y el nivel de riesgo asociado.", **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.DEFAULT.value),
                    #imagen diferencias renta fija vs renta variable
                    rx.hstack(
                        zoomed_image("/diferencia_fija_variable.jpg?refresh=1"),
                        margin_bottom=Size.DEFAULT.value
                    ),
                    #Renta fija
                    rx.heading("Renta fija",
                               **c_styles.TEXT_STYLE["subseccion"],
                               margin_bottom=Size.MEDIUM.value),
                    
                    rx.text("Son inversiones con un retorno predecible, donde se conoce de antemano la tasa de interés o "
                          "el pago que se recibirá. Son más seguras, pero su rentabilidad suele ser menor en comparación con "
                          "la renta variable", **c_styles.TEXT_STYLE["body"],
                          margin_bottom=Size.DEFAULT.value),
      
                    #lista de renta fija
                    rx.list.ordered(
                      rx.list.item(rx.text.strong("Plazo fijo:", **c_styles.TEXT_STYLE["highlight"])," Depósito de dinero en un banco durante un tiempo determinado,"
                         " a cambio de un interés fijo al finalizar el período.",
                         margin_bottom=Size.MEDIUM.value),
                      
                      rx.list.item(rx.text.strong("Bonos:", **c_styles.TEXT_STYLE["highlight"])," Instrumentos de deuda emitidos por gobiernos o empresas. Funcionan "
                         "como un préstamo en el que el inversionista recibe intereses periódicos hasta el vencimiento.",
                         margin_bottom=Size.MEDIUM.value),
                      
                      rx.list.item(rx.text.strong("Letras:", **c_styles.TEXT_STYLE["highlight"])," Títulos de deuda pública a corto plazo, emitidos por el Estado para "
                          "financiarse. Suelen ofrecer rendimientos menores que los bonos, pero con menor riesgo.",
                          margin_bottom=Size.MEDIUM.value),
                    
                    list_style_type="disc",
                    color="white",
                    margin_bottom=Size.DEFAULT.value
                    ),
                    
                    #Renta variable
                    rx.heading("Renta Variable",
                               **c_styles.TEXT_STYLE["subseccion"],
                               margin_bottom=Size.MEDIUM.value),
                    
                    rx.text("En estas inversiones, la rentabilidad no está garantizada y depende de factores del mercado,"
                            " lo que las hace más volátiles pero con un potencial de ganancias mayor.", 
                            **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.DEFAULT.value),
                    
                    #lista de instrmentos
                    rx.list.ordered(
                      rx.list.item(rx.text.strong("Acciones/CEDEARS:",**c_styles.TEXT_STYLE["highlight"])," Representan una parte de una empresa. Su valor varía según la oferta"
                          " y demanda en la bolsa, pudiendo generar ganancias por apreciación del precio o por dividendos",
                          margin_bottom=Size.MEDIUM.value),
                      
                      rx.list.item(rx.text.strong("Commodities:", **c_styles.TEXT_STYLE["highlight"])," Materias primas como oro, petróleo o soja, cuyos precios fluctúan en "
                          "función de la oferta y demanda global.",
                          margin_bottom=Size.MEDIUM.value),
                      
                      rx.list.item(rx.text.strong("Opciones:", **c_styles.TEXT_STYLE["highlight"])," Derivados financieros que otorgan el derecho (pero no la obligación) "
                          "de comprar o vender un activo en una fecha futura a un precio determinado. Se utilizan para especulación"
                          " o cobertura de riesgos.",
                          margin_bottom=Size.MEDIUM.value),
                      
                      rx.list.item(rx.text.strong("Criptomonedas:", **c_styles.TEXT_STYLE["highlight"])," Activos digitales descentralizados que operan en tecnología blockchain."
                          " Su valor es altamente volátil y depende del mercado. Mas adelante abundaremos mas sobre ellas.",
                          margin_bottom=Size.MEDIUM.value),
                      
                      list_style_type="disc",
                      color="white",
                      margin_bottom=Size.DEFAULT.value
                    ),
      
                    #cuadro comparativo renta fija vs renta variable
                    rx.vstack(
                        module2_table2(),
                        mobile_module2_table2(),      
                    margin_bottom=Size.DEFAULT.value),
                
                rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),
                
                    #seccion 4 que son los cedears
                        rx.heading("4. ¿Qué son los CEDEARs?",
                               **c_styles.TEXT_STYLE["subtitle"],
                               margin_bottom=Size.MEDIUM.value),
                    
                        rx.text("Si vivís en Argentina seguramente alguna vez hayas escuchado"
                            "sobre los CEDEARS, ¿Que realmente son?.",
                            **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.MEDIUM.value),
                    
                        rx.text("CEDEAR significa Certificado de Depósito Argentino. Son activos que representan acciones de"
                            " empresas extranjeras (como Apple, Tesla o Coca-Cola), pero que se pueden comprar y vender "
                            "en la Bolsa de Argentina (BYMA)",
                            **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.MEDIUM.value),
                    
                        rx.heading("¿Qué te permite un CEDEAR?",
                            **c_styles.TEXT_STYLE["subseccion"],
                            margin_bottom=Size.MEDIUM.value),
                    
                    #lista 
                rx.list.ordered(
                        rx.list.item("Invertir en empresas de Estados Unidos u otros países sin necesidad de tener una "
                            "cuenta en el exterior.",
                          margin_bottom=Size.MEDIUM.value),
                      
                      rx.list.item("Estar expuesto al tipo de cambio dólar CCL (Contado con Liquidación).",
                          margin_bottom=Size.MEDIUM.value),
                      
                      rx.list.item("Diversificar tu cartera con acciones globales.",
                          margin_bottom=Size.MEDIUM.value),

                      list_style_type="disc",
                      color="white",
                      margin_bottom=Size.DEFAULT.value
                ),

                        rx.heading("¿Cuales son sus ventajas?",
                               **c_styles.TEXT_STYLE["subseccion"],
                               margin_bottom=Size.MEDIUM.value),
                        
                        #lista de ventajas
                rx.list.ordered(
                        rx.list.item("Podés invertir en empresas como Google, Microsoft, Amazon, etc.",
                          margin_bottom=Size.MEDIUM.value),
                      
                      rx.list.item("Se compran en pesos.",
                          margin_bottom=Size.MEDIUM.value),
                      
                      rx.list.item("Están protegidos por la suba del dólar (porque se ajustan al tipo de cambio).",
                          margin_bottom=Size.MEDIUM.value),
                      
                      rx.list.item("Ideal para proteger tus ahorros frente a la inflación o devaluación.",
                          margin_bottom=Size.MEDIUM.value),

                      list_style_type="disc",
                      color="white",
                      margin_bottom=Size.DEFAULT.value
                ),
                    
                        #lista de puntos a tener en cuenta
                        rx.text.strong("Puntos a tener en cuenta",
                               **c_styles.TEXT_STYLE["body"]),
                       
                       rx.list.ordered(
                        rx.list.item("No pagan dividendos en muchos casos, o lo hacen en muy baja proporción.",
                          margin_bottom=Size.MEDIUM.value),
                      
                      rx.list.item("Tienen menor liquidez que acciones locales.",
                          margin_bottom=Size.MEDIUM.value),
                      
                      rx.list.item("Están protegidos por la suba del dólar (porque se ajustan al tipo de cambio).",
                          margin_bottom=Size.MEDIUM.value),
                      
                      rx.list.item("Tenés que ver la relación de conversión, ya que no siempre 1 CEDEAR = 1 acción.",
                          margin_bottom=Size.MEDIUM.value),

                      list_style_type="disc",
                      color="white",
                      margin_bottom=Size.DEFAULT.value
                ),
                    
                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),

                        #seccion 5 fondos comunes de inversion
                        rx.heading("5. Fondos comunes de inversion.",
                                   **c_styles.TEXT_STYLE["subtitle"],
                                   margin_bottom=Size.MEDIUM.value),
                        
                        rx.text("Los Fondos Comunes de Inversión (FCI) son herramientas que permiten invertir "
                            "sin necesidad de conocimientos avanzados. Funcionan agrupando dinero de muchas personas "
                            "y gestionándolo en distintos activos según el tipo de fondo.",
                            **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.DEFAULT.value),
                        
                        #imagen fci 
                        rx.hstack(
                                zoomed_image("/fci_image.jpg?refresh=1"),
                                margin_bottom=Size.DEFAULT.value,
                        ),
      
                        #tipos de fci
                        rx.heading("Tipos de FCI según sus características:",
                                   **c_styles.TEXT_STYLE["subseccion"],
                                   margin_bottom=Size.MEDIUM.value),
                        
                        rx.text("1.",rx.text.strong(" Según el riesgo:"),
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.MEDIUM.value
                                ),
                    
                        #lista de fci
                        rx.list.ordered(
                        rx.list.item(rx.text.strong("Renta fija:", **c_styles.TEXT_STYLE["highlight"])," Invierte en instrumentos estables "
                                "como bonos o plazos fijos. Bajo riesgo y menor rentabilidad."),
                        
                        rx.list.item(rx.text.strong("Renta variable:",**c_styles.TEXT_STYLE["highlight"])," Invierte en acciones u otros activos de mayor "
                                "volatilidad. Mayor riesgo y potencial de ganancia."),
                        list_style_type="disc",
                        color="white",
                        margin_bottom=Size.DEFAULT.value,
                        align_items="center"
                        ),
      
      
                        rx.text("2.​",rx.text.strong(" Mercado de capitales:"),
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.MEDIUM.value
                        ),
                    #lista de fci
                    rx.list.ordered(
                        rx.list.item(rx.text.strong("Según la moneda:", **c_styles.TEXT_STYLE["highlight"])," Fondos en pesos."),
                        rx.list.item(rx.text.strong("Renta variable:", **c_styles.TEXT_STYLE["highlight"])," Fondos en dólares."),
                        list_style_type="disc",
                        color="white",
                        margin_bottom=Size.DEFAULT.value,
                        align_items="center"
                    ),
      

                    rx.text("3.",rx.text.strong(" Según el mercado en el que invierten:"),
                            **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.MEDIUM.value),
                            
                    #lista de fci
                    rx.list.ordered(
                      rx.list.item(rx.text.strong("Mercado de dinero:", **c_styles.TEXT_STYLE["highlight"])," Plazos fijos, bonos cortos, inversiones de bajo riesgo."),
                      rx.list.item(rx.text.strong("Mercado de capitales:", **c_styles.TEXT_STYLE["highlight"]),"  Acciones, bonos de largo plazo, instrumentos "
                        "financieros más complejos"),
                      rx.list.item(rx.text.strong("Mercados internacionales:", **c_styles.TEXT_STYLE["highlight"])," FCI que invierten en activos de otros países."
                       " financieros más complejos"),
                    list_style_type="disc",
                    color="white",
                    margin_bottom=Size.DEFAULT.value
                    ),
      
                    rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),
      
                    #fin del modulo 2 conclusion y resumen
                    rx.heading("Conclusión del Módulo 2: ", **c_styles.TEXT_STYLE["subtitle"],
                               margin_bottom=Size.DEFAULT.value),
                    rx.list.ordered(
                      rx.list.item(rx.text.strong("Resumen:")," En este módulo exploramos los distintos instrumentos de inversión, "
                          "diferenciamos entre renta fija y renta variable, entendimos el funcionamiento de los Fondos Comunes"
                          " de Inversión y la importancia de conocer nuestro perfil de inversor.",
                          margin_bottom=Size.MEDIUM.value),
                      rx.list.item(rx.text.strong("Aplicación Práctica:")," Reflexioná sobre tu tolerancia al riesgo y qué tipo de inversor"
                          " sos. Investigá qué instrumentos de inversión se alinean mejor con tus objetivos "
                       "financieros y empezá a evaluar opciones reales en el mercado",
                       margin_bottom=Size.MEDIUM.value),
                      rx.list.item(rx.text.strong("Próximos Pasos:")," En el siguiente módulo, daremos un paso más profundo en el mundo "
                       "de las inversiones y nos adentraremos en el trading, explorando estrategias, el analisis tecnico, velas doji "
                       "y herramientas clave para operar en los mercados financieros.",
                       margin_bottom=Size.MEDIUM.value),
                    list_style_type="disc",
                    color="white",
                    margin_bottom=Size.DEFAULT.value
                    ),
      
                ),
                #_____________________________________________________________________________________#
                 width="100%",
                border_radius="10px",
                align_items="center",
                justify_content="center",
                max_width="600px",
                size="2"
              )
            ),
        next_button("/module_3"),
        back_button("/module_1"),
        footer(),
        **c_styles.COURSE_STYLES
    )