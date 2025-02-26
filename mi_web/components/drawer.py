import reflex as rx
import mi_web.styles.styles as styles

# Lista de módulos con sus enlaces
MODULOS = [
    {"nombre": "Modulo 1", "url": "/module_1"},
    {"nombre": "Modulo 2", "url": "/module_2"},
    {"nombre": "Modulo 3", "url": "/module_3"},
]

def drawer() -> rx.Component:
    return rx.vstack(
rx.drawer.root(
        rx.drawer.trigger(rx.button("Modulos Menu", **styles.DRAWER_BUTTON_STYLE)),
        rx.drawer.overlay(z_index="5"),
        rx.drawer.portal(
            rx.drawer.content(
                rx.flex(
                    rx.drawer.close(rx.box(rx.button("Cerrar", **styles.DRAWER_BUTTON_STYLE))),
                    # Generar botones dinámicamente desde la lista de módulos
                    *[rx.link(
                        rx.button(modulo["nombre"],**styles.DRAWER_CONTENT_STYLE),
                        href=modulo["url"]
                    ) for modulo in MODULOS],
                    align_items="start",
                    direction="column",
                ),
                top="auto",
                right="auto",
                height="100%",
                width="20em",
                padding="2em",
                background_color="#ff3333"
            )
        ),
        direction="left",
    )
    )