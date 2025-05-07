import reflex as rx
import os

config = rx.Config(
    app_name="mi_web",
)

config.port = int(os.environ.get("PORT", 3000))