import reflex as rx


def nav_bar(text: str, url: str) -> rx.Component:
    return rx.link(
        rx.text(text, color="white", size="4", weight="medium", _hover={"color": "purple"}),
        href=url
    )

def navbar_dropdown() -> rx.Component:
    return rx.box(
        rx.desktop_only(
            rx.hstack(
                rx.hstack(
                    rx.box(
                        rx.image(
                            src="/orbesdmc.png",
                            width="50px",
                            height="50px"
                        ),
                        background_color="black",
                        padding="5px",
                        border_radius="50px"
                    ),
                    rx.link(  # Se convierte en un enlace a Home
                        rx.heading(
                            "Maximiliano Gonzalez",
                            color="white",
                            size="4",
                            weight="bold",
                            _hover={"color": "purple"}
                        ),
                        href="/#",  # Redirección a la página principal
                        style={"textDecoration": "none"}
                    ),
                    align_items="center",
                ),
                rx.hstack(
                    nav_bar("Aprender", "/financial_page"),
                    nav_bar("Soporte", "/soporte_page"),
                ),
                justify="between",
                align_items="center",
                color="white",
                
            ),
        ),
        rx.mobile_and_tablet(
            rx.hstack(
                rx.hstack(
                    rx.box(
                        rx.image(
                            src="/orbesdmc.png",
                            width="50px",
                            height="50px"
                        ),
                        background_color="transparent",
                        padding="5px",
                        border_radius="50px"
                    ),
                    rx.link(  # También en móvil
                        rx.heading(
                            "Maximiliano Gonzalez",
                            color="white",
                            size="4",
                            weight="bold",
                            _hover={"color": "purple"}
                        ),
                        href="/#",
                        style={"textDecoration": "none"}
                    ),
                    align_items="center",
                ),
                rx.menu.root(
                    rx.menu.trigger(
                        rx.icon("menu", size=30)
                    ),
                    rx.menu.content(
                        rx.menu.item("Aprender", on_click=lambda: rx.redirect("/financial_page")),
                        rx.menu.item("Soporte", on_click=lambda: rx.redirect("/soporte_page")),
                    ),
                ),
                justify="center",
                align_items="center",
            ),
        ),
        background=" linear-gradient(45deg, var(--tomato-9), var(--plum-9))",
        padding="0.5em",
        width="100%",
    )
