import reflex as rx 
from mi_web.components.nav_bar import navbar_dropdown
from mi_web.components.footer import footer
from mi_web.styles.styles import Size as Size


def module_2() -> rx.Component:
    return rx.box(
        navbar_dropdown(),
        rx.center(
    rx.vstack(
      rx.text("este es el modulo 2"),
      width="100%",
      margin_y=Size.BIG.value,
      align_items="center"
    )),
    footer(),
    background_color="black"
    )