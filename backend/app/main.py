from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routes import shorturl_router
from database.database import Base, engine

app = FastAPI()

# Cross origin configurations
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*",],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Create database engine
Base.metadata.create_all(bind=engine)

app.include_router(router=shorturl_router, prefix="/api")