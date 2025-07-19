import reflex as rx
import mi_web.styles.styles as styles
from mi_web.styles.styles import Size as Size
from mi_web.components.general_components.link_button import link_button
from mi_web.components.general_components.link_button import link_email
from mi_web.components.general_components.download_button import download_button

def hero_section() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading(
                "Bienvenido,",
                **styles.text_main_page["subtitle"],
                margin_top="40px",
                text_align="center",
                transition="transform 0.5s ease-in-out",
                _hover={
                    "transform": "scale(1.10)",
                },
            ),
            rx.heading(
                "Soy Maximiliano Gonzalez",
                **styles.text_main_page["title"],
                color="#ffff99",
            ),
            rx.heading(
                "Desarrollador Web Junior",
                **styles.text_main_page["subtitle"],
                text_align="center",
                transition="transform 0.5s ease-in-out",
                _hover={
                    "transform": "scale(1.10)",
                },
            ),
            # Card visible solo en desktop
            rx.desktop_only(
    rx.flex(
        rx.card(
            rx.flex(
                # Columna izquierda: AVATAR
                rx.box(
                    rx.avatar(
                        src="/mi-foto-cara.jpg",
                        fallback="MG",
                        name="Maxi Gonzalez",
                        **styles.AVATAR_STYLE,
                    ),
                    
                    padding_right="3rem",
                    margin_bottom="2rem"
                ),

                # Columna derecha: ICONOS + TEXTO
                rx.box(
                    rx.hstack(
                        rx.tooltip(
                            link_button(
                                "https://www.linkedin.com/in/maxi-gonzalez-479691323",
                                "/icons/linkedin.svg"
                            ),
                            content="Linkedin"
                        ),
                        rx.tooltip(
                            link_button("https://github.com/gonzalez-max", "/icons/github.svg"),
                            content="Github",
                        ),
                        rx.tooltip(
                            link_email("/icons/email.png"),
                            **styles.LINK_BUTTON_STYLES,
                            on_click=[
                                rx.set_clipboard("gonzalezmaxi997@gmail.com"),
                                rx.toast(
                                    "✔️ Email Copiado",
                                    duration=3000,
                                    close_button=True
                                ),
                            ],
                            content="Copiar email",
                        ),
                        download_button(),
                        spacing="3",
                        align_items="center",
                    ),
                    rx.text(
                        "Soy Maxi González, Programador en HTML, CSS y Python (Django framework, Reflex), "
                        "Asesor financiero y agente productor, me encuentro creando un curso gratuito de trading "
                        "donde encontrarás lo más importante para invertir en la bolsa, cripto y cómo evitar estafas.",
                        **styles.text_main_page["card_body"],
                        color="black",
                        margin_bottom="1rem",
                    ),
                    align_items="flex-start",
                    spacing="0.5rem",
                    
                    
                ),
                justify_content="center",
                spacing="6",
                margin_left="4rem",
                
                
            ),
            size="3",
            justify_content="space-between",
            spacing="4rem",
        ),
        **styles.CARD_STYLES_DESKTOP
    )
),


            # Card visible solo en móviles
            rx.mobile_only(
                rx.flex(
                    rx.card(
                        rx.vstack(
                            rx.avatar(
                                src="/mi-foto-cara.jpg",
                                fallback="MG",
                                name="Maxi Gonzalez",
                                **styles.AVATAR_STYLE,
                            ),
                            align_items="center",
                        ),
                        rx.box(
                            rx.vstack(
                                rx.text(
                                    "Soy Maxi González",
                                    font_size="1.2em",
                                    font_weight="bold",
                                    text_align="center",
                                ),
                                rx.text(
                                    "Desarrollador Web Junior",
                                    font_size="1em",
                                    text_align="center",
                                ),
                                rx.hstack(
                                    rx.tooltip(
                                        link_button(
                                            "https://www.linkedin.com/in/maxi-gonzalez-479691323",
                                            "/icons/linkedin.svg"
                                        ),
                                        content="Linkedin"
                                    ),
                                    rx.tooltip(
                                        link_button("https://github.com/gonzalez-max", "/icons/github.svg"),
                                        content="Github",
                                    ),
                                    rx.tooltip(
                                        link_email("/icons/email.png"),
                                        **styles.LINK_BUTTON_STYLES,
                                        on_click=[
                                            rx.set_clipboard("gonzalezmaxi997@gmail.com"),
                                            rx.toast(
                                                "✔️ Email Copiado",
                                                duration=3000,
                                                close_button=True
                                            ),
                                        ],
                                        content="Copiar email",
                                    ),
                                    download_button(),
                                    spacing="2",
                                    justify="center",
                                ),
                                rx.text(
                                    "Creador de un curso gratuito de trading para invertir en bolsa y cripto.",
                                    font_size="0.9em",
                                    text_align="center",
                                    margin_top=Size.SMALL.value,
                                ),
                            ),
                            align_items="center",
                            justify_content="center",
                        ),
                        size="1",  
                        padding="1em",
                    ),
                    **styles.CARD_STYLES_MOBILE,
                )
            ),
            width="100%",
            border_radius="10px",
            align_items="center",
            justify_content="center",
            size="2",
            margin_bottom=Size.MASSIVE.value
        ),
        **styles.global_styles
    )