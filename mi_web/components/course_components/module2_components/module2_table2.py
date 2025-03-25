import reflex as rx
import mi_web.styles.styles as styles
import mi_web.styles.course_styles as c_styles


def module2_table2() -> rx.Component:
    return rx.table.root(
                        rx.table.header(
                            rx.table.row(
                                rx.table.column_header_cell("Caracteristica"),
                                rx.table.column_header_cell("Renta Fija"),
                                rx.table.column_header_cell("Renta Variable"),
                                background__color="orange"
                            ),
                        ),
                        rx.table.body(
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("Riesgo")),
                                rx.table.cell("Bajo"),
                                rx.table.cell("Alto"),
                                color="white"
                            ),
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("Rentabilidad")),
                                rx.table.cell("Predecible y estable"),
                                rx.table.cell("Variable y no asegurada"),
                                color="white",
                            ),
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("Ejemplos")),
                                rx.table.cell("Plazo fijo, bonos, letras"),
                                rx.table.cell("Acciones, commodities, opciones, criptos"),
                                color="white",
                            ),
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("Liquidez")),
                                rx.table.cell("Depende del tipo de inversión"),
                                rx.table.cell("Depende del mercado"),
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