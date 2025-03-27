import reflex as rx
import mi_web.styles.course_styles as c_styles

class LogoState(rx.State):
    click_count: int = 0
    logo_src: str = "/icons/orbesdmc-black.png"

    def increment_click(self):
        self.click_count += 1
        # Calcula el número de ciclos de 5 clics
        cycle = (self.click_count // 5) % 2
        # Alterna la imagen según el ciclo
        if cycle == 1:
            self.logo_src = "/icons/orbesdmc.png"
        else:
            self.logo_src = "/icons/orbesdmc-black.png"
        
#_______________________________________________________________________________________________________#


def nav_bar(text: str, url: str) -> rx.Component:
    return rx.link(
        rx.text(text, **c_styles.COURSE_NAVBAR_FONTS),
        href=url,
        style={"text_decoration": "none"},
    )

def navbar_course() -> rx.Component:
    return rx.box(
        rx.desktop_only(
            rx.hstack(
                rx.hstack(
                    rx.tooltip(
                        rx.image(
                            src=LogoState.logo_src,  # Usamos el estado para la imagen
                            width="25px",
                            height="25px",
                            border_radius="50px",
                            background_color="transparent",
                            padding="0px",
                            on_click=LogoState.increment_click,# Vinculamos el evento on_click
                            cursor="pointer",
                            _hover={"transform": "scale(1.10)"},
                        ),
                        content="No me toques.",
                    ),
                    rx.link(
                        rx.tooltip(
                            rx.heading(
                            "Maximiliano Gonzalez",
                            **c_styles.COURSE_NAVBAR_FONTS
                        ),
                    content="Inicio"
                    ), #cierre del tooltip
                    href="/#",
                    style={"text_decoration": "none"}
                    ,),
                    align_items="center",
                ),
                rx.hstack(
                    rx.tooltip(nav_bar("Proyectos", "/financial_page"),
                               content="Mis proyectos"),
                    rx.tooltip(nav_bar("Contacto", "/soporte_page"),
                               content="Contactáme"),
                    justify="end",
                ),
                align_items="center",
            ),
        ),
        rx.mobile_and_tablet(
            rx.hstack(
                rx.hstack(
                    rx.image(
                        src=LogoState.logo_src,  # Usamos el mismo estado para la versión móvil
                        width="30px",
                        height="30px",
                        border_radius="50px",
                        background_color="transparent",
                        padding="0px",
                        on_click=LogoState.increment_click,  # Vinculamos el evento on_click
                    ),
                    rx.link(
                        rx.heading(
                            "Maximiliano Gonzalez",
                            **c_styles.COURSE_NAVBAR_FONTS,
                        ),
                        href="/#",
                        style={"text_decoration": "none"},
                    ),
                    align_items="center",
                ),
                rx.menu.root(
                    rx.menu.trigger(
                        rx.icon("menu", size=30)
                    ),
                    rx.menu.content(
                        rx.menu.item("Proyecto", on_click=rx.redirect("/financial_page")),
                        rx.menu.item("Contacto", on_click=rx.redirect("/soporte_page")),
                    ),
                    justify="end",
                ),
                align_items="center",
            ),
        ),
        **c_styles.COURSE_NAVBAR_STYLES,
    )