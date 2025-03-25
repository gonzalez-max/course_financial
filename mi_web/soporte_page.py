import reflex as rx 
from mi_web.components.general_components.nav_bar import nav_bar,navbar_dropdown
from mi_web.views.hero_section.hero_principal.hero_section import hero_section
from mi_web.components.general_components.footer import footer
import mi_web.styles.styles as styles
from mi_web.styles.styles import Size as Size


def soporte_page() -> rx.Component:
    return rx.box(
        navbar_dropdown(),
        rx.center(
    rx.vstack(
      rx.text("Esta es la pagina de soporte y preguntas"),
      max_width=styles.MAX_WIDTH,
      width="100%",
      margin_y=Size.ULTRA.value,
      align_items="center"
    )),
    footer(),
    background_color="black"
    )

#__________________________________________________________________________________________________#