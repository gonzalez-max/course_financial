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
                            content="Pagina Principal",
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
                                rx.text("Módulos del curso ",
                                        color="#ffd284", 
                                        font_family="Helvetica",
                                        weight="bold",
                                        size="5"),
                                
                                rx.link(rx.text.strong("Módulo 1:")," Fundamentos de Finanzas Personales y el Mercado ",
                                        href="/module_1", **c_styles.COURSE_NAVBAR_FONTS),
                                rx.link(rx.text.strong("Módulo 2:")," Inversores y tipos de Instrumentos",
                                        href="/module_2", **c_styles.COURSE_NAVBAR_FONTS),
                                rx.link(rx.text.strong("Módulo 3:")," Introducción al Trading",
                                        href="/module_3", **c_styles.COURSE_NAVBAR_FONTS),
                                rx.link(rx.text.strong("Módulo 4:")," Fundamentos del Análisis Técnico y Patrones",
                                        href="/module_4", **c_styles.COURSE_NAVBAR_FONTS),
                                rx.link(rx.text.strong("Módulo 5:")," Dominando Soportes, Resistencias y Rangos",
                                        href="/module_5", **c_styles.COURSE_NAVBAR_FONTS),
                                rx.link(rx.text.strong("Módulo 6:")," Tendencias y como identificarlas",
                                        href="/module_6", **c_styles.COURSE_NAVBAR_FONTS),
                                rx.link(rx.text.strong("Módulo 7:")," Indicadores y Entradas Exitosas",
                                        href="/module_7", **c_styles.COURSE_NAVBAR_FONTS),
                                rx.link(rx.text.strong("Módulo 8:")," Hablemos de Criptomonedas",
                                        href="/module_8", **c_styles.COURSE_NAVBAR_FONTS),
                                rx.link(rx.text.strong("Módulo 9:")," Las Estafas en el Trading y las Inversiones",
                                        href="/module_9", **c_styles.COURSE_NAVBAR_FONTS),
                                rx.link(rx.text.strong("Módulo 10:")," Plataformas de Trading y Final del Curso",
                                        href="/module_10", **c_styles.COURSE_NAVBAR_FONTS),
                                spacing="2",
                            ),
                            padding="2",
                            border_radius="8px",
                            border="1.5px solid transparent",
                            box_shadow="0px 4px 14px rgba(0, 0, 0, 0.3)",
                            transition= "transform 0.2s ease-in-out",
                            background="rgba(250, 250, 250, 0.4)",
                            backdrop_filter= "blur(10px)",
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
                            "Inicio",
                            **c_styles.COURSE_NAVBAR_FONTS,
                        ),
                        href="/financial_page",
                        style={"text_decoration": "none"},
                    ),
                    align_items="center",
                ),
                rx.menu.root(
                    rx.menu.trigger(
                        rx.icon("menu", size=30)
                    ),
                    rx.menu.content(
                        rx.menu.item("Curso", on_click=rx.redirect("/choice_modules")),
                        rx.menu.item("Contactos", on_click=rx.redirect("/soporte_page")),
                    ),  
                    justify="end",
                ),
                align_items="center",
            ),
        ),
        **c_styles.COURSE_NAVBAR_STYLES,
    )
