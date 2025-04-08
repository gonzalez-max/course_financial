import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles

def image_f_versus_t() -> rx.Component:
    return rx.box(
        rx.image(
            src=("/fundamental_vs_tecnico.jpg?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_fueza_velas() -> rx.Component:
    return rx.box(
        rx.image(
            height="400px",
            src=("/fuerza_velas.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_gestion_riesgo() -> rx.Component:
    return rx.box(
        rx.image(
            
            src=("/gestion_riesgo.jpg?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_psicologia_trading() -> rx.Component:
    return rx.box(
        rx.image(
            src=("/psicologia_trading.jpg?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_que_es_trader() -> rx.Component:
    return rx.box(
        rx.image(
            height="200px",
            src=("/que_es_trader.jpg?refresh=1"),
            width="100%",
            max_width="200px"
        ),
        align_items="center",
        justify_content="center"
    )

def image_tipes_trading() -> rx.Component:
    return rx.box(
        rx.image(
            height=Size.IMAGE_height,
            src=("/tipos_trading.jpg?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_vela_verde_contra_roja() -> rx.Component:
    return rx.box(
        rx.image(
            height="300px",
            src=("/vela_verde_contra_roja.jpg?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_velas_japonesas() -> rx.Component:
    return rx.box(
        rx.image(
            height="300px",
            src=("/velas-japonesas.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )
