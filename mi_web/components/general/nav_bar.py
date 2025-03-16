import reflex as rx
import mi_web.styles.styles as styles

def nav_bar(text: str, url: str) -> rx.Component:
    return rx.link(
        rx.text(text, **styles.NAVBAR_FONTS_STYLES), href=url
    )


def navbar_dropdown() -> rx.Component:
    return rx.box(
        rx.desktop_only(
            rx.hstack(
                rx.hstack(
                    rx.image(
                        src="/orbesdmc.png",
                        width="25px",
                        height="25px",
                        border_radius="50px",
                        background_color="transparent",
                        padding="0px"
                    ),
                    rx.link(
                        rx.heading("Maximiliano Gonzalez", 
                                **styles.NAVBAR_FONTS_STYLES),
                    href="/#",
                    style={"text_decoration": "none"}
                    ),
                    align_items="center",
                ),
                rx.hstack(
                    nav_bar("Proyecto", "/financial_page"),
                    nav_bar("Contacto", "/soporte_page"),
                    justify="end",
                ),
                align_items="center",
            ),
        ),
        rx.mobile_and_tablet(
            rx.hstack(
                rx.hstack(
                    rx.image(
                        src="/orbesdmc.png",
                        width="30px",
                        height="30px",
                        border_radius="50px",
                        background_color="transparent",
                        padding="0px"
                    ),
                    rx.link(
                        rx.heading("Maximiliano Gonzalez", 
                        **styles.NAVBAR_FONTS_STYLES),
                    href="/#",
                    style={"text_decoration": "none"}
                    ),
                    align_items="center",
                ),
                rx.menu.root(
                    rx.menu.trigger(
                        rx.icon("menu", size=30)
                    ),
                    rx.menu.content(
                        rx.menu.item("Proyecto"),
                        rx.menu.item("Contacto"),
                    ),
                    justify="end",
                ),
                align_items="center",
            ),
        ),
        **styles.NAVBAR_STYLES,
    )