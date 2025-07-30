import reflex as rx
import mi_web.styles.course_styles as c_styles
from mi_web.styles.course_styles import Size as Size


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




def footer() -> rx.Component:
    return rx.vstack(
        rx.text("© 2025 Maximiliano Gonzalez. Todos los derechos reservados."),
        rx.text(
            "¿Querés ver información sobre tus empresas favoritas? "),
        rx.text(
            "Conocé FinDash ->", 
            rx.link(
                "https://dashboard-financial.onrender.com",
                href="https://dashboard-financial.onrender.com",
                is_external=True
            ),
        ),
        rx.image(
            src=LogoState.logo_src,
            width="40px",
            height="40px",
            background_color="transparent",
            on_click=LogoState.increment_click,
            cursor="pointer",
            _hover={"transform": "scale(1.10)"}
        ),
        align_items="center",
        justify_content="center",
        width="100%",  # 100% del viewport
        min_width="100%",  # Evita que se contraiga
        margin="0",  # Elimina márgenes externos
        padding="20px",
        background_color="#2d3038",
        color="white",
        position="relative",  # Controla el posicionamiento
        border_top="1px solid rgba(255, 255, 255, 0.4)",
    )