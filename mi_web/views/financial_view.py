import reflex as rx
from mi_web.components.general.nav_bar import nav_bar
from mi_web.components.general.footer import footer
from mi_web.views.hero_section.financial_hero_section.hero_section_financial import hero_section_financial

def financial_view() -> rx.Component:
    return rx.box(
        rx.vstack(
            hero_section_financial(),
            align_items="center",
            width="100%"
        )),