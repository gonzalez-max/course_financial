import reflex as rx
from mi_web.components.general.nav_bar import navbar_dropdown
from mi_web.components.general.footer import footer
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
from mi_web.components.general.drawer import drawer
from mi_web.views.links.next_button import next_button
from mi_web.views.links.back_button import back_button
from mi_web.components.general.zoom_images import zoomed_image











def module_4() -> rx.Component:
    return rx.box(
        navbar_dropdown(),
        drawer(),
        rx.center( 
            rx.vstack(
                rx.box(
                        #encabezado del modulo
                        rx.heading("Módulo 4: Fundamentos del Análisis Técnico y Patrones", **styles.TEXT_STYLE["title"]),
                    
                    
                        #1. seccion el ciclo del precio
                        rx.heading("1. El Ciclo del Precio", **styles.TEXT_STYLE["subtitle"]),
                        rx.text("El ciclo del precio tiene cuatro fases: acumulación, tendencia alcista, distribución y "
                                "tendencia bajista. Para ganar en el trading, es clave aprovechar las tendencias "
                                "(alcista y bajista) interpretando el comportamiento del precio en un gráfico. "
                                ,**styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                        
                        #imagen ciclo del precio
                        rx.hstack(
                                zoomed_image("/ciclo_del_precio.png?refresh=1"),
                                margin_bottom=Size.DEFAULT.value),
                        
                        # subseccion ¿como identificar las tendencias?
                        rx.heading(" ¿Cómo Identificar las Tendencias?", **styles.TEXT_STYLE["subseccion"]),
                        rx.text("En el análisis técnico existen dos tipos principales de formaciones:",rx.text.strong(" Tendencias y Rangos."),
                             **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                    
                        #mini lista de como identificar tendencias
                        rx.list.ordered(
                                rx.list.item("Las",rx.text.strong(" tendencias")," pueden ser ",rx.text.strong( "alcistas")," si "
                                     "los precios suben o ",rx.text.strong("bajistas")," si los precios caen.", 
                                     margin_bottom=Size.DEFAULT.value),
                                rx.list.item("Los ",rx.text.strong("rangos")," pueden ser de ",rx.text.strong("acumulación"),
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
                        rx.text("Para identificar una tendencia ",rx.text.strong("alcista"),", observamos una sucesión de ",
                            rx.text.strong("máximos mayores y mínimos mayores."), **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value,),
                    
                        rx.text("Para una tendencia ",rx.text.strong("bajista"),", observamos ", 
                            rx.text.strong("máximos menores y mínimos menores"),". Los ",
                            rx.text.strong(" rangos de acumulación "), "tienen máximos y mínimos variados.",
                            **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),

                        
                         rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                        
                        # seccion sentido comun en el analisis tecnico
                        rx.heading("2. Sentido Común en el Análisis Técnico", **styles.TEXT_STYLE["subtitle"]),
                        rx.text("Para realizar un análisis técnico preciso, se utilizan líneas de ",rx.text.strong("soporte y resistencia"),
                            ", las cuales son:", **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                    
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
                        rx.text("A menudo,",rx.text.strong(" la simplicidad y efectividad")," del análisis técnico se ven opacadas por el "
                            "exceso de indicadores y herramientas adicionales. En este contexto,",rx.text.strong(" el sentido común"),
                            " juega un papel fundamental para interpretar correctamente las tendencias en los gráficos.",
                            **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                    
                        rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                    
                        #seccion 5 el precio y su comportamiento
                        rx.heading("5. El precio y su comportamiento",**styles.TEXT_STYLE["subtitle"]),
                    
                        rx.heading(" Líneas de precio (Soporte y Resistencia)",
                               **styles.TEXT_STYLE["subseccion"]),
                        
                        rx.text("En el mercado, las líneas de soporte y resistencia son fundamentales. Existen tres tipos de estas "
                                "líneas, y su interpretación depende de su relevancia y utilidad para tus operaciones",
                                **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
               
                        rx.heading(" Líneas horizontales de soporte y resistencia", **styles.TEXT_STYLE["subseccion"]),
                                rx.text("Los niveles horizontales de soporte y resistencia son esenciales en el análisis técnico. "
                                "La resistencia señala los puntos donde el precio tiende a bajar, mientras que el soporte indica los"
                                " puntos donde el precio tiende a subir.",
                                **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                       
                        rx.text(rx.text.strong("Resistencia:")," Unión de dos o más puntos donde el mercado cambia a la baja.",
                                **styles.TEXT_STYLE["body"]),
                        rx.text(rx.text.strong("Soporte:")," Unión de dos o más puntos donde el mercado cambia de dirección a la alza.",
                                **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                        
                        #imagen soporte resistencia
                        rx.hstack( 
                                zoomed_image("/soporte_resistencia.png?refresh=1"),
                                margin_bottom=Size.DEFAULT.value),

                        #resumen y conclucion
                        rx.heading("Conclusión del Módulo 4", **styles.TEXT_STYLE["subtitle"]),
                        #lista de resumen u conlcusion
                        rx.list.ordered(
                                rx.list.item(rx.text.strong(" Resumen:")," Aprendimos los fundamentos del análisis técnico: "
                                             "el Ciclo del Precio (acumulación, tendencia alcista, distribución, tendencia bajista)"
                                             ", cómo identificar tendencias con máximos y mínimos, y el uso de líneas de soporte, "
                                             "resistencia y patrones gráficos (triángulos, cuñas) para interpretar el mercado."
                                             , margin_bottom=Size.DEFAULT.value),
                                rx.list.item(rx.text.strong(" Aplicación Práctica:")," Reflexioná sobre cómo usar líneas de soporte "
                                             "y resistencia en gráficos. Practicá trazando tendencias y detectando patrones para "
                                             "identificar oportunidades de entrada o salida.",margin_bottom=Size.DEFAULT.value),
                                 rx.list.item(rx.text.strong(" Próximos Pasos:")," En el siguiente módulo, aplicarás el análisis "
                                              "técnico con ejemplos gráficos, explorando la importancia de las líneas "
                                              "horizontales, los quiebres, rangos del mercado y su uso para gestionar riesgo "
                                              "y maximizar ganancias.",margin_bottom=Size.DEFAULT.value),
                                list_style_type="disc",
                                color="white",
                                margin_bottom=Size.DEFAULT.value,
                                ),
               
                #_____________________________________________________________________________________#   
                ),
                max_width="600px",
                width="100%",
                margin_y=Size.SMALL.value,
                align_items="center",   
                ),
        ),
        next_button("/module_5"),
        back_button("/module_3"),
        footer(),
        background_color="black"
    )
