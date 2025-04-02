import reflex as rx
from mi_web.components.course_components.links_course.course_navbar import navbar_course
from mi_web.components.general_components.footer import footer
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
import mi_web.styles.course_styles as c_styles
from mi_web.components.course_components.links_course.next_button import next_button
from mi_web.components.course_components.links_course.back_button import back_button
from mi_web.components.general_components.zoom_images import zoomed_image
from mi_web.components.course_components.module7_components.modulo7_imagenes import gif_los_indicadores


def module_7() -> rx.Component:
    return rx.box(
        navbar_course(),
        rx.center( 
            rx.vstack(
                rx.box(
                    #titulo indicadores y entradas
                    rx.heading("Módulo 7: Indicadores y Entradas Exitosas",
                               **c_styles.TEXT_STYLE["title"],
                               margin_top="35px"),
                    
                    #seccion 1 indicadores tecnicos
                    rx.heading("Los Indicadores Tecnicos ",
                               **c_styles.TEXT_STYLE["subtitle"],
                                margin_bottom=Size.MEDIUM.value),
                    
                    #gif los indicadores
                    rx.box(
                            gif_los_indicadores(),
                             margin_bottom=Size.DEFAULT.value
                    ),
                    
                    rx.text("Los indicadores técnicos son herramientas que "
                            "ayudan a los traders a interpretar los movimientos del "
                            "mercado de manera más objetiva. No son predictores absolutos "
                            "del precio, pero permiten identificar tendencias, momentos de "
                            "entrada, salida, y la fuerza del mercado.",
                            **c_styles.TEXT_STYLE["body"]),
                    rx.text(rx.text.strong("A continuación")," te muestro los Indicadores Tecnicos mas importantes"
                            " y los que yo te recomiendo utilizar:",
                            **c_styles.TEXT_STYLE["body"]),
                    
                    #indicador medias moviles
                    rx.heading("1. Medias Móviles (MAs - Moving Averages)",
                               **c_styles.TEXT_STYLE["subseccion"]),
                    
                    rx.text("Las medias móviles son líneas en el precio para que veas la dirección "
                            "general del mercado. Imagina que promedian los precios de los últimos "
                            "días (puede ser 21, 30, 150, 200, depende de la temporalidad que elijas)"
                            " y te dibujan una curva en el gráfico. Si la línea sube, la tendencia "
                            "es alcista (el precio tiende a subir); si baja, es bajista (tiende a bajar).",
                            **c_styles.TEXT_STYLE["body"]),
                    
                    #imagen ejemplo medias moviles
                    rx.box(
                            zoomed_image("/medias_moviles_ejemplo.png?refresh=1"),
                            margin_bottom=Size.DEFAULT.value
                            ),
                    
                    
                     #contexto imagen medias moviles
                    rx.list.unordered(
                        rx.list.item(rx.text.strong("🔵 Media Móvil de 21 períodos (SMA21) ->"),
                                     " Línea azul, de corto plazo.",
                                     margin_bottom=Size.MEDIUM.value,),
                        rx.list.item(rx.text.strong("🟢 Media Móvil de 30 períodos (SMA30) ->"),
                                     "Línea verde, de corto/medio plazo.",
                                     margin_bottom=Size.MEDIUM.value,),
                        rx.list.item(rx.text.strong("🟠 Media Móvil de 150 períodos (EMA150) ->"),
                                     "Línea naranja, de largo plazo.",
                                     margin_bottom=Size.MEDIUM.value,),
                        rx.list.item(rx.text.strong("🔴 Media Móvil de 200 períodos (EMA200) ->"),
                                     "Línea roja, de referencia para tendencia general",
                                     margin_bottom=Size.MEDIUM.value,),
                        list_style_type="none",
                        color="white",
                        margin_bottom=Size.DEFAULT.value,
                    ),     
                    
                    
                    rx.text(rx.text.strong("Hay dos tipos principales:")," la simple (SMA) que solo suma y divide los precios,"
                            " y la exponencial (EMA) que le da más peso a los días recientes, así reacciona más rápido. "
                            "Los traders las usan para encontrar momentos de compra o venta: por ejemplo, si una media corta "
                            "(como la de 21 días) cruza por encima de una larga (como la de 30 días), puede ser señal de compra. ",
                            rx.text.strong("Pero no es magia"),", solo te da una idea de la tendencia, y hay que combinarla con otros indicadores.",
                            **c_styles.TEXT_STYLE["body"]), 
                    
                    #indicador rsi
                    rx.heading("2. RSI (Índice de Fuerza Relativa)",
                               **c_styles.TEXT_STYLE["subseccion"]),
                    
                    rx.text("El RSI (Relative Strength Index) es un oscilador que mide la fuerza"
                            " y velocidad de los movimientos del precio en una escala de 0 a 100.",
                        **c_styles.TEXT_STYLE["body"]),
                     #imagen de ejemplo
                    rx.box(
                            zoomed_image("/rsi_ejemplo.png?refresh=1")),
                    
                    #contexto imagen
                    rx.text("En el gráfico, el Índice de Fuerza Relativa (RSI) se encuentra en 43.82, lo que indica que el activo"
                            " está en una zona neutral (entre 30 y 70).",
                            **c_styles.TEXT_STYLE["body"]),
                    
                    rx.text("si el RSI de un grafico es",rx.text.strong(" Mayor que 70"), " significa que el"
                            "activo esta en sobrecompra, o sea, mucha gente ha comprado y el precio podría empezar a bajar."
                            "De lo contrario si el RSI ",rx.text.strong("es menor a 30 "),"significa que el activo"
                            "está sobrevendido lo que quiere decir que hay pocos compradores y el precio podria subir pronto.",
                    **c_styles.TEXT_STYLE["body"]),
                    
                    rx.heading("¿Como se utilizan? ",
                               **c_styles.TEXT_STYLE["subseccion"]),
                    rx.text("Mirá el movimiento del precio en un periodo de tiempo (depende de tu estrategia), y compará cuánto "
                            "subió versus cuánto bajó. Pero no te preocupes por la fórmula exacta ahora, los gráficos de "
                            "trading lo hacen por vos. Solo fijáte en esos niveles, 70 y 30, y usálos como una señal para "
                            "decidir si entras o sales. No confies 100% en un solo indicador, siempre tené en cuenta"
                            "el contexto del mercado y demas factores.",
                            **c_styles.TEXT_STYLE["body"]),
                    
                    
                    #indicador konkorde
                    rx.heading("3. Konkorde",
                               **c_styles.TEXT_STYLE["subseccion"]),
                    rx.text("El Konkorde es un indicador que permite identificar la actividad de los grandes inversores "
                            "(manos fuertes) y de los minoristas (manos débiles)",
                            **c_styles.TEXT_STYLE["body"]),
                    
                        #imagen ejemplo konkorde
                    rx.box(
                            zoomed_image("/konkorde_ejemplo.png?refresh=1"),
                            ),
                    #contexto imagen konkorde
                    rx.text("En el gráfico del Koncorde de GGAL: en el 'máximo' de febrero, azul arriba y verde abajo "
                            "(grandes compran, pequeños venden), el precio sube. En el 'mínimo' de abril, azul y verde "
                            "abajo (todos venden), el precio cae. La montaña marrón y línea roja confirman la tendencia: "
                            "si baja, el precio también.",
                            **c_styles.TEXT_STYLE["body"]),
                
                    rx.text(rx.text.strong("El Koncorde es")," un mapa que te muestra qué están haciendo los 'grandes jugadores'"
                            " y los 'pequeños' en el mercado. las manos fuertes bancos, fondos de inversión, gente con mucho dinero "
                            "y las manos débiles, somos nosotros, los traders pequeños. Este indicador te ayuda a ver si "
                            "estos dos grupos están comprando o vendiendo, y cómo se mueve la tendencia del precio.",
                            **c_styles.TEXT_STYLE["body"]),
                    
                    rx.heading("Colores y señales:",
                            **c_styles.TEXT_STYLE["subseccion"],
                            margin_bottom=Size.DEFAULT.value),
                    #lista de elementos konkorde
                    rx.list.ordered(
                        rx.list.item(rx.text.strong("🟢 Verde: "),"Acumulación de manos fuertes (institucionales/grandes"
                                     " inversores comprando). ",
                                     margin_bottom=Size.MEDIUM.value),
                        rx.list.item(rx.text.strong("🔵 Azul: "),"Actividad de los minoristas o manos pequeñas. (nosotros)",
                                     margin_bottom=Size.MEDIUM.value),
                        rx.list.item(rx.text.strong("🔴 Rojo: "),"Venta de manos fuertes (distribución).",
                                     margin_bottom=Size.MEDIUM.value),
                        list_style_type="none",
                        color="white",
                        margin_bottom=Size.DEFAULT.value
                    ),           
                    
                    rx.heading(" ¿Como se utiliza? ",
                               **c_styles.TEXT_STYLE["subseccion"]),
                    rx.text(" si ves que el azul está arriba (manos fuertes comprando) y el verde está abajo "
                            "(manos débiles vendiendo), podrías pensar que los grandes están acumulando mientras "
                            "los pequeños se asustan y venden eso a veces significa que el precio podría subir pronto. "
                            "Pero ojo, no es una bola de cristal; es una herramienta que te da pistas, y siempre hay que "
                            "usarla con otras señales o un buen plan, porque el mercado no siempre sigue las reglas.",
                            **c_styles.TEXT_STYLE["body"]),
               
                    #importante
                    rx.heading("⚠️¡¡importante!!⚠️",
                               **c_styles.TEXT_STYLE["subseccion"]),
                    rx.text("Es importante recordar que ningún indicador es 100% preciso y que su mayor efectividad se logra "
                            "combinándolos entre sí y con otras herramientas del análisis técnico, como líneas de soporte y "
                            "resistencia o patrones de velas japonesas.",
                            **c_styles.TEXT_STYLE["body"]),
                    
                    rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                    
                    #seccion 2 tipos de entradas
                    rx.heading("Entradas Y Salidas Exitosas",
                               **c_styles.TEXT_STYLE["subtitle"],
                                margin_bottom=Size.DEFAULT.value
                                ),
                    
                    rx.heading("Entradas (Cuándo ingresar al mercado)",
                               **c_styles.TEXT_STYLE["subseccion"],
                               margin_bottom=Size.DEFAULT.value
                               ),
                        
                        #cruce de medias moviles
                    rx.text.strong("- Cruce de Medias Móviles (Golden Cross)",
                                   ),
                    rx.text("Entrada alcista cuando la media móvil de 21 perdiodos cruza hacia arriba las media móvil"
                            " de 30 periodos, Es una señal fuerte de cambio de tendencia al alza."
                            "teniendo en cuenta una entrada de",rx.text.strong(" Corto Plazo."),
                            **c_styles.TEXT_STYLE["body"]),
                    
                    #imagen ejemplo cruce medias moviles
                    rx.box(
                            zoomed_image("/golden_cross_alcista.png?refresh=1"),
                            margin_bottom=Size.DEFAULT.value
                    ),
                    #soporte de piso
                    rx.text.strong("- Soportes o Piso de un Canal Alcista",
                                   margin_top=Size.DEFAULT.value),
                    
                    rx.text("Si el precio toca repetidamente una zona de soporte clave y muestra rechazo con velas de reversión"
                            " o volumen creciente, es una señal de compra. Confirmar con RSI en sobreventa o divergencia alcista.",
                            **c_styles.TEXT_STYLE["body"],
                        ),
                    
                    #imagen ejemplo soportes de piso
                    rx.box(
                            zoomed_image("/entrada_canal_alcista.png?refresh=1"),
                            margin_bottom=Size.DEFAULT.value
                            ),
                    
                    #ruptura de resistencia
                    rx.text.strong("- Ruptura de Soporte con Volumen",
                                   ),
                    rx.text("Si el precio rompe una resistencia fuerte con aumento de volumen, indica una posible continuación "
                            "alcista. Confirmar con cierre de vela por encima de la resistencia.",
                            **c_styles.TEXT_STYLE["body"]),
                    
                    #imagen ejemplo soporte de resistencia
                    rx.box(
                            zoomed_image("/ruptura_resistencia_volumen.png?refresh=1"),
                            margin_bottom=Size.DEFAULT.value
                            ),
                    
                    rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                    #__________________________________________________________________________________________-#
                    #salidas
                    rx.heading("Salidas (Cuándo tomar ganancias o minimizar pérdidas)",
                               **c_styles.TEXT_STYLE["subseccion"]),
                    
                    #cruce de medias movile
                    rx.text.strong("- Cruce de Medias Móviles (Death Cross)",
                                   ),
                    rx.text("Salida bajista cuando la media móvil de 21 periodos cruza hacia abajo la media movil de"
                            "30 periodos. Señal de cambio de tendencia bajista.Es una señal fuerte de cambio de tendencia "
                            "bajista. teniendo en cuenta un grafico de",rx.text.strong(" Corto Plazo."),
                            **c_styles.TEXT_STYLE["body"]),
                    
                    #imagen ejemplo death cross
                    rx.box(
                            zoomed_image("/death_cross_bajista.png?refresh=1"),
                            margin_bottom=Size.DEFAULT.value
                    ),
                    
                    #resistencia o techo canal alcista
                    rx.text.strong("- Resistencias o Techo de un Canal Alcista",
                                   ),
                    rx.text("Si el precio toca una resistencia clave y no logra romperla, es momento de considerar una salida."
                        "Confirmar con velas de reversión, volumen decreciente o RSI en sobrecompra.",
                            **c_styles.TEXT_STYLE["body"]),
                    
                        #ejemplo techo canal
                        rx.box(
                                zoomed_image("/salida_canal_alcista.png?refresh=1"),
                                margin_bottom=Size.DEFAULT.value
                        ),
                    
                    #perdida de soporte con volumen
                    rx.text.strong("- Pérdida de Soporte con Volumen",
                                   ),
                    rx.text("Si el precio rompe un soporte importante con aumento de volumen, es una señal de venta.",
                                "Puede indicar el inicio de una tendencia bajista fuerte.",
                            **c_styles.TEXT_STYLE["body"]),
                    
                    #ejemplo perdida soporte
                    rx.box(
                            zoomed_image("/ruptura_soporte_volumen.png?refresh=1"),
                            margin_bottom=Size.DEFAULT.value
                    ),
                    
                    rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                    
                    rx.heading("Consideraciones Finales",
                               **c_styles.TEXT_STYLE["subtitle"],
                               margin_bottom=Size.MEDIUM.value),
                    #lista de consideraciones finales
                    rx.list.ordered(
                        rx.list.item(rx.text.strong("No operar basándose en una sola señal,")," sino confirmar con acción "
                                     "del precio y volumen. "
                                     ),
                        rx.list.item(rx.text.strong("Siempre usar Stop Loss "),"para minimizar pérdidas en caso de "
                                     "que el mercado se mueva en contra."
                                     ),
                        rx.list.item(rx.text.strong(" No perseguir el precio. "),"Esperar confirmaciones antes de entrar "
                                     "o salir de una operación."),
                        rx.list.item(rx.text.strong(" No usar demasiados indicadores "),"usar demasiados indicadores puede "
                                     "ser contraproducente ya que puede confundirte."),
                        list_style_type="disc",
                        color="white",
                        margin_bottom=Size.DEFAULT.value
                    ),           
                    
                    rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                    
                    #conclusion del modulo 7
                    rx.heading("Conclusión del Módulo 7:", 
                               **c_styles.TEXT_STYLE["subtitle"],
                               margin_bottom=Size.DEFAULT.value
                               ),
                    
                    rx.list.ordered(
                        rx.list.item(rx.text.strong("Resumen:")," En este módulo aprendimos sobre los principales indicadores técnicos"
                                     " y cómo utilizarlos para identificar oportunidades de entrada y salida en el mercado. Analizamos "
                                     "herramientas como las medias móviles, el RSI y el indicador Konkorde, comprendiendo su función y la "
                                     "importancia de combinarlas con otras estrategias para mejorar la toma de decisiones en trading."),
                        rx.list.item(rx.text.strong("Aplicación Práctica:"),"Te invitamos a aplicar estos indicadores en un simulador de "
                                     "trading o en tus análisis diarios. Practicá la identificación de tendencias, soportes y resistencias, "
                                     "y experimentá con diferentes combinaciones de indicadores para evaluar su efectividad. Recordá siempre "
                                     "confirmar las señales antes de operar y gestionar adecuadamente el riesgo. "),
                        rx.list.item(rx.text.strong("Próximos Pasos:"),""),
                        list_style_type="disc",
                        color="white",
                        margin_bottom=Size.DEFAULT.value
                    ),
                    
                    
                #_____________________________________________________________________________________#   
                ),
                width="100%",
                border_radius="10px",
                align_items="center",
                justify_content="center",
                max_width="600px",
                size="2"   
                ),
        ),
        back_button("/module_6"),
        next_button("/module_8"),
        footer(),
        **c_styles.COURSE_STYLES
    )   
