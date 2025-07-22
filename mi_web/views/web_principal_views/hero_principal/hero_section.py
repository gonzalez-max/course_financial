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
    rx.tablet_and_desktop(
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
                    padding="5px",
                    align_items="center",
                    justify_content="center",
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
                        width="100%",
                        margin="auto",
                    ),
                    rx.text(
                        "Soy Maxi González, Programador en HTML, CSS y Python (Django framework, Reflex), "
                        "Asesor financiero y agente productor, me encuentro creando un curso gratuito de trading "
                        "donde encontrarás lo más importante para invertir en la bolsa, cripto y cómo evitar estafas.",
                        **styles.text_main_page["card_body"],
                        color="black",
                        margin_bottom="1rem",
                    ),
                    
                    
                ),
                justify_content="center",
                spacing="4",
                
                
                
            ),
            size="4",
            justify_content="space-between",
            spacing="4",
        ),
        **styles.CARD_STYLES_DESKTOP,
         # Card visible solo en móviles
    ),
        
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
                            rx.hstack(
                                    rx.tooltip(
                                        link_button(
                                            "https://www.linkedin.com/in/maximiliano-gonzalez-479691323",
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
                                    align_items="center",
                                ),
                            rx.vstack(
                                rx.text(
                                    "Desarrollador web Junior. Creador de un curso gratuito de trading "
                                    "para invertir en bolsa y cripto y tambien de FinDash un dashboard de finanzas.",
                                    font_style="normal",
                                    padding="5px",
                                    letter_spacing="0.01px",
                                    font_family="Roboto",
                                    color="black",
                                    font_weight="400",
                                    font_size="20px",
                                    text_wrap="normal",
                                    text_align="center",
                                    width="100%",
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
            size="4",
            width="100%",
            border_radius="10px",
            align_items="center",
            justify_content="center",
            margin_bottom=Size.MASSIVE.value
        ),
        **styles.global_styles
    )