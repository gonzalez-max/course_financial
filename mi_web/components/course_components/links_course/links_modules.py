import reflex as rx
import mi_web.styles.course_styles as c_styles
from mi_web.styles.styles import Size as Size

#aca creamos BOTONES que cumplen la funcion de links
def links_modules() -> rx.Component:
    return rx.link(
        rx.center(
                rx.grid(
                        rx.button(" Módulo numero 1: Fundamentos de Finanzas personales y Mercado Financiero. ", 
                                on_click=lambda: rx.redirect("/module_1"), is_external=False,**c_styles.BUTTON_STYLE,
                        ),
                        rx.button(" Módulo numero 2: Tipos de Inversores e Instrumentos de inversion ", 
                                on_click=lambda: rx.redirect("/module_2"), is_external=False,**c_styles.BUTTON_STYLE,
                        ),
                        rx.button(" Módulo numero 3: Introduccion al Trading", 
                                on_click=lambda: rx.redirect("/module_3"), is_external=False,**c_styles.BUTTON_STYLE,
                        ),
                        rx.button(" Módulo numero 4: Fundamentos del Análisis Técnico y Patrones", 
                                on_click=lambda: rx.redirect("/module_4"), is_external=False,**c_styles.BUTTON_STYLE,
                        ),
                        rx.button(" Módulo numero 5: Dominando Soportes, Resistencias y Rangos", 
                                on_click=lambda: rx.redirect("/module_5"), is_external=False,**c_styles.BUTTON_STYLE,
                        ),
                        rx.button(" Módulo numero 6: Tendencias y como identificarlas", 
                                on_click=lambda: rx.redirect("/module_6"), is_external=False,**c_styles.BUTTON_STYLE,
                        ),  
                max_width="600px",
                align_items="center",
                justify_items="center",
                columns="2",
                spacing="5"
                ),
        margin_bottom=Size.BIG.value),
)

