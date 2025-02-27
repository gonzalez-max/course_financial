import reflex as rx
import mi_web.styles.styles as styles

def table1_module1() -> rx.Component:
    return rx.table.root(
                        rx.table.header(
                            rx.table.row(
                                rx.table.column_header_cell("Activo"),
                                rx.table.column_header_cell("Pasivo"),
                                rx.table.column_header_cell("Patrimonio Neto"),
                                rx.table.column_header_cell("Ingresos"),
                                rx.table.column_header_cell("Gastos"),
                                rx.table.column_header_cell("Resultado"),
                                background__color="orange"
                            ),
                        ),
                        rx.table.body(
                            rx.table.row(
                                rx.table.row_header_cell("Bienes o derechos de una persona."),
                                rx.table.cell("Obligaciones o deudas."),
                                rx.table.cell("Diferencia entre activo y pasivo."),
                                rx.table.cell("Ganancias que se suman al presupuesto."),
                                rx.table.cell("Utilización o consumo de bienes o servicios."),
                                rx.table.cell("Diferencia entre ingresos y gastos."),
                                color="white"
                            ),
                            rx.table.row(
                                rx.table.row_header_cell("Ej: acciones, inmuebles, bonos."),
                                rx.table.cell("Ej: saldos de tarjetas, hipotecas, deudas."),
                                rx.table.cell("Ej: empresa con activos de 210,000€ y sin deudas."),
                                rx.table.cell("Ej: salario, comisiones, honorarios, inversiones."),
                                rx.table.cell("Ej: alquileres, seguros, impuestos, préstamos."),
                                rx.table.cell("Ej: resultado financiero del balance."),
                                color="white",
                            ),
                        ),
                        width="100%",
                        padding="5px",  # Ajusta el padding interno
                        font_size="10px",
                        variant="surface",
                        size="2",
                        **styles.TABLES_STYLES
                    ),