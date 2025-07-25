import reflex as rx
import mi_web.styles.course_styles as c_styles

def module2_table1() -> rx.Component:
    return rx.tablet_and_desktop(
                rx.table.root(
                        rx.table.header(
                            rx.table.row(
                                rx.table.column_header_cell("Perfil"),
                                rx.table.column_header_cell("Características"),
                                rx.table.column_header_cell("Tipos de inversión recomendados"),
                                background__color="#2d5986"
                            ),
                        ),
                        rx.table.body(
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("Conservador")),
                                rx.table.cell("Busca seguridad y estabilidad. Prioriza preservar el capital."),
                                rx.table.cell("Plazos fijos, bonos de bajo riesgo, FCI de renta fija."),
                                color="white"
                            ),
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("Moderado")),
                                rx.table.cell("Acepta un riesgo medio para obtener mejor rentabilidad. Diversifica "
                                              "entre activos seguros y de riesgo."),
                                rx.table.cell("Bonos, acciones de empresas consolidadas, FCI mixtos."),
                                color="white",
                            ),
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("Agresivo")),
                                rx.table.cell("Está dispuesto a asumir altos riesgos para maximizar ganancias."),
                                rx.table.cell("Acciones de crecimiento, criptomonedas, opciones, trading."),
                                color="white",
                            ),
                        ),
                        #____________________________________________________________________
                        width="100%",
                        padding="5px",  # Ajusta el padding interno
                        font_size="10px",
                        variant="surface",
                        size="2",
                        **c_styles.TABLES_STYLES
                    ),
    ),
    
def mobile_module2_table1() -> rx.Component:
    return rx.mobile_only(
                rx.table.root(
                        rx.table.header(
                            rx.table.row(
                                rx.table.column_header_cell("Perfil"),
                                rx.table.column_header_cell("Características"),
                                rx.table.column_header_cell("Tipos de inversión recomendados"),
                                background__color="#2d5986"
                            ),
                        ),
                        rx.table.body(
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("Conservador")),
                                rx.table.cell("Busca seguridad y estabilidad. Prioriza preservar el capital."),
                                rx.table.cell("Plazos fijos, bonos de bajo riesgo, FCI de renta fija."),
                                color="white"
                            ),
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("Moderado")),
                                rx.table.cell("Acepta un riesgo medio para obtener mejor rentabilidad. Diversifica "
                                              "entre activos seguros y de riesgo."),
                                rx.table.cell("Bonos, acciones de empresas consolidadas, FCI mixtos."),
                                color="white",
                            ),
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("Agresivo")),
                                rx.table.cell("Está dispuesto a asumir altos riesgos para maximizar ganancias."),
                                rx.table.cell("Acciones de crecimiento, criptomonedas, opciones, trading."),
                                color="white",
                            ),
                        ),
                        #____________________________________________________________________
                        width="100%",
                        padding="5px",  # Ajusta el padding interno
                        font_size="10px",
                        variant="surface",
                        size="2",
                        max_width="350px",
                        **c_styles.TABLES_STYLES
                    ),
    ),