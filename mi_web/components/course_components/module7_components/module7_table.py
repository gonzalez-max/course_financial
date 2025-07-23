import reflex as rx
import mi_web.styles.course_styles as styles
import mi_web.styles.course_styles as c_styles

def table1_module7() -> rx.Component:
    return rx.desktop_only(
            rx.table.root(
                        rx.table.header(
                            rx.table.row(
                                rx.table.column_header_cell("Característica"),
                                rx.table.column_header_cell("Cartera (Wallet)"),
                                rx.table.column_header_cell("Exchange"),
                                background__color="#2d5986"
                            ),
                        ),
                        rx.table.body(
                            rx.table.row(
                                rx.table.row_header_cell("Control de fondos"),
                                rx.table.cell("✅100% personal"),
                                rx.table.cell("❌Lo maneja la plataforma"),
                                color="white"
                            ),
                            rx.table.row(
                                rx.table.row_header_cell("Seguridad"),
                                rx.table.cell("✅ Mayor (depende del tipo)"),
                                rx.table.cell("⚠️Vulnerable a hackeos"),
                                color="white",
                            ),
                            rx.table.row(
                                rx.table.row_header_cell("Función principal"),
                                rx.table.cell("📦Almacenar criptos"),
                                rx.table.cell("🔄Comprar y vender criptos"),
                                color="white",
                            ),
                            rx.table.row(
                                rx.table.row_header_cell("Accesibilidad"),
                                rx.table.cell("🔥 Hot wallets: Rápida 🔒 Cold wallets: Segura"),
                                rx.table.cell("✅ Fácil acceso en todo momento"),
                                color="white",
                            ),
                            rx.table.row(
                                rx.table.row_header_cell("Uso recomendado"),
                                rx.table.cell("💰 Guardar criptos a largo plazo"),
                                rx.table.cell("📊 Trading y compra/venta de criptos"),
                                color="white",
                            ),
                        ),
                        
                        padding="5px",  # Ajusta el padding interno
                        font_size="10px",
                        variant="surface",
                        size="2",
                        max_width="600px",
                        **c_styles.TABLES_STYLES
                    ),
)
def mobile_table1_module7() -> rx.Component:
    return rx.mobile_and_tablet(
            rx.table.root(
                        rx.table.header(
                            rx.table.row(
                                rx.table.column_header_cell("Característica"),
                                rx.table.column_header_cell("Cartera (Wallet)"),
                                rx.table.column_header_cell("Exchange"),
                                background__color="#2d5986"
                            ),
                        ),
                        rx.table.body(
                            rx.table.row(
                                rx.table.row_header_cell("Control de fondos"),
                                rx.table.cell("✅100% personal"),
                                rx.table.cell("❌Lo maneja la plataforma"),
                                color="white"
                            ),
                            rx.table.row(
                                rx.table.row_header_cell("Seguridad"),
                                rx.table.cell("✅ Mayor (depende del tipo)"),
                                rx.table.cell("⚠️Vulnerable a hackeos"),
                                color="white",
                            ),
                            rx.table.row(
                                rx.table.row_header_cell("Función principal"),
                                rx.table.cell("📦Almacenar criptos"),
                                rx.table.cell("🔄Comprar y vender criptos"),
                                color="white",
                            ),
                            rx.table.row(
                                rx.table.row_header_cell("Accesibilidad"),
                                rx.table.cell("🔥 Hot wallets: Rápida 🔒 Cold wallets: Segura"),
                                rx.table.cell("✅ Fácil acceso en todo momento"),
                                color="white",
                            ),
                            rx.table.row(
                                rx.table.row_header_cell("Uso recomendado"),
                                rx.table.cell("💰 Guardar criptos a largo plazo"),
                                rx.table.cell("📊 Trading y compra/venta de criptos"),
                                color="white",
                            ),
                        ),
                        
                        padding="5px",  # Ajusta el padding interno
                        font_size="10px",
                        variant="surface",
                        size="2",
                        max_width="400px",
                        **c_styles.TABLES_STYLES
                    ),
    )