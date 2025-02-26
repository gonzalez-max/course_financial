import reflex as rx
from mi_web.components.link_button import link_button
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles


def links() -> rx.Component:
    return rx.link(
        rx.vstack(
        rx.button("Curso de Trading", on_click=lambda: rx.redirect("/financial_page/", is_external=True)
                  , size="4",variant="surface",radius="small",width="100%",padding_x="140px",color_scheme="grass"),
        rx.button("Linkedin", on_click=lambda: rx.redirect("https://www.linkedin.com/in/maxi-gonzalez-479691323", is_external=True)
                  , size="4",variant="surface",radius="small",width="100%",padding_x="140px",color_scheme="cyan"),
        rx.button("GitHub", on_click=lambda: rx.redirect("https://github.com/gonzalez-max", is_external=True,)
                  ,size="4",variant="surface",radius="small",width="100%",padding_x="140px",color_scheme="yellow"),
        rx.button("Instagram", on_click=lambda: rx.redirect("https://www.instagram.com/maxgonzalez_ok/?next=%2F&hl=es", is_external=True)
                  ,size="4",variant="surface",radius="small",width="100%",padding_x="140px",color_scheme="plum"),
        align_items="center",
        high_contrast=True,
        ),
    )
