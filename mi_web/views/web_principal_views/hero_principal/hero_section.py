import reflex as rx
import mi_web.styles.styles as styles
from mi_web.styles.styles import Size as Size
from mi_web.components.general_components.link_button import link_button
from mi_web.components.general_components.download_button import download_button

def hero_section() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading(
                "Bienvenido,",
                **styles.text_main_page["title"],
                margin_top=Size.EXTRA_SMALL.value,
                color="white",
                font_size="25px",
                font_family="roboto",
                font_weight="300",
            ),
            rx.heading(
                "Soy Maximiliano Gonzalez",
                **styles.text_main_page["title"],
                font_size="50px",
                class_name="roboto-bold",
                color="#ffff99"
            ),
            rx.heading(
                "Desarrollador Web Junior",
                **styles.text_main_page["title"],
                color="white",
                font_size="30px",
                font_family="Roboto",
                font_weight="400",
                margin_bottom=Size.MEDIUM.value,
            ),
            rx.flex(
                rx.card(
                    rx.vstack(
                        rx.avatar(
                            src="/mi-foto-cara.jpg",
                            fallback="MG",
                            name="Maxi Gonzalez",
                            **styles.AVATAR_STYLE,
                            #margin_top=Size.MICRO.value,
                        ),
                        align_items="center",
                    ),
                    rx.hstack(
                        link_button(
                            "https://www.linkedin.com/in/maxi-gonzalez-479691323",
                            "/icons/linkedin.svg",
                        ),
                        link_button("https://github.com/gonzalez-max", "/icons/github.svg"),
                        download_button(),
                        margin_top=Size.SMALL.value,
                        align_items="center",
                        justify_items="center",
                        display="flex",
                        justify_content="center",
                    ),
                    rx.text(
                        "Soy Maxi González, Programador en HTML, CSS y Python (Django framework, Reflex), "
                        "Asesor financiero y agente productor, me encuentro creando un curso gratuito de trading "
                        "donde encontrarás lo más importante para invertir en la bolsa, cripto y cómo evitar estafas.",
                        **styles.text_main_page["body"],
                    ),
                    size="2",
                    justify_content="center",
                    text_align="center",
                ),
                #______________flex styles____________________________#
                **styles.CARD_STYLES
            ), 
            align_items="center",
            justify="center",
            margin_top="40px",
        ),
        **styles.main_page_styles,
    )
