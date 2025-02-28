import reflex as rx
from mi_web.components.general.nav_bar import nav_bar
from mi_web.components.general.footer import footer
from mi_web.views.header.header_financial import header_financial

def financial_view() -> rx.Component:
    return rx.box(
        rx.vstack(
            header_financial(),
            align_items="center",
            width="100%"
        )),