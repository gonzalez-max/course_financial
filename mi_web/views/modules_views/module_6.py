import reflex as rx
from mi_web.components.general_components.nav_bar import navbar_dropdown
from mi_web.components.general_components.footer import footer
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
import mi_web.styles.course_styles as c_styles
from mi_web.components.general_components.drawer import drawer
from mi_web.components.links.next_button import next_button
from mi_web.components.links.back_button import back_button
from mi_web.components.general_components.zoom_images import zoomed_image
from mi_web.components.general_components.imagenes.image_despedida import image_despedida


import reflex as rx
from mi_web.styles.styles import Size as Size  # Ajusta la importación si c_styles está en otro archivo

def module_6() -> rx.Component:
    return rx.box(
        navbar_dropdown(),
        drawer(),
        rx.center( 
            rx.vstack(
                rx.box(
                         
                        #titulo del modulo 6
                        rx.heading("Módulo 6: Tendencias y como identificarlas", **c_styles.TEXT_STYLE["title"]),
                        
                        #seccion 1 las tendencias
                        rx.heading("1. Las Tendencias", **c_styles.TEXT_STYLE["subtitle"]),
                       
                        rx.text("Identificar tendencias en el mercado es clave para el éxito. La validez de los "
                                "máximos y mínimos en una tendencia depende de la distancia vertical entre ellos. "
                                "Distancias cortas pueden ser trampas del mercado.",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                    
                        rx.text("Un cambio real ocurre cuando un nuevo impulso supera el último máximo en una "
                                "tendencia alcista o cae por debajo del último mínimo en una bajista. "
                                "Es esencial desarrollar la habilidad de identificar correctamente las tendencias "
                                "para evitar engaños del mercado.",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                
                        #imagen de ejemplo
                        rx.hstack(
                                zoomed_image("/tendencia_alcista_bajista.png?refresh=1"),
                                margin_bottom=Size.REGULAR.value
                        ),
                        
                        #tips
                        rx.heading("Importante Recordar:", **c_styles.TEXT_STYLE["subseccion"]),
                        rx.text("Para graficar las líneas de tendencia, ", rx.text.strong("siempre se deben tomar desde las mechas de "
                                "las velas.")," En una tendencia alcista, se debe graficar desde la parte inferior, y en "
                                "una tendencia bajista, desde la parte superior de las velas.",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),

                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),
                    
                        #seccion 2 velocidad de las tendencias
                        rx.heading("2. Velocidad de las tendencias", **c_styles.TEXT_STYLE["subtitle"]),
                        rx.text("La velocidad de las tendencias se identifica mediante líneas dinámicas y la pendiente de la "
                                "tendencia. A mayor velocidad, la pendiente se vuelve más pronunciada, indicando un posible final "
                                "de la tendencia.", **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                   
                        rx.text("El quiebre del último mínimo señala un cambio de tendencia. Comparar la distancia "
                                "y el tiempo de impulsos y retrocesos ayuda a evaluar la calidad de la tendencia y detectar posibles "
                                "zonas de acumulación o distribución.",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                    
                        #imagen de velocidad de las tendencias
                        rx.hstack(
                                zoomed_image("/velocidad_de_las_tendencias.png?refresh=1"),
                                margin_bottom=Size.DEFAULT.value
                        ),

                        #explicacion de la imagen
                        rx.text("En la imagen se ve cómo la velocidad de la tendencia se "
                                "incrementa a medida que se forman nuevas líneas con "
                                "pendientes más pronunciadas (1°, 2°, 3°). Cada línea representa un "
                                "aumento en la velocidad del movimiento alcista. Este comportamiento "
                                "sugiere que el precio está acelerando, pero también que podría estar "
                                "acercándose a un punto de agotamiento. Esto puede "
                                "señalar el inicio de un cambio de tendencia.",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                    
                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),
                    
                        #seccion 3 El enemigo de las tendencias  
                        rx.heading("3. El enemigo de las tendencias", **c_styles.TEXT_STYLE["subtitle"]),
                        rx.text("El enemigo de las tendencias es el triángulo invertido, es una señal "
                                "de que el mercado está acumulando volumen para un movimiento agresivo y "
                                "puede convertirse en una acumulación o distribución, "
                                "colocar un STOP-LOSS es esencial",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                
                        #imagen enemigo tendencias
                        rx.hstack(
                                zoomed_image("/enemigo_tendencias.png?refresh=1"),
                                margin_bottom=Size.DEFAULT.value
                        ),
                        #explicacion de la imagen
                        rx.text("El gráfico muestra un triángulo invertido, conocido por su alta volatilidad."
                            " Este patrón indica que el mercado está acumulando volumen para un posible "
                            "movimiento fuerte. Puede derivar en una fase de acumulación o distribución, "
                            "por lo que es clave usar un stop-loss para gestionar riesgos y proteger el capital.",
                            **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                    
                        #subseccion como poner un stop_loss
                        rx.heading(" ¿ Como ponemos un Stop-Loss ?", **c_styles.TEXT_STYLE["subseccion"]),

                        #como poner un stop loss
                        rx.text("Para colocar un stop-loss en un rango, sigue estos pasos:",
                                margin_bottom=Size.DEFAULT.value, **c_styles.TEXT_STYLE["body"]),
                        rx.list.ordered(
                                rx.list.item(rx.text.strong("Debajo del Soporte (en compra):")," Si "
                                             "entrás en una posición de compra dentro del rango, colocá "
                                             "el stop-loss un poco por debajo del último mínimo relevante "
                                             "o del soporte del rango. Esto te protege si el precio cae y "
                                             "rompe el rango hacia abajo."
                                             , margin_bottom=Size.DEFAULT.value),
                                rx.list.item(rx.text.strong("Encima de la Resistencia (en venta):")," Si "
                                             "tomás una posición de venta dentro del rango, ubicá el "
                                             "stop-loss por encima del último máximo o de la resistencia "
                                             "del rango. Así limitás pérdidas si el precio sube y rompe al alza."
                                             , margin_bottom=Size.DEFAULT.value),
                                rx.list.item(rx.text.strong("Margen de Seguridad:")," Si tomás una posición de "
                                              "venta dentro del rango, ubicá el stop-loss por encima del último "
                                              "máximo o de la resistencia del rango. Así limitás pérdidas si el "
                                              "precio sube y rompe al alza."
                                              , margin_bottom=Size.DEFAULT.value),
                                rx.list.item(rx.text.strong(" Tamaño del Stop:")," Ajustá el tamaño de tu "
                                             "posición para que la pérdida potencial no exceda el 1-2% de tu capital."
                                             , margin_bottom=Size.DEFAULT.value),
                                list_style_type="decimal",
                                color="white",
                                margin_bottom=Size.DEFAULT.value,
                                ),
                        #imagen ejemplo stop-loss
                        rx.vstack(
                                 zoomed_image("/stop-loss.png?refresh=1"),
                                 margin_bottom=Size.REGULAR.value
                        ),
                        
                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),
                        
                        #Seccion 4 Confirmación de Tendencias y Falsas Rupturas
                        rx.heading("4. Confirmación de Tendencias y Falsas Rupturas", **c_styles.TEXT_STYLE["subtitle"]),
                        
                        rx.text("Una de las principales causas de errores en el análisis de tendencias es confundir una "
                                "falsa ruptura con un cambio real. Para confirmar una tendencia, "
                                "es importante observar lo siguiente:",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),

                        #lista de confirmacion de tendencias
                        rx.list.ordered(
                                rx.list.item(rx.text.strong("Volumen:")," Una ruptura acompañada de un volumen alto "
                                             "es más fiable. Si el precio rompe un soporte o resistencia con poco "
                                             "volumen, podría ser una falsa ruptura."
                                             , margin_bottom=Size.DEFAULT.value),
                                rx.list.item(rx.text.strong("Cierre de Velas:")," Esperar a que una vela cierre por"
                                             " encima de la resistencia o por debajo del soporte antes de "
                                             "confirmar la ruptura. Las mechas pueden indicar rechazo del precio."
                                             , margin_bottom=Size.DEFAULT.value),
                                rx.list.item(rx.text.strong("Retesteo:")," Una ruptura sólida suele venir acompañada"
                                              " de un retesteo, donde el precio vuelve a la zona rota y confirma "
                                              "el nuevo soporte o resistencia antes de continuar."
                                              , margin_bottom=Size.DEFAULT.value),
                                list_style_type="disc",
                                color="white",
                                margin_bottom=Size.DEFAULT.value,
                                ),
                                
                        rx.heading("Aca te presentamos algunos tipos de rupturas:", **c_styles.TEXT_STYLE["subtitle"]),
                                
                        #ejemplos de cada ruptura
                        rx.heading("Ruptura resistencia", **c_styles.TEXT_STYLE["subseccion"]),
                        rx.text("El precio formó una base horizontal tocando tres veces una"
                                " resistencia sin lograr superarla. Finalmente, una gran vela "
                                "verde rompió la resistencia, iniciando una fuerte tendencia "
                                "alcista. La resistencia se convirtió en soporte, el precio "
                                "impulsó hasta un 60% de incremento.",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                                        
                        rx.hstack(       
                                zoomed_image("/ruptura_resistencia.png?refresh=1"),
                                margin_bottom=Size.REGULAR.value),
                                        
                        rx.heading("Ruptura soporte", **c_styles.TEXT_STYLE["subseccion"]),
                        rx.text("El precio rebotó varias veces en una zona de soporte hasta "
                                "que una vela roja rompió ese nivel, iniciando un impulso bajista. "
                                "Tras la ruptura, el soporte se convirtió en resistencia, actuando "
                                "como un nuevo techo para el precio.",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                                        
                        rx.hstack(
                                zoomed_image("/ruptura_soporte.png?refresh=1"),
                                margin_bottom=Size.REGULAR.value),
                                        
                        rx.heading("Ruptura patrón técnico", **c_styles.TEXT_STYLE["subseccion"]),
                        rx.text("Las rupturas clásicas ocurren en patrones técnicos como banderas, "
                                "triángulos o cuñas, donde el precio rebota entre soportes y resistencias. "
                                "En el ejemplo, un canal bajista con dos líneas descendentes mostró varios "
                                "rebotes antes de un breakout, que dio paso a un nuevo impulso alcista.",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                        rx.hstack(        
                                 zoomed_image("/ruptura_patron_tecnico.png?refresh=1"),
                                 margin_bottom=Size.REGULAR.value),
                                        
                        rx.heading("Falsa ruptura", **c_styles.TEXT_STYLE["subseccion"]),
                        rx.text("Las falsas rupturas ocurren cuando, tras romper una resistencia, el precio "
                                "retrocede y vuelve al punto de partida. Aunque inicialmente parece una ruptura"
                                " exitosa, una vela bajista con volumen similar puede indicar el fracaso. "
                                "Esto deja en pérdida a quienes entraron en la ruptura.",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                         rx.hstack(       
                                zoomed_image("/falsa_ruptura.png?refresh=1"),
                                margin_bottom=Size.REGULAR.value),
                        
                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),
                                
                        #resumen y conclusion del modulo 6
                        rx.heading("Conclusión del Módulo 6: ", **c_styles.TEXT_STYLE["subtitle"]),
                        rx.list.ordered(
                                rx.list.item(rx.text.strong("Resumen:")," Aprendimos a identificar"
                                             " tendencias en el mercado, reconociendo la validez de "
                                             "máximos y mínimos, y cómo la velocidad de las tendencias "
                                             "(medida con líneas dinámicas) puede señalar posibles "
                                             "agotamientos. Exploramos el triángulo invertido como un "
                                             "enemigo de las tendencias, su relación con acumulación o "
                                             "distribución, y cómo gestionar riesgos con stop-loss o salidas "
                                             "manuales. También estudiamos cómo confirmar tendencias y evitar "
                                             "falsas rupturas usando volumen, cierres de velas y retesteos."
                                             , margin_bottom=Size.DEFAULT.value),
                                rx.list.item(rx.text.strong("Aplicación Práctica:")," Reflexioná sobre cómo "
                                             "identificar tendencias y patrones como el triángulo invertido "
                                             "en gráficos reales. Practicá trazando líneas de tendencia desde "
                                             "las mechas de las velas, marcando soportes y resistencias, y "
                                             "detectando rupturas o falsas señales para planificar "
                                             "entradas y salidas."
                                             , margin_bottom=Size.DEFAULT.value),
                                rx.list.item(rx.text.strong("Próximos Pasos:")," "
                                              , margin_bottom=Size.DEFAULT.value),
                                list_style_type="disc",
                                color="white",
                                margin_bottom=Size.DEFAULT.value,
                                ),
                        rx.hstack(
                                image_despedida(),
                                align_items="center",
                                justify="center"
                        ),
                
                #_____________________________________________________________________________________#   
                ),
                max_width="600px",
                width="100%",
                margin_y=Size.SMALL.value,
                align_items="center",   
                ),
        ),
        back_button("/module_5"),
        footer(),
        background_color="black"
    )