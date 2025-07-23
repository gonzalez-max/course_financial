import reflex as rx
from mi_web.components.general_components.course_navbar import navbar_course
from mi_web.components.general_components.footer import footer
from mi_web.styles.course_styles import Size as Size
import mi_web.styles.course_styles  as styles
import mi_web.styles.course_styles as c_styles
from mi_web.components.general_components.next_button import next_button
from mi_web.components.general_components.back_button import back_button
from mi_web.components.general_components.zoom_images import zoomed_image


def module_4() -> rx.Component:
    return rx.box(
        navbar_course(),
        rx.center( 
            rx.vstack(
                rx.box(
                        #encabezado del modulo
                        rx.heading("Módulo 4: Fundamentos del Análisis Técnico y Patrones",
                                   **c_styles.TEXT_STYLE["title"],
                                   margin_top="35px",
                                   margin_bottom=Size.MEDIUM.value),
                    
                        #1. seccion el ciclo del precio
                        rx.heading("1. El Ciclo del Precio",
                                   **c_styles.TEXT_STYLE["subtitle"],
                                   margin_bottom=Size.MEDIUM.value),
                        
                        rx.text("El ciclo del precio tiene cuatro fases: acumulación, tendencia alcista, distribución y "
                                "tendencia bajista. Para ganar en el trading, es clave aprovechar las tendencias "
                                "(alcista y bajista) interpretando el comportamiento del precio en un gráfico. "
                                , **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.DEFAULT.value),
                        
                        #imagen ciclo del precio
                        rx.hstack(
                                zoomed_image("/ciclo_del_precio.png?refresh=1"),
                                margin_bottom=Size.DEFAULT.value),
                        
                        # subseccion ¿como identificar las tendencias?
                        rx.heading(" ¿Cómo Identificar las Tendencias?",
                                   **c_styles.TEXT_STYLE["subseccion"],
                                   margin_bottom=Size.MEDIUM.value),
                        
                        rx.text("En el análisis técnico existen dos tipos principales de formaciones:", rx.text.strong(" Tendencias y Rangos."),
                             **c_styles.TEXT_STYLE["body"],
                             margin_bottom=Size.DEFAULT.value),
                    
                        #mini lista de como identificar tendencias
                        rx.list.ordered(
                                rx.list.item("Las", rx.text.strong(" tendencias")," pueden ser ", rx.text.strong("alcistas")," si "
                                     "los precios suben o ", rx.text.strong("bajistas")," si los precios caen.", 
                                     margin_bottom=Size.DEFAULT.value),
                                rx.list.item("Los ", rx.text.strong("rangos")," pueden ser de ", rx.text.strong("acumulación"),
                                     " que se encuentran al inicio del ciclo, o de ",
                                     rx.text.strong("distribución")," que se encuentran en la parte alta del ciclo.",
                                     margin_bottom=Size.DEFAULT.value),
                                list_style_type="disc",
                                color="white",
                                margin_bottom=Size.DEFAULT.value,
                                ),

                        #imagen identificar tendencias
                        rx.hstack(
                                zoomed_image("/identificar_tendencias.png?refresh=1"),
                                margin_bottom=Size.DEFAULT.value,
                        ),
                        rx.text("Para identificar una tendencia ", rx.text.strong("alcista"),", observamos una sucesión de ",
                            rx.text.strong("máximos mayores y mínimos mayores."), **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                    
                        rx.text("Para una tendencia ", rx.text.strong("bajista"),", observamos ", 
                            rx.text.strong("máximos menores y mínimos menores"),". Los ",
                            rx.text.strong(" rangos de acumulación "), "tienen máximos y mínimos variados.",
                            **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),

                        
                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),
                        
                        # seccion sentido comun en el analisis tecnico
                        rx.heading("2. Sentido Común en el Análisis Técnico",
                                   **c_styles.TEXT_STYLE["subtitle"],
                                    margin_bottom=Size.MEDIUM.value),
                        
                        rx.text("Para realizar un análisis técnico preciso, se utilizan líneas de ", rx.text.strong("soporte y resistencia"),
                            ", las cuales son:",
                            **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.MEDIUM.value),
                    
                        #mini lista de soporte y resistencia
                        rx.list.ordered(
                                rx.list.item(rx.text.strong("Estáticas")," (horizontales).",
                                        margin_bottom=Size.DEFAULT.value),
                                rx.list.item(rx.text.strong("Dinámicas")," (inclinadas en un ángulo con respecto al eje horizontal)",
                                        margin_bottom=Size.DEFAULT.value),
                                list_style_type="disc",
                                color="white",
                                margin_bottom=Size.DEFAULT.value,
                                ),
                        #imagen sentido comun
                        rx.hstack(
                                zoomed_image("/sentido_comun.png?refresh=1"),
                                margin_bottom=Size.DEFAULT.value
                        ),
                        rx.text("A menudo,", rx.text.strong(" la simplicidad y efectividad")," del análisis técnico se ven opacadas por el "
                            "exceso de indicadores y herramientas adicionales. En este contexto,", rx.text.strong(" el sentido común"),
                            " juega un papel fundamental para interpretar correctamente las tendencias en los gráficos.",
                            **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.DEFAULT.value),
                    
                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),
                    
                        #seccion 3 el precio y su comportamiento
                        rx.heading("3. El precio y su comportamiento",
                                   **c_styles.TEXT_STYLE["subtitle"],
                                   margin_bottom=Size.MEDIUM.value),
                    
                        rx.heading(" Líneas de precio (Soporte y Resistencia)",
                               **c_styles.TEXT_STYLE["subseccion"],
                               margin_bottom=Size.MEDIUM.value),
                        
                        rx.text("En el mercado, las líneas de soporte y resistencia son fundamentales. Existen tres tipos de estas "
                                "líneas, y su interpretación depende de su relevancia y utilidad para tus operaciones",
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.DEFAULT.value),
               
                        rx.heading(" Líneas horizontales de soporte y resistencia",
                                   **c_styles.TEXT_STYLE["subseccion"],
                                   margin_bottom=Size.MEDIUM.value),
                                
                        rx.text("Los niveles horizontales de soporte y resistencia son esenciales en el análisis técnico. "
                                "La resistencia señala los puntos donde el precio tiende a bajar, mientras que el soporte indica los"
                                " puntos donde el precio tiende a subir.",
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.DEFAULT.value),
                       
                        rx.text(rx.text.strong("Resistencia:")," Unión de dos o más puntos donde el mercado cambia a la baja.",
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.MEDIUM.value),
                        
                        rx.text(rx.text.strong("Soporte:")," Unión de dos o más puntos donde el mercado cambia de dirección a la alza.",
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.DEFAULT.value),
                        
                        #imagen soporte resistencia
                        rx.hstack( 
                                zoomed_image("/soporte_resistencia.png?refresh=1"),
                                margin_bottom=Size.REGULAR.value),

                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),
                        
                        #Seccion 4 como marcar los soportes y las resistencias
                        rx.heading("4. trazando soportes y las resistencias",
                                   **c_styles.TEXT_STYLE["subtitle"],
                                   margin_bottom=Size.MEDIUM.value),
                        
                        rx.text("Identificar correctamente los niveles de soporte, resistencia y tendencias es "
                                "esencial para anticipar movimientos del mercado y tomar decisiones más seguras. "
                                "Estos conceptos te ayudarán a reconocer zonas donde el precio podría rebotar, "
                                "detenerse o cambiar de dirección",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                        rx.text(rx.text.strong("1. Soporte y Resistencia Horizontal:")," Un soporte se identifica cuando el precio rebota "
                                "varias veces en un nivel, como $8,22. Una resistencia se forma cuando el precio "
                                "falla en superar un nivel, como $11,20.",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                        rx.text(rx.text.strong("2. Línea de Tendencia:")," En una tendencia alcista, traza una línea que una los mínimos "
                                "crecientes como soporte dinámico. En una bajista, traza una línea sobre los máximos "
                                "decrecientes como resistencia dinámica.",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                         rx.text(rx.text.strong("3. Confluencia de Niveles:")," Si una línea de tendencia coincide (choca/toca) con un soporte o "
                                "resistencia horizontal, ese nivel se refuerza como una zona clave. Ya sea para comprar o para vender",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                        rx.text(rx.text.strong("4. Tiempo Múltiple:")," Analiza diferentes marcos temporales, ya que un nivel fuerte "
                                "en un gráfico semanal puede no ser relevante en uno diario. Mas adelante veremos temporalidades a profundidad",
                                **c_styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                        
                        #imagen trazando soportes y resistencia
                        rx.heading(
                               zoomed_image("/trazando_soporte_resistencia.png?refresh=1"),
                                margin_bottom=Size.DEFAULT.value
                        ),
                        
                        
                        # tips para marcar lineas de tendencias
                        rx.heading("Importante Recordar:",
                                   **c_styles.TEXT_STYLE["subseccion"],
                                   margin_bottom=Size.MEDIUM.value),
                        
                        rx.text("Para graficar las líneas de tendencia, ", rx.text.strong("siempre se deben tomar desde las mechas de "
                                "las velas.")," En una tendencia alcista, se debe graficar desde la parte inferior, y en "
                                "una tendencia bajista, desde la parte superior de las velas.",
                                **c_styles.TEXT_STYLE["body"],
                                margin_bottom=Size.DEFAULT.value),
                        
                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value, margin_bottom=Size.DEFAULT.value),
                        
                        #resumen y conclucion
                        rx.heading("Conclusión del Módulo 4: ", **c_styles.TEXT_STYLE["subtitle"],
                                    margin_bottom=Size.DEFAULT.value),
                        #lista de resumen u conlcusion
                        rx.list.ordered(
                                rx.list.item(rx.text.strong(" Resumen:")," Aprendimos los fundamentos del análisis técnico: "
                                             "el Ciclo del Precio (acumulación, tendencia alcista, distribución, tendencia bajista)"
                                             ", cómo identificar tendencias con máximos y mínimos, y el uso de líneas de soporte, "
                                             "resistencia y como aplicarlas en graficos reales para operar en el mercado."
                                             , margin_bottom=Size.DEFAULT.value),
                                rx.list.item(rx.text.strong(" Aplicación Práctica:")," Reflexioná sobre cómo usar líneas de soporte "
                                             "y resistencia en gráficos. Practicá trazando tendencias y detectando patrones para "
                                             "identificar oportunidades de entrada o salida.", margin_bottom=Size.DEFAULT.value),
                                 rx.list.item(rx.text.strong(" Próximos Pasos:")," En el siguiente módulo, aplicarás el análisis "
                                              "técnico con ejemplos gráficos, explorando la importancia de las líneas "
                                              "horizontales, los quiebres, rangos del mercado y su uso para gestionar riesgo "
                                              "y maximizar ganancias.", margin_bottom=Size.DEFAULT.value),
                                list_style_type="disc",
                                color="white",
                                margin_bottom=Size.DEFAULT.value,
                                ),
               
                        rx.hstack(
                                
                                align_items="center",
                                justify="center"
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
        next_button("/module_5"),
        back_button("/module_3"),
        footer(),
        **c_styles.COURSE_STYLES
    )



