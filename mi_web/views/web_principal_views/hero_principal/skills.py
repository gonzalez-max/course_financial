import reflex as rx
import mi_web.styles.styles as styles
from mi_web.styles.styles import Size as Size
from mi_web.components.general_components.link_button import link_button


def skills() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.box(
                rx.heading(
                " Habilidades",
                **styles.text_main_page["title"],
                margin_bottom=Size.DEFAULT.value,
                color="#ffff99"
            ),
            rx.flex(
                rx.tooltip(
                    rx.card("Python", **styles.MINI_CARDS_STYLES),
                content="Lenguaje versátil para backend, scripting y automatización.",
                ),
                
                rx.tooltip(
                    rx.card("HTML",**styles.MINI_CARDS_STYLES),
                content="Lenguaje de marcado para estructurar páginas web."),
                
                rx.tooltip(
                    rx.card("CSS",**styles.MINI_CARDS_STYLES),
                content="Lenguaje de estilos para diseño y maquetación web."),
                
                rx.tooltip(
                    rx.card("Javascript (Básico)",**styles.MINI_CARDS_STYLES),
                content="Lenguaje para dinamismo en el frontend."),
                
                rx.tooltip(
                    rx.card("Django (framework de backend)",**styles.MINI_CARDS_STYLES),
                content="Framework de Python para construir aplicaciones web."),
               
                rx.tooltip(
                    rx.card("Reflex (framework frontend y backend)",**styles.MINI_CARDS_STYLES),
                content="Framework fullstack para crear interfaces con Python."),
                
                rx.tooltip(
                    rx.card("Git", **styles.MINI_CARDS_STYLES),
                content="Sistema de control de versiones distribuido."),
                
                rx.tooltip(
                    rx.card("SQLite",**styles.MINI_CARDS_STYLES),
                content="Base de datos ligera y sin servidor."),
                
                rx.tooltip(
                    rx.card("MySQL",**styles.MINI_CARDS_STYLES),
                content="Sistema de gestión de bases de datos relacional."),    
                
                spacing="2",
                align_items="flex-start",
                justify_content="center",
                flex_wrap="wrap",
                variant="surface",
                cursor="default"
            )
                ),
                width="100%",
                border_radius="10px",
                align_items="center",
                justify_content="center",
                size="2",
                #max_width="600px",
                margin_bottom=Size.BIG.value
        ),           
    **styles.global_styles
    ),