import reflex as rx 
from mi_web.components.general_components.nav_bar import navbar_dropdown
from mi_web.views.hero_section.hero_principal.hero_section import hero_section
from mi_web.views.hero_section.hero_principal.projects import projects
from mi_web.components.general_components.footer import footer
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
from mi_web.financial_page import financial_page
from mi_web.soporte_page import soporte_page
from mi_web.views.links_modules_views.choice_modules import choice_modules
from mi_web.views.modules_views.module_1 import module_1
from mi_web.views.modules_views.module_2 import module_2
from mi_web.views.modules_views.module_3 import module_3
from mi_web.views.modules_views.module_4 import module_4
from mi_web.views.modules_views.module_5 import module_5
from mi_web.views.modules_views.module_6 import module_6


class State(rx.State):
    pass

def index() -> rx.Component:
    return rx.box(
        navbar_dropdown(),
    rx.vstack(
        hero_section(),
        projects(),
        **styles.main_page_styles
    ),
    footer(),
    **styles.global_styles, #estilos globales (background)
    background="linear-gradient(to bottom, #0A0F49, #2A3C80, #5A6FA5, #8CA5CC, #BFD3EE)"
    )

















# debemos registrar cada nueva pagina
app = rx.App(stylesheets=[
        "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,"
        "100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,"
        "400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,"
        "600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100.."
        "900""&display=swap",
    ],)
app.add_page(index, route="/", title="Pagina Principal")
app.add_page(financial_page, route="/financial_page", title="Curso Finanzas y Trading")
app.add_page(soporte_page, route="/soporte_page", title="Soporte")
app.add_page(choice_modules, route="/choice_modules", title="Modulos")
app.add_page(module_1, route="/module_1", title="Modulo 1")
app.add_page(module_2, route="/module_2", title="Modulo 2")
app.add_page(module_3, route="/module_3", title="Modulo 3")
app.add_page(module_4, route="/module_4", title="Modulo 4")
app.add_page(module_5, route="/module_5", title="Modulo 5")
app.add_page(module_6, route="/module_6", title="Modulo 6")



