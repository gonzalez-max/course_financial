import reflex as rx
import mi_web.styles.course_styles as c_styles

class LogoState(rx.State):
    click_count: int = 0
    logo_src: str = "/icons/orbesdmc-black.png"

    def increment_click(self):
        self.click_count += 1
        cycle = (self.click_count // 5) % 2
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
                                "Inicio",
                                **c_styles.COURSE_NAVBAR_FONTS
                            ),
                            content="Pagina Principal"
                        ),
                        href="/financial_page",
                        style={"text_decoration": "none"},
                    ),
                    align_items="center",
                ),
                rx.hstack(
                    rx.hover_card.root(
                        rx.hover_card.trigger(
                           nav_bar("Curso","/choice_modules"),
                        ),
                        rx.hover_card.content(
                            rx.vstack(
                                rx.text("Módulos del curso: ",color="black", weight="bold"),
                                
                                rx.link(rx.text.strong("Módulo 1:")," Fundamentos de Finanzas Personales y el Mercado ",
                                        href="/module_1", **c_styles.COURSE_NAVBAR_FONTS),
                                rx.link(rx.text.strong("Módulo 2:")," Tipos de Inversores e Instrumentos de inversion",
                                        href="/module_2", **c_styles.COURSE_NAVBAR_FONTS),
                                rx.link(rx.text.strong("Módulo 3:")," Introducción al Trading",
                                        href="/module_3", **c_styles.COURSE_NAVBAR_FONTS),
                                rx.link(rx.text.strong("Módulo 4:")," Fundamentos del Análisis Técnico y Patrones",
                                        href="/module_4", **c_styles.COURSE_NAVBAR_FONTS),
                                rx.link(rx.text.strong("Módulo 5:")," Dominando Soportes, Resistencias y Rangos",
                                        href="/module_5", **c_styles.COURSE_NAVBAR_FONTS),
                                rx.link(rx.text.strong("Módulo 6:")," Tendencias y como identificarlas",
                                        href="/module_6", **c_styles.COURSE_NAVBAR_FONTS),
                                spacing="2",
                            ),
                            padding="2",
                            border_radius="md",
                            box_shadow="md",
                            background="rgba(255, 255, 255, 0.6)",
                            backdrop_filter= "blur(10px)",
                            transition="transform 0.3s ease-out, opacity 0.3s ease-out",
                            transform="translateY(-10px)",
                        ),
                    ),
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
                        rx.menu.item("Módulo 1", on_click=rx.redirect("/modulo_1")),
                        rx.menu.item("Módulo 2", on_click=rx.redirect("/modulo_2")),
                        rx.menu.item("Módulo 3", on_click=rx.redirect("/modulo_3")),
                    ),
                    justify="end",
                ),
                align_items="center",
            ),
        ),
        **c_styles.COURSE_NAVBAR_STYLES,
    )
