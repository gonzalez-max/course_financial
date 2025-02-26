import reflex as rx
def table2_module1() -> rx.Component:
    return rx.table.root(
                        rx.table.header(
                            rx.table.row(
                                rx.table.column_header_cell("Concepto"),
                                rx.table.column_header_cell("Definicion"),
                                rx.table.column_header_cell("Ejemplo"),
                                rx.table.column_header_cell("Tipos/Factores claves"),
                                background__color="orange"
                            ),
                        ),
                        rx.table.body(
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("Rentabilidad")),
                                rx.table.cell("Relacion entre los recursos utilizados y el beneficio (o perdida) obtenido."),
                                rx.table.cell("Inviertes $10.000 y obtenes $12.000 → Rentabilidad del 20%"),
                                rx.table.cell(rx.text.strong("-Economia")," (Beneficio/Activos)",rx.text.strong("-Financiera"),"(Beneficio/Capital invertido)"),
                                color="white"
                            ),
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("Tasa de Interes")),
                                rx.table.cell("Precio del dinero; lo que se paga por un prestamo o se gana en una inversion"),
                                rx.table.cell("Prestamo de $100.000 con 10% anual → Pagas $10.000 en intereses. "),
                                rx.table.cell(rx.text.strong("-Fija")," (No cambia)",rx.text.strong("-Variable"),"(Depende de la economia)",rx.text.strong("-Nominal vs Efectiva")),
                                color="darkgray",
                            ),
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("Inflacion")),
                                rx.table.cell("Aumento sostenido de los precios, reduciendo el poder adquisitivo del dinero."),
                                rx.table.cell("Producto cuesta $1.000 hoy → Con 50% de inflación, costará $1.500 el próximo mes."),
                                rx.table.cell(rx.text.strong("- Demanda excesiva - Costos de produccion - Politica monetaria")),
                                color="white",
                            ),
                        ),
                        width="100%",
                        padding="5px",  # Ajusta el padding interno
                        font_size="10px",
                        variant="surface",
                        size="2",
                        style={
                               "background_color": "#e6004c",
                                "color": "#333333",
                                "border": "1px solid #ffffff",}
                    ),