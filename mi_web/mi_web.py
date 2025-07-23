import reflex as rx
from mi_web.components.general_components.course_navbar import navbar_course
from mi_web.components.general_components.footer import footer
from mi_web.views.course_views.financial_body.financial_body import financial_body
import mi_web.styles.course_styles as c_styles
from mi_web.styles.course_styles import Size as Size
#____________________________CURSO IMPORTS_____________________________________________#
from mi_web.views.course_views.choice_modules import choice_modules
from mi_web.views.course_views.modules_views.module_1 import module_1
from mi_web.views.course_views.modules_views.module_2 import module_2
from mi_web.views.course_views.modules_views.module_3 import module_3
from mi_web.views.course_views.modules_views.module_4 import module_4
from mi_web.views.course_views.modules_views.module_5 import module_5
from mi_web.views.course_views.modules_views.module_6 import module_6
from mi_web.views.course_views.modules_views.module_7 import module_7
from mi_web.views.course_views.modules_views.module_8 import module_8
from mi_web.views.course_views.modules_views.module_9 import module_9
from mi_web.views.course_views.modules_views.module_10 import module_10
from mi_web.views.web_principal_views.soporte_page import soporte_page

class State(rx.State):
    pass

# Página principal de Finanzas
def index() -> rx.Component:
    return rx.box(
        navbar_course(),
            rx.center(
                rx.vstack(
                    financial_body(),
                ),
                width="100%",
                border_radius="10px",
                align_items="center",
            ),
        footer(),
        **c_styles.STYLES_CHOICE_MODULES,
    )
















# debemos registrar cada nueva pagina
app = rx.App(stylesheets=[
        "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,"
        "100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,"
        "400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,"
        "600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100.."
        "900""&display=swap"],)
    

app.add_page(index, route="/", title="Curso Finanzas y Trading")
app.add_page(soporte_page, route="/soporte_page", title="Soporte")
app.add_page(choice_modules, route="/choice_modules", title="Módulos")
app.add_page(module_1, route="/module_1", title="Modulo 1")
app.add_page(module_2, route="/module_2", title="Modulo 2")
app.add_page(module_3, route="/module_3", title="Modulo 3")
app.add_page(module_4, route="/module_4", title="Modulo 4")
app.add_page(module_5, route="/module_5", title="Modulo 5")
app.add_page(module_6, route="/module_6", title="Modulo 6")
app.add_page(module_7, route="/module_7", title="Modulo 7")
app.add_page(module_8, route="/module_8", title="Modulo 8")
app.add_page(module_9, route="/module_9", title="Modulo 9")
app.add_page(module_10, route="/module_10", title="Modulo 10")


if __name__ == "__main__":
    app.run()

