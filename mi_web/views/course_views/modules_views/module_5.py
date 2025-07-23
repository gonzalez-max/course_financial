import reflex as rx
from mi_web.components.general_components.course_navbar import navbar_course
from mi_web.components.general_components.footer import footer
from mi_web.styles.course_styles import Size as Size
import mi_web.styles.course_styles as styles
import mi_web.styles.course_styles as c_styles
from mi_web.components.general_components.next_button import next_button
from mi_web.components.general_components.back_button import back_button
from mi_web.components.general_components.zoom_images import zoomed_image


def module_5() -> rx.Component:
    return rx.box(
        navbar_course(),
        rx.center( 
            rx.vstack(
                rx.box(
                        
                        #encabezado del Módulo 5: Aplicación Práctica del Análisis Técnico
                        rx.heading("Módulo 5: Dominando Soportes, Resistencias y Rangos",
                                   **c_styles.TEXT_STYLE["title"],
                                   margin_top="35px",
                                   margin_bottom=Size.MEDIUM.value),
                        
                        # seccion la importancia de las lineas horizontales
                        rx.heading("1. La importancia de las líneas horizontales",
                                   **c_styles.TEXT_STYLE["subtitle"],
                                   margin_bottom=Size.MEDIUM.value),
                        
                        rx.text("La relevancia de una ", rx.text.strong("línea de soporte o resistencia"),
                                " aumenta con cada prueba (es decir, cada vez que el gráfico choca con las líneas horizontales). ",
                                rx.text.strong("Cuando una línea pasa de ser soporte a resistencia, o viceversa, "
                                               "se vuelve más significativa"),". Sus quiebres suelen provocar "
                                "movimientos decisivos y duraderos en la dirección del quiebre. Además, las líneas que "
                                "abarcan un período más largo de tiempo son mucho más importantes.",
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.DEFAULT.value),
                        
                        #imagenes de ejemplo
                        rx.vstack(
                                zoomed_image("/importancia_lineas_1.png?refresh=1"),        
                                zoomed_image("/importancia_lineas_2.png?refresh=1"),
                                margin_bottom=Size.REGULAR.value
                        ),
                        #explicacion
                        rx.heading("Explicación de los graficos",
                                   **c_styles.TEXT_STYLE["subseccion"],
                                   margin_bottom=Size.MEDIUM.value),
                        rx.text("Estos gráficos muestran cómo las líneas horizontales de soporte y resistencia funcionan en un escenario real: ",
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.MEDIUM.value),
                        
                        #lista explicacion
                        rx.list.ordered(
                                rx.list.item(rx.text.strong("La línea verde (soporte)")," resiste varias caídas del precio, pero al romperse,"
                                             " el precio cae con fuerza.",
                                        margin_bottom=Size.DEFAULT.value),
                                rx.list.item(rx.text.strong("La línea roja (resistencia)")," detiene los intentos de subir varias veces, pero cuando se quiebra, "
                                             "el precio sube de forma sostenida, formando un ", rx.text.strong("nuevo soporte."),
                                        margin_bottom=Size.DEFAULT.value),
                                rx.list.item(rx.text.strong("Las líneas que tienen más pruebas y abarcan más tiempo")," (como estas) son las más importantes para"
                                             " tus decisiones de trading, ya que indican niveles clave donde los grandes movimientos pueden ocurrir.",
                                        margin_bottom=Size.DEFAULT.value),
                                list_style_type="disc",
                                color="white",
                                margin_bottom=Size.DEFAULT.value,
                                ),
                        
                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),
                        
                        #seccion lineas de tendencia
                        rx.heading("2. Líneas de tendencia",
                                   **c_styles.TEXT_STYLE["subtitle"],
                                   margin_bottom=Size.MEDIUM.value),
                        
                        rx.text(rx.text.strong("Las líneas de tendencia dinámicas se forman cuando estas se rompen: el precio puede cambiar de tendencia "
                                "o lateralizarse,")," y el quiebre del último mínimo o máximo marca un cambio sólido en la tendencia. ",
                                rx.text.strong("Se recomienda que un máximo mayor o un mínimo menor recorra una distancia considerable para que la "
                                "línea sea válida.")," La práctica intensa ayuda a desarrollar la habilidad para definir "
                                "estos niveles correctamente.",
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.DEFAULT.value),
               
                        #imagen lineas de tendencia
                        rx.hstack(
                                zoomed_image("/lineas_de_tendencia.png?refresh=1"),
                                margin_bottom=Size.REGULAR.value),
               
                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),
                        
                        #seccion riesgo ganacias y lineas 
                        rx.heading("3. Riesgo, ganancias y líneas de soporte y resistencia",
                                   **c_styles.TEXT_STYLE["subtitle"],
                                   margin_bottom=Size.MEDIUM.value),
                        
                        rx.text(rx.text.strong("Las líneas horizontales de soporte y resistencia")," ayudan a controlar el riesgo y tomar ganancias "
                                "en las operaciones. ", rx.text.strong("Sirven para encontrar niveles clave y decidir cómo maximizar beneficios. "),
                                "Por ejemplo, en un gráfico alcista, estas líneas muestran cómo ajustar riesgo y ganancia "
                                "mientras avanza la operación. Esto es clave para proteger y aumentar las ganancias en el trading.",
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.DEFAULT.value),
               
                        #imagen riesgo ganancias y lineas
                        rx.hstack(
                                zoomed_image("/riesgo_ganancias_lineas.png?refresh=1"),
                                margin_bottom=Size.REGULAR.value),
                        
                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),
                        
                        #seccion rangos (acumulacion y distribucion)
                        rx.heading("4. Rangos (acumulación y distribución)",
                                   **c_styles.TEXT_STYLE["subtitle"],
                                   margin_bottom=Size.MEDIUM.value),

                        rx.text("En la fase de rangos el mercado esta en una fase de",
                                rx.text.strong(" acumulación")," (cuando los inversores compran en silencio antes de una tendencia alcista) o ",
                                rx.text.strong("distribución")," (cuando los inversores venden discretamente antes de una tendencia bajista)"
                                " los operadores pueden perder ganancias o enfrentar perdidas si intentan operar en esta fase.",
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.DEFAULT.value),
                        
                        #imagen rangos acumulacion y distribucion
                        rx.hstack(
                                zoomed_image("/rangos_acumulacion_distribucion.png?refresh=1"),
                                margin_bottom=Size.REGULAR.value,
                        ),
                        
                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),
                        
                        #seccion negociar rangos
                        rx.heading("5. Negociar Rangos",
                                   **c_styles.TEXT_STYLE["subtitle"],
                                   margin_bottom=Size.MEDIUM.value),
                        
                        rx.text("Negociar rangos de acumulación y distribución significa esperar a que el precio rompa la lateralización"
                                " en dirección opuesta a la tendencia. La altura y ancho del rango dan pistas sobre el precio y el tiempo, "
                                "pero no aseguran éxito. Ajusta la temporalidad del gráfico (día, semana, mes) según el movimiento. Observa "
                                "las pruebas en máximos o mínimos para medir la resistencia. Rangos con poco ruido, altura moderada y poca "
                                "expansión ofrecen mejor riesgo/beneficio",
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.DEFAULT.value),
                        
                        #imagen negociar rangos
                        rx.hstack(
                                zoomed_image("/negociar_rangos.png?refresh=1"),
                                margin_bottom=Size.REGULAR.value,        
                        ),
                
                        #explicacion de la imagen
                        rx.text("En un rango, las pruebas sobre la resistencia ayudan a confirmar si una ruptura es fuerte o débil:",
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.MEDIUM.value),
                       
                        #mini lista de explicacion
                        rx.list.ordered(
                                rx.list.item(rx.text.strong("Sin pruebas:")," La ruptura es más riesgosa y propensa a fallar.",
                                        margin_bottom=Size.DEFAULT.value),
                                rx.list.item(rx.text.strong("Con 1 prueba:")," Hay mayor confirmación, pero aún existe riesgo moderado.",
                                        margin_bottom=Size.DEFAULT.value),
                                rx.list.item(rx.text.strong("Con 2 pruebas o mas:"),"La ruptura es más sólida y confiable.",
                                        margin_bottom=Size.DEFAULT.value),
                                list_style_type="disc",
                                color="white",
                                margin_bottom=Size.DEFAULT.value,
                                ),
                        rx.text(rx.text.strong("Consejo:")," Esperar al menos una prueba antes de operar y buscar "
                                "confirmación con un aumento de volumen.",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                
                        #subseccion otras ideas sobre rangos
                        rx.heading("Otras ideas sobre rangos",
                                   **c_styles.TEXT_STYLE["subseccion"],
                                   margin_bottom=Size.MEDIUM.value),
                        
                        rx.text("Entender cómo funcionan los mercados es clave, porque su lógica no cambia con el tiempo. "
                                "La relación precio-tiempo varía siempre, influida por las emociones y "
                                "las órdenes de los participantes.",
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.DEFAULT.value),
                        
                        #image otras ideas
                        rx.hstack(
                                zoomed_image("/otras_ideas.png?refresh=1"),
                                margin_bottom=Size.REGULAR.value,
                        ),
                
                        #explicacion a la imagen otras ideas
                        rx.text("Esta imagen muestra dos ejemplos de falsos quiebres en rangos:",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                        rx.list.ordered(
                                rx.list.item(rx.text.strong("Falso quiebre desde piso prolongado (izquierda):")," El precio "
                                             "estuvo rebotando en un soporte (piso) durante un tiempo. Luego, parece romper "
                                             "al alza, pero esa ruptura no se sostiene y el precio cae rápidamente.",
                                             margin_bottom=Size.DEFAULT.value),
                                rx.list.item(rx.text.strong("Falso quiebre desde techo prolongado (derecha):")," Similar al "
                                             "caso anterior, pero en resistencia (techo). El precio parece romper hacia "
                                             "abajo, pero luego revierte con fuerza hacia arriba.",
                                              margin_bottom=Size.DEFAULT.value),
                                list_style_type="disc",
                                color="white",
                                margin_bottom=Size.DEFAULT.value,
                                ),
                        #subseccion ideas clave para terminar
                        rx.heading("⚠️¡¡Importante!!⚠️",
                                   **c_styles.TEXT_STYLE["subseccion"],
                                   margin_bottom=Size.MEDIUM.value),
                        
                        rx.text("Esta es una lección sobre cómo el precio", rx.text.strong(" engaña"),
                                " y por qué es esencial ser", rx.text.strong(" paciente y analítico")," en los rangos.",
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.DEFAULT.value),
                        
                        rx.text(rx.text.strong("Los falsos quiebres son comunes")," cuando muchos traders esperan rupturas claras. "
                                "Estos movimientos suelen atrapar a quienes entran tarde, generando liquidez para "
                                "el verdadero movimiento contrario.",
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.DEFAULT.value),
                        
                        rx.text(rx.text.strong("Consejo:")," Siempre busca confirmación antes de operar en una "
                                "ruptura y ten en cuenta el volumen y el contexto del mercado.",
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.DEFAULT.value),
                        
                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),
                
                        #resumen y conclusion
                        rx.heading("Conclusión del Módulo 5: ", **c_styles.TEXT_STYLE["subtitle"],
                                   margin_bottom=Size.DEFAULT.value),
                        rx.list.ordered(
                                rx.list.item(rx.text.strong("Resumen:")," Exploramos el análisis técnico práctico, destacando las líneas "
                                             "horizontales de soporte y resistencia, las líneas de tendencia y su rol en identificar "
                                             "cambios del mercado, además de los rangos de acumulación y distribución, "
                                             "y la gestión de riesgos y ganancias.",
                                             margin_bottom=Size.DEFAULT.value),
                                rx.list.item(rx.text.strong("Aplicación Práctica:")," Practicá trazando líneas horizontales y de tendencia"
                                             " en gráficos reales. Analizá las pruebas de soporte y resistencia, identificá posibles rangos "
                                             "y observá los quiebres para anticipar movimientos. Evaluá el volumen y el contexto "
                                             "antes de tomar decisiones.",
                                              margin_bottom=Size.DEFAULT.value),
                                rx.list.item(rx.text.strong("Próximos Pasos: :"),"En el próximo módulo, veremos cómo identificar las "
                                             "líneas de tendencia en gráficos reales, conoceremos al enemigo de las tendencias y "
                                             "aprenderás cómo colocar un stop-loss para evitar pérdidas, además de cómo identificar "
                                             "rupturas y falsas rupturas.",
                                              margin_bottom=Size.DEFAULT.value),
                                list_style_type="disc",
                                color="white",
                                margin_bottom=Size.DEFAULT.value,
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
        next_button("/module_6"),
        back_button("/module_4"),
        footer(),
        **c_styles.COURSE_STYLES
    )
