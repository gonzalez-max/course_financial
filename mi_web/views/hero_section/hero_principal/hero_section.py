import reflex as rx
import mi_web.styles.styles as styles
from mi_web.styles.styles import Size as Size

def hero_section() -> rx.Component:
    return rx.box(
        rx.vstack(
        rx.heading("Welcome, ",
                   **styles.text_main_page["title"],
                    font_size = "35px",
                    font_weight = "300",
                    margin_top=Size.REGULAR.value),
        
        rx.heading("I´m Maximiliano Gonzalez",
                    **styles.text_main_page["title"],
                    font_size = "50px",
                    font_weight = "300",),
        rx.hstack(
            rx.avatar(src="/mi-foto-cara.jpg",
                  fallback="MG",
                  size="9",
                  name="Maxi Gonzalez",
                ),
            rx.text("Soy Maxi González, Programador en HTML, CSS y Python (Django framework, Reflex), Asesor financiero y agente"
                "productor, me encuentro creando un curso gratuito de trading donde encontraras lo mas importante para invertir"
                "en la bolsa, cripto y como evitar estafas.",
                **styles.text_main_page["body"],
                align_items="center"),
            ),
            align_items="center",       
            justify="center",  
    ),
        **styles.main_page_styles
)