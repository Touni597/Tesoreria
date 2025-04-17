from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import openpyxl

app = FastAPI()

# Permitir conexión desde React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LoginRequest(BaseModel):
    usuario: str
    password: str

EXCEL_PATH = "Bancos Final.xlsm"

@app.post("/login")
def login(data: LoginRequest):
    try:
        wb = openpyxl.load_workbook(EXCEL_PATH, data_only=True)
        ws = wb["Sesion"]

        for row in ws.iter_rows(min_row=5):
            user_cell = row[0].value
            pass_cell = row[1].value

            if user_cell == data.usuario and pass_cell == data.password:
                return {"status": "success", "message": "Login exitoso"}

        raise HTTPException(status_code=401, detail="Usuario o contraseña incorrectos")

    except FileNotFoundError:
        raise HTTPException(status_code=500, detail="Archivo de Excel no encontrado")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
