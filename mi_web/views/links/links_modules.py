import reflex as rx
import mi_web.styles.styles as styles

#aca creamos BOTONES que cumplen la funcion de links
def links_modules() -> rx.Component:
    return rx.link(
        rx.center(rx.vstack(
            rx.button("Modulo numero 1: Fundamentos de Finanzas personales y Mercado Financiero. ", 
                    on_click=lambda: rx.redirect("/module_1"), is_external=False,**styles.BUTTON_STYLE,
            ),
            rx.button("Modulo numero 2: Tipos de Inversores e Instrumentos de inversion ", 
                    on_click=lambda: rx.redirect("/module_2"), is_external=False,**styles.BUTTON_STYLE,
            ),
            rx.button(" Modulo numero 3: Introduccion al Trading", 
                    on_click=lambda: rx.redirect("/module_3"), is_external=False,**styles.BUTTON_STYLE,
            ),
            rx.button(" Modulo numero 4:", 
                    on_click=lambda: rx.redirect("/module_4"), is_external=False,**styles.BUTTON_STYLE,
            ),
            rx.button(" Modulo numero 5:", 
                    on_click=lambda: rx.redirect("/module_5"), is_external=False,**styles.BUTTON_STYLE,
            ),
            rx.button(" Modulo numero 6:", 
                    on_click=lambda: rx.redirect("/module_6"), is_external=False,**styles.BUTTON_STYLE,
            ),
        max_width=styles.MAX_WIDTH,
        )),
    )

