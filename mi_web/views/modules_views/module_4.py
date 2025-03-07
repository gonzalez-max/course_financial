import reflex as rx
from mi_web.components.general.nav_bar import navbar_dropdown
from mi_web.components.general.footer import footer
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
from mi_web.components.general.drawer import drawer
from mi_web.views.links.next_button import next_button
from mi_web.views.links.back_button import back_button












def module_4() -> rx.Component:
    return rx.box(
        navbar_dropdown(),
        drawer(),
        rx.center( 
            rx.vstack(
                rx.box(
                    #encabezado del modulo
                    rx.heading("Módulo 4: Analisis Tecnico y Patrones de Comportamiento", **styles.TEXT_STYLE["title"]),
                    
                    #seccion 1 el analisis tecnico
                    rx.heading("1. El Analisis Tecnico", **styles.TEXT_STYLE["subtitle"]),
                    rx.text("El análisis técnico se basa en la interpretación de los movimientos del precio y los patrones"
                            " en un gráfico. Se enfoca en la psicología humana y en el comportamiento repetitivo tanto de los grandes "
                            "especialistas como de las masas. Su objetivo es comprender el lenguaje del precio y la manipulación del mercado por "
                            "parte de los grandes inversores, quienes buscan mantener su negocio y ventaja competitiva.",
                            **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                    
                    #subseccion el ciclo del precio
                    rx.heading("El Ciclo del Precio", **styles.TEXT_STYLE["subseccion"]),
                    rx.text("El ciclo del precio tiene cuatro fases: acumulación, tendencia alcista, distribución y tendencia bajista. "
                                "Para ganar consistentemente, hay que aprovechar las fases de tendencia (alcista y bajista) interpretando el "
                                "comportamiento del precio y de los especuladores, usando herramientas simples como líneas de tendencia y una "
                                "buena gestión del riesgo. Aprender a identificar estas fases en un gráfico es clave."
                                ,**styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                    
                    rx.text("Para aprovechar las fases de tendencia, es fundamental aprender a identificarlas correctamente en un gráfico."
                            " A continuación, veremos cómo hacerlo",**styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                    
                    # subseccion ¿como identificar las tendencias?
                    rx.heading("¿Cómo Identificar las Tendencias?", **styles.TEXT_STYLE["subseccion"]),
                    rx.text("En el análisis técnico existen dos tipos principales de formaciones:",rx.text.strong(" TENDENCIAS y RANGOS."),
                             **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                    
                    #mini lista de como identificar tendencias
                    rx.list.ordered(
                        rx.list.item("Las",rx.text.strong(" tendencias")," pueden ser ",rx.text.strong( "ALCISTAS")," si "
                                     "los precios suben o ",rx.text.strong("BAJISTAS")," si los precios caen.", 
                                     margin_bottom=Size.DEFAULT.value),
                        rx.list.item("Los ",rx.text.strong("rangos")," pueden ser de ",rx.text.strong("ACUMULACIÓN"),
                                     " que se encuentran al inicio del ciclo, o de ",
                                     rx.text.strong("DISTRIBUCIÓN")," que se encuentran en la parte alta del ciclo.",
                                     margin_bottom=Size.DEFAULT.value),
                        list_style_type="disc",
                        color="white",
                        margin_bottom=Size.DEFAULT.value,
                        ),
                    
                    rx.text("Para identificar una tendencia ",rx.text.strong("ALCISTA"),", observamos una sucesión de "
                            "máximos mayores y mínimos mayores.", **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value,),
                    
                    rx.text("Para una tendencia ",rx.text.strong("BAJISTA"),", observamos ", 
                            rx.text.strong("máximos menores y mínimos menores"),". Los ",
                            rx.text.strong(" rangos de acumulación "), "tienen máximos y mínimos variados.",
                            **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                    
                    # subseccion sentido comun en el analisis tecnico
                    rx.heading("Sentido Común en el Análisis Técnico", **styles.TEXT_STYLE["subseccion"]),
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
                    
                    rx.text("A menudo,",rx.text.strong(" la simplicidad y efectividad")," del análisis técnico se ven opacadas por el "
                            "exceso de indicadores y herramientas adicionales. En este contexto,",rx.text.strong(" el sentido común"),
                            " juega un papel fundamental para interpretar correctamente las tendencias en los gráficos.",
                            **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                    
                    #subseccion el chartismo
                    rx.heading("El Chartismo", **styles.TEXT_STYLE["subseccion"]),
                    rx.text("Los patrones gráficos, como triángulos, cuñas y banderines, son útiles en el análisis técnico,"
                            " pero deben confirmarse con líneas de soporte y resistencia. Comprender el lenguaje del precio "
                            "es clave para detectar cuándo los grandes inversores influyen en su formación. No es necesario "
                            "esperar figuras perfectas, ya que el mercado ofrece oportunidades constantemente.",
                            **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value)
                    
                    
                    
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
                #_____________________________________________________________________________________#   
                ),
                max_width="600px",
                width="100%",
                margin_y=Size.SMALL.value,
                align_items="center",   
                ),
        ),
        back_button("/module_3"),
        footer(),
        background_color="black"
    )
