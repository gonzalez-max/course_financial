import reflex as rx
import mi_web.styles.course_styles as c_styles
from mi_web.styles.course_styles import Size as Size

#aca creamos BOTONES que cumplen la funcion de links
def links_modules() -> rx.Component:
    return rx.link(
        rx.center(
                rx.grid(
                        rx.button(" Módulo numero 1: Fundamentos de Finanzas personales y el Mercado.", 
                                on_click=rx.redirect("/module_1"),**c_styles.BUTTON_COURSES_STYLES,
                        ),
                        rx.button(" Módulo numero 2: Inversores y Tipos de Instrumentos.", 
                                on_click=lambda: rx.redirect("/module_2"), is_external=False,**c_styles.BUTTON_COURSES_STYLES,
                        ),
                        rx.button(" Módulo numero 3: Introduccion al Trading.", 
                                on_click=lambda: rx.redirect("/module_3"), is_external=False,**c_styles.BUTTON_COURSES_STYLES,
                        ),
                        rx.button(" Módulo numero 4: Fundamentos del Análisis Técnico y Patrones.", 
                                on_click=lambda: rx.redirect("/module_4"), is_external=False,**c_styles.BUTTON_COURSES_STYLES,
                        ),
                        rx.button(" Módulo numero 5: Dominando Soportes, Resistencias y Rangos.", 
                                on_click=lambda: rx.redirect("/module_5"), is_external=False,**c_styles.BUTTON_COURSES_STYLES,
                        ),
                        rx.button(" Módulo numero 6: Tendencias y como identificarlas.", 
                                on_click=lambda: rx.redirect("/module_6"), is_external=False,**c_styles.BUTTON_COURSES_STYLES,
                        ),
                        rx.button(" Módulo numero 7: Indicadores y Entradas Exitosas", 
                                on_click=lambda: rx.redirect("/module_7"), is_external=False,**c_styles.BUTTON_COURSES_STYLES,
                        ),
                        rx.button(" Módulo numero 8: Hablemos de Criptomonedas.", 
                                on_click=lambda: rx.redirect("/module_8"), is_external=False,**c_styles.BUTTON_COURSES_STYLES,
                        ),
                        rx.button(" Módulo numero 9: Las Estafas en el Trading y las Inversiones", 
                                on_click=lambda: rx.redirect("/module_9"), is_external=False,**c_styles.BUTTON_COURSES_STYLES,
                        ),
                        rx.button(" Módulo numero 10: Plataformas de Trading y Final del Curso", 
                                on_click=lambda: rx.redirect("/module_10"), is_external=False,**c_styles.BUTTON_COURSES_STYLES,
                        ),  
                
                
                max_width="600px",
                align_items="center",
                justify_items="center",
                columns="2",
                spacing="5"
                ),
        margin_bottom=Size.BIG.value),
)

