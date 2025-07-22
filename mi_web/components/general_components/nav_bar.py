import reflex as rx
import mi_web.styles.styles as styles

class LogoState(rx.State):
    click_count: int = 0
    logo_src: str = "/icons/orbesdmc-black.png"

    def increment_click(self):
        self.click_count += 1
        cycle = (self.click_count // 3) % 2
        self.logo_src = (
            "/icons/orbesdmc.png"
            if cycle == 1
            else "/icons/orbesdmc-black.png"
        )

# _____________________________________________________________________________________________ #

def nav_bar(text: str, url: str) -> rx.Component:
    return rx.link(
        rx.text(text, **styles.NAVBAR_FONTS_STYLES),
        href=url,
        style={"text_decoration": "none"},
    )

def navbar_dropdown() -> rx.Component:
    return rx.box(
        rx.desktop_only(
            rx.hstack(
                rx.hstack(
                    rx.tooltip(
                        rx.image(
                            src=LogoState.logo_src,
                            width="25px",
                            height="25px",
                            border_radius="50px",
                            background_color="transparent",
                            padding="0px",
                            on_click=LogoState.increment_click,
                            cursor="pointer",
                            _hover={"transform": "scale(1.10)"},
                        ),
                        content="No me toques.",
                    ),
                    rx.link(
                        rx.tooltip(
                            rx.heading(
                                "Maximiliano Gonzalez",
                                **styles.NAVBAR_FONTS_STYLES,
                            ),
                            content="Inicio"
                        ),
                        href="/#",
                        style={"text_decoration": "none"}
                    ),
                    align_items="center",
                ),
                rx.hstack(
                    rx.hover_card.root(
                        rx.hover_card.trigger(
                            nav_bar("Proyectos", "#mis-proyectos"),
                        ),
                        rx.hover_card.content(
                            rx.vstack(
                                rx.link(
                                    "Curso de Finanzas, Trading y como evitar Estafas.",
                                    href="/financial_page",
                                    **styles.NAVBAR_FONTS_STYLES,
                                ),
                                rx.link(
                                    "FinDash: Dashboard Financiero",
                                    href="https://dashboard-financial.onrender.com/",
                                    **styles.NAVBAR_FONTS_STYLES,
                                ),
                            ),
                            padding="2",
                            border_radius="8px",
                            border="1.5px solid transparent",
                            box_shadow="0px 4px 14px rgba(0, 0, 0, 0.3)",
                            transition="opacity 0.3s ease-out, transform 0.3s ease-out",
                            background="rgba(250, 250, 250, 0.4)",
                            backdrop_filter="blur(10px)",
                        ),
                    ),
                    rx.tooltip(
                        nav_bar("Contacto", "/soporte_page"),
                        content="Contactáme"
                    ),
                    justify="end",
                ),
            ),
        ),
        rx.mobile_and_tablet(
            rx.hstack(
                rx.hstack(
                    rx.image(
                        src=LogoState.logo_src,
                        width="30px",
                        height="30px",
                        border_radius="50px",
                        background_color="transparent",
                        padding="0px",
                        on_click=LogoState.increment_click,
                    ),
                    rx.link(
                        rx.heading(
                            "Maximiliano Gonzalez",
                            **styles.NAVBAR_FONTS_STYLES,
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
                        rx.menu.item("Proyectos", on_click=rx.redirect("/financial_page")),
                        rx.menu.item("Contacto", on_click=rx.redirect("/soporte_page")),
                    ),
                    justify="end",
                ),
                align_items="center",
            ),
        ),
        **styles.NAVBAR_STYLES,
    )
