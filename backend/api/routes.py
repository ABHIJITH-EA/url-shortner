from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session

from api.schema import ShortUrlRequest, ShortUrlResponse
from services.url_services import url_shortner, fetch_short_url
from database.database import get_db

shorturl_router = APIRouter()

@shorturl_router.post("/short-url", response_model=ShortUrlResponse)
async def short_url(req: ShortUrlRequest, db: Session=Depends(get_db)):
    short_url = await url_shortner(req.url, db = db)
    
    return ShortUrlResponse(short_url=short_url)

@shorturl_router.get('/{short_url_id}')
async def redirect_to_original_url(short_url_id: str, db: Session = Depends(get_db)):
    short_url = await fetch_short_url(short_url_id, db)

    if not short_url:
        raise HTTPException(status_code=404, detail="Short URL not found")
    
    return RedirectResponse(url=short_url.original_url)