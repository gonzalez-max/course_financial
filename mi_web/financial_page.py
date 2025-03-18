import reflex as rx
from mi_web.components.general.nav_bar import navbar_dropdown
from mi_web.components.general.footer import footer
from mi_web.views.hero_section.financial_hero_section.hero_section_financial import hero_section_financial
from mi_web.views.links.links_modules import links_modules
import mi_web.styles.styles as styles
from mi_web.styles.styles import Size as Size


# Página principal de Finanzas
def financial_page() -> rx.Component:
    return rx.box(
        navbar_dropdown(),
        rx.center(
            rx.vstack(
                hero_section_financial(),
                links_modules(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.ULTRA.value,
                align_items="center",
                margin_top="0em"
            )
        ),
        footer(),
        background_color="black",
        
    )

# Crear la aplicación
if __name__ == "__main__":
    app = rx.App()
    app.add_page(financial_page, route="/financial_page")
    app.add_page(links_modules)

    app._compile()