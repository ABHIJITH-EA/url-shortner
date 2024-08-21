import hashlib

from sqlalchemy.orm import Session
from pydantic import HttpUrl

from database.models import ShortUrl


async def url_shortner(url: HttpUrl, db: Session) -> str:
    try:
        existing_url = db.query(ShortUrl).filter(ShortUrl.original_url == url.unicode_string()).first()
    except Exception as e:
        raise Exception('Handle SQL based exceptions')
    
    if existing_url:
        return existing_url.short_url

    url_hash = hashlib.md5(url.unicode_string().encode())
    short_url = url_hash.hexdigest()[:6]

    try:
        db_record = ShortUrl(original_url = url.unicode_string(), short_url = short_url)
        db.add(db_record)
        db.commit()
    except Exception as e:
        raise Exception('Handle SQL based exceptions')

    return short_url


async def fetch_short_url(url_id: str, db: Session) -> ShortUrl:
    try:
        short_url = db.query(ShortUrl).filter(ShortUrl.short_url == url_id).first()
    except Exception as e:
        raise Exception('Handle SQL based exceptions')
    
    return short_url