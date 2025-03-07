import reflex as rx 
from mi_web.components.general.nav_bar import navbar_dropdown
from mi_web.views.header.header import header
from mi_web.views.links.links import links
from mi_web.components.general.footer import footer
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
from mi_web.financial_page import financial_page
from mi_web.soporte_page import soporte_page
from mi_web.views.links.links_modules import links_modules
from mi_web.views.modules_views.module_1 import module_1
from mi_web.views.modules_views.module_2 import module_2
from mi_web.views.modules_views.module_3 import module_3
from mi_web.views.modules_views.module_4 import module_4




class State(rx.State):
    pass

def index() -> rx.Component:
    return rx.box(
        navbar_dropdown(),
        rx.center(
    rx.vstack(
        header(),
        links(),
      max_width=styles.MAX_WIDTH,
      width="100%",
      margin_y=Size.BIG.value,
      align_items="center",
    )),
    footer(),
    background_color="black"
    )

# debemos registrar cada nueva pagina
app = rx.App()
app.add_page(index, route="/", title="Pagina Principal")
app.add_page(financial_page, route="/financial_page", title="Curso Finanza y Trading")
app.add_page(soporte_page, route="/soporte_page", title="Soporte")
app.add_page(links_modules)
app.add_page(module_1, route="/module_1", title="Modulo 1")
app.add_page(module_2, route="/module_2", title="Modulo 2")
app.add_page(module_3, route="/module_3", title="Modulo 3")
app.add_page(module_4, route="/module_4", title="Modulo 4")
app._compile() 




