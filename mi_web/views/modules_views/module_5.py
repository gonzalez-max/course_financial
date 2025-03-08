import reflex as rx
from mi_web.components.general.nav_bar import navbar_dropdown
from mi_web.components.general.footer import footer
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
from mi_web.components.general.drawer import drawer
from mi_web.views.links.next_button import next_button
from mi_web.views.links.back_button import back_button
from mi_web.components.general.zoom_images import zoomed_image




def module_5() -> rx.Component:
    return rx.box(
        navbar_dropdown(),
        drawer(),
        rx.center( 
            rx.vstack(
                rx.box(
                        
                        #encabezado del Módulo 5: Aplicación Práctica del Análisis Técnico
                        rx.heading("Módulo 5: Aplicación Práctica del Análisis Técnico",**styles.TEXT_STYLE["title"]),
                        
                        # subseccion la importancia de las lineas horizontales
                        rx.heading("La importancia de las líneas horizontales",**styles.TEXT_STYLE["subseccion"]),
                        rx.text("La relevancia de una línea de soporte o resistencia aumenta con cada prueba (es decir, cada vez que el "
                                "gráfico choca con las líneas horizontales). Cuando una línea pasa de ser soporte a resistencia, o viceversa"
                                ", se vuelve más significativa. Sus quiebres suelen provocar movimientos decisivos y duraderos en la dirección "
                                "del quiebre. Además, las líneas que abarcan un período más largo de tiempo son mucho más importantes.",
                                **styles.TEXT_STYLE["body"], margin_bottom=Size.DEFAULT.value),
                        
                        #imagen ejemplo 1
                        rx.hstack(
                                zoomed_image("/importancia_lineas_1.png?refresh=1"),
                                margin_bottom=Size.REGULAR.value),
                        
                        #imagen ejemplo 2
                        rx.hstack(
                                zoomed_image("/importancia_lineas_2.png?refresh=1"),
                                margin_bottom=Size.DEFAULT.value),
                        
                        #explicacion
                        rx.heading("Explicación de los graficos",**styles.TEXT_STYLE["subseccion"]),
                        rx.text("Este gráfico muestra cómo las líneas horizontales de soporte y resistencia funcionan en un escenario real: ",
                                **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                        
                        #lista explicacion
                        rx.list.ordered(
                                rx.list.item("La línea verde (soporte) resiste varias caídas del precio, pero al romperse,"
                                             " el precio cae con fuerza.",
                                        margin_bottom=Size.DEFAULT.value),
                                rx.list.item("La línea roja (resistencia) detiene los intentos de subir varias veces, pero cuando se quiebra, "
                                             "el precio sube de forma sostenida, formando un ", rx.text.strong("nuevo soporte."),
                                        margin_bottom=Size.DEFAULT.value),
                                rx.list.item("Las líneas que tienen más pruebas y abarcan más tiempo (como estas) son las más importantes para"
                                             " tus decisiones de trading, ya que indican niveles clave donde los grandes movimientos pueden ocurrir.",
                                        margin_bottom=Size.DEFAULT.value),
                                list_style_type="disc",
                                color="white",
                                margin_bottom=Size.DEFAULT.value,
                                ),
                        
                        #subseccion lineas de tendencia
                        rx.heading("2. Líneas de tendencia",**styles.TEXT_STYLE["subseccion"]),
                        
                        rx.text("Las líneas de tendencia dinámicas se forman cuando estas se rompen: el precio puede cambiar de tendencia "
                                "o lateralizarse, y el quiebre del último mínimo o máximo marca un cambio sólido en la tendencia. "
                                "Se recomienda que un máximo mayor o un mínimo menor recorra una distancia considerable para que la "
                                "línea sea válida. La práctica intensa ayuda a desarrollar la habilidad para definir "
                                "estos niveles correctamente.",
                                **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
               
                        #imagen lineas de tendencia
                        rx.hstack(
                                zoomed_image("/lineas_de_tendencia.png?refresh=1"),
                                margin_bottom=Size.DEFAULT.value),
               
                        #subseccion riesgo ganacias y lineas 
                        rx.heading("Riesgo, ganancias y líneas de soporte y resistencia",**styles.TEXT_STYLE["subseccion"]),
                        rx.text("Las líneas horizontales de soporte y resistencia ayudan a controlar el riesgo y tomar ganancias "
                                "en las operaciones. Sirven para encontrar niveles clave y decidir cómo maximizar beneficios. "
                                "Por ejemplo, en un gráfico alcista, estas líneas muestran cómo ajustar riesgo y ganancia "
                                "mientras avanza la operación. Esto es clave para proteger y aumentar las ganancias en el trading.",
                                **styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
               
                        #imagen riesgo ganancias y lineas
                        rx.hstack(
                                zoomed_image("/riesgo_ganancias_lineas.png?refresh=1"),
                                margin_bottom=Size.DEFAULT.value),
                        
                        
                        
                        
                        
                        
                        
                        
                #_____________________________________________________________________________________#   
                ),
                max_width="600px",
                width="100%",
                margin_y=Size.SMALL.value,
                align_items="center",   
                ),
        ),
        back_button("/module_4"),
        footer(),
        background_color="black"
    )
