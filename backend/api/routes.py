from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from api.schemas import ShortUrlRequest, ShortUrlResponse
from services.url_shortner import url_shortner
from database.database import get_db

shorturl_router = APIRouter()

@shorturl_router.post("/short-url")
async def short_url(req: ShortUrlRequest, db: Session = Depends(get_db)):
    short_url = await url_shortner(req.url, db = db)
    
    return ShortUrlResponse(short_url=short_url)